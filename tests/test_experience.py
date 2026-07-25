from __future__ import annotations

import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena.experience.service import (  # noqa: E402
    ArenaService,
    ExperienceError,
)


STRONG_OPTIONS = {
    "D01": "B",
    "D02": "B",
    "D03": "P",
    "D04": "B",
    "D05": "B",
    "D06": "B",
    "D07": "C",
    "D08": "B",
    "D09": "B",
    "D10": "B",
    "D11": "B",
    "D12": "B",
    "D13": "C",
    "D14": "C",
    "D15": "C",
    "D16": "B",
    "D17": "C",
    "D18": "C",
    "D19": "C",
    "D20": "B",
}

UNSAFE_OPTIONS = {
    "D01": "A",
    "D02": "A",
    "D03": "P",
    "D04": "A",
    "D05": "A",
    "D06": "A",
    "D07": "A",
    "D08": "A",
    "D09": "A",
    "D10": "A",
    "D11": "D",
    "D12": "A",
    "D13": "A",
    "D14": "A",
    "D15": "D",
    "D16": "A",
    "D17": "A",
    "D18": "B",
    "D19": "D",
    "D20": "A",
}

EVIDENCE_REQUESTS = (
    "EV-WORKFLOW-01",
    "EV-FINANCE-01",
    "EV-API-01",
    "EV-FORMAT-01",
    "EV-SEGMENT-01",
    "EV-LABEL-01",
    "EV-USER-01",
    "EV-MODEL-01",
    "EV-THREAT-01",
    "EV-VOLUME-01",
)


class ExperienceTestCase(unittest.TestCase):
    def setUp(self) -> None:
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.service = ArenaService(ROOT, run_dir=self.temporary.name)

    @staticmethod
    def response(decision_id: str, option_id: str, evidence: list[str]) -> dict[str, object]:
        return {
            "decision_id": decision_id,
            "option_id": option_id,
            "rationale": (
                "I will record this bounded action because the available evidence "
                "supports the present scope and makes the control decision explicit."
            ),
            "assumptions": (
                "The recorded constraints and cited evidence remain valid until "
                "the next formal decision gate."
            ),
            "owner": "Named accountable executive owner",
            "acceptance_condition": (
                "Continue only when the named threshold and control test pass at "
                "the next decision gate."
            ),
            "risk": (
                "The material risk is unsupported scale or authority before the "
                "required evidence and controls are proven."
            ),
            "evidence_refs": evidence,
        }

    def prepare(self, run_id: str, requests: tuple[str, ...] = EVIDENCE_REQUESTS) -> dict[str, object]:
        view = self.service.start_run(run_id)
        for evidence_id in requests:
            view = self.service.request_evidence(
                run_id,
                evidence_id,
                expected_revision=int(view["revision"]),
            )
        return view

    def complete(
        self,
        run_id: str,
        options: dict[str, str],
        requests: tuple[str, ...] = EVIDENCE_REQUESTS,
    ) -> dict[str, object]:
        view = self.prepare(run_id, requests)
        while view["status"] != "completed":
            decision = view["current_decision"]
            decision_id = str(decision["id"])
            citations = [
                str(item["id"])
                for item in view["evidence"]
                if item["state"] in {"available", "verified"}
            ]
            view = self.service.commit_decision(
                run_id,
                self.response(decision_id, options[decision_id], citations),
                expected_revision=int(view["revision"]),
            )
        return view

    def test_catalogue_contains_twenty_participant_safe_decisions(self) -> None:
        self.assertEqual(20, len(self.service.catalogue.decisions))
        public = self.service.catalogue.decisions[0].public_dict()
        self.assertEqual("D01", public["id"])
        self.assertNotIn("prototype_run_id", str(public))
        self.assertNotIn("selected_rule", str(public))

    def test_first_attempt_view_does_not_leak_assessment_or_health(self) -> None:
        view = self.service.start_run("no-leaks")
        serialized = str(view)
        self.assertNotIn("terminal_health", serialized)
        self.assertNotIn("gate_adjudications", serialized)
        self.assertNotIn("computed_gates", serialized)
        self.assertNotIn("prototype_run_id", serialized)
        self.assertNotIn("competency", serialized)

    def test_d03_requires_four_evidence_requests(self) -> None:
        view = self.service.start_run("investigation-gate")
        for decision_id, option_id in (("D01", "B"), ("D02", "B")):
            view = self.service.commit_decision(
                "investigation-gate",
                self.response(decision_id, option_id, ["EV-POLICY-01"]),
                expected_revision=int(view["revision"]),
            )
        with self.assertRaisesRegex(ExperienceError, "at least four"):
            self.service.commit_decision(
                "investigation-gate",
                self.response("D03", "P", ["EV-POLICY-01"]),
                expected_revision=int(view["revision"]),
            )

    def test_strong_run_completes_and_debriefs_after_submission(self) -> None:
        view = self.complete("strong-alpha", STRONG_OPTIONS)
        self.assertEqual("completed", view["status"])
        self.assertTrue(view["debrief_ready"])
        report = self.service.debrief("strong-alpha")
        self.assertEqual(7, len(report.gates))
        self.assertTrue(all(gate["status"] == "pass" for gate in report.gates))
        self.assertTrue(report.release_valid)
        self.assertEqual(7, len(report.dimensions))
        self.assertEqual(3, len(report.strengths))
        self.assertEqual(3, len(report.development_needs))
        self.assertIn(report.provisional_label, {"Supported", "Integrated"})
        self.assertIn("not independently calibrated", report.notice)

    def test_unsafe_run_fails_all_non_compensable_gates(self) -> None:
        view = self.complete(
            "unsafe-alpha",
            UNSAFE_OPTIONS,
            requests=EVIDENCE_REQUESTS[:4],
        )
        self.assertEqual("completed", view["status"])
        report = self.service.debrief("unsafe-alpha")
        failed = tuple(
            gate["gate_id"] for gate in report.gates if gate["status"] == "fail"
        )
        self.assertEqual(tuple(f"G{index}" for index in range(1, 8)), failed)
        self.assertFalse(report.release_valid)
        self.assertLessEqual(report.reported_overall, 39)

    def test_resume_reconstructs_same_public_progress(self) -> None:
        view = self.prepare("resume-alpha", EVIDENCE_REQUESTS[:4])
        view = self.service.commit_decision(
            "resume-alpha",
            self.response("D01", "B", ["EV-POLICY-01", "EV-SOURCE-01"]),
            expected_revision=int(view["revision"]),
        )
        restored = self.service.get_run("resume-alpha")
        self.assertEqual(view["revision"], restored["revision"])
        self.assertEqual(view["history"], restored["history"])
        self.assertEqual(view["ledger"], restored["ledger"])


if __name__ == "__main__":
    unittest.main()
