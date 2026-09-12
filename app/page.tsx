import { Container } from "../components/layout/container";
import { Card } from "../components/ui/card";
import { KnowledgeAssistant } from "../features/knowledge/components/knowledge-assistant";

export default function Home() {
  return (
    <main>
      <Container>
        <section className="hero">
          <div>
            <div className="eyebrow">NexGen Portfolio Project 01</div>
            <h1>AI Knowledge Hub</h1>
            <p>
              A business knowledge assistant with a typed API boundary, server-side AI access,
              validation, predictable error handling and a foundation designed to grow into a
              multi-tenant RAG SaaS product.
            </p>
            <div className="pill-row" aria-label="Technology stack">
              <span className="pill">Next.js</span>
              <span className="pill">TypeScript</span>
              <span className="pill">OpenAI Responses API</span>
              <span className="pill">Vitest</span>
            </div>
          </div>

          <Card>
            <div className="muted">Milestone 1</div>
            <div className="metric">SaaS foundation</div>
            <p className="muted">
              Feature boundaries, shared types, request validation, standard API responses,
              error handling and automated quality gates.
            </p>
          </Card>
        </section>

        <KnowledgeAssistant />
      </Container>
    </main>
  );
}
