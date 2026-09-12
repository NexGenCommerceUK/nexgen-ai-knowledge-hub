# API contract

## `POST /api/answer`

Request:

```json
{
  "context": "Approved business knowledge",
  "question": "What does the company build?"
}
```

Successful response:

```json
{
  "ok": true,
  "data": {
    "answer": "...",
    "mode": "live"
  },
  "requestId": "uuid"
}
```

Error response:

```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please enter a question.",
    "requestId": "uuid"
  }
}
```

The `x-request-id` response header contains the same request identifier for troubleshooting.
