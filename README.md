# NexGen AI Knowledge Hub

Portfolio SaaS project by **NexGenCommerce Ltd**. The product is evolving from a small AI demo into a production-style business knowledge platform.

## Current milestone

**Milestone 1 — Professional SaaS foundation**

Implemented:

- typed feature boundaries
- reusable UI components
- server-side environment configuration
- API input validation
- predictable success/error response envelopes
- request IDs for troubleshooting
- provider-safe AI error handling
- global loading/error/not-found states
- unit tests with Vitest
- CI quality gates
- branch and pull-request conventions

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Without an API key the application runs in deterministic demo mode. Add `OPENAI_API_KEY` to `.env.local` to enable server-side live AI responses.

## Quality checks

```bash
npm run typecheck
npm run test
npm run build
```

Or run all three:

```bash
npm run check
```

## Architecture

```text
Next.js UI
  -> knowledge feature
  -> /api/answer
  -> validation + prompt builder
  -> OpenAI adapter
  -> typed API response
```

See:

- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/ROADMAP.md`
- `SECURITY.md`

## Next milestone

Milestone 2 adds real authentication and user sessions before the database/organisation model is introduced.
