# NexGen AI Knowledge Hub

Portfolio-grade AI knowledge SaaS built with Next.js, TypeScript, Supabase Auth and a server-side OpenAI Responses API integration.

## Current milestone

**Milestone 2 — Authentication and SaaS user accounts**

The application now includes:

- public landing page
- email/password account creation
- email confirmation flow
- sign in and sign out
- cookie-based server-side sessions
- protected dashboard and account routes
- server-side identity verification
- typed validation and automated tests

The knowledge assistant remains in demo/live-AI mode while persistent documents, PostgreSQL tenant data and retrieval are added in later milestones.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Configure the required Supabase values in `.env.local` before testing authentication.

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

Optional OpenAI configuration:

```env
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.6-luna
```

## Quality gates

```bash
npm run typecheck
npm run test
npm run build
npm run check
```

## Architecture

- `app/` — Next.js routes and route groups
- `components/` — shared presentation/layout components
- `features/auth/` — authentication domain
- `features/knowledge/` — knowledge assistant domain
- `lib/supabase/` — browser/server/proxy Supabase adapters
- `lib/ai/` — AI provider adapter
- `tests/` — unit tests
- `docs/` — architecture, API and authentication documentation

See `docs/AUTHENTICATION.md` and `docs/ARCHITECTURE.md` for implementation notes.

## Roadmap

1. SaaS engineering foundation ✅
2. Authentication and user accounts — current
3. PostgreSQL application schema and tenant profiles
4. Document upload and processing
5. RAG/vector retrieval and source citations
6. Production SaaS UI/UX
7. Conversations, workspaces and usage analytics
8. Security hardening
9. End-to-end testing
10. Production deployment
