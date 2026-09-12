import { getServerEnv } from "../env";
import { AppError } from "../errors/app-error";

type ResponseContent = {
  type?: string;
  text?: string;
};

type ResponseOutput = {
  content?: ResponseContent[];
};

type OpenAIResponse = {
  output_text?: string;
  output?: ResponseOutput[];
};

export async function askOpenAI(
  instructions: string,
  input: string,
): Promise<string | null> {
  const env = getServerEnv();

  if (!env.openAiApiKey) {
    return null;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.openAiApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: env.openAiModel,
      instructions,
      input,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("OpenAI API error", {
      status: response.status,
      body: body.slice(0, 500),
    });

    throw new AppError(
      "AI_UNAVAILABLE",
      "The AI service is temporarily unavailable.",
      502,
    );
  }

  const data = (await response.json()) as OpenAIResponse;

  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const texts =
    data.output
      ?.flatMap((output) => output.content ?? [])
      .filter(
        (content) =>
          content.type === "output_text" && typeof content.text === "string",
      )
      .map((content) => content.text as string) ?? [];

  const joined = texts.join("\n").trim();
  return joined || null;
}
