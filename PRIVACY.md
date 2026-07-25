# Hosted Beta Privacy Notice

Last updated: 25 July 2026

AI Delivery Arena Hosted Beta stores the minimum data needed to authenticate a
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

The open-source beta does not yet provide self-service account or run deletion
inside the interface. A deployment owner can remove a user's rows and Supabase
Auth account on verified request. Local-edition data remains entirely on the
operator's machine until they choose to import it.

## Assessment boundary

Results are simulation assessments. They are not certification, a validated
hiring signal, or an independently calibrated benchmark result.

## Contact

Deployment operators must replace this section with a monitored contact address
before inviting external users.
