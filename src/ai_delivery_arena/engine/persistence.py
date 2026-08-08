"""Atomic, replay-verified persistence for normalized participant runs."""

from __future__ import annotations

import hashlib
import hmac
import json
import os
import re
import tempfile
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any, Protocol

from .ledger import RunLedger
from .models import (
    DecisionRecord,
    EvidenceRequest,
    Fact,
    FactStatus,
    RunInput,
    freeze_json,
    thaw_json,
)
from .replay import ReplayEngine, ReplayResult


SAVE_FORMAT_VERSION = "1.0"
FIXTURE_ARTIFACTS = (
    "scenario.json",
    "evidence.json",
    "transitions.json",
    "crises.json",
    "gates.json",
    "reference-runs.json",
    "adversarial-runs.json",
)
RUN_ID_PATTERN = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$")


class PersistenceError(ValueError):
    """Base error for run-save creation, loading, and compatibility checks."""


class RunNotFoundError(PersistenceError):
    pass


class SaveIntegrityError(PersistenceError):
    pass


class SaveCompatibilityError(PersistenceError):
    pass


class RevisionConflictError(PersistenceError):
    pass


class CompletedRunError(PersistenceError):
    pass


class NonAppendOnlyUpdateError(PersistenceError):
    pass


@dataclass(frozen=True, slots=True)
class RestoredRun:
    """A saved input plus the result reconstructed from current fixtures."""

    run_input: RunInput
    result: ReplayResult
    revision: int
    path: Path


@dataclass(frozen=True, slots=True)
class RunSummary:
    """Storage-neutral metadata used by the participant run centre."""

    run_id: str
    display_name: str
    status: str
    completed: int
    total: int
    revision: int
    updated_at: str
    attempt_kind: str
    source_run_id: str | None

    def as_dict(self) -> dict[str, object]:
        return {
            "run_id": self.run_id,
            "display_name": self.display_name,
            "status": self.status,
            "completed": self.completed,
            "total": self.total,
            "revision": self.revision,
            "updated_at": self.updated_at,
            "attempt_kind": self.attempt_kind,
            "source_run_id": self.source_run_id,
        }


@dataclass(frozen=True, slots=True)
class RunContext:
    """Participant-visible relationship between a benchmark and a replay."""

    attempt_kind: str = "first_attempt"
    source_run_id: str | None = None

    def as_dict(self) -> dict[str, object]:
        return {
            "attempt_kind": self.attempt_kind,
            "source_run_id": self.source_run_id,
        }


class RunStore(Protocol):
    """Persistence boundary shared by local JSON and Supabase storage."""

    engine: ReplayEngine

    def exists(self, run_id: str) -> bool: ...

    def save(
        self,
        run_input: RunInput,
        *,
        expected_revision: int | None = None,
    ) -> RestoredRun: ...

    def load(self, run_id: str) -> RestoredRun: ...

    def load_with_draft(
        self,
        run_id: str,
    ) -> tuple[RestoredRun, dict[str, Any] | None]: ...

    def list_runs(self) -> tuple[RunSummary, ...]: ...

    def set_display_name(self, run_id: str, display_name: str) -> None: ...

    def set_run_context(
        self,
        run_id: str,
        *,
        attempt_kind: str,
        source_run_id: str | None,
    ) -> None: ...

    def get_run_context(self, run_id: str) -> RunContext: ...

    def save_draft(
        self,
        run_id: str,
        decision_id: str,
        draft: dict[str, Any],
        *,
        expected_revision: int,
    ) -> None: ...

    def load_draft(self, run_id: str) -> dict[str, Any] | None: ...

    def delete_draft(self, run_id: str) -> None: ...

    def delete_run(self, run_id: str) -> None: ...

    def export_document(self, run_id: str) -> dict[str, Any]: ...


def _object_without_duplicates(pairs: list[tuple[str, Any]]) -> dict[str, Any]:
    value: dict[str, Any] = {}
    for key, item in pairs:
        if key in value:
            raise SaveIntegrityError(f"duplicate JSON key: {key}")
        value[key] = item
    return value


def _read_json_object(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(
            path.read_text(encoding="utf-8"),
            object_pairs_hook=_object_without_duplicates,
        )
    except FileNotFoundError as exc:
        raise RunNotFoundError(f"run save does not exist: {path.name}") from exc
    except json.JSONDecodeError as exc:
        raise SaveIntegrityError(
            f"invalid run-save JSON at line {exc.lineno}: {exc.msg}"
        ) from exc
    if not isinstance(value, dict):
        raise SaveIntegrityError("run save must contain a JSON object")
    return value


def _canonical_bytes(value: Any) -> bytes:
    return json.dumps(
        value,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")


def fixture_fingerprint(engine: ReplayEngine) -> str:
    """Hash the semantic JSON content of every executable fixture artifact."""

    artifacts: dict[str, Any] = {}
    for name in FIXTURE_ARTIFACTS:
        path = engine.bundle.fixture_dir / name
        try:
            artifacts[name] = json.loads(
                path.read_text(encoding="utf-8"),
                object_pairs_hook=_object_without_duplicates,
            )
        except FileNotFoundError as exc:
            raise SaveCompatibilityError(
                f"fixture fingerprint cannot find {name}"
            ) from exc
        except json.JSONDecodeError as exc:
            raise SaveCompatibilityError(
                f"fixture fingerprint cannot parse {name}: {exc.msg}"
            ) from exc
    return hashlib.sha256(_canonical_bytes(artifacts)).hexdigest()


def _request_as_dict(request: EvidenceRequest) -> dict[str, Any]:
    return {
        "evidence_id": request.evidence_id,
        "request_week": request.request_week,
        "arrival_week": request.arrival_week,
        "cost": request.cost,
        "first_use": request.first_use,
    }


def _fact_as_dict(fact: Fact) -> dict[str, Any]:
    return {
        "key": fact.key,
        "value": thaw_json(fact.value),
        "status": fact.status.value,
        "evidence_refs": list(fact.evidence_refs),
    }


def _decision_as_dict(record: DecisionRecord) -> dict[str, Any]:
    return {
        "decision_id": record.decision_id,
        "evidence_id": record.evidence_id,
        "summary": record.summary,
        "facts": [_fact_as_dict(fact) for fact in record.facts],
        "selected_rule_ids": list(record.selected_rule_ids),
    }


def _ledger_as_dict(ledger: RunLedger) -> list[dict[str, Any]]:
    return [
        {
            **entry.canonical_body(),
            "event_hash": entry.event_hash,
        }
        for entry in ledger.entries
    ]


def _request_from_dict(data: dict[str, Any]) -> EvidenceRequest:
    return EvidenceRequest(
        evidence_id=str(data["evidence_id"]),
        request_week=int(data["request_week"]),
        arrival_week=int(data["arrival_week"]),
        cost=int(data["cost"]),
        first_use=str(data["first_use"]),
    )


def _fact_from_dict(data: dict[str, Any]) -> Fact:
    return Fact(
        key=str(data["key"]),
        value=freeze_json(data.get("value")),
        status=FactStatus(data["status"]),
        evidence_refs=tuple(str(item) for item in data.get("evidence_refs", [])),
    )


def _decision_from_dict(data: dict[str, Any]) -> DecisionRecord:
    return DecisionRecord(
        decision_id=str(data["decision_id"]),
        evidence_id=str(data["evidence_id"]),
        summary=str(data["summary"]),
        facts=tuple(_fact_from_dict(item) for item in data["facts"]),
        selected_rule_ids=tuple(str(item) for item in data["selected_rule_ids"]),
    )


class JsonRunStore:
    """One-file-per-run persistence for a local, single-writer deployment.

    Writes are atomic. Updates use optimistic revisions. Every load verifies the
    save envelope, fixture identity, fixture fingerprint, append-only checkpoint,
    and a fresh deterministic replay.
    """

    def __init__(
        self,
        root: str | Path,
        engine: ReplayEngine,
        *,
        signing_key: bytes | None = None,
    ):
        self.root = Path(root).resolve()
        self.engine = engine
        if signing_key == b"":
            raise PersistenceError("signing_key must not be empty")
        self.signing_key = signing_key
        self._fixture_fingerprint = fixture_fingerprint(engine)

    def path_for(self, run_id: str) -> Path:
        self._validate_run_id(run_id)
        return self.root / f"{run_id}.json"

    def exists(self, run_id: str) -> bool:
        return self.path_for(run_id).exists()

    def list_runs(self) -> tuple[RunSummary, ...]:
        self.root.mkdir(parents=True, exist_ok=True)
        output: list[RunSummary] = []
        for path in sorted(
            self.root.glob("*.json"),
            key=lambda item: item.stat().st_mtime,
            reverse=True,
        ):
            try:
                restored = self.load(path.stem)
            except PersistenceError:
                continue
            metadata = self._metadata(restored.run_input.run_id)
            attempt_kind = str(
                metadata.get("attempt_kind") or "first_attempt"
            )
            source_run_id = metadata.get("source_run_id")
            output.append(
                RunSummary(
                    run_id=restored.run_input.run_id,
                    display_name=self._display_name(restored.run_input.run_id),
                    status=restored.result.status.value,
                    completed=len(restored.run_input.decisions),
                    total=len(self.engine.bundle.scenario.decisions),
                    revision=restored.revision,
                    updated_at=datetime.fromtimestamp(
                        path.stat().st_mtime,
                        tz=UTC,
                    ).isoformat(),
                    attempt_kind=(
                        attempt_kind
                        if attempt_kind in {"first_attempt", "practice_replay"}
                        else "first_attempt"
                    ),
                    source_run_id=(
                        str(source_run_id)
                        if isinstance(source_run_id, str) and source_run_id
                        else None
                    ),
                )
            )
        return tuple(output)

    def set_display_name(self, run_id: str, display_name: str) -> None:
        self.load(run_id)
        value = display_name.strip()
        if not value or len(value) > 100:
            raise PersistenceError("display name must contain 1 to 100 characters")
        metadata_path = self._metadata_path(run_id)
        metadata = self._metadata(run_id)
        metadata["display_name"] = value
        self._atomic_write_json(
            metadata_path,
            metadata,
        )

    def set_run_context(
        self,
        run_id: str,
        *,
        attempt_kind: str,
        source_run_id: str | None,
    ) -> None:
        self.load(run_id)
        if attempt_kind not in {"first_attempt", "practice_replay"}:
            raise PersistenceError(f"unsupported attempt kind: {attempt_kind}")
        if attempt_kind == "practice_replay" and not source_run_id:
            raise PersistenceError("a practice replay requires a source run")
        if attempt_kind == "first_attempt" and source_run_id is not None:
            raise PersistenceError("a first attempt cannot reference a source run")
        if source_run_id is not None:
            self._validate_run_id(source_run_id)
        metadata = self._metadata(run_id)
        metadata.update(
            {
                "attempt_kind": attempt_kind,
                "source_run_id": source_run_id,
            }
        )
        self._atomic_write_json(self._metadata_path(run_id), metadata)

    def get_run_context(self, run_id: str) -> RunContext:
        self.load(run_id)
        metadata = self._metadata(run_id)
        kind = str(metadata.get("attempt_kind") or "first_attempt")
        source = metadata.get("source_run_id")
        return RunContext(
            attempt_kind=(
                kind if kind in {"first_attempt", "practice_replay"} else "first_attempt"
            ),
            source_run_id=str(source) if isinstance(source, str) and source else None,
        )

    def save_draft(
        self,
        run_id: str,
        decision_id: str,
        draft: dict[str, Any],
        *,
        expected_revision: int,
    ) -> None:
        restored = self.load(run_id)
        if restored.revision != expected_revision:
            raise RevisionConflictError(
                f"{run_id}: expected revision {expected_revision}; "
                f"current revision is {restored.revision}"
            )
        if restored.result.status.value == "completed":
            raise CompletedRunError(f"{run_id}: a completed run has no mutable draft")
        expected_decision = self.engine.bundle.scenario.decisions[
            len(restored.run_input.decisions)
        ].id
        if decision_id != expected_decision:
            raise PersistenceError(
                f"{run_id}: draft targets {decision_id}; next decision is "
                f"{expected_decision}"
            )
        self._atomic_write_json(
            self._draft_path(run_id),
            {
                "run_id": run_id,
                "decision_id": decision_id,
                "revision": expected_revision,
                "draft": draft,
            },
        )

    def load_draft(self, run_id: str) -> dict[str, Any] | None:
        _, draft = self.load_with_draft(run_id)
        return draft

    def load_with_draft(
        self,
        run_id: str,
    ) -> tuple[RestoredRun, dict[str, Any] | None]:
        restored = self.load(run_id)
        path = self._draft_path(run_id)
        if not path.exists() or restored.result.status.value == "completed":
            return restored, None
        document = _read_json_object(path)
        expected_decision = self.engine.bundle.scenario.decisions[
            len(restored.run_input.decisions)
        ].id
        if (
            document.get("run_id") != run_id
            or document.get("decision_id") != expected_decision
            or document.get("revision") != restored.revision
            or not isinstance(document.get("draft"), dict)
        ):
            return restored, None
        return restored, dict(document["draft"])

    def delete_draft(self, run_id: str) -> None:
        path = self._draft_path(run_id)
        if path.exists():
            path.unlink()

    def delete_run(self, run_id: str) -> None:
        """Delete one explicitly named run and its participant-owned sidecars."""

        restored = self.load(run_id)
        path = restored.path
        metadata_path = self._metadata_path(run_id)
        draft_path = self._draft_path(run_id)
        path.unlink()
        for sidecar in (metadata_path, draft_path):
            if sidecar.exists():
                sidecar.unlink()

    def export_document(self, run_id: str) -> dict[str, Any]:
        return _read_json_object(self.path_for(run_id))

    def create_document(
        self,
        run_input: RunInput,
        revision: int,
    ) -> tuple[dict[str, Any], ReplayResult]:
        """Create a replay-verified persistence document without writing it."""

        result = self.engine.replay_input(run_input, strict=True)
        return self._build_document(run_input, result, revision), result

    def restore_document(
        self,
        run_id: str,
        document: dict[str, Any],
        *,
        path: Path | None = None,
    ) -> RestoredRun:
        """Verify and restore an already-loaded persistence document."""

        self._validate_run_id(run_id)
        self._verify_integrity(document)
        restored_path = path or Path("cloud") / f"{run_id}.json"
        return self._restore_verified_document(run_id, document, restored_path)

    def save(
        self,
        run_input: RunInput,
        *,
        expected_revision: int | None = None,
    ) -> RestoredRun:
        """Create or append to a run using an optimistic revision check."""

        path = self.path_for(run_input.run_id)
        current: RestoredRun | None = None
        if path.exists():
            current = self.load(run_input.run_id)
            if expected_revision is None:
                raise RevisionConflictError(
                    f"{run_input.run_id}: expected_revision is required for an update"
                )
            if expected_revision != current.revision:
                raise RevisionConflictError(
                    f"{run_input.run_id}: expected revision {expected_revision}; "
                    f"current revision is {current.revision}"
                )
            self._validate_append_only(current, run_input)
            revision = current.revision + 1
        else:
            if expected_revision not in (None, 0):
                raise RevisionConflictError(
                    f"{run_input.run_id}: run does not exist at revision "
                    f"{expected_revision}"
                )
            revision = 1

        result = self.engine.replay_input(run_input, strict=True)
        if (
            current is not None
            and result.ledger.entries[: len(current.result.ledger.entries)]
            != current.result.ledger.entries
        ):
            raise NonAppendOnlyUpdateError(
                f"{run_input.run_id}: update would rewrite committed ledger history"
            )
        document = self._build_document(run_input, result, revision)
        self._atomic_write(path, document)
        return RestoredRun(run_input, result, revision, path)

    def load(self, run_id: str) -> RestoredRun:
        """Load a run only after envelope and deterministic replay verification."""

        path = self.path_for(run_id)
        document = _read_json_object(path)
        self._verify_integrity(document)
        return self._restore_verified_document(run_id, document, path)

    def _restore_verified_document(
        self,
        run_id: str,
        document: dict[str, Any],
        path: Path,
    ) -> RestoredRun:
        try:
            if document["format_version"] != SAVE_FORMAT_VERSION:
                raise SaveCompatibilityError(
                    f"{run_id}: unsupported save format "
                    f"{document['format_version']}"
                )
            scenario = document["scenario"]
            identity = self.engine.bundle.scenario.identity
            if (
                scenario["schema_version"] != identity.schema_version
                or scenario["scenario_id"] != identity.scenario_id
                or scenario["scenario_version"] != identity.scenario_version
            ):
                raise SaveCompatibilityError(
                    f"{run_id}: save targets "
                    f"{scenario['scenario_id']}@{scenario['scenario_version']}; "
                    f"engine loaded {identity.scenario_id}@{identity.scenario_version}"
                )
            if scenario["fixture_fingerprint"] != self._fixture_fingerprint:
                raise SaveCompatibilityError(
                    f"{run_id}: executable fixtures differ from the saved checkpoint"
                )

            run = document["run"]
            if run["run_id"] != run_id:
                raise SaveIntegrityError(
                    f"{run_id}: filename and embedded run ID do not match"
                )
            run_input = RunInput(
                run_id=str(run["run_id"]),
                investigation_schedule=tuple(
                    _request_from_dict(item)
                    for item in run["investigation_schedule"]
                ),
                decisions=tuple(
                    _decision_from_dict(item) for item in run["decisions"]
                ),
                terminal_route=(
                    str(run["terminal_route"])
                    if run["terminal_route"] is not None
                    else None
                ),
            )
            revision = int(run["revision"])
            if revision < 1:
                raise SaveIntegrityError(f"{run_id}: revision must be positive")
            result = self.engine.replay_input(run_input, strict=True)
            if run["status"] != result.status.value:
                raise SaveIntegrityError(
                    f"{run_id}: saved completion status does not replay exactly"
                )
            self._verify_checkpoint(document["checkpoint"], result)
        except (KeyError, TypeError, ValueError) as exc:
            if isinstance(exc, PersistenceError):
                raise
            raise SaveIntegrityError(f"{run_id}: invalid run-save structure: {exc}") from exc

        return RestoredRun(run_input, result, revision, path)

    def _build_document(
        self,
        run_input: RunInput,
        result: ReplayResult,
        revision: int,
    ) -> dict[str, Any]:
        identity = self.engine.bundle.scenario.identity
        document: dict[str, Any] = {
            "format_version": SAVE_FORMAT_VERSION,
            "scenario": {
                "schema_version": identity.schema_version,
                "scenario_id": identity.scenario_id,
                "scenario_version": identity.scenario_version,
                "fixture_fingerprint": self._fixture_fingerprint,
            },
            "run": {
                "run_id": run_input.run_id,
                "revision": revision,
                "status": result.status.value,
                "terminal_route": run_input.terminal_route,
                "investigation_schedule": [
                    _request_as_dict(item)
                    for item in run_input.investigation_schedule
                ],
                "decisions": [
                    _decision_as_dict(item) for item in run_input.decisions
                ],
            },
            "checkpoint": {
                "completed_decisions": list(result.completed_decisions),
                "ledger_entries": len(result.ledger.entries),
                "ledger_head": result.ledger.head_hash,
                "ledger": _ledger_as_dict(result.ledger),
            },
        }
        document["integrity"] = self._integrity_record(document)
        return document

    def _integrity_record(self, document: dict[str, Any]) -> dict[str, str]:
        payload = _canonical_bytes(document)
        if self.signing_key is None:
            algorithm = "sha256"
            digest = hashlib.sha256(payload).hexdigest()
        else:
            algorithm = "hmac-sha256"
            digest = hmac.new(self.signing_key, payload, hashlib.sha256).hexdigest()
        return {"algorithm": algorithm, "digest": digest}

    def _verify_integrity(self, document: dict[str, Any]) -> None:
        try:
            integrity = document["integrity"]
            algorithm = integrity["algorithm"]
            expected = integrity["digest"]
        except (KeyError, TypeError) as exc:
            raise SaveIntegrityError("run save has no valid integrity record") from exc

        unsigned = dict(document)
        unsigned.pop("integrity", None)
        payload = _canonical_bytes(unsigned)
        if self.signing_key is None:
            if algorithm != "sha256":
                raise SaveIntegrityError(
                    "run save requires the configured HMAC signing key"
                )
            actual = hashlib.sha256(payload).hexdigest()
        else:
            if algorithm != "hmac-sha256":
                raise SaveIntegrityError(
                    "signed run store refuses an unsigned save"
                )
            actual = hmac.new(self.signing_key, payload, hashlib.sha256).hexdigest()
        if not hmac.compare_digest(str(expected), actual):
            raise SaveIntegrityError("run-save integrity digest does not match")

    @staticmethod
    def _verify_checkpoint(
        checkpoint: dict[str, Any],
        result: ReplayResult,
    ) -> None:
        expected_ledger = _ledger_as_dict(result.ledger)
        if checkpoint["completed_decisions"] != list(result.completed_decisions):
            raise SaveIntegrityError(
                "saved completed-decision checkpoint does not replay exactly"
            )
        if checkpoint["ledger_entries"] != len(result.ledger.entries):
            raise SaveIntegrityError(
                "saved ledger length does not replay exactly"
            )
        if checkpoint["ledger_head"] != result.ledger.head_hash:
            raise SaveIntegrityError(
                "saved ledger head does not replay exactly"
            )
        if checkpoint["ledger"] != expected_ledger:
            raise SaveIntegrityError(
                "saved ledger events do not replay exactly"
            )

    @staticmethod
    def _validate_append_only(
        current: RestoredRun,
        proposed: RunInput,
    ) -> None:
        if current.result.status.value == "completed":
            raise CompletedRunError(
                f"{proposed.run_id}: a completed run is immutable"
            )
        old_decisions = current.run_input.decisions
        if proposed.decisions[: len(old_decisions)] != old_decisions:
            raise NonAppendOnlyUpdateError(
                f"{proposed.run_id}: recorded decisions cannot be removed or changed"
            )
        old_schedule = {
            item.evidence_id: item
            for item in current.run_input.investigation_schedule
        }
        new_schedule = {
            item.evidence_id: item for item in proposed.investigation_schedule
        }
        for evidence_id, request in old_schedule.items():
            if new_schedule.get(evidence_id) != request:
                raise NonAppendOnlyUpdateError(
                    f"{proposed.run_id}: evidence request {evidence_id} "
                    "cannot be removed or changed"
                )

    @staticmethod
    def _validate_run_id(run_id: str) -> None:
        if not RUN_ID_PATTERN.fullmatch(run_id):
            raise PersistenceError(
                "run ID must contain only letters, numbers, dot, underscore, "
                "or hyphen and be at most 128 characters"
            )

    def _atomic_write(self, path: Path, document: dict[str, Any]) -> None:
        self._atomic_write_json(path, document)

    @staticmethod
    def _atomic_write_json(path: Path, document: dict[str, Any]) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        descriptor, temporary_name = tempfile.mkstemp(
            prefix=f".{path.stem}.",
            suffix=".tmp",
            dir=path.parent,
        )
        temporary_path = Path(temporary_name)
        try:
            with os.fdopen(descriptor, "w", encoding="utf-8", newline="\n") as handle:
                json.dump(
                    document,
                    handle,
                    ensure_ascii=False,
                    sort_keys=True,
                    indent=2,
                )
                handle.write("\n")
                handle.flush()
                os.fsync(handle.fileno())
            os.replace(temporary_path, path)
        finally:
            if temporary_path.exists():
                temporary_path.unlink()

    def _draft_path(self, run_id: str) -> Path:
        self._validate_run_id(run_id)
        return self.root / "drafts" / f"{run_id}.json"

    def _metadata_path(self, run_id: str) -> Path:
        self._validate_run_id(run_id)
        return self.root / "metadata" / f"{run_id}.json"

    def _display_name(self, run_id: str) -> str:
        document = self._metadata(run_id)
        value = document.get("display_name")
        return value if isinstance(value, str) and value.strip() else run_id

    def _metadata(self, run_id: str) -> dict[str, Any]:
        path = self._metadata_path(run_id)
        if not path.exists():
            return {
                "run_id": run_id,
                "display_name": run_id,
                "attempt_kind": "first_attempt",
                "source_run_id": None,
            }
        try:
            document = _read_json_object(path)
        except PersistenceError:
            return {
                "run_id": run_id,
                "display_name": run_id,
                "attempt_kind": "first_attempt",
                "source_run_id": None,
            }
        return document
