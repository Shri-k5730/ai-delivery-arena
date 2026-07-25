"""Small local HTTP boundary for the Arena Alpha participant experience."""

from __future__ import annotations

import argparse
import json
import mimetypes
import re
import sys
import webbrowser
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from importlib.resources import files
from pathlib import Path
from typing import Any
from urllib.parse import unquote, urlsplit

from ai_delivery_arena.engine.persistence import (
    PersistenceError,
    RevisionConflictError,
)
from ai_delivery_arena.experience.service import ArenaService, ExperienceError


MAX_REQUEST_BYTES = 1_000_000


class ArenaApplication:
    """Route JSON API requests to an ``ArenaService``."""

    def __init__(self, service: ArenaService):
        self.service = service

    def get(self, path: str) -> tuple[int, dict[str, object]]:
        if path == "/api/bootstrap":
            return HTTPStatus.OK, self.service.bootstrap()

        match = re.fullmatch(r"/api/runs/([^/]+)/debrief", path)
        if match:
            report = self.service.debrief(unquote(match.group(1)))
            return HTTPStatus.OK, report.as_dict()

        match = re.fullmatch(r"/api/runs/([^/]+)", path)
        if match:
            return HTTPStatus.OK, self.service.get_run(unquote(match.group(1)))

        return HTTPStatus.NOT_FOUND, {"error": "endpoint not found"}

    def post(
        self,
        path: str,
        payload: dict[str, Any],
    ) -> tuple[int, dict[str, object]]:
        if path == "/api/runs":
            return HTTPStatus.CREATED, self.service.start_run(
                str(payload.get("run_id", ""))
            )

        match = re.fullmatch(r"/api/runs/([^/]+)/evidence", path)
        if match:
            return HTTPStatus.OK, self.service.request_evidence(
                unquote(match.group(1)),
                str(payload.get("evidence_id", "")),
                expected_revision=int(payload.get("expected_revision", 0)),
            )

        match = re.fullmatch(r"/api/runs/([^/]+)/decisions", path)
        if match:
            expected_revision = int(payload.pop("expected_revision", 0))
            return HTTPStatus.OK, self.service.commit_decision(
                unquote(match.group(1)),
                payload,
                expected_revision=expected_revision,
            )

        return HTTPStatus.NOT_FOUND, {"error": "endpoint not found"}


def _handler(application: ArenaApplication) -> type[BaseHTTPRequestHandler]:
    class ArenaHandler(BaseHTTPRequestHandler):
        server_version = "ArenaAlpha/0.1"

        def do_GET(self) -> None:  # noqa: N802
            path = urlsplit(self.path).path
            if path.startswith("/api/"):
                self._api("GET", path)
                return
            self._static(path)

        def do_POST(self) -> None:  # noqa: N802
            path = urlsplit(self.path).path
            self._api("POST", path)

        def _api(self, method: str, path: str) -> None:
            try:
                if method == "GET":
                    status, payload = application.get(path)
                else:
                    payload_in = self._json_body()
                    status, payload = application.post(path, payload_in)
            except RevisionConflictError as exc:
                status, payload = HTTPStatus.CONFLICT, {"error": str(exc)}
            except (ExperienceError, PersistenceError, ValueError) as exc:
                status, payload = HTTPStatus.BAD_REQUEST, {"error": str(exc)}
            except Exception as exc:  # pragma: no cover - last-resort HTTP boundary
                print(f"Arena request failed: {exc}", file=sys.stderr)
                status, payload = (
                    HTTPStatus.INTERNAL_SERVER_ERROR,
                    {"error": "The Arena could not complete that action."},
                )
            self._json(status, payload)

        def _json_body(self) -> dict[str, Any]:
            try:
                length = int(self.headers.get("Content-Length", "0"))
            except ValueError as exc:
                raise ExperienceError("invalid content length") from exc
            if length <= 0 or length > MAX_REQUEST_BYTES:
                raise ExperienceError("request body is missing or too large")
            raw = self.rfile.read(length)
            try:
                value = json.loads(raw.decode("utf-8"))
            except (UnicodeDecodeError, json.JSONDecodeError) as exc:
                raise ExperienceError("request body must be valid JSON") from exc
            if not isinstance(value, dict):
                raise ExperienceError("request body must be a JSON object")
            return value

        def _json(self, status: int, payload: dict[str, object]) -> None:
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def _static(self, path: str) -> None:
            relative = {
                "/": "static/index.html",
                "/index.html": "static/index.html",
                "/assets/app.js": "static/app.js",
                "/assets/styles.css": "static/styles.css",
            }.get(path)
            if relative is None:
                self.send_error(HTTPStatus.NOT_FOUND)
                return
            resource = files("ai_delivery_arena.web").joinpath(relative)
            body = resource.read_bytes()
            content_type = mimetypes.guess_type(relative)[0] or "application/octet-stream"
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", f"{content_type}; charset=utf-8")
            self.send_header("Cache-Control", "no-cache")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def log_message(self, format: str, *args: object) -> None:
            return

    return ArenaHandler


def build_server(
    service: ArenaService,
    *,
    host: str = "127.0.0.1",
    port: int = 8765,
) -> ThreadingHTTPServer:
    return ThreadingHTTPServer((host, port), _handler(ArenaApplication(service)))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Start AI Delivery Arena Alpha in a local browser."
    )
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", default=8765, type=int)
    parser.add_argument("--repository-root", type=Path)
    parser.add_argument("--run-dir", type=Path)
    parser.add_argument("--no-open", action="store_true")
    args = parser.parse_args(argv)

    service = ArenaService(
        args.repository_root,
        run_dir=args.run_dir,
    )
    server = build_server(service, host=args.host, port=args.port)
    actual_host, actual_port = server.server_address[:2]
    display_host = "127.0.0.1" if actual_host in {"0.0.0.0", "::"} else actual_host
    url = f"http://{display_host}:{actual_port}"
    print(f"AI Delivery Arena Alpha is ready at {url}")
    print("Press Ctrl+C to stop.")
    if not args.no_open:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nArena stopped.")
    finally:
        server.server_close()
    return 0
