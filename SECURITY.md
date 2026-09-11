# Security

## Current rules

- Never commit API keys, passwords, tokens or production credentials.
- Keep AI provider calls server-side.
- Treat API request bodies as untrusted input and validate them.
- Do not expose raw provider errors to users.
- Keep `.env.local` out of Git.

## Before client or production data

The project must add authentication, authorisation, tenant isolation, rate limiting, audit logging, upload restrictions, retention rules and a documented incident process before handling sensitive client information.

Security issues should not be posted publicly with real secrets or customer data.
