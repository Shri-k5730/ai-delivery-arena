# Deterministic engine core

The engine executes normalized scenario facts. It does not infer leadership quality from free text, coach a participant, or choose an action on the participant's behalf.

## Current boundary

Implemented:

- frozen typed models for all seven fixture artifacts;
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
- deterministic prefix replay at every decision boundary;
- atomic JSON save/resume with optimistic revisions and append-only updates;
- semantic fixture fingerprints and replay-verified ledger checkpoints;
- optional HMAC-SHA256 save authentication;
- a first-attempt-safe projection that omits health state and gate expectations; and
- exact replay tests for RR-A, RR-B, RR-C, and PT-09.

Not implemented:

- free-text response normalization;
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
    ├── persistence.py
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

## Persistence boundary

`JsonRunStore` persists normalized investigation requests and an immutable decision
prefix. It also stores the full derived ledger as a checkpoint. Loading does not
hydrate hidden state from JSON. It verifies the envelope, fixture identity and
fingerprint, replays the input, and compares the new ledger event by event.

The local adapter uses atomic file replacement and optimistic revisions. It is a
single-writer implementation, not a substitute for database transactions in a
multi-user deployment. See `docs/PERSISTENCE.md`.

## Next contract

The next implementation layer is criterion-level competency scoring from cited,
normalized evidence. It must remain separate from hidden program health and critical
gate adjudication. UI work should not invent a composite score before that contract
exists.
