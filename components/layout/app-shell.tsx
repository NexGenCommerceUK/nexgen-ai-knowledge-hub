import Link from "next/link";
import type { ReactNode } from "react";
import { signOutAction } from "../../features/auth/actions";

export function AppShell({ children, email }: { children: ReactNode; email: string }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <Link href="/dashboard" className="brand-link">
            NexGen AI Knowledge Hub
          </Link>
          <div className="muted header-email">{email}</div>
        </div>

        <nav className="app-nav" aria-label="Application navigation">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/account">Account</Link>
          <form action={signOutAction}>
            <button type="submit" className="nav-signout">
              Sign out
            </button>
          </form>
        </nav>
      </header>

      <main className="protected-main">{children}</main>
    </div>
  );
}
