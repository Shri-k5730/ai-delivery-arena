# Private Canary Privacy Notice

Last updated: 3 August 2026

AI Delivery Arena Private Canary stores the minimum data needed to authenticate a
participant, save a synthetic simulation attempt, resume it across devices, and
produce a debrief.

## Data stored

- Email address and authentication metadata managed by Supabase Auth
- Run identifier, display name, scenario version, progress, and timestamps
- Draft and committed responses entered during the synthetic scenario
- Evidence requests, decision history, deterministic ledger, and debrief data

The scenario is synthetic. Do not enter employer, customer, supplier, personal,
regulated, confidential, export-controlled, or production data.

## Security design

- Supabase Row Level Security scopes rows to the authenticated owner.
- Anonymous database access is removed.
- Canonical run documents are encrypted before storage.
- Encryption and signing secrets are held in Streamlit Secrets and are not
  committed to GitHub.
- Completed decisions are immutable through the application.

## Processing providers

The hosted beta uses Streamlit Community Cloud for application hosting and
Supabase for authentication and database storage. Their own privacy and
retention terms also apply.

## Retention and deletion

Participants can permanently delete an individual run from the Run Centre. The
application removes the owner-scoped cloud row and same-browser draft/activity
cache for that run. Run deletion does not delete the Supabase Auth account. A
deployment owner must handle verified account-deletion requests separately.
Local-edition data remains entirely on the operator's machine unless imported.

## Assessment boundary

Results are simulation assessments. They are not certification, a validated
hiring signal, or an independently calibrated benchmark result.

## Contact

The deployment must expose a monitored incident address in the product footer
before participant access is enabled.
