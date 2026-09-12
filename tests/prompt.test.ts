import { describe, expect, it } from "vitest";
import { buildKnowledgePrompt } from "../features/knowledge/lib/prompt";

describe("buildKnowledgePrompt", () => {
  it("includes business context and question", () => {
    const prompt = buildKnowledgePrompt({
      context: "Support hours are 09:00–17:00.",
      question: "When is support open?",
    });

    expect(prompt).toContain("Support hours are 09:00–17:00.");
    expect(prompt).toContain("When is support open?");
  });
});
