import Link from "next/link";
import { AuthForm } from "../../../features/auth/components/auth-form";

export const metadata = { title: "Sign in" };

export default function SignInPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel">
        <Link href="/" className="eyebrow auth-home-link">
          ← NexGen AI Knowledge Hub
        </Link>
        <h1>Welcome back</h1>
        <p className="muted">Sign in to access your protected knowledge workspace.</p>
        <AuthForm mode="sign-in" />
      </section>
    </main>
  );
}
