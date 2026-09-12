import { NextResponse } from "next/server";
import { askOpenAI } from "../../../lib/ai/openai";
import { AppError, toAppError } from "../../../lib/errors/app-error";
import type { ApiResponse } from "../../../lib/http/api-response";
import {
  buildKnowledgePrompt,
  knowledgeInstructions,
} from "../../../features/knowledge/lib/prompt";
import { parseAnswerRequest } from "../../../features/knowledge/lib/validation";
import type { AnswerData } from "../../../features/knowledge/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      throw new AppError("BAD_REQUEST", "Request body must be valid JSON.", 400);
    }

    const input = parseAnswerRequest(body);
    const prompt = buildKnowledgePrompt(input);
    const answer = await askOpenAI(knowledgeInstructions, prompt);

    const data: AnswerData = answer
      ? { answer, mode: "live" }
      : {
          answer:
            `Demo mode: I received your question “${input.question}”. ` +
            "Add OPENAI_API_KEY to .env.local to enable live AI responses.",
          mode: "demo",
        };

    const response: ApiResponse<AnswerData> = {
      ok: true,
      data,
      requestId,
    };

    return NextResponse.json(response, {
      status: 200,
      headers: { "x-request-id": requestId },
    });
  } catch (error) {
    const appError = toAppError(error);

    const response: ApiResponse<never> = {
      ok: false,
      error: {
        code: appError.code,
        message: appError.message,
        requestId,
        details: appError.details,
      },
    };

    return NextResponse.json(response, {
      status: appError.status,
      headers: { "x-request-id": requestId },
    });
  }
}
