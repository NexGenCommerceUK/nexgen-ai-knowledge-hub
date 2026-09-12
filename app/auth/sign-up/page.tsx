import Link from "next/link";
import { AuthForm } from "../../../features/auth/components/auth-form";

export const metadata = { title: "Create account" };

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel">
        <Link href="/" className="eyebrow auth-home-link">
          ← NexGen AI Knowledge Hub
        </Link>
        <h1>Create your account</h1>
        <p className="muted">
          Create an account with your email and password. Email confirmation is enabled for the
          production-style flow.
        </p>
        <AuthForm mode="sign-up" />
      </section>
    </main>
  );
}
