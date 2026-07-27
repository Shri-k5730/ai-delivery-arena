from __future__ import annotations

import json
import os
import tempfile
import unittest
from pathlib import Path


try:
    from streamlit.testing.v1 import AppTest
except ImportError:
    AppTest = None


ROOT = Path(__file__).resolve().parents[1]

from ai_delivery_arena.hosted.app import HostedSettings  # noqa: E402
from ai_delivery_arena.hosted.react_app import (  # noqa: E402
    build_model,
    dispatch_event,
)


class FakeStreamlit:
    def __init__(self) -> None:
        self.session_state: dict[str, object] = {}


def settings() -> HostedSettings:
    return HostedSettings(
        supabase_url="",
        supabase_key="",
        signing_key=b"",
        github_url="https://github.com/Shri-k5730/ai-delivery-arena",
        app_url="https://ai-delivery-arena.streamlit.app",
    )


class ReactHostedFlowTestCase(unittest.TestCase):
    def test_react_controller_reviews_commits_and_advances_to_d02(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            previous = os.environ.get("ARENA_RUN_DIR")
            os.environ["ARENA_RUN_DIR"] = directory
            try:
                st = FakeStreamlit()
                configured = settings()
                dispatch_event(st, configured, {"type": "open_local", "payload": {}})
                dispatch_event(st, configured, {"type": "open_briefing", "payload": {}})
                dispatch_event(st, configured, {"type": "start_run", "payload": {}})

                run_id = str(st.session_state["arena_run_id"])
                draft = {
                    "option_id": "B",
                    "rationale": (
                        "I will establish a bounded pilot because the current "
                        "evidence supports a controlled commitment."
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
                dispatch_event(
                    st,
                    configured,
                    {
                        "type": "review_decision",
                        "payload": {"run_id": run_id, "draft": draft},
                    },
                )
                self.assertEqual("review", st.session_state["arena_view"])
                dispatch_event(
                    st,
                    configured,
                    {
                        "type": "commit_decision",
                        "payload": {"run_id": run_id, "confirmed": True},
                    },
                )
                self.assertEqual("consequence", st.session_state["arena_view"])
                dispatch_event(
                    st,
                    configured,
                    {
                        "type": "continue_consequence",
                        "payload": {"run_id": run_id},
                    },
                )

                model = build_model(st, configured)
                self.assertEqual("decision", model["screen"])
                self.assertEqual("D02", model["run"]["current_decision"]["id"])
                self.assertEqual(1, model["run"]["progress"]["completed"])
                self.assertIsNone(model["draft"]["option_id"])
                serialized = json.dumps(model)
                self.assertNotIn("terminal_health", serialized)
                self.assertNotIn("gate_adjudications", serialized)
                self.assertNotIn("selected_rule_ids", serialized)
            finally:
                if previous is None:
                    os.environ.pop("ARENA_RUN_DIR", None)
                else:
                    os.environ["ARENA_RUN_DIR"] = previous

    @unittest.skipUnless(AppTest is not None, "Streamlit dependency is not installed")
    def test_streamlit_entrypoint_mounts_the_react_product_without_exception(
        self,
    ) -> None:
        app = AppTest.from_file(
            str(ROOT / "streamlit_app.py"),
            default_timeout=30,
        ).run()
        self.assertEqual([], [item.message for item in app.exception])


if __name__ == "__main__":
    unittest.main()
