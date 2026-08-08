# Deterministic save and resume

Participant runs are stored as normalized input plus a replay-derived checkpoint. A
saved health value, preparedness label, or gate outcome is never trusted as an input.
On every load, the engine re-executes the recorded decisions against the exact
fixture version and compares the resulting ledger event by event.

## Stored contract

Each run-save JSON file contains:

- save-format and scenario identity;
- a semantic SHA-256 fingerprint of all seven executable fixture artifacts;
- run ID, optimistic revision, and completion status;
- investigation requests and their timing;
- the immutable prefix of normalized decision records;
- terminal route only after all 20 decisions;
- the full replay-derived ledger, its length, and head hash; and
- a SHA-256 integrity digest or optional HMAC-SHA256 signature.

The corresponding structural contract is
`schemas/run-save.schema.json`.

## Write and restore rules

`JsonRunStore.save()` writes through a temporary file and atomically replaces the
target. A new run starts at revision 1. Every update must provide the revision it
loaded, which prevents a stale browser or process from silently overwriting newer
progress.

Updates are append-only:

- recorded decisions cannot be edited, removed, or reordered;
- existing evidence requests cannot be changed or removed;
- additional requests and decisions may be appended;
- a new request cannot be backdated if it would rewrite the committed ledger prefix;
- terminal route is absent while a run is in progress; and
- a completed run is immutable.

`JsonRunStore.load()` rejects the save when:

- its envelope digest or HMAC does not match;
- the save format is unsupported;
- scenario ID or version differs;
- any executable fixture has changed;
- normalized input no longer replays;
- the decision prefix, ledger length, ledger head, or any ledger event differs; or
- a stored field violates the typed engine contract.

Plain SHA-256 detects accidental corruption and casual file edits. It does not
authenticate the writer, because anyone able to rewrite the file can recompute an
unkeyed digest. Deployments requiring authenticity must construct `JsonRunStore`
with a protected `signing_key`, which requires HMAC-SHA256 on every save.

## Local verification

Create a partial checkpoint from the strong controlled-pilot fixture:

```bash
python scripts/checkpoint_reference_run.py \
  --source RR-A \
  --run-id save-resume-demo \
  --through 8
```

Resume the same run to completion using the revision returned above:

```bash
python scripts/checkpoint_reference_run.py \
  --source RR-A \
  --run-id save-resume-demo \
  --through 20 \
  --expected-revision 1
```

Verify and load it without writing:

```bash
python scripts/checkpoint_reference_run.py \
  --run-id save-resume-demo \
  --load
```

The default local store is `.arena-runs/`, which is excluded from Git.

## Attempt relationship metadata

First-attempt and practice-replay relationships are deliberately stored outside
the canonical decision document. Local storage uses the existing participant
metadata sidecar. Hosted storage uses the owner-scoped `attempt_kind` and
`source_run_id` columns added in v0.6.

This keeps the encrypted, replay-verified decision record unchanged while making
the learning relationship explicit. A replay may be deleted independently. A
source attempt with a linked replay must be retained until the replay is removed,
otherwise its comparison evidence would become unreadable.

## Hosted draft buffering

The hosted React cockpit separates fast local recovery from durable cloud
persistence:

1. every draft change is written immediately to browser storage;
2. cloud synchronization is batched after ten seconds of inactivity;
3. review, evidence ordering, navigation, and sign-out carry the latest draft;
4. the Supabase draft update is one compare-and-swap request; and
5. a failed cloud write leaves the browser buffer intact for retry.

The cloud update matches `owner_id`, `run_id`, `revision`, `status`, and the
decision's expected zero-based position. A stale tab therefore cannot save a
draft against a newer committed revision. Browser keys include the authenticated
owner, run, decision, and revision so drafts do not cross account or decision
boundaries on the same device.

## Deployment boundary

The JSON store is intentionally a local, single-writer adapter. Atomic replacement
prevents partial files, and optimistic revisions detect stale application state, but
it is not a distributed transaction system. A multi-user deployment should retain
the same save envelope and replay verification behind a database repository with
transactional compare-and-swap on `(run_id, revision)`.
