"""Supabase-backed, user-scoped persistence for hosted Arena runs."""

from __future__ import annotations

import base64
import hashlib
import json
import os
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

from .models import RunInput
from .persistence import (
    CompletedRunError,
    JsonRunStore,
    NonAppendOnlyUpdateError,
    PersistenceError,
    RestoredRun,
    RevisionConflictError,
    RunNotFoundError,
    RunSummary,
)
from .replay import ReplayEngine


class SupabasePersistenceError(PersistenceError):
    """Raised when the hosted persistence boundary cannot complete an operation."""


class SupabaseRunStore:
    """Store canonical save documents in a Supabase table protected by RLS.

    The supplied client must be authenticated as ``owner_id`` with the public
    anon/publishable key. A service-role client is intentionally not supported.
    """

    table_name = "arena_runs"

    def __init__(
        self,
        client: Any,
        owner_id: str,
        engine: ReplayEngine,
        *,
        signing_key: bytes | None = None,
    ):
        if not owner_id.strip():
            raise SupabasePersistenceError("an authenticated owner ID is required")
        if not signing_key:
            raise SupabasePersistenceError(
                "hosted persistence requires ARENA_SIGNING_KEY"
            )
        self.client = client
        self.owner_id = owner_id
        self.engine = engine
        self._encryption_key = hashlib.sha256(
            b"ai-delivery-arena/cloud/v1/" + signing_key
        ).digest()
        self.codec = JsonRunStore(
            Path(".arena-cloud-codec"),
            engine,
            signing_key=signing_key,
        )

    def exists(self, run_id: str) -> bool:
        self.codec._validate_run_id(run_id)
        rows = self._select(
            "run_id",
            run_id=run_id,
        )
        return bool(rows)

    def list_runs(self) -> tuple[RunSummary, ...]:
        rows = self._execute(
            self.client.table(self.table_name)
            .select(
                "run_id,display_name,status,decision_count,total_decisions,"
                "revision,updated_at"
            )
            .eq("owner_id", self.owner_id)
            .order("updated_at", desc=True)
        )
        return tuple(
            RunSummary(
                run_id=str(row["run_id"]),
                display_name=str(row.get("display_name") or row["run_id"]),
                status=str(row["status"]),
                completed=int(row["decision_count"]),
                total=int(row["total_decisions"]),
                revision=int(row["revision"]),
                updated_at=str(row["updated_at"]),
            )
            for row in rows
        )

    def save(
        self,
        run_input: RunInput,
        *,
        expected_revision: int | None = None,
    ) -> RestoredRun:
        self.codec._validate_run_id(run_input.run_id)
        current: RestoredRun | None = None
        if self.exists(run_input.run_id):
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
            JsonRunStore._validate_append_only(current, run_input)
            revision = current.revision + 1
        else:
            if expected_revision not in (None, 0):
                raise RevisionConflictError(
                    f"{run_input.run_id}: run does not exist at revision "
                    f"{expected_revision}"
                )
            revision = 1

        document, result = self.codec.create_document(run_input, revision)
        if (
            current is not None
            and result.ledger.entries[: len(current.result.ledger.entries)]
            != current.result.ledger.entries
        ):
            raise NonAppendOnlyUpdateError(
                f"{run_input.run_id}: update would rewrite committed ledger history"
            )

        now = datetime.now(UTC).isoformat()
        row = {
            "owner_id": self.owner_id,
            "run_id": run_input.run_id,
            "status": result.status.value,
            "decision_count": len(run_input.decisions),
            "total_decisions": len(self.engine.bundle.scenario.decisions),
            "revision": revision,
            "scenario_id": self.engine.bundle.scenario.identity.scenario_id,
            "scenario_version": self.engine.bundle.scenario.identity.scenario_version,
            "save_payload": self._encrypt_document(
                run_input.run_id,
                document,
            ),
            "updated_at": now,
            "completed_at": (
                now if result.status.value == "completed" else None
            ),
            "draft_decision_id": None,
            "draft_revision": None,
            "draft_payload": None,
        }
        try:
            if current is None:
                row["display_name"] = run_input.run_id
                rows = self._execute(
                    self.client.table(self.table_name).insert(row)
                )
            else:
                rows = self._execute(
                    self.client.table(self.table_name)
                    .update(row)
                    .eq("owner_id", self.owner_id)
                    .eq("run_id", run_input.run_id)
                    .eq("revision", expected_revision)
                )
        except Exception as exc:
            raise SupabasePersistenceError(
                "Supabase could not save the run. Retry once before making "
                "another decision."
            ) from exc
        if not rows:
            raise RevisionConflictError(
                f"{run_input.run_id}: the cloud revision changed before this save"
            )
        return self.codec.restore_document(
            run_input.run_id,
            document,
            path=Path("supabase") / f"{run_input.run_id}.json",
        )

    def load(self, run_id: str) -> RestoredRun:
        rows = self._select("run_id,save_payload", run_id=run_id)
        if not rows:
            raise RunNotFoundError(f"run save does not exist: {run_id}")
        return self._restore_row(run_id, rows[0])

    def load_with_draft(
        self,
        run_id: str,
    ) -> tuple[RestoredRun, dict[str, Any] | None]:
        rows = self._select(
            (
                "run_id,save_payload,draft_decision_id,draft_revision,"
                "draft_payload"
            ),
            run_id=run_id,
        )
        if not rows:
            raise RunNotFoundError(f"run save does not exist: {run_id}")
        row = rows[0]
        restored = self._restore_row(run_id, row)
        if restored.result.status.value == "completed":
            return restored, None
        expected_decision = self.engine.bundle.scenario.decisions[
            len(restored.run_input.decisions)
        ].id
        payload = row.get("draft_payload")
        if (
            row.get("draft_decision_id") != expected_decision
            or row.get("draft_revision") != restored.revision
            or not isinstance(payload, dict)
        ):
            return restored, None
        return restored, dict(payload)

    def _restore_row(
        self,
        run_id: str,
        row: dict[str, Any],
    ) -> RestoredRun:
        payload = row.get("save_payload")
        if not isinstance(payload, str):
            raise SupabasePersistenceError(
                f"{run_id}: cloud save payload is not encrypted text"
            )
        document = self._decrypt_document(run_id, payload)
        return self.codec.restore_document(
            run_id,
            document,
            path=Path("supabase") / f"{run_id}.json",
        )

    def set_display_name(self, run_id: str, display_name: str) -> None:
        value = display_name.strip()
        if not value or len(value) > 100:
            raise PersistenceError("display name must contain 1 to 100 characters")
        rows = self._execute(
            self.client.table(self.table_name)
            .update({"display_name": value, "updated_at": datetime.now(UTC).isoformat()})
            .eq("owner_id", self.owner_id)
            .eq("run_id", run_id)
        )
        if not rows:
            raise RunNotFoundError(f"run save does not exist: {run_id}")

    def save_draft(
        self,
        run_id: str,
        decision_id: str,
        draft: dict[str, Any],
        *,
        expected_revision: int,
    ) -> None:
        decision_index = next(
            (
                index
                for index, item in enumerate(self.engine.bundle.scenario.decisions)
                if item.id == decision_id
            ),
            None,
        )
        if decision_index is None:
            raise PersistenceError(f"{run_id}: unknown draft decision {decision_id}")
        rows = self._execute(
            self.client.table(self.table_name)
            .update(
                {
                    "draft_decision_id": decision_id,
                    "draft_revision": expected_revision,
                    "draft_payload": draft,
                    "updated_at": datetime.now(UTC).isoformat(),
                }
            )
            .eq("owner_id", self.owner_id)
            .eq("run_id", run_id)
            .eq("revision", expected_revision)
            .eq("status", "in_progress")
            .eq("decision_count", decision_index)
        )
        if not rows:
            raise RevisionConflictError(
                f"{run_id}: the run changed before the draft save"
            )

    def load_draft(self, run_id: str) -> dict[str, Any] | None:
        _, draft = self.load_with_draft(run_id)
        return draft

    def delete_draft(self, run_id: str) -> None:
        self._execute(
            self.client.table(self.table_name)
            .update(
                {
                    "draft_decision_id": None,
                    "draft_revision": None,
                    "draft_payload": None,
                }
            )
            .eq("owner_id", self.owner_id)
            .eq("run_id", run_id)
        )

    def delete_run(self, run_id: str) -> None:
        """Delete one run owned by the authenticated participant."""

        self.load(run_id)
        self._execute(
            self.client.table(self.table_name)
            .delete()
            .eq("owner_id", self.owner_id)
            .eq("run_id", run_id)
        )
        if self._select("run_id", run_id=run_id):
            raise SupabasePersistenceError(
                f"{run_id}: cloud run deletion did not complete"
            )

    def export_document(self, run_id: str) -> dict[str, Any]:
        restored = self.load(run_id)
        if restored.result.status.value != "completed":
            raise CompletedRunError(
                f"{run_id}: hosted first attempts can be exported only after completion"
            )
        portable_codec = JsonRunStore(Path(".arena-export-codec"), self.engine)
        document, _ = portable_codec.create_document(
            restored.run_input,
            restored.revision,
        )
        return document

    def import_local_document(
        self,
        document: dict[str, Any],
        *,
        display_name: str | None = None,
    ) -> RestoredRun:
        """Verify an unsigned local save and persist it under the current user."""

        try:
            embedded = document["run"]["run_id"]
        except (KeyError, TypeError) as exc:
            raise PersistenceError("imported file has no valid run ID") from exc
        run_id = str(embedded)
        unsigned_codec = JsonRunStore(Path(".arena-import-codec"), self.engine)
        restored = unsigned_codec.restore_document(run_id, document)
        if self.exists(run_id):
            raise PersistenceError(
                f"run already exists in this account: {run_id}"
            )
        saved = self.save(restored.run_input)
        if display_name:
            self.set_display_name(run_id, display_name)
        return saved

    def _select(self, columns: str, *, run_id: str) -> list[dict[str, Any]]:
        self.codec._validate_run_id(run_id)
        return self._execute(
            self.client.table(self.table_name)
            .select(columns)
            .eq("owner_id", self.owner_id)
            .eq("run_id", run_id)
            .limit(1)
        )

    def _encrypt_document(
        self,
        run_id: str,
        document: dict[str, Any],
    ) -> str:
        nonce = os.urandom(12)
        plaintext = json.dumps(
            document,
            ensure_ascii=False,
            sort_keys=True,
            separators=(",", ":"),
        ).encode("utf-8")
        ciphertext = AESGCM(self._encryption_key).encrypt(
            nonce,
            plaintext,
            self._aad(run_id),
        )
        return base64.urlsafe_b64encode(nonce + ciphertext).decode("ascii")

    def _decrypt_document(
        self,
        run_id: str,
        encrypted: str,
    ) -> dict[str, Any]:
        try:
            raw = base64.urlsafe_b64decode(encrypted.encode("ascii"))
            if len(raw) < 29:
                raise ValueError("ciphertext is too short")
            plaintext = AESGCM(self._encryption_key).decrypt(
                raw[:12],
                raw[12:],
                self._aad(run_id),
            )
            document = json.loads(plaintext.decode("utf-8"))
        except Exception as exc:
            raise SupabasePersistenceError(
                f"{run_id}: cloud save encryption check failed"
            ) from exc
        if not isinstance(document, dict):
            raise SupabasePersistenceError(
                f"{run_id}: decrypted save is not a JSON object"
            )
        return document

    def _aad(self, run_id: str) -> bytes:
        return f"{self.owner_id}:{run_id}:arena-run-v1".encode("utf-8")

    @staticmethod
    def _execute(query: Any) -> list[dict[str, Any]]:
        try:
            response = query.execute()
        except Exception as exc:
            raise SupabasePersistenceError(
                "Supabase request failed. Check connectivity and the database "
                "migration, then retry."
            ) from exc
        data = getattr(response, "data", None)
        if data is None and isinstance(response, dict):
            data = response.get("data")
        if data is None:
            return []
        if not isinstance(data, list):
            raise SupabasePersistenceError("Supabase returned an unexpected response")
        return [dict(item) for item in data if isinstance(item, dict)]
