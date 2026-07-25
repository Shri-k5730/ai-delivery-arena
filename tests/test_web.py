from __future__ import annotations

import json
import sys
import tempfile
import threading
import unittest
from pathlib import Path
from urllib.request import urlopen


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena.experience.service import ArenaService  # noqa: E402
from ai_delivery_arena.web.server import ArenaApplication, build_server  # noqa: E402


class WebTestCase(unittest.TestCase):
    def setUp(self) -> None:
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.service = ArenaService(ROOT, run_dir=self.temporary.name)
        self.application = ArenaApplication(self.service)

    def test_application_routes_start_and_restore_a_run(self) -> None:
        status, bootstrap = self.application.get("/api/bootstrap")
        self.assertEqual(200, status)
        self.assertEqual(20, bootstrap["scenario"]["decision_count"])

        status, started = self.application.post(
            "/api/runs",
            {"run_id": "http-alpha"},
        )
        self.assertEqual(201, status)
        self.assertEqual("D01", started["current_decision"]["id"])

        status, restored = self.application.get("/api/runs/http-alpha")
        self.assertEqual(200, status)
        self.assertEqual(started["ledger"], restored["ledger"])

    def test_real_http_server_serves_interface_and_spoiler_safe_bootstrap(self) -> None:
        server = build_server(self.service, port=0)
        self.addCleanup(server.server_close)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        self.addCleanup(server.shutdown)
        host, port = server.server_address[:2]

        with urlopen(f"http://{host}:{port}/", timeout=5) as response:
            html = response.read().decode("utf-8")
        self.assertIn("AI Delivery Arena", html)
        self.assertIn("Start first attempt", html)
        self.assertIn("Most recent saved run", html)

        with urlopen(f"http://{host}:{port}/api/bootstrap", timeout=5) as response:
            bootstrap = json.loads(response.read().decode("utf-8"))
        serialized = json.dumps(bootstrap)
        self.assertNotIn("terminal_health", serialized)
        self.assertNotIn("computed_gates", serialized)
        self.assertEqual("alpha", bootstrap["status"])

        with urlopen(f"http://{host}:{port}/assets/app.js", timeout=5) as response:
            javascript = response.read().decode("utf-8")
        self.assertIn('setBusy($("commitDecision"), false);', javascript)
        self.assertIn("Resume existing run", javascript)


if __name__ == "__main__":
    unittest.main()
