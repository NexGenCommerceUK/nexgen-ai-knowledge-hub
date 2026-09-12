"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Field } from "../../../components/ui/field";
import { StatusBanner } from "../../../components/ui/status-banner";
import type { ApiResponse } from "../../../lib/http/api-response";
import { knowledgeLimits } from "../lib/validation";
import type { AnswerData } from "../types";

const defaultContext =
  "NexGenCommerce builds AI-powered web applications, SaaS products and workflow automation for growing businesses. Standard support hours are Monday to Friday, 09:00–17:00 UK time.";

const defaultQuestion = "What does NexGenCommerce build?";

export function KnowledgeAssistant() {
  const [context, setContext] = useState(defaultContext);
  const [question, setQuestion] = useState(defaultQuestion);
  const [answer, setAnswer] = useState<AnswerData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setAnswer(null);
    setError(null);

    try {
      const response = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context, question }),
      });

      const payload = (await response.json()) as ApiResponse<AnswerData>;

      if (!payload.ok) {
        setError(`${payload.error.message} (${payload.error.requestId})`);
        return;
      }

      setAnswer(payload.data);
    } catch {
      setError("The request could not be completed. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="workspace-grid" aria-label="Knowledge assistant">
      <Card className="workspace-card">
        <form onSubmit={handleSubmit}>
          <Field
            label="Business knowledge"
            hint={`${context.length.toLocaleString()} / ${knowledgeLimits.contextMax.toLocaleString()}`}
          >
            <textarea
              value={context}
              onChange={(event) => setContext(event.target.value)}
              maxLength={knowledgeLimits.contextMax}
              aria-describedby="knowledge-description"
            />
          </Field>

          <p id="knowledge-description" className="helper-text">
            For Milestone 1 this remains explicit demo context. Document storage arrives in a later milestone.
          </p>

          <Field
            label="Question"
            hint={`${question.length.toLocaleString()} / ${knowledgeLimits.questionMax.toLocaleString()}`}
          >
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              maxLength={knowledgeLimits.questionMax}
              minLength={knowledgeLimits.questionMin}
              required
            />
          </Field>

          <div className="form-actions">
            <Button type="submit" disabled={loading}>
              {loading ? "Thinking…" : "Ask the knowledge hub"}
            </Button>
          </div>
        </form>
      </Card>

      <Card className="answer-card">
        <div className="answer-heading">
          <strong>Answer</strong>
          {answer ? <span className={`mode mode-${answer.mode}`}>{answer.mode}</span> : null}
        </div>

        {error ? <StatusBanner tone="error">{error}</StatusBanner> : null}

        <div className="result" aria-live="polite" aria-busy={loading}>
          {loading
            ? "Preparing an answer…"
            : answer?.answer || "Your grounded answer will appear here."}
        </div>
      </Card>
    </section>
  );
}
