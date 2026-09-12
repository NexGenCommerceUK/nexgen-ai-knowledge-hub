# Architecture

## Milestone 1 architecture

```text
Browser
  -> Next.js UI
  -> feature component
  -> POST /api/answer
  -> request validation
  -> prompt builder
  -> server-side OpenAI adapter
  -> typed API response
```

## Boundaries

- `app/` owns Next.js routes and route-level UX.
- `components/` contains reusable presentation components.
- `features/knowledge/` owns knowledge-assistant domain logic and UI.
- `lib/ai/` owns the external AI integration.
- `lib/http/` owns API response contracts.
- `lib/errors/` owns application-safe error handling.
- `config/` owns stable application metadata/configuration.
- `tests/` contains unit tests for domain logic.

## Design goals

1. Keep secrets server-side.
2. Validate all untrusted API input.
3. Return predictable typed API envelopes.
4. Avoid leaking internal exceptions to users.
5. Keep external-provider code behind an adapter boundary.
6. Make later authentication, storage and RAG work additive rather than a rewrite.

## Planned evolution

Milestone 2 adds authentication. Milestone 3 adds tenant-scoped PostgreSQL. Later milestones add document ingestion, retrieval, citations, workspaces, analytics and stronger security controls.
