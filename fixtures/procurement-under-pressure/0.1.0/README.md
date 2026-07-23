# Procurement Under Pressure v0.1.0 fixtures

These files are the first executable contract for the paper-validated scenario. They are evaluator and engine fixtures, not participant guidance or benchmark answer keys.

## Files

| File | Contract |
|---|---|
| `scenario.json` | Locked invariants, initial state, bounded-health formula, authority map, stages, and decision clock |
| `evidence.json` | Versioned evidence catalogue, costs, lead times, hidden-truth links, and initial availability |
| `transitions.json` | Forty-nine deterministic rules, predicates, priorities, stacking groups, effects, signals, and gate implications |
| `crises.json` | Six fixed crisis observations with triggers and resolved prepared, partial, and unprepared effects |
| `reference-runs.json` | Sixty hand-authored decision records, investigation schedules, normalized facts, selected rules, preparedness, terminal health, and expected gates |
| `gates.json` | Seven executable critical-gate definitions, precedence, caps, release validity, and explanations |
| `adversarial-runs.json` | PT-09, derived from RR-A with one isolated D15 claim-integrity breach |

The shared JSON Schema is at `schemas/scenario-fixtures.schema.json`.

## Validate

From the repository root:

```bash
python scripts/validate_fixtures.py
```

The standard-library validator checks:

- artifact headers and required counts;
- cross-file IDs and references;
- evidence credit, lead-time, arrival, and first-use rules;
- supported-fact predicates;
- within-group transition arbitration and rule order;
- crisis preparedness at the actual trigger point; and
- structured gate adjudication; and
- exact bounded-health replay for all four executable runs.

Expected terminal snapshots, in canonical dimension order:

| Run | Business | Delivery | Technical | Data | Trust | Financial | Adoption |
|---|---:|---:|---:|---:|---:|---:|---:|
| RR-A | 48.6 | 72.4 | 67.9 | 41.3 | 79.7 | 68.3 | 55.3 |
| RR-B | 47.0 | 69.9 | 66.9 | 43.0 | 78.7 | 68.3 | 56.6 |
| RR-C | 24.0 | 12.4 | 17.0 | 24.1 | 3.1 | 22.3 | 20.7 |
| PT-09 | 37.8 | 72.4 | 67.9 | 41.3 | 60.7 | 60.2 | 55.3 |

These are hidden program-health values, not participant competency scores.

## Replay through the engine

From the repository root:

```bash
PYTHONPATH=src python -m unittest discover -s tests -v
python scripts/replay_reference_runs.py
```

Engine design and current boundaries are documented in [`docs/ENGINE.md`](../../../../docs/ENGINE.md).

## Status

This contract is implemented by the deterministic engine core. PT-09 fails only G6,
while the other six gates pass. The benchmark is still not calibrated. Independent
reviewer agreement and external trial data remain required before an `0.1.0-rc1` tag.
