#!/usr/bin/env python3
"""Replay one or all procurement reference runs through the engine core."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ai_delivery_arena import ReplayEngine, load_fixture_bundle  # noqa: E402


DEFAULT_FIXTURE_DIR = (
    ROOT / "fixtures" / "procurement-under-pressure" / "0.1.0"
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Replay deterministic AI Delivery Arena reference fixtures."
    )
    parser.add_argument(
        "--fixture-dir",
        type=Path,
        default=DEFAULT_FIXTURE_DIR,
        help="Directory containing the seven scenario fixture artifacts.",
    )
    parser.add_argument(
        "--run",
        default="all",
        choices=("all", "RR-A", "RR-B", "RR-C", "PT-09"),
        help="Reference run to execute.",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit machine-readable JSON.",
    )
    parser.add_argument(
        "--public",
        action="store_true",
        help="Suppress hidden state and reference gate expectations.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    bundle = load_fixture_bundle(args.fixture_dir)
    engine = ReplayEngine(bundle)
    run_ids = (
        tuple(run.run_id for run in bundle.executable_runs)
        if args.run == "all"
        else (args.run,)
    )
    results = [engine.replay_reference(run_id) for run_id in run_ids]

    if args.json:
        print(
            json.dumps(
                [result.as_dict(include_hidden=not args.public) for result in results],
                indent=2,
            )
        )
        return 0

    print("Reference replay passed")
    for result in results:
        if args.public:
            print(
                f"  {result.run_id}: decisions={len(result.completed_decisions)}, "
                f"signals={len(result.public_view.operational_signals)}, "
                f"crises={len(result.public_view.crisis_observations)}, "
                f"ledger={result.ledger.head_hash[:12]}..."
            )
            continue
        health = " / ".join(
            f"{value:.1f}" for value in result.terminal_health.as_dict(ndigits=1).values()
        )
        gates = ",".join(
            f"{item.gate_id}:{item.status.value}"
            for item in result.gate_adjudications
        )
        print(
            f"  {result.run_id}: {health} "
            f"(gates={gates}, events={len(result.ledger.entries)}, "
            f"ledger={result.ledger.head_hash[:12]}...)"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
