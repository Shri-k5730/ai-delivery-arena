# Security Policy

## Supported version

Security fixes target the latest tagged release on `main`.

## Report a vulnerability

Do not open a public issue for a suspected vulnerability involving
authentication, cross-user access, encryption, hidden assessment content, or
secret exposure. Contact the repository owner privately through GitHub.

Before a broad public launch, replace this section with a dedicated monitored
security email address.

## Security invariants

- Never commit `.streamlit/secrets.toml`, `.env`, Supabase keys, or signing keys.
- Never use the Supabase service-role key in this application.
- Keep Row Level Security enabled and forced on `public.arena_runs`.
- Keep `save_payload` encrypted text.
- Never expose hidden health, selected rules, gates, rubric guidance, or
  internal ledger details during an in-progress first attempt.
- Reconstruct all committed state through deterministic replay.
- Treat completed runs and decisions as immutable.
- Preserve optimistic revision checks for every cloud update.

## Dependency and secret checks

Before a release:

```bash
python scripts/validate_fixtures.py
python -m unittest discover -s tests -v
git grep -n -E "(service_role|SUPABASE_.*KEY|ARENA_SIGNING_KEY)" -- \
  ':!*.example*' ':!docs/*' ':!README.md' ':!SECURITY.md'
```

Review any match manually. The literal names of environment variables are
expected in application code. Actual credential values are not.
