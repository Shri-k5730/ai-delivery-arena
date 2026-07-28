from __future__ import annotations

import json
import sys
import tempfile
import unittest
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena.engine.cloud_persistence import (  # noqa: E402
    SupabaseRunStore,
)
from ai_delivery_arena.engine.persistence import (  # noqa: E402
    CompletedRunError,
    JsonRunStore,
    RevisionConflictError,
)
from ai_delivery_arena.experience.service import ArenaService  # noqa: E402


class FakeResponse:
    def __init__(self, data: list[dict[str, Any]]):
        self.data = data


class FakeQuery:
    def __init__(self, database: "FakeSupabase"):
        self.database = database
        self.action = "select"
        self.columns = "*"
        self.payload: dict[str, Any] | None = None
        self.filters: list[tuple[str, Any]] = []
        self.descending = False
        self.limit_count: int | None = None

    def select(self, columns: str) -> "FakeQuery":
        self.action = "select"
        self.columns = columns
        return self

    def insert(self, payload: dict[str, Any]) -> "FakeQuery":
        self.action = "insert"
        self.payload = dict(payload)
        return self

    def update(self, payload: dict[str, Any]) -> "FakeQuery":
        self.action = "update"
        self.payload = dict(payload)
        return self

    def eq(self, column: str, value: Any) -> "FakeQuery":
        self.filters.append((column, value))
        return self

    def order(self, column: str, *, desc: bool = False) -> "FakeQuery":
        self.order_column = column
        self.descending = desc
        return self

    def limit(self, count: int) -> "FakeQuery":
        self.limit_count = count
        return self

    def execute(self) -> FakeResponse:
        self.database.request_count += 1
        if self.action == "insert":
            assert self.payload is not None
            if any(
                row["owner_id"] == self.payload["owner_id"]
                and row["run_id"] == self.payload["run_id"]
                for row in self.database.rows
            ):
                raise ValueError("duplicate run")
            row = dict(self.payload)
            self.database.rows.append(row)
            return FakeResponse([dict(row)])

        matching = [
            row
            for row in self.database.rows
            if all(row.get(column) == value for column, value in self.filters)
        ]
        if self.action == "update":
            assert self.payload is not None
            for row in matching:
                row.update(self.payload)
            return FakeResponse([dict(row) for row in matching])

        if hasattr(self, "order_column"):
            matching.sort(
                key=lambda row: row.get(self.order_column, ""),
                reverse=self.descending,
            )
        if self.limit_count is not None:
            matching = matching[: self.limit_count]
        if self.columns != "*":
            names = [item.strip() for item in self.columns.split(",")]
            matching = [
                {name: row.get(name) for name in names}
                for row in matching
            ]
        return FakeResponse([dict(row) for row in matching])


class FakeSupabase:
    def __init__(self):
        self.rows: list[dict[str, Any]] = []
        self.request_count = 0

    def table(self, name: str) -> FakeQuery:
        if name != "arena_runs":
            raise ValueError(name)
        return FakeQuery(self)


class CloudPersistenceTestCase(unittest.TestCase):
    def setUp(self) -> None:
        self.database = FakeSupabase()
        self.key = b"hosted-test-signing-key-with-enough-entropy"
        self.service = ArenaService(
            ROOT,
            store_factory=lambda engine: SupabaseRunStore(
                self.database,
                "user-a",
                engine,
                signing_key=self.key,
            ),
        )

    def test_cloud_run_round_trips_as_encrypted_user_scoped_payload(self) -> None:
        started = self.service.start_run(
            "cloud-alpha",
            display_name="First cloud attempt",
        )
        restored = self.service.get_run("cloud-alpha")
        self.assertEqual(started["ledger"], restored["ledger"])
        self.assertEqual("First cloud attempt", self.service.list_runs()[0]["display_name"])
        payload = self.database.rows[0]["save_payload"]
        self.assertIsInstance(payload, str)
        self.assertNotIn("selected_rule_ids", payload)
        self.assertNotIn("ledger_head", payload)

    def test_cloud_revision_and_draft_contract(self) -> None:
        view = self.service.start_run("cloud-draft")
        draft = {
            "option_id": "B",
            "rationale": "A bounded and evidence-led pilot decision with clear control.",
            "assumptions": "The existing brief remains valid.",
            "owner": "CPO",
            "acceptance_condition": "Proceed only when the threshold passes.",
            "risk": "The evidence may invalidate the pilot.",
            "evidence_refs": ["EV-POLICY-01"],
            "terminal_route": "conditional_release",
        }
        self.service.save_draft(
            "cloud-draft",
            "D01",
            draft,
            expected_revision=int(view["revision"]),
        )
        before_load = self.database.request_count
        self.assertEqual(draft, self.service.load_draft("cloud-draft"))
        self.assertEqual(1, self.database.request_count - before_load)
        with self.assertRaises(RevisionConflictError):
            self.service.save_draft(
                "cloud-draft",
                "D01",
                draft,
                expected_revision=99,
            )

    def test_normal_cloud_draft_save_is_one_conditional_request(self) -> None:
        view = self.service.start_run("single-request-draft")
        draft = {
            "option_id": "B",
            "rationale": "A buffered draft that is ready for one cloud write.",
            "assumptions": "The current revision remains active.",
            "owner": "CPO",
            "acceptance_condition": "Stop when the threshold is missed.",
            "risk": "Another browser may advance the run.",
            "evidence_refs": [],
            "terminal_route": "conditional_release",
        }
        before = self.database.request_count
        self.service.save_draft(
            "single-request-draft",
            "D01",
            draft,
            expected_revision=int(view["revision"]),
        )
        self.assertEqual(1, self.database.request_count - before)
        self.assertEqual(draft, self.database.rows[0]["draft_payload"])

    def test_other_owner_cannot_resolve_run_through_store_scope(self) -> None:
        self.service.start_run("private-cloud")
        other = ArenaService(
            ROOT,
            store_factory=lambda engine: SupabaseRunStore(
                self.database,
                "user-b",
                engine,
                signing_key=self.key,
            ),
        )
        self.assertEqual([], other.list_runs())
        with self.assertRaisesRegex(Exception, "run not found"):
            other.get_run("private-cloud")

    def test_local_save_imports_without_rewriting_committed_history(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            local = ArenaService(ROOT, run_dir=directory)
            local_view = local.start_run("local-import")
            document = local.export_run_document("local-import")
            imported = self.service.import_run_document(
                json.loads(json.dumps(document)),
                display_name="Imported local run",
            )
        self.assertEqual(local_view["ledger"], imported["ledger"])
        self.assertEqual("Imported local run", self.service.list_runs()[0]["display_name"])

    def test_hosted_export_waits_until_completion(self) -> None:
        self.service.start_run("not-finished")
        with self.assertRaises(CompletedRunError):
            self.service.export_run_document("not-finished")


if __name__ == "__main__":
    unittest.main()
