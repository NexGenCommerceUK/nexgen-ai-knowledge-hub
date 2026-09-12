# Authentication architecture

Milestone 2 uses Supabase Auth with the Next.js App Router and cookie-based server-side sessions.

## Flow

1. Visitors enter through the public landing page.
2. Sign-up and sign-in forms execute Server Actions.
3. Credentials are validated before they reach Supabase Auth.
4. Supabase issues/refreshes session tokens in cookies.
5. `proxy.ts` refreshes auth state for matching requests.
6. Protected route-group pages call `requireUser()` before rendering.
7. `getClaims()` verifies the access token; `getUser()` loads the current user record.
8. Sign-out invalidates the Supabase session and redirects to the landing page.

## Routes

- `/` — public product landing page
- `/auth/sign-up` — account registration
- `/auth/sign-in` — account login
- `/auth/check-email` — confirmation instructions
- `/auth/confirm` — email token verification endpoint
- `/dashboard` — protected application workspace
- `/account` — protected account information

## Security decisions

- Auth secrets are not committed to Git.
- The browser receives only the Supabase project URL and publishable key.
- Authorization checks happen server-side before protected pages render.
- Server code uses `getClaims()`/`getUser()` rather than trusting a cookie session object.
- Passwords are handled by Supabase Auth and are never stored by the application.

Milestone 3 will add application-owned PostgreSQL tables and Row Level Security for tenant data.
