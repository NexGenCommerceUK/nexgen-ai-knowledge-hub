import { describe, expect, it } from "vitest";
import { AppError } from "../lib/errors/app-error";
import {
  knowledgeLimits,
  parseAnswerRequest,
} from "../features/knowledge/lib/validation";

describe("parseAnswerRequest", () => {
  it("normalises valid input", () => {
    expect(
      parseAnswerRequest({
        context: "  Approved company context  ",
        question: "  What do we build?  ",
      }),
    ).toEqual({
      context: "Approved company context",
      question: "What do we build?",
    });
  });

  it("rejects a missing question", () => {
    expect(() => parseAnswerRequest({ context: "Some context" })).toThrow(AppError);
  });

  it("rejects an oversized context", () => {
    expect(() =>
      parseAnswerRequest({
        context: "x".repeat(knowledgeLimits.contextMax + 1),
        question: "Valid question",
      }),
    ).toThrow(/characters or fewer/);
  });
});
