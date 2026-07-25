from __future__ import annotations

import hashlib
import hmac
import json
import sys
import tempfile
import unittest
from dataclasses import replace
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena import (  # noqa: E402
    CompletedRunError,
    JsonRunStore,
    NonAppendOnlyUpdateError,
    ReplayEngine,
    RevisionConflictError,
    RunCompletionError,
    RunInput,
    RunStatus,
    SaveCompatibilityError,
    SaveIntegrityError,
    load_fixture_bundle,
)
from ai_delivery_arena.engine.ledger import LedgerEventKind  # noqa: E402


FIXTURE_DIR = ROOT / "fixtures" / "procurement-under-pressure" / "0.1.0"


def _canonical_bytes(value: object) -> bytes:
    return json.dumps(
        value,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")


class PersistenceTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.bundle = load_fixture_bundle(FIXTURE_DIR)
        cls.engine = ReplayEngine(cls.bundle)
        cls.reference = cls.bundle.reference_run("RR-A")

    def setUp(self) -> None:
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.store = JsonRunStore(self.temporary.name, self.engine)

    def run_input(self, count: int) -> RunInput:
        complete = count == len(self.reference.decisions)
        return RunInput(
            run_id=self.reference.run_id,
            investigation_schedule=self.reference.investigation_schedule,
            decisions=self.reference.decisions[:count],
            terminal_route=self.reference.terminal_route if complete else None,
        )

    def read_document(self) -> tuple[Path, dict[str, object]]:
        path = self.store.path_for(self.reference.run_id)
        return path, json.loads(path.read_text(encoding="utf-8"))

    def write_with_sha256(self, path: Path, document: dict[str, object]) -> None:
        unsigned = dict(document)
        unsigned.pop("integrity", None)
        document["integrity"] = {
            "algorithm": "sha256",
            "digest": hashlib.sha256(_canonical_bytes(unsigned)).hexdigest(),
        }
        path.write_text(
            json.dumps(document, ensure_ascii=False, sort_keys=True, indent=2) + "\n",
            encoding="utf-8",
        )

    def test_prefix_replay_is_in_progress_and_has_no_gate_results(self) -> None:
        result = self.engine.replay_input(self.run_input(8))
        self.assertIs(RunStatus.IN_PROGRESS, result.status)
        self.assertIsNone(result.terminal_route)
        self.assertIsNone(result.release_valid)
        self.assertEqual((), result.gate_adjudications)
        self.assertNotEqual(
            LedgerEventKind.RUN_COMPLETED,
            result.ledger.entries[-1].kind,
        )
        self.assertEqual(tuple(f"D{index:02d}" for index in range(1, 9)), result.completed_decisions)

    def test_terminal_route_exists_only_at_completion(self) -> None:
        with self.assertRaises(RunCompletionError):
            self.engine.replay_input(
                replace(self.run_input(8), terminal_route="controlled_pilot")
            )
        with self.assertRaises(RunCompletionError):
            self.engine.replay_input(
                replace(self.run_input(20), terminal_route=None)
            )

    def test_every_decision_boundary_is_an_exact_full_replay_prefix(self) -> None:
        for run in self.bundle.executable_runs:
            full = self.engine.replay(run)
            for count in range(0, 20):
                with self.subTest(run_id=run.run_id, decisions=count):
                    partial = self.engine.replay_input(
                        RunInput(
                            run_id=run.run_id,
                            investigation_schedule=run.investigation_schedule,
                            decisions=run.decisions[:count],
                        )
                    )
                    self.assertEqual(
                        partial.ledger.entries,
                        full.ledger.entries[: len(partial.ledger.entries)],
                    )
                    self.assertEqual(
                        full.completed_decisions[:count],
                        partial.completed_decisions,
                    )

    def test_partial_run_round_trips_through_replay_verification(self) -> None:
        saved = self.store.save(self.run_input(8))
        restored = self.store.load(self.reference.run_id)
        self.assertEqual(1, saved.revision)
        self.assertEqual(saved.run_input, restored.run_input)
        self.assertEqual(saved.result.ledger, restored.result.ledger)
        self.assertTrue(restored.result.ledger.verify())

    def test_resume_to_completion_reproduces_reference_exactly(self) -> None:
        initial = self.store.save(self.run_input(8))
        completed = self.store.save(
            self.run_input(20),
            expected_revision=initial.revision,
        )
        reference_result = self.engine.replay(self.reference)
        self.assertEqual(2, completed.revision)
        self.assertIs(RunStatus.COMPLETED, completed.result.status)
        self.assertEqual(
            reference_result.terminal_health,
            completed.result.terminal_health,
        )
        self.assertEqual(
            reference_result.gate_adjudications,
            completed.result.gate_adjudications,
        )
        self.assertEqual(
            reference_result.ledger,
            completed.result.ledger,
        )

    def test_stale_revision_cannot_overwrite_newer_progress(self) -> None:
        first = self.store.save(self.run_input(6))
        self.store.save(self.run_input(8), expected_revision=first.revision)
        with self.assertRaises(RevisionConflictError):
            self.store.save(self.run_input(9), expected_revision=first.revision)

    def test_update_requires_append_only_decisions(self) -> None:
        saved = self.store.save(self.run_input(8))
        changed = replace(
            self.reference.decisions[3],
            summary="changed after it was committed",
        )
        proposed = replace(
            self.run_input(9),
            decisions=self.reference.decisions[:3]
            + (changed,)
            + self.reference.decisions[4:9],
        )
        with self.assertRaises(NonAppendOnlyUpdateError):
            self.store.save(proposed, expected_revision=saved.revision)

    def test_backdated_evidence_cannot_rewrite_committed_ledger_history(self) -> None:
        initial_input = RunInput(
            run_id=self.reference.run_id,
            investigation_schedule=(),
            decisions=self.reference.decisions[:3],
        )
        saved = self.store.save(initial_input)
        proposed = RunInput(
            run_id=self.reference.run_id,
            investigation_schedule=(self.reference.investigation_schedule[0],),
            decisions=self.reference.decisions[:4],
        )
        with self.assertRaises(NonAppendOnlyUpdateError):
            self.store.save(proposed, expected_revision=saved.revision)

    def test_completed_run_is_immutable(self) -> None:
        saved = self.store.save(self.run_input(20))
        with self.assertRaises(CompletedRunError):
            self.store.save(
                self.run_input(20),
                expected_revision=saved.revision,
            )

    def test_payload_tampering_breaks_integrity_digest(self) -> None:
        self.store.save(self.run_input(8))
        path, document = self.read_document()
        document["run"]["decisions"][0]["summary"] = "tampered"  # type: ignore[index]
        path.write_text(json.dumps(document), encoding="utf-8")
        with self.assertRaises(SaveIntegrityError):
            self.store.load(self.reference.run_id)

    def test_recomputed_digest_cannot_hide_a_stale_ledger_checkpoint(self) -> None:
        self.store.save(self.run_input(8))
        path, document = self.read_document()
        document["run"]["decisions"][0]["summary"] = "tampered"  # type: ignore[index]
        self.write_with_sha256(path, document)
        with self.assertRaises(SaveIntegrityError):
            self.store.load(self.reference.run_id)

    def test_fixture_fingerprint_mismatch_is_rejected(self) -> None:
        self.store.save(self.run_input(8))
        path, document = self.read_document()
        document["scenario"]["fixture_fingerprint"] = "0" * 64  # type: ignore[index]
        self.write_with_sha256(path, document)
        with self.assertRaises(SaveCompatibilityError):
            self.store.load(self.reference.run_id)

    def test_recomputed_digest_cannot_forge_completion_status(self) -> None:
        self.store.save(self.run_input(8))
        path, document = self.read_document()
        document["run"]["status"] = "completed"  # type: ignore[index]
        self.write_with_sha256(path, document)
        with self.assertRaises(SaveIntegrityError):
            self.store.load(self.reference.run_id)

    def test_hmac_store_rejects_wrong_key_and_unsigned_save(self) -> None:
        signed = JsonRunStore(
            Path(self.temporary.name) / "signed",
            self.engine,
            signing_key=b"correct-key",
        )
        signed.save(self.run_input(8))
        wrong_key = JsonRunStore(
            signed.root,
            self.engine,
            signing_key=b"wrong-key",
        )
        with self.assertRaises(SaveIntegrityError):
            wrong_key.load(self.reference.run_id)

        unsigned = JsonRunStore(Path(self.temporary.name) / "unsigned", self.engine)
        unsigned.save(self.run_input(8))
        signature_required = JsonRunStore(
            unsigned.root,
            self.engine,
            signing_key=b"correct-key",
        )
        with self.assertRaises(SaveIntegrityError):
            signature_required.load(self.reference.run_id)

    def test_hmac_digest_matches_canonical_unsigned_document(self) -> None:
        store = JsonRunStore(
            Path(self.temporary.name) / "signed",
            self.engine,
            signing_key=b"correct-key",
        )
        store.save(self.run_input(8))
        document = json.loads(
            store.path_for(self.reference.run_id).read_text(encoding="utf-8")
        )
        integrity = document.pop("integrity")
        expected = hmac.new(
            b"correct-key",
            _canonical_bytes(document),
            hashlib.sha256,
        ).hexdigest()
        self.assertEqual("hmac-sha256", integrity["algorithm"])
        self.assertEqual(expected, integrity["digest"])


if __name__ == "__main__":
    unittest.main()
