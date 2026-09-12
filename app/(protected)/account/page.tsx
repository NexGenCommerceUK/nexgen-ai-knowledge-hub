import { Card } from "../../../components/ui/card";
import { requireUser } from "../../../features/auth/require-user";

export default async function AccountPage() {
  const user = await requireUser();

  return (
    <section className="account-grid">
      <div>
        <div className="eyebrow">Account</div>
        <h1>Your profile</h1>
        <p className="muted">
          Authentication identity is managed by Supabase Auth. Application-specific profile data
          will be added with the PostgreSQL schema in Milestone 3.
        </p>
      </div>

      <Card>
        <dl className="profile-list">
          <div>
            <dt>Email</dt>
            <dd>{user.email ?? "Not available"}</dd>
          </div>
          <div>
            <dt>User ID</dt>
            <dd className="mono break-word">{user.id}</dd>
          </div>
          <div>
            <dt>Created</dt>
            <dd>{new Date(user.created_at).toLocaleString("en-GB")}</dd>
          </div>
        </dl>
      </Card>
    </section>
  );
}
