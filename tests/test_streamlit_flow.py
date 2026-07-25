from __future__ import annotations

import os
import tempfile
import unittest
from types import SimpleNamespace

from ai_delivery_arena.hosted.app import HostedSettings
from ai_delivery_arena.hosted.react_app import build_model, dispatch_event


class ReactHostedFlowTestCase(unittest.TestCase):
    def test_local_preview_reviews_commits_and_advances_to_d02(self) -> None:
        settings = HostedSettings(
            supabase_url="",
            supabase_key="",
            signing_key=b"",
            github_url="https://github.com/Shri-k5730/ai-delivery-arena",
            app_url="",
        )
        st = SimpleNamespace(session_state={})
        draft = {
            "option_id": "B",
            "rationale": (
                "I will establish a bounded pilot because the current evidence "
                "supports a controlled commitment with explicit exit criteria."
            ),
            "assumptions": "The sponsor accepts explicit exit criteria.",
            "owner": "CPO",
            "acceptance_condition": (
                "Continue only when the agreed evidence threshold passes."
            ),
            "risk": "The current baseline may not survive validation.",
            "evidence_refs": [],
            "terminal_route": "conditional_release",
        }

        with tempfile.TemporaryDirectory() as directory:
            previous = os.environ.get("ARENA_RUN_DIR")
            os.environ["ARENA_RUN_DIR"] = directory
            try:
                dispatch_event(st, settings, {"type": "open_local"})
                self.assertEqual("centre", build_model(st, settings)["screen"])

                dispatch_event(st, settings, {"type": "open_briefing"})
                self.assertEqual("briefing", build_model(st, settings)["screen"])

                dispatch_event(st, settings, {"type": "start_run"})
                decision_model = build_model(st, settings)
                self.assertEqual("decision", decision_model["screen"])
                self.assertEqual(
                    "D01",
                    decision_model["run"]["current_decision"]["id"],
                )
                run_id = str(decision_model["run"]["run_id"])

                dispatch_event(
                    st,
                    settings,
                    {
                        "type": "review_decision",
                        "payload": {"run_id": run_id, "draft": draft},
                    },
                )
                self.assertEqual("review", build_model(st, settings)["screen"])

                dispatch_event(
                    st,
                    settings,
                    {
                        "type": "commit_decision",
                        "payload": {"run_id": run_id, "confirmed": True},
                    },
                )
                consequence_model = build_model(st, settings)
                self.assertEqual("consequence", consequence_model["screen"])
                self.assertEqual(
                    "D01",
                    consequence_model["consequence"]["decision_id"],
                )

                dispatch_event(
                    st,
                    settings,
                    {
                        "type": "continue_consequence",
                        "payload": {"run_id": run_id},
                    },
                )
                next_model = build_model(st, settings)
                self.assertEqual("decision", next_model["screen"])
                self.assertEqual(
                    "D02",
                    next_model["run"]["current_decision"]["id"],
                )
                self.assertIsNone(next_model["draft"]["option_id"])
            finally:
                if previous is None:
                    os.environ.pop("ARENA_RUN_DIR", None)
                else:
                    os.environ["ARENA_RUN_DIR"] = previous


if __name__ == "__main__":
    unittest.main()
