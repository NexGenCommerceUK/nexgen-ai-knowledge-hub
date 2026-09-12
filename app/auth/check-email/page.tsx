import Link from "next/link";
import { Card } from "../../../components/ui/card";

export const metadata = { title: "Check your email" };

export default function CheckEmailPage() {
  return (
    <main className="state-page">
      <Card className="state-panel">
        <div className="eyebrow">Account created</div>
        <h1>Check your email</h1>
        <p className="muted">
          We sent a confirmation message to the email address you used. Open it to verify your
          account, then you will be redirected back to the Knowledge Hub.
        </p>
        <Link href="/auth/sign-in" className="button button-link">
          Return to sign in
        </Link>
      </Card>
    </main>
  );
}
