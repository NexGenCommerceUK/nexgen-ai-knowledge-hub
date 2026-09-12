import Link from "next/link";
import { Container } from "../components/layout/container";
import { Card } from "../components/ui/card";

export default function Home() {
  return (
    <main>
      <Container>
        <section className="hero landing-hero">
          <div>
            <div className="eyebrow">NexGen Portfolio Project 01</div>
            <h1>AI Knowledge Hub</h1>
            <p>
              A secure SaaS knowledge workspace designed to let teams ask questions across company
              information. Authentication now protects the application before documents, retrieval
              and RAG are introduced in later milestones.
            </p>

            <div className="landing-actions">
              <Link href="/auth/sign-up" className="button button-link">
                Create account
              </Link>
              <Link href="/auth/sign-in" className="button-secondary button-link">
                Sign in
              </Link>
            </div>

            <div className="pill-row" aria-label="Technology stack">
              <span className="pill">Next.js</span>
              <span className="pill">TypeScript</span>
              <span className="pill">Supabase Auth</span>
              <span className="pill">OpenAI Responses API</span>
              <span className="pill">Vitest</span>
            </div>
          </div>

          <Card>
            <div className="muted">Milestone 2</div>
            <div className="metric">SaaS user accounts</div>
            <p className="muted">
              Secure sign-up, sign-in, email verification, server-side cookie sessions, protected
              routes, account details and sign-out.
            </p>
          </Card>
        </section>

        <section className="feature-grid">
          <Card>
            <strong>Protected workspace</strong>
            <p className="muted">Unauthenticated visitors cannot access application pages.</p>
          </Card>
          <Card>
            <strong>SSR sessions</strong>
            <p className="muted">Supabase sessions are refreshed and stored in secure cookies.</p>
          </Card>
          <Card>
            <strong>Next: PostgreSQL</strong>
            <p className="muted">Milestone 3 adds application data, profiles and tenant records.</p>
          </Card>
        </section>
      </Container>
    </main>
  );
}
