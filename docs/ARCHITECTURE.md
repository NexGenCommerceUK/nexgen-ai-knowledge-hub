# Architecture
Browser -> Next.js UI -> `/api/answer` -> OpenAI Responses API. Secrets stay server-side. The MVP accepts explicit context so the public demo has no external storage dependency. Production version adds object storage, document parsing, vector retrieval, tenant-scoped Postgres and audit logs.
