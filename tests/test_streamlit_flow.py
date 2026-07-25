from __future__ import annotations

import os
import tempfile
import unittest
from pathlib import Path


try:
    from streamlit.testing.v1 import AppTest
except ImportError:
    AppTest = None


ROOT = Path(__file__).resolve().parents[1]


@unittest.skipUnless(AppTest is not None, "Streamlit dependency is not installed")
class StreamlitFlowTestCase(unittest.TestCase):
    def test_local_preview_reviews_commits_and_advances_to_d02(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            previous = os.environ.get("ARENA_RUN_DIR")
            os.environ["ARENA_RUN_DIR"] = directory
            try:
                app = AppTest.from_file(
                    str(ROOT / "streamlit_app.py"),
                    default_timeout=30,
                ).run()
                app.button[0].click().run()
                next(
                    item
                    for item in app.button
                    if item.label == "Read briefing and start"
                ).click().run()
                next(
                    item
                    for item in app.button
                    if item.label == "Enter the Arena"
                ).click().run()

                app.radio[0].set_value("B")
                values = {
                    "Rationale": (
                        "I will establish a bounded pilot because the current "
                        "evidence supports a controlled commitment."
                    ),
                    "Critical assumption": (
                        "The sponsor accepts explicit exit criteria."
                    ),
                    "Material risk": (
                        "The current baseline may not survive validation."
                    ),
                }
                for item in app.text_area:
                    item.set_value(values[item.label])
                for item in app.text_input:
                    item.set_value(
                        "CPO"
                        if item.label == "Accountable owner"
                        else "Continue only when the agreed evidence threshold passes."
                    )
                app.run()
                next(
                    item for item in app.button if item.label == "Review decision"
                ).click().run()
                app.checkbox[0].check().run()
                next(
                    item
                    for item in app.button
                    if item.label == "Commit permanently"
                ).click().run()

                self.assertEqual([], [item.value for item in app.error])
                next(
                    item
                    for item in app.button
                    if item.label == "Continue to D02"
                ).click().run()
                self.assertEqual([], [item.value for item in app.error])
                self.assertEqual(1, len(app.radio))
                self.assertIsNone(app.radio[0].value)
                self.assertEqual(
                    1,
                    len(
                        [
                            item
                            for item in app.button
                            if item.label == "Review decision"
                        ]
                    ),
                )
            finally:
                if previous is None:
                    os.environ.pop("ARENA_RUN_DIR", None)
                else:
                    os.environ["ARENA_RUN_DIR"] = previous


if __name__ == "__main__":
    unittest.main()
