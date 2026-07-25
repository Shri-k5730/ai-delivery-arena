# AI Delivery Arena Alpha

Arena Alpha is the first complete participant experience for
`procurement-under-pressure@0.1.0`.

It is deliberately local and single-user. The purpose of the Alpha is to validate
the complete simulation loop before introducing hosted infrastructure, accounts, or
provider-based qualitative review.

## Start

Use Python 3.11 or later from the repository root.

Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
python scripts\start_arena.py
```

macOS or Linux:

```bash
source .venv/bin/activate
python scripts/start_arena.py
```

The default address is:

```text
http://127.0.0.1:8765
```

Use a different port when required:

```bash
python scripts/start_arena.py --port 9000
```

Prevent the application from opening a browser automatically:

```bash
python scripts/start_arena.py --no-open
```

Stop the local server with `Ctrl+C`.

## Participant workflow

1. Start a named first attempt.
2. Read the current decision, known information, and observable program signals.
3. Request evidence from the evidence desk. Requests consume investigation credits
   and arrive after their stated lead time.
4. Select an action.
5. Record the rationale, assumptions, accountable owner, acceptance or stop
   condition, material risk, and evidence citations.
6. Commit the decision. It is appended permanently to the first-attempt ledger.
7. Continue through Frame, Design, Plan, Defend, and Operate.
8. Respond to the six deterministic crises when they become observable.
9. Make the final release recommendation at D20.
10. Open the debrief, print it, or download its JSON evidence pack.

To continue later, start the Arena again and use the prominent **Resume at Dxx**
button for the most recent in-progress run. The **Saved locally** section lists every
run. Opening or resuming a run does not modify any committed decision.

D03 requires at least four evidence requests, matching the authored scenario
contract. The complete run has a maximum of ten investigation credits.

## What remains hidden during a first attempt

The participant view does not expose:

- hidden program-health values;
- transition-rule identifiers or authored effect values;
- crisis-preparedness labels;
- criterion anchors or live competency scores;
- critical-gate adjudications;
- reference-run labels or preferred paths; or
- expected terminal outcomes.

The participant sees only committed decisions, available evidence, operational
signals, and observed crises. Assessment information appears after D20 is committed.

## Debrief

The debrief is ordered around the published scoring contract:

1. final recommendation and assessed scope;
2. seven critical gates and factual reasons;
3. seven dimension scores and any gate caps;
4. all 28 criterion anchors;
5. three demonstrated strengths;
6. three priority development needs;
7. CIO, CISO, and CFO perspectives;
8. the consequential decision timeline;
9. the secondary overall score; and
10. the not-calibrated notice.

The local deterministic assessor evaluates the recorded action facts, chronological
consistency, structured response completeness, and cited evidence. It does not
pretend to understand every nuance of free-text reasoning. Provider-based qualitative
critique remains optional future work and cannot control critical gates or hidden
state.

## Result boundary

Alpha outputs are simulation assessment results. They are not:

- calibrated benchmark results;
- certifications;
- hiring or promotion recommendations;
- proof of delivered customer work; or
- population-level proficiency claims.

Independent reviewer calibration and pilot-cohort evidence remain required before
the project can make a benchmark-result claim.

## Local persistence

Runs are saved under:

```text
.arena-runs/<run-id>.json
```

Every save contains the normalized input, scenario identity, fixture fingerprint,
replay-derived ledger checkpoint, and an integrity digest. Loading a run executes the
scenario again and rejects any save whose decisions, evidence timing, gate outcome,
or ledger no longer matches.

Completed first attempts are immutable. Start a new run for practice or replay.
The `.arena-runs` directory is intentionally excluded from Git, so Alpha runs are
not uploaded to GitHub or synchronized to another computer. Copy that directory
separately if the local run history needs to be backed up.

## Validate

```bash
python scripts/validate_fixtures.py
python -m unittest discover -s tests -v
node --check src/ai_delivery_arena/web/static/app.js
```

The Node command is optional and checks only JavaScript syntax. Node is not required
to run Arena Alpha.

## Common problems

### The browser does not open

Open `http://127.0.0.1:8765` manually. The server output prints the exact address.

### Port 8765 is already in use

```bash
python scripts/start_arena.py --port 9000
```

### Python cannot import `ai_delivery_arena`

Run `scripts/start_arena.py` from the repository. The script adds the repository
`src` directory automatically.

### A stale browser reports a revision conflict

Reload the run. Optimistic revisions prevent an older tab from overwriting a newer
committed decision.

### A completed decision cannot be edited

That is intentional. First attempts are append-only. Later practice must use a new
run ID.
