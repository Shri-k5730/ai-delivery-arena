# Deterministic engine core

The engine executes normalized scenario facts. It does not infer leadership quality from free text, coach a participant, or choose an action on the participant's behalf.

## Current boundary

Implemented:

- frozen typed models for all five fixture artifacts;
- version and cross-reference checks during fixture loading;
- investigation-credit, request, arrival, availability, and verification mechanics;
- last-recorded normalized-fact evaluation with explicit status checks;
- highest-priority arbitration within stacking groups;
- ascending rule-ID execution across surviving groups;
- bounded, order-sensitive health effects;
- six scheduled crises and deterministic preparedness resolution;
- seven structured critical gates with deterministic pass, fail, unresolved, and
  not-applicable resolution;
- gate caps, dimension caps, and release-invalid treatments;
- PT-09, an adversarial run with one isolated concealed claim-integrity breach;
- immutable hash-chained event ledgers;
- a first-attempt-safe projection that omits health state and gate expectations; and
- exact replay tests for RR-A, RR-B, RR-C, and PT-09.

Not implemented:

- free-text response normalization;
- participant save/resume storage;
- criterion-level competency scoring;
- LLM critique or evaluator disagreement;
- benchmark calibration.

Transition fixtures still retain human-readable gate observations for traceability.
Final gate status is calculated separately from `gates.json` over the normalized
terminal fact snapshot. Authored `expected_gates` are test assertions, not the source
of the computed result.

## Package layout

```text
src/ai_delivery_arena/
├── __init__.py
└── engine/
    ├── __init__.py
    ├── evidence.py
    ├── fixtures.py
    ├── gates.py
    ├── ledger.py
    ├── models.py
    ├── predicates.py
    └── replay.py
```

## Execution order

For each normalized decision, the engine:

1. records evidence requests and arrivals due by the decision week;
2. validates every evidence reference against actual availability;
3. appends the decision and its normalized facts to the ledger;
4. marks evidence verified at its declared first use;
5. evaluates all rules for that decision;
6. applies only the highest-priority match in each stacking group;
7. applies surviving rules in ascending rule-ID order;
8. injects any crisis scheduled after that decision;
9. resolves the crisis as prepared, partial, or unprepared before applying its effect vector;
10. adjudicates all seven gates from the terminal normalized facts; and
11. commits each adjudication to the hash-chained ledger before run completion.

The ledger is append-only. Every entry includes the previous entry's SHA-256 hash, so mutation, removal, insertion, or reordering breaks verification.

## Validate and replay

Run the original structural validator:

```bash
python scripts/validate_fixtures.py
```

Run the engine test suite:

```bash
PYTHONPATH=src python -m unittest discover -s tests -v
```

Replay all reference and adversarial runs:

```bash
python scripts/replay_reference_runs.py
```

Return only the first-attempt-safe projection:

```bash
python scripts/replay_reference_runs.py --public --json
```

The normal replay command is a maintainer tool and exposes hidden reference state. It must not be wired directly into the first-attempt participant UI.

## Gate boundary

The gate evaluator only consumes normalized facts. It does not infer whether a
participant's prose implies authorization, containment, materiality, or dishonesty.
That future normalization layer must preserve evidence references and uncertainty.
An unresolved normalized record remains unresolved. It is never silently promoted to
pass.

PT-09 proves the intended discrimination: G6 fails, the other six gates pass, the
overall-score cap is 49, and the hidden health state remains differentiated.

## Next contract

The next implementation layer is participant run persistence and deterministic
save/resume. UI work should begin only after run IDs, fixture version, investigation
state, decision records, ledger head, and completion status can be stored and restored
without changing replay results.
