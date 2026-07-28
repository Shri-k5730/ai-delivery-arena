# Hosted Beta v0.4

AI Delivery Arena Hosted Beta uses one public Streamlit application and one
Supabase project. The deterministic engine, scenario fixtures, scoring rules,
and local edition remain in the same repository.

## Architecture

```text
Browser
  -> Streamlit Community Cloud
       -> React + TypeScript product interface
       -> Streamlit Component v2 event bridge
       -> deterministic Python engine
       -> Supabase Auth
       -> Supabase Postgres
            - RLS by authenticated owner
            - encrypted canonical run save
            - plaintext participant draft and run metadata
```

The application uses the Supabase publishable or legacy anon key. It never uses
the service-role key.

Streamlit is the Python runtime, not the visible interaction model. The browser
receives a compiled React product interface for the marketing site, account
access, run centre, briefing, decision cockpit, review, consequence, and
debrief. Typed transient events cross the component boundary and the Python
controller remains authoritative for every read and write. The React bundle
never receives the Supabase key, signing key, canonical encrypted save, rule
identifiers, hidden health, or gate adjudications during an active attempt.

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
6. Under **Authentication → URL Configuration → Redirect URLs**, add the final
   Streamlit URL. If this Supabase project is shared with another application,
   leave the existing Site URL unchanged.

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
app_url = "https://YOUR-APP.streamlit.app"
```

Use the publishable key shown by newer Supabase projects or the legacy anon key.
Never paste the service-role key.

`app_url` is sent to Supabase as the confirmation-email destination. Supabase
accepts it only when the same URL is present in Authentication → URL
Configuration → Redirect URLs.

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
client, cryptography library, and the already compiled React assets. Streamlit
Cloud does not need Node.js. GitHub commits to `main` trigger Streamlit
redeployment.

## React interface development

The React source and committed production assets live under
`src/ai_delivery_arena/react_ui/frontend`.

After changing the interface:

```bash
cd src/ai_delivery_arena/react_ui/frontend
npm ci
npm test
npm run build
```

Commit both the source changes and the regenerated files under `build/`. The
production bundle is mounted through Streamlit Components v2 without an iframe.
The production build uses stable `index.js` and `index.css` filenames. The
Python loader prefers those exact files and retains a legacy fallback for one
older hashed bundle. This prevents an archive overlay from making a deployment
ambiguous when an obsolete hashed asset remains on disk.

## Draft persistence and request budget

The browser writes the active decision draft to user-scoped `localStorage` on
every change. That local buffer:

- restores unsynchronized text after a refresh in the same browser;
- is namespaced by user, run, decision, and run revision;
- never contains hidden engine state, scores, rule identifiers, or secrets; and
- is superseded by the cloud draft after a confirmed synchronization.

Cloud autosave waits for ten seconds of inactivity. Review, evidence ordering,
Run Centre navigation, and sign-out carry the latest draft immediately instead
of waiting for the timer. A normal cloud draft sync is one conditional
`UPDATE`, guarded by owner, run ID, revision, status, and decision count. The
active run is cached only in the current Streamlit session, and a cold resume
loads the encrypted run plus its draft in one Supabase query.

The status text distinguishes:

- **Saved on this device:** immediately recoverable in this browser;
- **Syncing to cloud:** a conditional Supabase write is in flight; and
- **Cloud synchronized:** the current draft is stored for cross-device resume.

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

Hosted Beta v0.4 is appropriate for product learning and a controlled canary
beta. It is not positioned as a production-grade assessment service, a hiring
decision system, certification, or independently calibrated benchmark.
