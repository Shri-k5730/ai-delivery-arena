from __future__ import annotations

import sys
import unittest
from dataclasses import FrozenInstanceError, replace
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena import ReplayEngine, load_fixture_bundle  # noqa: E402
from ai_delivery_arena.engine.evidence import EvidencePortfolio  # noqa: E402
from ai_delivery_arena.engine.ledger import (  # noqa: E402
    LedgerEventKind,
    RunLedger,
)
from ai_delivery_arena.engine.models import (  # noqa: E402
    Effect,
    EvidenceState,
    HealthState,
)
from ai_delivery_arena.engine.replay import (  # noqa: E402
    EvidenceUnavailableError,
    GateMismatchError,
    RuleSelectionError,
)


FIXTURE_DIR = ROOT / "fixtures" / "procurement-under-pressure" / "0.1.0"


class EngineTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.bundle = load_fixture_bundle(FIXTURE_DIR)
        cls.engine = ReplayEngine(cls.bundle)

    def test_fixture_bundle_is_complete_and_version_aligned(self) -> None:
        self.assertEqual("procurement-under-pressure", self.bundle.scenario.identity.scenario_id)
        self.assertEqual("0.1.0", self.bundle.scenario.identity.scenario_version)
        self.assertEqual(20, len(self.bundle.scenario.decisions))
        self.assertEqual(15, len(self.bundle.evidence.items))
        self.assertEqual(49, len(self.bundle.transitions.rules))
        self.assertEqual(6, len(self.bundle.crises.crises))
        self.assertEqual(7, len(self.bundle.gates.gates))
        self.assertEqual(3, len(self.bundle.reference_runs.runs))
        self.assertEqual(1, len(self.bundle.adversarial_runs.runs))
        self.assertEqual(4, len(self.bundle.executable_runs))

    def test_domain_models_are_frozen(self) -> None:
        with self.assertRaises(FrozenInstanceError):
            self.bundle.scenario.title = "mutated"  # type: ignore[misc]
        self.assertIsInstance(self.bundle.scenario.decisions, tuple)
        self.assertIsInstance(self.bundle.reference_runs.runs[0].decisions, tuple)

    def test_bounded_health_formula_preserves_headroom_and_resilience(self) -> None:
        state = HealthState((("x", 50.0),))
        state = state.apply(Effect("x", 10), precision=8)
        self.assertEqual(55.0, state.value("x"))
        state = state.apply(Effect("x", -10), precision=8)
        self.assertEqual(49.5, state.value("x"))

    def test_evidence_state_machine_respects_request_arrival_and_first_use(self) -> None:
        run = self.bundle.reference_run("RR-A")
        portfolio = EvidencePortfolio(
            self.bundle.evidence,
            run.investigation_schedule,
            self.bundle.scenario.run_config.investigation_credits,
        )
        evidence_id = "EV-WORKFLOW-01"
        self.assertEqual(
            EvidenceState.REQUESTABLE,
            portfolio.state(evidence_id, 0, frozenset()),
        )
        self.assertEqual(
            EvidenceState.REQUESTED,
            portfolio.state(evidence_id, 1, frozenset()),
        )
        self.assertEqual(
            EvidenceState.AVAILABLE,
            portfolio.state(evidence_id, 2, frozenset()),
        )
        self.assertEqual(
            EvidenceState.VERIFIED,
            portfolio.state(evidence_id, 2, frozenset(), using_decision="D04"),
        )

    def test_all_executable_runs_replay_exactly(self) -> None:
        for run in self.bundle.executable_runs:
            with self.subTest(run_id=run.run_id):
                result = self.engine.replay(run)
                self.assertEqual(
                    run.expected_terminal_health.as_dict(ndigits=1),
                    result.terminal_health.as_dict(ndigits=1),
                )
                self.assertEqual(20, len(result.completed_decisions))
                self.assertEqual(6, len(result.resolved_crises))
                self.assertEqual(7, len(result.gate_adjudications))
                self.assertTrue(result.ledger.verify())
                self.assertEqual(
                    LedgerEventKind.RUN_COMPLETED,
                    result.ledger.entries[-1].kind,
                )

    def test_replay_selects_every_recorded_rule_without_option_scoring(self) -> None:
        for run in self.bundle.executable_runs:
            result = self.engine.replay(run)
            expected = tuple(
                rule_id
                for decision in run.decisions
                for rule_id in sorted(decision.selected_rule_ids)
            )
            self.assertEqual(expected, result.applied_rule_ids)

    def test_tampered_rule_selection_is_rejected(self) -> None:
        run = self.bundle.reference_run("RR-A")
        first = replace(run.decisions[0], selected_rule_ids=())
        tampered = replace(run, decisions=(first,) + run.decisions[1:])
        with self.assertRaises(RuleSelectionError):
            self.engine.replay(tampered)

    def test_evidence_used_without_a_request_is_rejected(self) -> None:
        run = self.bundle.reference_run("RR-A")
        schedule = tuple(
            request
            for request in run.investigation_schedule
            if request.evidence_id != "EV-WORKFLOW-01"
        )
        tampered = replace(run, investigation_schedule=schedule)
        with self.assertRaises(EvidenceUnavailableError):
            self.engine.replay(tampered)

    def test_first_attempt_projection_does_not_expose_hidden_health(self) -> None:
        result = self.engine.replay_reference("RR-A")
        public = result.as_dict(include_hidden=False)
        self.assertNotIn("terminal_health", public)
        self.assertNotIn("expected_gates", public)
        self.assertNotIn("applied_rule_ids", public)
        self.assertNotIn("resolved_crises", public)
        self.assertNotIn("computed_gates", public)
        self.assertNotIn("release_valid", public)
        self.assertNotIn("strictest_overall_cap", public)
        self.assertIn("operational_signals", public)
        self.assertIn("crisis_observations", public)
        self.assertFalse(hasattr(result.public_view, "terminal_health"))
        self.assertEqual(6, len(result.public_view.crisis_observations))

    def test_ledger_hash_chain_detects_tampering(self) -> None:
        result = self.engine.replay_reference("RR-A")
        entry = replace(result.ledger.entries[0], event_hash="f" * 64)
        tampered = RunLedger((entry,) + result.ledger.entries[1:])
        self.assertFalse(tampered.verify())

    def test_crisis_evidence_is_recorded_only_after_observation(self) -> None:
        result = self.engine.replay_reference("RR-A")
        observed = {
            entry.payload.get("crisis_id"): entry.sequence
            for entry in result.ledger.entries
            if entry.kind is LedgerEventKind.CRISIS_OBSERVED
        }
        response_sequence = {
            entry.decision_id: entry.sequence
            for entry in result.ledger.entries
            if entry.kind is LedgerEventKind.DECISION_RECORDED
        }
        for crisis in self.bundle.crises.crises:
            self.assertLess(observed[crisis.id], response_sequence[crisis.linked_decision])

    def test_computed_gates_match_all_authored_expectations(self) -> None:
        for run in self.bundle.executable_runs:
            with self.subTest(run_id=run.run_id):
                result = self.engine.replay(run)
                expected = {
                    gate.gate_id: gate.status for gate in run.expected_gates
                }
                computed = {
                    gate.gate_id: gate.status.value
                    for gate in result.gate_adjudications
                }
                self.assertEqual(expected, computed)

    def test_pt09_isolates_one_concealed_material_breach(self) -> None:
        definition = self.bundle.adversarial_runs.definitions[0]
        self.assertEqual("PT-09", definition.run_id)
        self.assertEqual(1, len(definition.decision_overrides))
        self.assertEqual("D15", definition.decision_overrides[0].decision_id)

        run = self.bundle.reference_run("PT-09")
        self.assertTrue(
            all(record.evidence_id.startswith("PT-09-") for record in run.decisions)
        )
        result = self.engine.replay(run)
        failed = tuple(
            gate.gate_id
            for gate in result.gate_adjudications
            if gate.status.value == "fail"
        )
        self.assertEqual(("G6",), failed)
        self.assertTrue(result.release_valid)
        self.assertEqual(49, result.strictest_overall_cap)
        self.assertGreater(result.terminal_health.value("trust_governance"), 50)

    def test_unsafe_release_invalidates_release_and_fails_all_gates(self) -> None:
        result = self.engine.replay_reference("RR-C")
        self.assertFalse(result.release_valid)
        self.assertEqual(39, result.strictest_overall_cap)
        self.assertEqual(
            tuple(f"G{index}" for index in range(1, 8)),
            tuple(
                gate.gate_id
                for gate in result.gate_adjudications
                if gate.status.value == "fail"
            ),
        )

    def test_tampered_gate_expectation_is_rejected(self) -> None:
        run = self.bundle.reference_run("PT-09")
        expectations = tuple(
            replace(gate, status="pass") if gate.gate_id == "G6" else gate
            for gate in run.expected_gates
        )
        tampered = replace(run, expected_gates=expectations)
        with self.assertRaises(GateMismatchError):
            self.engine.replay(tampered)

    def test_gate_adjudications_are_committed_to_the_ledger(self) -> None:
        result = self.engine.replay_reference("RR-A")
        gate_entries = tuple(
            entry
            for entry in result.ledger.entries
            if entry.kind is LedgerEventKind.GATE_ADJUDICATED
        )
        self.assertEqual(7, len(gate_entries))
        self.assertTrue(all(entry.payload.get("status") == "pass" for entry in gate_entries))
        self.assertLess(gate_entries[-1].sequence, result.ledger.entries[-1].sequence)


if __name__ == "__main__":
    unittest.main()
