# Hosted Beta v0.2

AI Delivery Arena Hosted Beta uses one public Streamlit application and one
Supabase project. The deterministic engine, scenario fixtures, scoring rules,
and local edition remain in the same repository.

## Architecture

```text
Browser
  -> Streamlit Community Cloud
       -> deterministic Python engine
       -> Supabase Auth
       -> Supabase Postgres
            - RLS by authenticated owner
            - encrypted canonical run save
            - plaintext participant draft and run metadata
```

The application uses the Supabase publishable or legacy anon key. It never uses
the service-role key.

The canonical run document is encrypted with AES-GCM before it is sent to
Supabase. Its authentication digest and deterministic ledger are verified after
decryption on every load. The encryption key exists only in Streamlit Secrets.
This prevents a participant from reading internal rule identifiers through
their own direct database access during a first attempt.

## 1. Prepare Supabase

Use an existing Supabase project or create a free project.

1. Open **SQL Editor**.
2. Run `supabase/migrations/202607250001_hosted_beta.sql`.
3. Open **Authentication → Providers → Email**.
4. Enable email/password authentication.
5. Decide whether email confirmation is required.
6. Under **URL Configuration**, add the final Streamlit URL as the Site URL and
   an allowed redirect URL.

The migration creates `public.arena_runs`, enables and forces RLS, removes anon
access, and grants authenticated users access only through owner-scoped
policies.

Do not change `save_payload` from encrypted text to JSON.

## 2. Prepare Streamlit secrets

Generate a long secret:

```bash
python scripts/generate_signing_key.py
```

In Streamlit Community Cloud, open the app's **Settings → Secrets** and add:

```toml
[supabase]
url = "https://YOUR_PROJECT_REF.supabase.co"
publishable_key = "YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY"

[arena]
signing_key = "PASTE_THE_GENERATED_SECRET"
github_url = "https://github.com/YOUR_ACCOUNT/ai-delivery-arena"
```

Use the publishable key shown by newer Supabase projects or the legacy anon key.
Never paste the service-role key.

Keep the signing key stable. Changing it makes existing encrypted cloud runs
unreadable. Store an offline copy in a password manager.

## 3. Deploy on Streamlit Community Cloud

1. Push this repository to GitHub.
2. Sign in at `share.streamlit.io`.
3. Select **Create app**.
4. Choose the repository and `main` branch.
5. Set the entrypoint to `streamlit_app.py`.
6. Select Python 3.12 if the deployment dialog exposes a Python version.
7. Paste the secrets from the previous section.
8. Deploy.

The repository's `requirements.txt` installs the package, Streamlit, Supabase
client, and the cryptography library. GitHub commits to `main` trigger Streamlit
redeployment.

## 4. Validate the hosted boundary

Use two distinct test accounts.

1. Account A creates a run and commits D01.
2. Sign out and sign in as Account B.
3. Confirm Account B cannot see or open Account A's run.
4. Account B creates a run with the same technical run ID through a direct test
   or import. The owner-scoped unique key should allow it.
5. Return to Account A and resume at D02.
6. Refresh during a draft and confirm the draft returns.
7. Complete a test route and confirm the debrief and completed-run download.
8. Change a copied encrypted payload in a non-production project and confirm
   load fails rather than accepting the change.

Also run:

```bash
python scripts/validate_fixtures.py
python -m unittest discover -s tests -v
```

## Local-run import

The hosted Run Centre accepts a JSON file from the local `.arena-runs` folder.
The import:

1. validates the local integrity digest,
2. checks the fixture version and fingerprint,
3. replays every committed event,
4. rejects an existing run ID in the same account,
5. re-encrypts the run with the hosted signing key, and
6. saves it under the authenticated user.

The source local file is not altered.

## Free-tier operating boundary

This beta is designed to remain within the free Streamlit Community Cloud and
Supabase plans at low usage. Free hosting is not an availability guarantee.

- Streamlit Community Cloud hibernates apps after extended inactivity.
- A sleeping app can be woken by a visitor.
- Supabase Free projects may pause after a week of no project activity.
- Supabase Free has database, egress, authentication, and resource limits.
- Neither free service includes a production SLA.

External uptime checks can generate traffic and reduce cold starts, but they do
not improve the provider's underlying SLA. The Arena never relies on local
Streamlit storage, so hibernation or redeployment does not lose committed runs.

## Recovery

- **App redeploy or hibernation:** sign in again if necessary. Runs reload from
  Supabase.
- **Supabase pause:** restore the free project from the Supabase dashboard.
- **Lost signing key:** existing cloud run payloads cannot be decrypted. Restore
  the exact original secret.
- **Bad code deploy:** revert to the previous Git tag. Do not modify scenario
  fixtures for an already completed scenario version.
- **Database recovery:** Supabase Free does not include automatic backups.
  Export the table periodically and retain the signing key separately.

## Release boundary

Hosted Beta v0.2 is appropriate for product learning and a controlled public
beta. It is not positioned as a production-grade assessment service, a hiring
decision system, certification, or independently calibrated benchmark.
