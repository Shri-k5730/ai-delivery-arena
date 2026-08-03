"""React product shell backed by the existing Streamlit Python runtime."""

from __future__ import annotations

import json
import uuid
from datetime import UTC, datetime
from typing import Any

from ai_delivery_arena.engine.persistence import PersistenceError
from ai_delivery_arena.experience.service import ArenaService, ExperienceError

from .app import (
    HostedSettings,
    _draft_errors,
    _local_service,
    _new_supabase_client,
    _service_for_session,
    _signup_credentials,
    load_settings,
)


PRODUCT_VERSION = "0.4.0"
VALID_VIEWS = {
    "centre",
    "briefing",
    "decision",
    "review",
    "consequence",
    "debrief",
}
MAX_IMPORT_BYTES = 5 * 1024 * 1024


def _notice(
    state: Any,
    message: str,
    *,
    kind: str = "info",
) -> None:
    state["arena_notice"] = {
        "kind": kind,
        "message": str(message),
    }


def _pop_notice(state: Any) -> dict[str, str] | None:
    notice = state.pop("arena_notice", None)
    return dict(notice) if isinstance(notice, dict) else None


def _authenticated(state: Any) -> bool:
    return (
        isinstance(state.get("_arena_user"), dict)
        and state.get("_supabase_client") is not None
    )


def _service(st: Any, settings: HostedSettings) -> ArenaService:
    if bool(st.session_state.get("arena_local_mode")):
        return _local_service(st)
    return _service_for_session(st, settings)


def _base_model(
    st: Any,
    settings: HostedSettings,
    *,
    screen: str,
) -> dict[str, Any]:
    user = st.session_state.get("_arena_user")
    return {
        "product": {
            "name": "AI Delivery Arena",
            "tagline": "Judgment under pressure",
            "version": PRODUCT_VERSION,
            "status": "Hosted Beta",
        },
        "screen": screen,
        "configured": settings.configured,
        "local_mode": bool(st.session_state.get("arena_local_mode")),
        "authenticated": _authenticated(st.session_state),
        "user": dict(user) if isinstance(user, dict) else None,
        "links": {
            "github": settings.github_url,
            "privacy": (
                settings.github_url.removesuffix(".git").rstrip("/")
                + "/blob/main/PRIVACY.md"
            ),
            "terms": (
                settings.github_url.removesuffix(".git").rstrip("/")
                + "/blob/main/TERMS.md"
            ),
        },
        "notice": _pop_notice(st.session_state),
    }


def _normalize_view(
    st: Any,
    service: ArenaService,
) -> tuple[str, str | None]:
    view = str(st.session_state.get("arena_view", "centre"))
    if view not in VALID_VIEWS:
        view = "centre"
        st.session_state["arena_view"] = view

    run_id_value = st.session_state.get("arena_run_id")
    run_id = str(run_id_value) if run_id_value else None
    if view in {"decision", "review", "consequence", "debrief"} and not run_id:
        st.session_state["arena_view"] = "centre"
        return "centre", None

    if view == "consequence" and not isinstance(
        st.session_state.get("arena_consequence"),
        dict,
    ):
        run = service.get_run(str(run_id))
        view = "debrief" if run["status"] == "completed" else "decision"
        st.session_state["arena_view"] = view

    return view, run_id


def build_model(st: Any, settings: HostedSettings) -> dict[str, Any]:
    """Build the participant-safe JSON model passed to the React component."""

    if not bool(st.session_state.get("arena_local_mode")) and not _authenticated(
        st.session_state
    ):
        model = _base_model(st, settings, screen="marketing")
        model["marketing"] = {
            "scenario": "Procurement Under Pressure",
            "duration": "75–90 minutes",
            "decisions": 20,
            "crises": 6,
            "dimensions": 7,
        }
        return model

    service = _service(st, settings)
    view, run_id = _normalize_view(st, service)
    model = _base_model(st, settings, screen=view)

    if view == "centre":
        model["centre"] = service.bootstrap()
        return model

    if view == "briefing":
        bootstrap = service.bootstrap()
        model["briefing"] = {
            "scenario": bootstrap["scenario"],
            "stages": bootstrap["stages"],
        }
        return model

    run = _cached_run(st.session_state, str(run_id))
    loaded_draft: dict[str, Any] | None = None
    if run is None and view == "decision":
        run, loaded_draft = service.get_run_and_draft(str(run_id))
    elif run is None:
        run = service.get_run(str(run_id))
    _cache_run(st.session_state, run)
    model["run"] = run
    model["stages"] = service.stages()

    if view == "decision":
        decision = run.get("current_decision")
        if not isinstance(decision, dict):
            raise ExperienceError("The current decision could not be resolved.")
        draft = _cached_draft(
            st.session_state,
            str(run_id),
            str(decision["id"]),
            int(run["revision"]),
        )
        if draft is None:
            if loaded_draft is None:
                loaded_draft = service.load_draft(str(run_id))
            draft = _normalize_draft(loaded_draft or {})
            _cache_draft(
                st.session_state,
                str(run_id),
                str(decision["id"]),
                int(run["revision"]),
                draft,
            )
        model["draft"] = _normalize_draft(draft)
        sync = st.session_state.get("arena_sync")
        model["sync"] = dict(sync) if isinstance(sync, dict) else None
        return model

    if view == "review":
        draft = st.session_state.get("arena_review_payload")
        if not isinstance(draft, dict):
            decision = run.get("current_decision")
            if isinstance(decision, dict):
                draft = _cached_draft(
                    st.session_state,
                    str(run_id),
                    str(decision["id"]),
                    int(run["revision"]),
                )
            if not isinstance(draft, dict):
                draft = service.load_draft(str(run_id))
        if not isinstance(draft, dict):
            st.session_state["arena_view"] = "decision"
            model["screen"] = "decision"
            model["draft"] = _empty_draft()
            return model
        model["draft"] = _normalize_draft(draft)
        return model

    if view == "consequence":
        model["consequence"] = dict(st.session_state["arena_consequence"])
        return model

    report = service.debrief(str(run_id)).as_dict()
    model["report"] = report
    try:
        model["completed_run_document"] = service.export_run_document(str(run_id))
    except PersistenceError:
        model["completed_run_document"] = None
    return model


def _empty_draft() -> dict[str, Any]:
    return {
        "option_id": None,
        "rationale": "",
        "assumptions": "",
        "owner": "",
        "acceptance_condition": "",
        "risk": "",
        "evidence_refs": [],
        "terminal_route": "conditional_release",
    }


def _normalize_draft(value: Any) -> dict[str, Any]:
    draft = _empty_draft()
    if not isinstance(value, dict):
        return draft
    option = value.get("option_id")
    draft["option_id"] = str(option) if option else None
    for key in (
        "rationale",
        "assumptions",
        "owner",
        "acceptance_condition",
        "risk",
        "terminal_route",
    ):
        if key in value:
            draft[key] = str(value.get(key) or "")
    refs = value.get("evidence_refs")
    if isinstance(refs, list):
        draft["evidence_refs"] = [
            str(item) for item in refs if isinstance(item, str)
        ]
    return draft


def _event(event: Any) -> tuple[str, dict[str, Any]]:
    if not isinstance(event, dict):
        raise ExperienceError("The browser sent an invalid action.")
    action = str(event.get("type", "")).strip()
    payload = event.get("payload")
    if not action:
        raise ExperienceError("The browser action has no type.")
    if payload is None:
        payload = {}
    if not isinstance(payload, dict):
        raise ExperienceError("The browser action payload is invalid.")
    return action, payload


def _require_text(payload: dict[str, Any], key: str) -> str:
    value = str(payload.get(key, "")).strip()
    if not value:
        raise ExperienceError(f"{key.replace('_', ' ')} is required")
    return value


def _set_view(
    state: Any,
    view: str,
    *,
    run_id: str | None = None,
) -> None:
    if view not in VALID_VIEWS:
        raise ExperienceError(f"unknown product view: {view}")
    state["arena_view"] = view
    if run_id is not None:
        state["arena_run_id"] = run_id


def _clear_run_ui_state(state: Any) -> None:
    for key in (
        "arena_review_payload",
        "arena_consequence",
        "arena_sync",
    ):
        state.pop(key, None)


def _cached_run(state: Any, run_id: str) -> dict[str, Any] | None:
    value = state.get("arena_cached_run")
    if isinstance(value, dict) and str(value.get("run_id")) == run_id:
        return dict(value)
    return None


def _cache_run(state: Any, run: dict[str, Any]) -> None:
    state["arena_cached_run"] = dict(run)


def _cached_draft(
    state: Any,
    run_id: str,
    decision_id: str,
    revision: int,
) -> dict[str, Any] | None:
    value = state.get("arena_cached_draft")
    if not isinstance(value, dict):
        return None
    if (
        str(value.get("run_id")) != run_id
        or str(value.get("decision_id")) != decision_id
        or int(value.get("revision", -1)) != revision
        or not isinstance(value.get("draft"), dict)
    ):
        return None
    return _normalize_draft(value["draft"])


def _cache_draft(
    state: Any,
    run_id: str,
    decision_id: str,
    revision: int,
    draft: dict[str, Any],
) -> None:
    state["arena_cached_draft"] = {
        "run_id": run_id,
        "decision_id": decision_id,
        "revision": revision,
        "draft": _normalize_draft(draft),
    }


def _clear_persistence_cache(state: Any) -> None:
    state.pop("arena_cached_run", None)
    state.pop("arena_cached_draft", None)


def _sign_in(
    st: Any,
    settings: HostedSettings,
    payload: dict[str, Any],
) -> None:
    email = _require_text(payload, "email")
    password = _require_text(payload, "password")
    client = _new_supabase_client(settings)
    response = client.auth.sign_in_with_password(
        {"email": email, "password": password}
    )
    if response.user is None or response.session is None:
        raise ExperienceError("Supabase returned no authenticated session.")
    st.session_state["_supabase_client"] = client
    st.session_state["_arena_user"] = {
        "id": str(response.user.id),
        "email": str(response.user.email or email),
    }
    st.session_state["arena_view"] = "centre"
    _notice(st.session_state, "Welcome back. Your runs are ready.", kind="success")


def _sign_up(
    st: Any,
    settings: HostedSettings,
    payload: dict[str, Any],
) -> None:
    email = _require_text(payload, "email")
    password = _require_text(payload, "password")
    if len(password) < 8:
        raise ExperienceError("Use a password of at least 8 characters.")
    if payload.get("consent") is not True:
        raise ExperienceError("Confirm the beta data notice to create an account.")
    client = _new_supabase_client(settings)
    response = client.auth.sign_up(
        _signup_credentials(email, password, settings.app_url)
    )
    if response.session is None:
        _notice(
            st.session_state,
            "Account created. Confirm the Supabase email, then return here to sign in.",
            kind="success",
        )
        return
    if response.user is None:
        raise ExperienceError("Supabase returned no account.")
    st.session_state["_supabase_client"] = client
    st.session_state["_arena_user"] = {
        "id": str(response.user.id),
        "email": str(response.user.email or email),
    }
    st.session_state["arena_view"] = "centre"
    _notice(st.session_state, "Account created. Welcome to the Arena.", kind="success")


def _sign_out(st: Any) -> None:
    client = st.session_state.get("_supabase_client")
    if client is not None:
        try:
            client.auth.sign_out()
        except Exception:
            pass
    st.session_state.clear()


def _navigate(
    st: Any,
    service: ArenaService,
    payload: dict[str, Any],
) -> None:
    view = _require_text(payload, "view")
    run_id_value = payload.get("run_id")
    run_id = str(run_id_value) if run_id_value else None
    if isinstance(payload.get("draft"), dict):
        _save_draft(st, service, payload)
    if view in {"decision", "review", "consequence", "debrief"}:
        if not run_id:
            raise ExperienceError("Select a run before opening this view.")
        run = _cached_run(st.session_state, run_id)
        if run is None and view == "decision":
            run, draft = service.get_run_and_draft(run_id)
            decision = run.get("current_decision")
            if isinstance(decision, dict):
                _cache_draft(
                    st.session_state,
                    run_id,
                    str(decision["id"]),
                    int(run["revision"]),
                    draft or _empty_draft(),
                )
        elif run is None:
            run = service.get_run(run_id)
        _cache_run(st.session_state, run)
        if view == "debrief" and run["status"] != "completed":
            raise ExperienceError("Finish all 20 decisions before opening the debrief.")
        if view == "decision" and run["status"] == "completed":
            view = "debrief"
    _clear_run_ui_state(st.session_state)
    _set_view(st.session_state, view, run_id=run_id)


def _start_run(st: Any, service: ArenaService) -> None:
    run_id = (
        f"attempt-{datetime.now(UTC).strftime('%Y%m%d-%H%M')}-"
        f"{uuid.uuid4().hex[:6]}"
    )
    display_name = str(
        st.session_state.get(
            "arena_pending_name",
            f"First attempt · {datetime.now(UTC).strftime('%d %b %Y')}",
        )
    )
    run = service.start_run(run_id, display_name=display_name)
    _clear_run_ui_state(st.session_state)
    _cache_run(st.session_state, run)
    decision = run.get("current_decision")
    if isinstance(decision, dict):
        _cache_draft(
            st.session_state,
            run_id,
            str(decision["id"]),
            int(run["revision"]),
            _empty_draft(),
        )
    _set_view(st.session_state, "decision", run_id=run_id)


def _save_draft(
    st: Any,
    service: ArenaService,
    payload: dict[str, Any],
) -> None:
    run_id = _require_text(payload, "run_id")
    decision_id = _require_text(payload, "decision_id")
    expected_revision = int(payload.get("expected_revision"))
    draft = _normalize_draft(payload.get("draft"))
    service.save_draft(
        run_id,
        decision_id,
        draft,
        expected_revision=expected_revision,
    )
    _cache_draft(
        st.session_state,
        run_id,
        decision_id,
        expected_revision,
        draft,
    )
    sync_id = str(payload.get("sync_id") or "")[:100]
    st.session_state["arena_sync"] = {
        "run_id": run_id,
        "decision_id": decision_id,
        "revision": expected_revision,
        "sync_id": sync_id,
        "saved_at": datetime.now(UTC).isoformat(),
    }


def _request_evidence(
    st: Any,
    service: ArenaService,
    payload: dict[str, Any],
) -> None:
    run_id = _require_text(payload, "run_id")
    evidence_id = _require_text(payload, "evidence_id")
    expected_revision = int(payload.get("expected_revision"))
    run = _cached_run(st.session_state, run_id)
    if run is None:
        run = service.get_run(run_id)
    decision_id = str(run["current_decision"]["id"])
    draft = _normalize_draft(payload.get("draft"))
    updated = service.request_evidence(
        run_id,
        evidence_id,
        expected_revision=expected_revision,
    )
    service.save_draft(
        run_id,
        str(updated["current_decision"]["id"]),
        draft,
        expected_revision=int(updated["revision"]),
    )
    _cache_run(st.session_state, updated)
    _cache_draft(
        st.session_state,
        run_id,
        str(updated["current_decision"]["id"]),
        int(updated["revision"]),
        draft,
    )
    st.session_state["arena_sync"] = {
        "run_id": run_id,
        "decision_id": str(updated["current_decision"]["id"]),
        "revision": int(updated["revision"]),
        "sync_id": str(payload.get("sync_id") or "")[:100],
        "saved_at": datetime.now(UTC).isoformat(),
    }
    item = next(
        item for item in updated["evidence"] if item["id"] == evidence_id
    )
    _notice(
        st.session_state,
        (
            f"{item['cost']} credit consumed. "
            f"Expected in week {item['arrival_week']}."
        ),
        kind="success",
    )


def _review(
    st: Any,
    service: ArenaService,
    payload: dict[str, Any],
) -> None:
    run_id = _require_text(payload, "run_id")
    run = _cached_run(st.session_state, run_id)
    if run is None:
        run = service.get_run(run_id)
    decision_id = str(payload.get("decision_id") or run["current_decision"]["id"])
    expected_revision = int(payload.get("expected_revision", run["revision"]))
    if decision_id != str(run["current_decision"]["id"]):
        raise ExperienceError("The decision changed before review.")
    draft = _normalize_draft(payload.get("draft"))
    errors = _draft_errors(draft)
    if errors:
        raise ExperienceError("\n".join(errors))
    service.save_draft(
        run_id,
        decision_id,
        draft,
        expected_revision=expected_revision,
    )
    _cache_draft(
        st.session_state,
        run_id,
        decision_id,
        expected_revision,
        draft,
    )
    st.session_state["arena_review_payload"] = draft
    _set_view(st.session_state, "review", run_id=run_id)


def _commit(st: Any, service: ArenaService, payload: dict[str, Any]) -> None:
    if payload.get("confirmed") is not True:
        raise ExperienceError("Confirm that permanent commitment is understood.")
    run_id = _require_text(payload, "run_id")
    run = _cached_run(st.session_state, run_id)
    if run is None:
        run = service.get_run(run_id)
    decision = run["current_decision"]
    draft = st.session_state.get("arena_review_payload")
    if not isinstance(draft, dict):
        draft = service.load_draft(run_id)
    if not isinstance(draft, dict):
        raise ExperienceError("The reviewed decision is no longer available.")
    errors = _draft_errors(draft)
    if errors:
        raise ExperienceError("\n".join(errors))
    option = next(
        (
            item
            for item in decision["options"]
            if item["id"] == draft.get("option_id")
        ),
        None,
    )
    if option is None:
        raise ExperienceError("The reviewed action is invalid.")

    before_signals = list(run["operational_signals"])
    before_crises = {item["id"] for item in run["crises"]}
    before_available = {
        item["id"]
        for item in run["evidence"]
        if item["state"] in {"available", "verified"}
    }
    updated = service.commit_decision(
        run_id,
        {
            **draft,
            "decision_id": decision["id"],
        },
        expected_revision=int(run["revision"]),
    )
    _cache_run(st.session_state, updated)
    after_available = {
        item["id"]
        for item in updated["evidence"]
        if item["state"] in {"available", "verified"}
    }
    st.session_state["arena_consequence"] = {
        "decision_id": decision["id"],
        "choice": option["label"],
        "signals": updated["operational_signals"][len(before_signals) :],
        "crises": [
            item
            for item in updated["crises"]
            if item["id"] not in before_crises
        ],
        "evidence_arrived": sorted(after_available - before_available),
        "completed": updated["status"] == "completed",
        "next_decision": (
            updated["current_decision"]["id"]
            if updated["current_decision"]
            else None
        ),
    }
    st.session_state.pop("arena_review_payload", None)
    st.session_state.pop("arena_sync", None)
    st.session_state.pop("arena_cached_draft", None)
    _set_view(st.session_state, "consequence", run_id=run_id)


def _continue_after_consequence(
    st: Any,
    service: ArenaService,
    payload: dict[str, Any],
) -> None:
    run_id = _require_text(payload, "run_id")
    run = _cached_run(st.session_state, run_id)
    if run is None:
        run = service.get_run(run_id)
        _cache_run(st.session_state, run)
    st.session_state.pop("arena_consequence", None)
    _set_view(
        st.session_state,
        "debrief" if run["status"] == "completed" else "decision",
        run_id=run_id,
    )


def _import_run(
    st: Any,
    service: ArenaService,
    payload: dict[str, Any],
) -> None:
    document = payload.get("document")
    if not isinstance(document, dict):
        raise ExperienceError("Choose a valid Arena JSON checkpoint.")
    encoded = json.dumps(document, ensure_ascii=False).encode("utf-8")
    if len(encoded) > MAX_IMPORT_BYTES:
        raise ExperienceError("The imported run exceeds the 5 MB beta limit.")
    view = service.import_run_document(
        document,
        display_name=f"Imported · {datetime.now(UTC).strftime('%d %b %Y')}",
    )
    _notice(
        st.session_state,
        "Run imported and replay-verified.",
        kind="success",
    )
    _set_view(
        st.session_state,
        "debrief" if view["status"] == "completed" else "decision",
        run_id=str(view["run_id"]),
    )


def dispatch_event(
    st: Any,
    settings: HostedSettings,
    raw_event: Any,
) -> None:
    """Validate and apply one transient React event."""

    action, payload = _event(raw_event)
    if action == "sign_in":
        if not settings.configured:
            raise ExperienceError("Cloud account access is not configured.")
        _sign_in(st, settings, payload)
        return
    if action == "sign_up":
        if not settings.configured:
            raise ExperienceError("Cloud account access is not configured.")
        _sign_up(st, settings, payload)
        return
    if action == "open_local":
        st.session_state["arena_local_mode"] = True
        st.session_state["arena_view"] = "centre"
        return
    if action == "sign_out":
        if (
            _authenticated(st.session_state)
            and isinstance(payload.get("draft"), dict)
        ):
            _save_draft(st, _service(st, settings), payload)
        _sign_out(st)
        return

    if not bool(st.session_state.get("arena_local_mode")) and not _authenticated(
        st.session_state
    ):
        raise ExperienceError("Sign in before accessing Arena runs.")
    service = _service(st, settings)

    if action == "navigate":
        _navigate(st, service, payload)
    elif action == "open_briefing":
        st.session_state["arena_pending_name"] = (
            f"First attempt · {datetime.now(UTC).strftime('%d %b %Y')}"
        )
        _set_view(st.session_state, "briefing")
    elif action == "start_run":
        _start_run(st, service)
    elif action == "save_draft":
        _save_draft(st, service, payload)
    elif action == "request_evidence":
        _request_evidence(st, service, payload)
    elif action == "review_decision":
        _review(st, service, payload)
    elif action == "commit_decision":
        _commit(st, service, payload)
    elif action == "continue_consequence":
        _continue_after_consequence(st, service, payload)
    elif action == "import_run":
        _import_run(st, service, payload)
    elif action == "rename_run":
        run_id = _require_text(payload, "run_id")
        display_name = _require_text(payload, "display_name")
        service.rename_run(run_id, display_name)
        _notice(st.session_state, "Attempt renamed.", kind="success")
    else:
        raise ExperienceError(f"Unsupported browser action: {action}")


def _root_css() -> str:
    return """
    <style>
      header[data-testid="stHeader"],
      [data-testid="stToolbar"],
      [data-testid="stDecoration"],
      [data-testid="stStatusWidget"],
      footer { display: none !important; }
      .stApp { background: #f3f6fa; }
      .block-container {
        max-width: none !important;
        padding: 0 !important;
      }
      [data-testid="stAppViewContainer"] > .main {
        overflow: visible;
      }
      [data-testid="stElementContainer"],
      [data-testid="stCustomComponentV2"] {
        width: 100% !important;
      }
    </style>
    """


def main() -> None:
    import streamlit as st

    from ai_delivery_arena.react_ui import arena_shell

    st.set_page_config(
        page_title="AI Delivery Arena",
        page_icon="A",
        layout="wide",
        initial_sidebar_state="collapsed",
    )
    st.markdown(_root_css(), unsafe_allow_html=True)
    try:
        settings = load_settings(st)
        model = build_model(st, settings)
    except Exception as exc:
        model = {
            "product": {
                "name": "AI Delivery Arena",
                "tagline": "Judgment under pressure",
                "version": PRODUCT_VERSION,
                "status": "Hosted Beta",
            },
            "screen": "fatal",
            "fatal": {
                "title": "The Arena could not start",
                "message": str(exc),
            },
            "links": {
                "github": "https://github.com/Shri-k5730/ai-delivery-arena",
            },
        }
        settings = None

    result = arena_shell(model, key="arena_react_product")
    event = getattr(result, "event", None)
    if event is None or settings is None:
        return
    try:
        dispatch_event(st, settings, event)
    except (ExperienceError, PersistenceError, ValueError, TypeError) as exc:
        _clear_persistence_cache(st.session_state)
        kind = "error"
        message = str(exc)
        if str(event.get("type", "")) in {"sign_in", "sign_up"}:
            if str(event.get("type")) == "sign_in":
                message = "Sign-in failed. Check your email and password."
            elif not isinstance(exc, ExperienceError):
                message = (
                    "Account creation failed. The account may already exist or "
                    "Supabase email limits may have been reached."
                )
        _notice(st.session_state, message, kind=kind)
    except Exception:
        _clear_persistence_cache(st.session_state)
        _notice(
            st.session_state,
            "The action could not be completed. Refresh and try again.",
            kind="error",
        )
    st.rerun()


if __name__ == "__main__":
    main()
