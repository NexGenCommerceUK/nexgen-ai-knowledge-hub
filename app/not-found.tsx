import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <div className="state-panel">
        <div className="eyebrow">404</div>
        <h1>Page not found</h1>
        <p className="muted">The page you requested does not exist.</p>
        <Link className="button button-link" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
