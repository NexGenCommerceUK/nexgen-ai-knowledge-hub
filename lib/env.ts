export type ServerEnv = {
  openAiApiKey: string | null;
  openAiModel: string;
};

let cachedEnv: ServerEnv | null = null;

export function getServerEnv(): ServerEnv {
  if (cachedEnv) {
    return cachedEnv;
  }

  const apiKey = process.env.OPENAI_API_KEY?.trim() || null;
  const model = process.env.OPENAI_MODEL?.trim() || "gpt-5.6-luna";

  if (!model) {
    throw new Error("OPENAI_MODEL must not be empty.");
  }

  cachedEnv = {
    openAiApiKey: apiKey,
    openAiModel: model,
  };

  return cachedEnv;
}
