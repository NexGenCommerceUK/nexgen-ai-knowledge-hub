export default function Loading() {
  return (
    <main className="state-page" aria-busy="true" aria-live="polite">
      <div className="state-panel">
        <div className="eyebrow">NexGen AI Knowledge Hub</div>
        <h1>Loading…</h1>
        <p className="muted">Preparing your workspace.</p>
      </div>
    </main>
  );
}
