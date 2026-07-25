#!/usr/bin/env python3
"""Create, resume, or verify a deterministic run-save checkpoint."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena import (  # noqa: E402
    JsonRunStore,
    ReplayEngine,
    RunInput,
    load_fixture_bundle,
)


DEFAULT_FIXTURE_DIR = (
    ROOT / "fixtures" / "procurement-under-pressure" / "0.1.0"
)
DEFAULT_STORE_DIR = ROOT / ".arena-runs"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Exercise replay-verified AI Delivery Arena save/resume."
    )
    parser.add_argument(
        "--fixture-dir",
        type=Path,
        default=DEFAULT_FIXTURE_DIR,
        help="Directory containing the seven executable fixture artifacts.",
    )
    parser.add_argument(
        "--store-dir",
        type=Path,
        default=DEFAULT_STORE_DIR,
        help="Directory for local run-save JSON files.",
    )
    parser.add_argument(
        "--source",
        choices=("RR-A", "RR-B", "RR-C", "PT-09"),
        default="RR-A",
        help="Executable fixture used to generate normalized demo input.",
    )
    parser.add_argument(
        "--run-id",
        default="save-resume-demo",
        help="Persistent participant run ID.",
    )
    parser.add_argument(
        "--through",
        type=int,
        choices=range(0, 21),
        metavar="0..20",
        help="Save the source run through this many decisions.",
    )
    parser.add_argument(
        "--expected-revision",
        type=int,
        help="Required current revision when appending to an existing save.",
    )
    parser.add_argument(
        "--load",
        action="store_true",
        help="Verify and load the existing run instead of writing it.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    bundle = load_fixture_bundle(args.fixture_dir)
    engine = ReplayEngine(bundle)
    store = JsonRunStore(args.store_dir, engine)

    if args.load:
        restored = store.load(args.run_id)
    else:
        if args.through is None:
            raise SystemExit("--through is required unless --load is used")
        source = bundle.reference_run(args.source)
        complete = args.through == len(source.decisions)
        run_input = RunInput(
            run_id=args.run_id,
            investigation_schedule=source.investigation_schedule,
            decisions=source.decisions[: args.through],
            terminal_route=source.terminal_route if complete else None,
        )
        restored = store.save(
            run_input,
            expected_revision=args.expected_revision,
        )

    print("Run checkpoint verified")
    print(f"  path: {restored.path}")
    print(f"  run: {restored.run_input.run_id}")
    print(f"  revision: {restored.revision}")
    print(f"  status: {restored.result.status.value}")
    print(f"  decisions: {len(restored.result.completed_decisions)} / 20")
    print(f"  events: {len(restored.result.ledger.entries)}")
    print(f"  ledger: {restored.result.ledger.head_hash}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
