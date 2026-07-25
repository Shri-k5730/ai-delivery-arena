from __future__ import annotations

import base64
import json
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena.hosted.app import (  # noqa: E402
    _draft_errors,
    _escape,
    _legacy_jwt_role,
    _signup_credentials,
)


def fake_jwt(role: str) -> str:
    payload = base64.urlsafe_b64encode(
        json.dumps({"role": role}).encode("utf-8")
    ).decode("ascii").rstrip("=")
    return f"header.{payload}.signature"


class HostedAppTestCase(unittest.TestCase):
    def test_service_role_key_is_detectable_before_configuration(self) -> None:
        self.assertEqual("service_role", _legacy_jwt_role(fake_jwt("service_role")))
        self.assertEqual("anon", _legacy_jwt_role(fake_jwt("anon")))
        self.assertIsNone(_legacy_jwt_role("sb_publishable_example"))

    def test_review_requires_the_full_decision_contract(self) -> None:
        empty = {
            "option_id": None,
            "rationale": "",
            "assumptions": "",
            "owner": "",
            "acceptance_condition": "",
            "risk": "",
        }
        self.assertEqual(6, len(_draft_errors(empty)))
        complete = {
            "option_id": "B",
            "rationale": "This bounded action is supported by the current evidence.",
            "assumptions": "The source owners remain available.",
            "owner": "CPO",
            "acceptance_condition": "Continue only if the threshold passes.",
            "risk": "The baseline may prove unreliable.",
        }
        self.assertEqual((), _draft_errors(complete))

    def test_user_content_is_escaped_before_html_projection(self) -> None:
        self.assertEqual(
            "&lt;script&gt;bad(&#39;x&#39;)&lt;/script&gt;",
            _escape("<script>bad('x')</script>"),
        )

    def test_signup_uses_the_arena_confirmation_destination(self) -> None:
        self.assertEqual(
            {
                "email": "leader@example.com",
                "password": "strong-password",
                "options": {
                    "email_redirect_to": (
                        "https://ai-delivery-arena.streamlit.app"
                    )
                },
            },
            _signup_credentials(
                "leader@example.com",
                "strong-password",
                "https://ai-delivery-arena.streamlit.app",
            ),
        )

    def test_signup_remains_compatible_without_a_configured_destination(
        self,
    ) -> None:
        self.assertEqual(
            {
                "email": "leader@example.com",
                "password": "strong-password",
            },
            _signup_credentials(
                "leader@example.com",
                "strong-password",
                "",
            ),
        )


if __name__ == "__main__":
    unittest.main()
