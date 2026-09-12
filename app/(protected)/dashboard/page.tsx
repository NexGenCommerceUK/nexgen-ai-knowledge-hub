import { Card } from "../../../components/ui/card";
import { KnowledgeAssistant } from "../../../features/knowledge/components/knowledge-assistant";

export default function DashboardPage() {
  return (
    <div className="dashboard-stack">
      <section className="dashboard-heading">
        <div>
          <div className="eyebrow">Authenticated workspace</div>
          <h1>Knowledge dashboard</h1>
          <p className="muted">
            Your protected SaaS workspace. Document storage and retrieval arrive in the next
            milestones; the existing knowledge assistant remains available for validation.
          </p>
        </div>

        <Card>
          <div className="muted">Milestone 2</div>
          <div className="metric">Authentication</div>
          <p className="muted">
            Email/password accounts, cookie-based SSR sessions, protected routes and user account
            management.
          </p>
        </Card>
      </section>

      <KnowledgeAssistant />
    </div>
  );
}
