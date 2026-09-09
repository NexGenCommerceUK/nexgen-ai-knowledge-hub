# NexGen AI Knowledge Hub

Portfolio-grade AI business knowledge assistant built with Next.js and a server-side OpenAI Responses API integration.

## Why this project matters
It demonstrates full-stack AI integration, secret-safe server calls, prompt design, error handling, responsive UI and an architecture that can evolve into RAG with vector search.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Without an API key the app runs in demo mode. With `OPENAI_API_KEY`, answers are generated server-side.

## Production extension
Add authentication, Postgres, document upload, embeddings/vector search, audit logs, rate limits and organisation workspaces. See `docs/ARCHITECTURE.md`.
