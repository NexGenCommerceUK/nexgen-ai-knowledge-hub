"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error", error);
  }, [error]);

  return (
    <main className="state-page">
      <div className="state-panel">
        <div className="eyebrow">Application error</div>
        <h1>Something went wrong</h1>
        <p className="muted">The page could not be completed safely.</p>
        <button className="button" type="button" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
