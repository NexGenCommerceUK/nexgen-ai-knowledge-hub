import { AppError } from "../../../lib/errors/app-error";
import type { AnswerRequest } from "../types";

export const knowledgeLimits = {
  questionMin: 2,
  questionMax: 1_000,
  contextMax: 20_000,
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseAnswerRequest(value: unknown): AnswerRequest {
  if (!isRecord(value)) {
    throw new AppError(
      "BAD_REQUEST",
      "Request body must be a JSON object.",
      400,
    );
  }

  const question = typeof value.question === "string" ? value.question.trim() : "";
  const context = typeof value.context === "string" ? value.context.trim() : "";

  if (question.length < knowledgeLimits.questionMin) {
    throw new AppError(
      "VALIDATION_ERROR",
      "Please enter a question.",
      400,
      { field: "question" },
    );
  }

  if (question.length > knowledgeLimits.questionMax) {
    throw new AppError(
      "VALIDATION_ERROR",
      `Question must be ${knowledgeLimits.questionMax} characters or fewer.`,
      400,
      { field: "question", max: knowledgeLimits.questionMax },
    );
  }

  if (context.length > knowledgeLimits.contextMax) {
    throw new AppError(
      "VALIDATION_ERROR",
      `Business knowledge must be ${knowledgeLimits.contextMax} characters or fewer.`,
      400,
      { field: "context", max: knowledgeLimits.contextMax },
    );
  }

  return { context, question };
}
