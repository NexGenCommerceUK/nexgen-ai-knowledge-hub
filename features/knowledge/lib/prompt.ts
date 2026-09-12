import type { AnswerRequest } from "../types";

export const knowledgeInstructions = [
  "You are the NexGen AI Knowledge Hub.",
  "Answer using the supplied business knowledge whenever possible.",
  "Do not invent facts that are absent from the supplied knowledge.",
  "If the knowledge does not contain enough evidence, say that clearly.",
  "Keep the answer concise, useful, and professional.",
].join(" ");

export function buildKnowledgePrompt({ context, question }: AnswerRequest): string {
  return [
    "Business knowledge:",
    context || "No private business knowledge was supplied.",
    "",
    "Question:",
    question,
  ].join("\n");
}
