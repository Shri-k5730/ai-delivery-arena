# Contributing

AI Delivery Arena accepts focused changes that preserve the benchmark contract,
first-attempt secrecy, deterministic replay, and local-edition compatibility.

## Development

```bash
python -m venv .venv
python -m pip install -r requirements.txt
python scripts/validate_fixtures.py
python -m unittest discover -s tests -v
```

Run the local dependency-free interface:

```bash
python scripts/start_arena.py
```

Run the hosted interface locally:

```bash
streamlit run streamlit_app.py
```

## Pull requests

- Keep scenario fixture changes separate from interface changes.
- Add tests for persistence, secrecy, or scoring behavior.
- Do not weaken completed-run immutability or optimistic revisions.
- Do not introduce live coaching or preferred-answer hints during first attempts.
- Do not add real customer, supplier, employer, or personal data.
- Do not commit secrets or local run files.
- State whether a change affects published scenario or scoring behavior.

Substantial scenario or rubric changes require a new scenario version rather
than silently changing completed-run semantics.
