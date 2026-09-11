# Contributing

## Branches
Use short-lived branches from `main`:

- `feat/<name>` for features
- `fix/<name>` for bugs
- `chore/<name>` for maintenance
- `docs/<name>` for documentation

## Commits
Use clear conventional-style messages, for example:

- `feat: add request validation`
- `fix: handle malformed JSON`
- `test: add validation coverage`
- `docs: document API contract`

## Quality gate
Before pushing:

```bash
npm run typecheck
npm run test
npm run build
```

Open a pull request and merge only after CI passes.
