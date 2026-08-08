"""Streamlit Community Cloud experience for AI Delivery Arena Beta."""

from __future__ import annotations

import base64
import json
import os
import uuid
from dataclasses import dataclass
from datetime import UTC, datetime
from importlib.resources import files
from pathlib import Path
from typing import Any

from ai_delivery_arena.engine.cloud_persistence import SupabaseRunStore
from ai_delivery_arena.engine.persistence import PersistenceError
from ai_delivery_arena.experience.service import ArenaService, ExperienceError


REPOSITORY_ROOT = Path(__file__).resolve().parents[3]
SCENARIO_ID = "procurement-under-pressure"
SCENARIO_VERSION = "0.1.0"


@dataclass(frozen=True, slots=True)
class HostedSettings:
    supabase_url: str
    supabase_key: str
    signing_key: bytes
    github_url: str
    app_url: str
    canary_emails: tuple[str, ...] = ()
    feedback_url: str = ""
    incident_email: str = ""
    allow_local_mode: bool = True

    @property
    def configured(self) -> bool:
        return bool(
            self.supabase_url
            and self.supabase_key
            and self.signing_key
        )

    @property
    def admission_ready(self) -> bool:
        return bool(self.canary_emails)

    @property
    def canary_ready(self) -> bool:
        return bool(
            self.configured
            and self.admission_ready
            and self.feedback_url
            and self.incident_email
        )

    def email_is_invited(self, email: str) -> bool:
        return email.strip().casefold() in self.canary_emails


def _secret_value(st: Any, section: str, key: str) -> str:
    try:
        value = st.secrets[section][key]
    except (FileNotFoundError, KeyError, TypeError):
        return ""
    return str(value).strip()


def _email_allowlist(value: str) -> tuple[str, ...]:
    return tuple(
        dict.fromkeys(
            item.strip().casefold()
            for item in value.replace("\n", ",").split(",")
            if item.strip()
        )
    )


def _enabled(value: str) -> bool:
    return value.strip().casefold() in {"1", "true", "yes", "on"}


def load_settings(st: Any) -> HostedSettings:
    url = (
        _secret_value(st, "supabase", "url")
        or os.getenv("SUPABASE_URL", "").strip()
    )
    key = (
        _secret_value(st, "supabase", "publishable_key")
        or _secret_value(st, "supabase", "anon_key")
        or os.getenv("SUPABASE_PUBLISHABLE_KEY", "").strip()
        or os.getenv("SUPABASE_ANON_KEY", "").strip()
    )
    signing = (
        _secret_value(st, "arena", "signing_key")
        or os.getenv("ARENA_SIGNING_KEY", "").strip()
    )
    github = (
        _secret_value(st, "arena", "github_url")
        or os.getenv(
            "ARENA_GITHUB_URL",
            "https://github.com/Shri-k5730/ai-delivery-arena",
        ).strip()
    )
    app_url = (
        _secret_value(st, "arena", "app_url")
        or os.getenv("ARENA_APP_URL", "").strip()
    ).rstrip("/")
    canary_emails = _email_allowlist(
        _secret_value(st, "canary", "emails")
        or os.getenv("ARENA_CANARY_EMAILS", "")
    )
    feedback_url = (
        _secret_value(st, "canary", "feedback_url")
        or os.getenv("ARENA_FEEDBACK_URL", "")
    ).strip()
    incident_email = (
        _secret_value(st, "canary", "incident_email")
        or os.getenv("ARENA_INCIDENT_EMAIL", "")
    ).strip().casefold()
    allow_local_mode = _enabled(
        _secret_value(st, "arena", "allow_local_mode")
        or os.getenv("ARENA_ALLOW_LOCAL_MODE", "false")
    )
    role = _legacy_jwt_role(key)
    if role == "service_role":
        raise RuntimeError(
            "Use the Supabase publishable or anon key, never the service-role key."
        )
    return HostedSettings(
        supabase_url=url,
        supabase_key=key,
        signing_key=signing.encode("utf-8"),
        github_url=github,
        app_url=app_url,
        canary_emails=canary_emails,
        feedback_url=feedback_url,
        incident_email=incident_email,
        allow_local_mode=allow_local_mode,
    )


def _legacy_jwt_role(key: str) -> str | None:
    """Return the role from a legacy Supabase JWT without verifying the token."""

    parts = key.split(".")
    if len(parts) != 3:
        return None
    try:
        payload = parts[1] + ("=" * (-len(parts[1]) % 4))
        value = json.loads(base64.urlsafe_b64decode(payload).decode("utf-8"))
    except Exception:
        return None
    role = value.get("role") if isinstance(value, dict) else None
    return str(role) if role else None


def _load_theme(st: Any) -> None:
    stylesheet = (
        files("ai_delivery_arena.hosted")
        .joinpath("static/theme.css")
        .read_text(encoding="utf-8")
    )
    st.markdown(f"<style>{stylesheet}</style>", unsafe_allow_html=True)


def _new_supabase_client(settings: HostedSettings) -> Any:
    from supabase import create_client

    return create_client(settings.supabase_url, settings.supabase_key)


def _signup_credentials(
    email: str,
    password: str,
    app_url: str,
) -> dict[str, Any]:
    credentials: dict[str, Any] = {
        "email": email,
        "password": password,
    }
    if app_url:
        credentials["options"] = {"email_redirect_to": app_url}
    return credentials


def _service_for_session(st: Any, settings: HostedSettings) -> ArenaService:
    cached = st.session_state.get("_arena_service")
    if cached is not None:
        return cached
    client = st.session_state.get("_supabase_client")
    user = st.session_state.get("_arena_user")
    if client is None or not isinstance(user, dict) or not user.get("id"):
        raise RuntimeError("Sign in before accessing hosted runs.")
    owner_id = str(user["id"])
    service = ArenaService(
        REPOSITORY_ROOT,
        store_factory=lambda engine: SupabaseRunStore(
            client,
            owner_id,
            engine,
            signing_key=settings.signing_key,
        ),
    )
    st.session_state["_arena_service"] = service
    return service


def _local_service(st: Any) -> ArenaService:
    cached = st.session_state.get("_arena_service")
    if cached is None:
        run_dir = os.getenv("ARENA_RUN_DIR", "").strip() or None
        cached = ArenaService(REPOSITORY_ROOT, run_dir=run_dir)
        st.session_state["_arena_service"] = cached
    return cached


def _reset_product_state(st: Any) -> None:
    for key in tuple(st.session_state):
        if key.startswith("arena_") or key.startswith("draft_"):
            del st.session_state[key]


def _goto(st: Any, view: str, *, run_id: str | None = None) -> None:
    st.session_state["arena_view"] = view
    if run_id is not None:
        st.session_state["arena_run_id"] = run_id
    st.rerun()


def _brand_header(
    st: Any,
    *,
    settings: HostedSettings,
    authenticated: bool,
) -> None:
    left, middle, right = st.columns([4.6, 1.2, 1.2], vertical_alignment="center")
    with left:
        st.markdown(
            """
            <div class="arena-brand">
              <span class="arena-brand-mark">A</span>
              <span><strong>AI Delivery Arena</strong><small>Judgment under pressure</small></span>
            </div>
            """,
            unsafe_allow_html=True,
        )
    with middle:
        st.link_button("GitHub", settings.github_url, use_container_width=True)
    with right:
        if authenticated:
            if st.button("Sign out", use_container_width=True, key="sign_out"):
                client = st.session_state.get("_supabase_client")
                if client is not None:
                    try:
                        client.auth.sign_out()
                    except Exception:
                        pass
                st.session_state.clear()
                st.rerun()
        else:
            st.markdown(
                '<a class="header-login" href="#access">Sign in</a>',
                unsafe_allow_html=True,
            )
    st.markdown('<div class="header-rule"></div>', unsafe_allow_html=True)


def _marketing_page(st: Any, settings: HostedSettings) -> None:
    _brand_header(st, settings=settings, authenticated=False)
    hero, access = st.columns([1.35, 0.65], gap="large", vertical_alignment="center")
    with hero:
        st.markdown(
            """
            <section class="hero">
              <span class="eyebrow">Open-source enterprise simulation</span>
              <h1>Enterprise AI leadership,<br><em>tested under pressure.</em></h1>
              <p class="hero-copy">
                Lead a high-stakes AI initiative through incomplete evidence,
                stakeholder pressure, delivery crises and a final release decision.
                Your choices create consequences. Your debrief shows the evidence.
              </p>
              <div class="proof-strip">
                <span><strong>90</strong> minutes</span>
                <span><strong>20</strong> decisions</span>
                <span><strong>6</strong> crises</span>
                <span><strong>7</strong> dimensions</span>
              </div>
            </section>
            """,
            unsafe_allow_html=True,
        )
    with access:
        st.markdown('<div id="access"></div>', unsafe_allow_html=True)
        if settings.configured:
            _auth_card(st, settings)
        else:
            st.markdown(
                """
                <div class="access-card">
                  <span class="eyebrow">Local preview</span>
                  <h2>Cloud access is not configured</h2>
                  <p>Add the Supabase and Arena secrets to enable account access.
                  You can still open the local edition for development.</p>
                </div>
                """,
                unsafe_allow_html=True,
            )
            if st.button(
                "Open local edition",
                type="primary",
                use_container_width=True,
            ):
                st.session_state["arena_local_mode"] = True
                st.session_state["arena_view"] = "centre"
                st.rerun()

    st.markdown(
        """
        <section class="marketing-band">
          <span class="eyebrow">The assessment gap</span>
          <h2>Knowing the vocabulary is not the same as leading the programme.</h2>
          <p>Courses test recall. Interviews reward storytelling. The Arena records
          what you decide when value, data, architecture, cost, governance and
          adoption compete for attention.</p>
        </section>
        """,
        unsafe_allow_html=True,
    )
    cols = st.columns(3, gap="medium")
    cards = (
        (
            "01",
            "Decide",
            "Choose a defensible action and record the owner, assumptions, risk, evidence and acceptance boundary.",
        ),
        (
            "02",
            "Experience",
            "Observe stakeholder reactions, operational signals and deterministic crises created by prior choices.",
        ),
        (
            "03",
            "Debrief",
            "Receive criterion-level evidence, non-compensable gate outcomes and CIO, CISO and CFO perspectives.",
        ),
    )
    for column, (number, title, copy) in zip(cols, cards, strict=True):
        with column:
            st.markdown(
                f"""
                <article class="method-card">
                  <span>{number}</span><h3>{title}</h3><p>{copy}</p>
                </article>
                """,
                unsafe_allow_html=True,
            )
    st.markdown(
        """
        <section class="open-source-band">
          <div>
            <span class="eyebrow">Transparent by design</span>
            <h2>Inspect the scenario, engine and methodology.</h2>
          </div>
          <p>The deterministic engine and scenario fixtures are public. First-attempt
          scores remain concealed until submission. Results are simulation assessments,
          not certification or independently calibrated benchmark results.</p>
        </section>
        """,
        unsafe_allow_html=True,
    )
    source_root = settings.github_url.removesuffix(".git").rstrip("/")
    st.markdown(
        f"""
        <footer class="arena-footer">
          <span>AI Delivery Arena · Private Canary v0.5</span>
          <span><a href="{_escape(source_root)}/blob/main/PRIVACY.md">Privacy</a>
          · <a href="{_escape(source_root)}/blob/main/TERMS.md">Terms</a>
          · Synthetic scenario · Open source</span>
        </footer>
        """,
        unsafe_allow_html=True,
    )


def _auth_card(st: Any, settings: HostedSettings) -> None:
    if not settings.canary_ready:
        st.markdown(
            """
            <div class="access-card-heading">
              <span class="eyebrow">Private canary</span>
              <h2>Canary access is closed</h2>
              <p>Invitation admission, feedback, and incident reporting must all
              be configured before participant access opens.</p>
            </div>
            """,
            unsafe_allow_html=True,
        )
        return
    st.markdown(
        """
        <div class="access-card-heading">
          <span class="eyebrow">Private canary</span>
          <h2>Enter the Arena</h2>
          <p>Invited participants only. Attempts resume across devices.</p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    sign_in, create = st.tabs(["Sign in", "Create account"])
    with sign_in:
        with st.form("sign_in_form"):
            email = st.text_input("Email", key="login_email")
            password = st.text_input(
                "Password",
                type="password",
                key="login_password",
            )
            submitted = st.form_submit_button(
                "Continue",
                type="primary",
                use_container_width=True,
            )
        if submitted:
            if not email.strip() or not password:
                st.error("Enter your email and password.")
            elif not settings.email_is_invited(email):
                st.error("This private canary accepts only invited email addresses.")
            else:
                try:
                    client = _new_supabase_client(settings)
                    response = client.auth.sign_in_with_password(
                        {"email": email.strip(), "password": password}
                    )
                    if response.user is None or response.session is None:
                        raise RuntimeError("Supabase returned no authenticated session.")
                    st.session_state["_supabase_client"] = client
                    st.session_state["_arena_user"] = {
                        "id": str(response.user.id),
                        "email": str(response.user.email or email.strip()),
                    }
                    st.session_state["arena_view"] = "centre"
                    st.rerun()
                except Exception:
                    st.error("Sign-in failed. Check your email and password.")
    with create:
        with st.form("create_account_form"):
            email = st.text_input("Work email", key="signup_email")
            password = st.text_input(
                "Create password",
                type="password",
                key="signup_password",
                help="Use at least 8 characters.",
            )
            consent = st.checkbox(
                "I understand this beta stores my synthetic simulation responses."
            )
            submitted = st.form_submit_button(
                "Create invited account",
                type="primary",
                use_container_width=True,
            )
        if submitted:
            if len(password) < 8 or not email.strip():
                st.error("Use a valid email and a password of at least 8 characters.")
            elif not consent:
                st.error("Confirm the beta data notice before creating an account.")
            elif not settings.email_is_invited(email):
                st.error("This email is not on the private canary invitation list.")
            else:
                try:
                    client = _new_supabase_client(settings)
                    response = client.auth.sign_up(
                        _signup_credentials(
                            email.strip(),
                            password,
                            settings.app_url,
                        )
                    )
                    if response.session is None:
                        st.success(
                            "Account created. Confirm the email from Supabase, "
                            "then return here to sign in."
                        )
                    else:
                        st.session_state["_supabase_client"] = client
                        st.session_state["_arena_user"] = {
                            "id": str(response.user.id),
                            "email": str(response.user.email or email.strip()),
                        }
                        st.session_state["arena_view"] = "centre"
                        st.rerun()
                except Exception:
                    st.error(
                        "Account creation failed. The account may already exist "
                        "or Supabase email limits may have been reached."
                    )


def _authenticated_shell(
    st: Any,
    settings: HostedSettings,
    service: ArenaService,
) -> None:
    _brand_header(st, settings=settings, authenticated=True)
    view = st.session_state.get("arena_view", "centre")
    try:
        if view == "briefing":
            _briefing(st, service)
        elif view == "decision":
            _decision_cockpit(st, service)
        elif view == "review":
            _review_decision(st, service)
        elif view == "consequence":
            _consequence(st, service)
        elif view == "debrief":
            _debrief(st, service)
        else:
            _run_centre(st, service)
    except (ExperienceError, PersistenceError) as exc:
        st.error(str(exc))
        if st.button("Return to run centre", type="primary"):
            _goto(st, "centre")


def _run_centre(st: Any, service: ArenaService) -> None:
    bootstrap = service.bootstrap()
    runs = bootstrap["runs"]
    user = st.session_state.get("_arena_user", {})
    st.markdown(
        f"""
        <section class="page-intro">
          <span class="eyebrow">Run centre</span>
          <h1>Continue your leadership evidence.</h1>
          <p>Signed in as {user.get("email", "local participant")}. Every committed
          decision is immutable. Drafts remain editable until review and commitment.</p>
        </section>
        """,
        unsafe_allow_html=True,
    )

    active = next(
        (item for item in runs if item["status"] != "completed"),
        None,
    )
    if active:
        next_number = min(int(active["completed"]) + 1, int(active["total"]))
        st.markdown(
            f"""
            <article class="continue-card">
              <div><span class="status-live">In progress</span>
              <h2>{_escape(active["display_name"])}</h2>
              <p>{active["completed"]} of {active["total"]} decisions committed ·
              next D{next_number:02d}</p></div>
              <div class="progress-number">{round(int(active["completed"]) * 100 / int(active["total"]))}%</div>
            </article>
            """,
            unsafe_allow_html=True,
        )
        if st.button(
            f"Continue at D{next_number:02d}",
            type="primary",
            use_container_width=True,
            key="continue_active",
        ):
            _goto(st, "decision", run_id=str(active["run_id"]))

    left, right = st.columns([1, 1], gap="large")
    with left:
        st.markdown(
            """
            <div class="section-heading"><span class="eyebrow">New attempt</span>
            <h2>Procurement Under Pressure</h2>
            <p>One synthetic enterprise AI programme. Five stages. Approximately
            90 minutes. Detailed results appear only after D20.</p></div>
            """,
            unsafe_allow_html=True,
        )
        if st.button(
            "Read briefing and start",
            type="primary",
            use_container_width=True,
            key="new_attempt",
        ):
            st.session_state["arena_pending_name"] = (
                f"First attempt · {datetime.now(UTC).strftime('%d %b %Y')}"
            )
            _goto(st, "briefing")
    with right:
        st.markdown(
            """
            <div class="section-heading"><span class="eyebrow">Move from local</span>
            <h2>Import an existing run</h2>
            <p>Upload one verified JSON checkpoint from your local
            <code>.arena-runs</code> folder. Its committed history is preserved.</p></div>
            """,
            unsafe_allow_html=True,
        )
        uploaded = st.file_uploader(
            "Local run JSON",
            type=["json"],
            label_visibility="collapsed",
        )
        if st.button(
            "Import into my account",
            use_container_width=True,
            disabled=uploaded is None,
        ):
            try:
                document = json.loads(uploaded.getvalue().decode("utf-8"))
                view = service.import_run_document(
                    document,
                    display_name=f"Imported · {datetime.now(UTC).strftime('%d %b %Y')}",
                )
                st.success("Run imported and replay-verified.")
                _goto(
                    st,
                    "debrief" if view["status"] == "completed" else "decision",
                    run_id=str(view["run_id"]),
                )
            except Exception as exc:
                st.error(f"Import rejected: {exc}")

    st.markdown(
        '<div class="section-heading attempts"><span class="eyebrow">Your evidence</span>'
        "<h2>Attempts</h2></div>",
        unsafe_allow_html=True,
    )
    if not runs:
        st.info("No attempts yet. Start with the scenario briefing.")
        return
    for index, run in enumerate(runs):
        cols = st.columns([4.8, 1.4], vertical_alignment="center")
        with cols[0]:
            status = "Complete" if run["status"] == "completed" else "In progress"
            st.markdown(
                f"""
                <div class="run-row">
                  <span class="run-status">{status}</span>
                  <strong>{_escape(run["display_name"])}</strong>
                  <small>{run["completed"]}/{run["total"]} decisions ·
                  revised {run["revision"]} times · {_friendly_date(str(run["updated_at"]))}</small>
                </div>
                """,
                unsafe_allow_html=True,
            )
        with cols[1]:
            label = "Open debrief" if run["status"] == "completed" else "Resume"
            if st.button(label, key=f"open_run_{index}", use_container_width=True):
                _goto(
                    st,
                    "debrief" if run["status"] == "completed" else "decision",
                    run_id=str(run["run_id"]),
                )


def _briefing(st: Any, service: ArenaService) -> None:
    bootstrap = service.bootstrap()
    scenario = bootstrap["scenario"]
    st.markdown(
        """
        <section class="page-intro narrow">
          <span class="eyebrow">Mission briefing</span>
          <h1>Procurement Under Pressure</h1>
          <p>You are the accountable AI delivery lead. The executive team expects
          a defensible recommendation, not automatic agreement with the sponsor.</p>
        </section>
        """,
        unsafe_allow_html=True,
    )
    metrics = st.columns(4)
    values = (
        ("16 weeks", "Fixed timeline"),
        ("€1.2m", "Budget envelope"),
        ("12 systems", "Fragmented data"),
        ("10 credits", "Investigation"),
    )
    for column, (value, label) in zip(metrics, values, strict=True):
        with column:
            st.metric(label, value)

    left, right = st.columns([1.25, 0.75], gap="large")
    with left:
        st.markdown("### Your mandate")
        st.write(scenario["premise"])
        st.markdown("### Known constraints")
        st.markdown(
            """
            - The sponsor has already announced an aggressive savings ambition.
            - The preferred external LLM is not approved.
            - European data-processing constraints apply.
            - Procurement expects recommendations and eventually selected actions.
            - Governance ownership and the meaning of “business release” are unresolved.
            """
        )
    with right:
        st.markdown(
            """
            <article class="rules-card">
              <span class="eyebrow">Before you enter</span>
              <h3>Commit means permanent.</h3>
              <ul>
                <li>Investigate before evidence windows close.</li>
                <li>Record rationale, owner, assumptions, risk and stop conditions.</li>
                <li>No live scores or preferred-path hints appear.</li>
                <li>Your full debrief unlocks after D20.</li>
              </ul>
            </article>
            """,
            unsafe_allow_html=True,
        )
        st.info("Expected time: 75 to 90 minutes. You can save and resume.")

    back, enter = st.columns([1, 2])
    with back:
        if st.button("Back", use_container_width=True):
            _goto(st, "centre")
    with enter:
        if st.button(
            "Enter the Arena",
            type="primary",
            use_container_width=True,
        ):
            run_id = (
                f"attempt-{datetime.now(UTC).strftime('%Y%m%d-%H%M')}-"
                f"{uuid.uuid4().hex[:6]}"
            )
            display_name = st.session_state.get(
                "arena_pending_name",
                f"First attempt · {datetime.now(UTC).strftime('%d %b %Y')}",
            )
            service.start_run(run_id, display_name=str(display_name))
            _goto(st, "decision", run_id=run_id)


def _decision_cockpit(st: Any, service: ArenaService) -> None:
    run_id = str(st.session_state["arena_run_id"])
    run = service.get_run(run_id)
    if run["status"] == "completed":
        _goto(st, "debrief", run_id=run_id)
        return
    decision = run["current_decision"]
    draft = _prepare_draft_state(st, service, run)
    _run_status_bar(st, run, service)

    st.markdown(
        f"""
        <section class="decision-heading">
          <div><span class="eyebrow">{_escape(run["stage"]["label"])} ·
          Week {decision["week"]}</span>
          <h1>{decision["id"]}. {_escape(decision["title"])}</h1></div>
          <span class="decision-count">{int(run["progress"]["completed"]) + 1}
          / {run["progress"]["total"]}</span>
        </section>
        """,
        unsafe_allow_html=True,
    )
    main, context = st.columns([1.45, 0.75], gap="large")
    with main:
        st.markdown(
            f"""
            <article class="situation-card">
              <span class="eyebrow">Decision moment</span>
              <p class="moment">{_escape(decision["moment"])}</p>
              <div class="known"><strong>Known information</strong>
              <span>{_escape(decision["information"])}</span></div>
            </article>
            """,
            unsafe_allow_html=True,
        )
        current_crisis = next(
            (
                item
                for item in run["crises"]
                if item["linked_decision"] == decision["id"]
            ),
            None,
        )
        if current_crisis:
            st.error(f"Material event: {current_crisis['observation']}")

        st.markdown("#### Choose your action")
        option_lookup = {
            str(item["id"]): str(item["label"])
            for item in decision["options"]
        }
        option_ids = list(option_lookup)
        current_option = draft.get("option_id")
        option_index = (
            option_ids.index(current_option)
            if current_option in option_ids
            else None
        )
        st.radio(
            "Action",
            option_ids,
            index=option_index,
            format_func=lambda item: f"{item}  ·  {option_lookup[item]}",
            key=_widget_key(run, "option"),
            label_visibility="collapsed",
        )

        st.markdown("#### Decision memo")
        st.caption(decision["required_response"])
        st.text_area(
            "Rationale",
            key=_widget_key(run, "rationale"),
            height=150,
            placeholder="State what you will do, why it is proportionate now, and what evidence supports it.",
        )
        owner, acceptance = st.columns([0.7, 1.3])
        with owner:
            st.text_input(
                "Accountable owner",
                key=_widget_key(run, "owner"),
                placeholder="Named role or person",
            )
        with acceptance:
            st.text_input(
                "Acceptance or stop condition",
                key=_widget_key(run, "acceptance"),
                placeholder="A measurable threshold or condition",
            )
        assumptions, risk = st.columns(2)
        with assumptions:
            st.text_area(
                "Critical assumption",
                key=_widget_key(run, "assumptions"),
                height=95,
                placeholder="What must remain true?",
            )
        with risk:
            st.text_area(
                "Material risk",
                key=_widget_key(run, "risk"),
                height=95,
                placeholder="What could invalidate this action?",
            )
        available = [
            item
            for item in run["evidence"]
            if item["state"] in {"available", "verified"}
        ]
        evidence_labels = {
            str(item["id"]): str(item["title"]) for item in available
        }
        st.multiselect(
            "Evidence cited",
            list(evidence_labels),
            format_func=lambda item: evidence_labels[item],
            key=_widget_key(run, "citations"),
            placeholder="Select evidence available at this decision",
        )
        if decision["id"] == "D20":
            selected = st.session_state.get(_widget_key(run, "option"))
            if selected == "F":
                st.selectbox(
                    "Custom final route",
                    (
                        "conditional_release",
                        "reduced_scope",
                        "extended_pilot",
                        "pause",
                        "full_release",
                    ),
                    format_func=lambda value: value.replace("_", " ").title(),
                    key=_widget_key(run, "terminal_route"),
                )

        current_draft = _capture_streamlit_draft(st, run)
        _autosave_draft(st, service, run, current_draft)
        if st.button(
            "Review decision",
            type="primary",
            use_container_width=True,
            key=f"review_{decision['id']}",
        ):
            errors = _draft_errors(current_draft)
            if errors:
                for error in errors:
                    st.error(error)
            else:
                service.save_draft(
                    run_id,
                    str(decision["id"]),
                    current_draft,
                    expected_revision=int(run["revision"]),
                )
                st.session_state["arena_review_payload"] = current_draft
                _goto(st, "review", run_id=run_id)

    with context:
        evidence_tab, signals_tab, history_tab = st.tabs(
            ["Evidence", "Signals", "Record"]
        )
        with evidence_tab:
            st.markdown(
                f"**{run['credits']['remaining']} of {run['credits']['total']} credits left**"
            )
            for item in run["evidence"]:
                _evidence_item(st, service, run, item, current_draft)
        with signals_tab:
            signals = run["operational_signals"][-6:]
            if not signals:
                st.caption("No consequence signals have been observed yet.")
            for signal in signals:
                st.markdown(f'<div class="signal">{_escape(signal)}</div>', unsafe_allow_html=True)
            if current_crisis:
                st.warning(current_crisis["observation"])
        with history_tab:
            if not run["history"]:
                st.caption("Committed decisions will appear here.")
            for item in reversed(run["history"]):
                with st.expander(f"{item['decision_id']} · {item['title']}"):
                    st.write(item["choice_label"])
                    st.caption(item["rationale"])


def _run_status_bar(st: Any, run: dict[str, Any], service: ArenaService) -> None:
    cols = st.columns([1.5, 3, 1.3], vertical_alignment="center")
    with cols[0]:
        if st.button("← Run centre", use_container_width=True):
            _goto(st, "centre")
    with cols[1]:
        stages = service.bootstrap()["stages"]
        completed = {item["decision_id"] for item in run["history"]}
        labels = []
        for stage in stages:
            done = all(item in completed for item in stage["decision_ids"])
            active = stage["id"] == run["stage"]["id"]
            marker = "✓" if done else "●" if active else "○"
            labels.append(f"{marker} {stage['label']}")
        st.markdown(
            '<div class="stage-strip">'
            + "".join(f"<span>{_escape(item)}</span>" for item in labels)
            + "</div>",
            unsafe_allow_html=True,
        )
    with cols[2]:
        st.markdown(
            f'<div class="save-chip">Saved · revision {run["revision"]}</div>',
            unsafe_allow_html=True,
        )


def _evidence_item(
    st: Any,
    service: ArenaService,
    run: dict[str, Any],
    item: dict[str, Any],
    draft: dict[str, Any],
) -> None:
    state = str(item["state"]).replace("_", " ").title()
    label = f"{item['title']} · {state}"
    with st.expander(label):
        if item["reveal"]:
            st.write(item["reveal"])
        elif item["state"] == "requested":
            st.caption(
                f"Requested week {item['request_week']}. "
                f"Expected week {item['arrival_week']}."
            )
        else:
            st.caption("Finding remains sealed until requested and available.")
        st.caption(
            "Included"
            if int(item["cost"]) == 0
            else f"{item['cost']} credit · {item['lead_time_weeks']} week lead"
        )
        requestable = (
            item["state"] == "requestable"
            and int(run["credits"]["remaining"]) >= int(item["cost"])
        )
        if requestable and st.button(
            "Request evidence",
            key=f"request_{run['run_id']}_{item['id']}",
            use_container_width=True,
        ):
            service.save_draft(
                str(run["run_id"]),
                str(run["current_decision"]["id"]),
                draft,
                expected_revision=int(run["revision"]),
            )
            updated = service.request_evidence(
                str(run["run_id"]),
                str(item["id"]),
                expected_revision=int(run["revision"]),
            )
            service.save_draft(
                str(run["run_id"]),
                str(updated["current_decision"]["id"]),
                draft,
                expected_revision=int(updated["revision"]),
            )
            st.toast(
                f"{item['cost']} credit consumed. Expected in week "
                f"{item['arrival_week'] or int(run['current_decision']['week']) + int(item['lead_time_weeks'])}."
            )
            st.rerun()


def _prepare_draft_state(
    st: Any,
    service: ArenaService,
    run: dict[str, Any],
) -> dict[str, Any]:
    prefix = _widget_prefix(run)
    marker_key = f"{prefix}_loaded"
    if not st.session_state.get(marker_key):
        draft = service.load_draft(str(run["run_id"])) or {}
        defaults = {
            "option": draft.get("option_id"),
            "rationale": draft.get("rationale", ""),
            "assumptions": draft.get("assumptions", ""),
            "owner": draft.get("owner", ""),
            "acceptance": draft.get("acceptance_condition", ""),
            "risk": draft.get("risk", ""),
            "citations": draft.get("evidence_refs", []),
            "terminal_route": draft.get("terminal_route", "conditional_release"),
        }
        for field, value in defaults.items():
            st.session_state[f"{prefix}_{field}"] = value
        st.session_state[marker_key] = True
        st.session_state[f"{prefix}_saved_hash"] = _draft_hash(draft)
        return draft
    return _capture_streamlit_draft(st, run)


def _capture_streamlit_draft(st: Any, run: dict[str, Any]) -> dict[str, Any]:
    return {
        "option_id": st.session_state.get(_widget_key(run, "option")),
        "rationale": st.session_state.get(_widget_key(run, "rationale"), ""),
        "assumptions": st.session_state.get(_widget_key(run, "assumptions"), ""),
        "owner": st.session_state.get(_widget_key(run, "owner"), ""),
        "acceptance_condition": st.session_state.get(
            _widget_key(run, "acceptance"),
            "",
        ),
        "risk": st.session_state.get(_widget_key(run, "risk"), ""),
        "evidence_refs": st.session_state.get(_widget_key(run, "citations"), []),
        "terminal_route": st.session_state.get(
            _widget_key(run, "terminal_route"),
            "conditional_release",
        ),
    }


def _autosave_draft(
    st: Any,
    service: ArenaService,
    run: dict[str, Any],
    draft: dict[str, Any],
) -> None:
    digest = _draft_hash(draft)
    state_key = f"{_widget_prefix(run)}_saved_hash"
    if digest == st.session_state.get(state_key):
        st.caption("Draft synchronized")
        return
    try:
        service.save_draft(
            str(run["run_id"]),
            str(run["current_decision"]["id"]),
            draft,
            expected_revision=int(run["revision"]),
        )
        st.session_state[state_key] = digest
        st.caption("Draft saved")
    except PersistenceError:
        st.caption("Draft save pending. Refresh before committing.")


def _draft_hash(draft: dict[str, Any]) -> str:
    return json.dumps(
        draft,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    )


def _draft_errors(draft: dict[str, Any]) -> tuple[str, ...]:
    checks = (
        ("Choose an action.", bool(draft.get("option_id"))),
        (
            "Rationale must contain at least 40 characters.",
            len(str(draft.get("rationale", "")).strip()) >= 40,
        ),
        (
            "Name an accountable owner.",
            len(str(draft.get("owner", "")).strip()) >= 2,
        ),
        (
            "State a critical assumption.",
            len(str(draft.get("assumptions", "")).strip()) >= 10,
        ),
        (
            "State a measurable acceptance or stop condition.",
            len(str(draft.get("acceptance_condition", "")).strip()) >= 10,
        ),
        (
            "State the material risk.",
            len(str(draft.get("risk", "")).strip()) >= 10,
        ),
    )
    return tuple(message for message, valid in checks if not valid)


def _review_decision(st: Any, service: ArenaService) -> None:
    run_id = str(st.session_state["arena_run_id"])
    run = service.get_run(run_id)
    decision = run["current_decision"]
    draft = st.session_state.get("arena_review_payload") or service.load_draft(run_id)
    if not isinstance(draft, dict):
        _goto(st, "decision", run_id=run_id)
        return
    option = next(
        (
            item
            for item in decision["options"]
            if item["id"] == draft.get("option_id")
        ),
        {"id": "", "label": "No action selected"},
    )
    st.markdown(
        f"""
        <section class="page-intro narrow">
          <span class="eyebrow">Review before permanent commitment</span>
          <h1>{decision["id"]}. {_escape(decision["title"])}</h1>
          <p>This is the last editable view. Confirm the record reflects the
          judgment you intend to defend.</p>
        </section>
        """,
        unsafe_allow_html=True,
    )
    st.markdown(
        f"""
        <article class="review-card">
          <span class="eyebrow">Selected action</span>
          <h2>{_escape(option["id"])} · {_escape(option["label"])}</h2>
          <div class="review-grid">
            <div><small>Rationale</small><p>{_escape(draft["rationale"])}</p></div>
            <div><small>Accountable owner</small><p>{_escape(draft["owner"])}</p></div>
            <div><small>Critical assumption</small><p>{_escape(draft["assumptions"])}</p></div>
            <div><small>Acceptance or stop condition</small><p>{_escape(draft["acceptance_condition"])}</p></div>
            <div><small>Material risk</small><p>{_escape(draft["risk"])}</p></div>
            <div><small>Evidence cited</small><p>{_escape(", ".join(draft.get("evidence_refs", [])) or "None")}</p></div>
          </div>
        </article>
        """,
        unsafe_allow_html=True,
    )
    understood = st.checkbox(
        "I understand this decision becomes permanent and cannot be rewritten."
    )
    back, commit = st.columns([1, 2])
    with back:
        if st.button("Back to edit", use_container_width=True):
            _goto(st, "decision", run_id=run_id)
    with commit:
        if st.button(
            "Commit permanently",
            type="primary",
            use_container_width=True,
            disabled=not understood,
        ):
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
            st.session_state["arena_review_payload"] = None
            _goto(st, "consequence", run_id=run_id)


def _consequence(st: Any, service: ArenaService) -> None:
    run_id = str(st.session_state["arena_run_id"])
    consequence = st.session_state.get("arena_consequence")
    if not isinstance(consequence, dict):
        run = service.get_run(run_id)
        _goto(
            st,
            "debrief" if run["status"] == "completed" else "decision",
            run_id=run_id,
        )
        return
    st.markdown(
        f"""
        <section class="consequence-hero">
          <span class="success-mark">✓</span>
          <span class="eyebrow">Decision recorded</span>
          <h1>{_escape(consequence["decision_id"])} is now permanent.</h1>
          <p>{_escape(consequence["choice"])}</p>
        </section>
        """,
        unsafe_allow_html=True,
    )
    st.markdown("### Observable consequence")
    signals = consequence.get("signals", [])
    crises = consequence.get("crises", [])
    arrived = consequence.get("evidence_arrived", [])
    if signals:
        for signal in signals:
            st.markdown(
                f'<div class="consequence-line"><span>Signal</span>{_escape(signal)}</div>',
                unsafe_allow_html=True,
            )
    else:
        st.info("No new operational signal was observable at this boundary.")
    for crisis in crises:
        st.error(f"Material event: {crisis['observation']}")
    if arrived:
        st.success("Evidence arrived: " + ", ".join(arrived))
    st.caption(
        "No score, gate outcome or preferred-path coaching is shown during a "
        "first attempt."
    )
    label = (
        "Open executive debrief"
        if consequence.get("completed")
        else f"Continue to {consequence.get('next_decision')}"
    )
    if st.button(label, type="primary", use_container_width=True):
        _goto(
            st,
            "debrief" if consequence.get("completed") else "decision",
            run_id=run_id,
        )


def _debrief(st: Any, service: ArenaService) -> None:
    run_id = str(st.session_state["arena_run_id"])
    report = service.debrief(run_id).to_dict()
    st.markdown(
        f"""
        <section class="debrief-hero">
          <span class="eyebrow">Executive debrief</span>
          <h1>{_escape(report["recommendation"])}</h1>
          <div class="score-lockup"><strong>{report["reported_overall"]}</strong>
          <span>Provisional score<br>{_escape(report["provisional_label"])}</span></div>
          <p>{_escape(report["notice"])}</p>
        </section>
        """,
        unsafe_allow_html=True,
    )
    top = st.columns(3)
    with top[0]:
        st.metric("Release decision", "Valid" if report["release_valid"] else "Invalid")
    with top[1]:
        failed = [item for item in report["gates"] if item["status"] == "fail"]
        st.metric("Critical gates failed", len(failed))
    with top[2]:
        st.metric("Decisions recorded", len(report["timeline"]))

    summary_tab, gates_tab, score_tab, timeline_tab = st.tabs(
        ["Executive summary", "Critical gates", "Scorecard", "Decision timeline"]
    )
    with summary_tab:
        left, right = st.columns(2)
        with left:
            st.markdown("#### Strongest judgments")
            for item in report["strengths"]:
                st.success(
                    f"{item['criterion_id']} · {item['name']} ({item['score']})\n\n"
                    f"{item['why']}"
                )
        with right:
            st.markdown("#### Replay priorities")
            for item in report["development_needs"]:
                st.warning(
                    f"{item['criterion_id']} · {item['name']} ({item['score']})\n\n"
                    f"{item['priority']}"
                )
        st.markdown("#### Executive perspectives")
        roles = st.columns(3)
        for column, perspective in zip(roles, report["perspectives"], strict=True):
            with column:
                st.markdown(
                    f"""
                    <article class="perspective-card"><span>{perspective["role"]}</span>
                    <strong>{perspective["score"]}</strong>
                    <p>{_escape(perspective["view"])}</p></article>
                    """,
                    unsafe_allow_html=True,
                )
    with gates_tab:
        for gate in report["gates"]:
            icon = "PASS" if gate["status"] == "pass" else "FAIL"
            method = st.success if gate["status"] == "pass" else st.error
            method(f"{icon} · {gate['gate_id']} · {gate['name']}\n\n{gate['reason']}")
    with score_tab:
        for dimension in report["dimensions"]:
            label = f"{dimension['label']} · {dimension['reported_score']:.1f}"
            st.markdown(f"**{label}**")
            st.progress(
                min(100, max(0, int(round(dimension["reported_score"])))),
                text=(
                    f"Weight {int(dimension['weight'] * 100)}%"
                    + (
                        f" · capped at {dimension['cap']}"
                        if dimension["cap"] is not None
                        else ""
                    )
                ),
            )
            with st.expander("Criterion evidence"):
                for criterion in dimension["criteria"]:
                    st.write(
                        f"**{criterion['id']} · {criterion['name']} · "
                        f"{criterion['score']}**"
                    )
                    st.caption(criterion["reason"])
    with timeline_tab:
        for item in report["timeline"]:
            with st.expander(
                f"{item['decision_id']} · {item['title']} · {item['choice']}"
            ):
                st.write(item["rationale"])
                if item["signals"]:
                    st.caption("Signals: " + " · ".join(item["signals"]))
                if item["crises"]:
                    st.warning(" · ".join(item["crises"]))

    st.markdown("### Export")
    report_bytes = json.dumps(
        report,
        ensure_ascii=False,
        indent=2,
    ).encode("utf-8")
    left, middle, right = st.columns(3)
    with left:
        st.download_button(
            "Download evidence pack",
            report_bytes,
            file_name=f"{run_id}-debrief.json",
            mime="application/json",
            use_container_width=True,
        )
    with middle:
        try:
            run_document = service.export_run_document(run_id)
            run_bytes = json.dumps(
                run_document,
                ensure_ascii=False,
                indent=2,
            ).encode("utf-8")
            st.download_button(
                "Download completed run",
                run_bytes,
                file_name=f"{run_id}.json",
                mime="application/json",
                use_container_width=True,
            )
        except PersistenceError:
            st.button("Run export unavailable", disabled=True, use_container_width=True)
    with right:
        if st.button("Return to run centre", use_container_width=True):
            _goto(st, "centre")


def _widget_prefix(run: dict[str, Any]) -> str:
    return (
        f"draft_{run['run_id']}_{run['current_decision']['id']}_"
        f"r{run['revision']}"
    )


def _widget_key(run: dict[str, Any], field: str) -> str:
    return f"{_widget_prefix(run)}_{field}"


def _friendly_date(value: str) -> str:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return value
    return parsed.astimezone(UTC).strftime("%d %b %Y · %H:%M UTC")


def _escape(value: Any) -> str:
    return (
        str(value)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&#39;")
    )


def main() -> None:
    import streamlit as st

    st.set_page_config(
        page_title="AI Delivery Arena",
        page_icon="A",
        layout="wide",
        initial_sidebar_state="collapsed",
    )
    _load_theme(st)
    try:
        settings = load_settings(st)
    except RuntimeError as exc:
        st.error(str(exc))
        st.stop()

    local_mode = bool(st.session_state.get("arena_local_mode"))
    authenticated = (
        isinstance(st.session_state.get("_arena_user"), dict)
        and st.session_state.get("_supabase_client") is not None
    )
    if local_mode:
        service = _local_service(st)
        _authenticated_shell(st, settings, service)
    elif authenticated:
        service = _service_for_session(st, settings)
        _authenticated_shell(st, settings, service)
    else:
        _marketing_page(st, settings)


if __name__ == "__main__":
    main()
