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
  input: string
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  const model = process.env.OPENAI_MODEL || "gpt-5.6-luna";

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      model,
      instructions,
      input,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();

    console.error("OpenAI API error:", response.status, errorBody);

    throw new Error(
      `OpenAI request failed with status ${response.status}`
    );
  }

  const data = (await response.json()) as OpenAIResponse;

  if (typeof data.output_text === "string") {
    return data.output_text.trim();
  }

  const texts =
    data.output
      ?.flatMap((output) => output.content ?? [])
      .filter(
        (content) =>
          content.type === "output_text" &&
          typeof content.text === "string"
      )
      .map((content) => content.text as string) ?? [];

  return texts.join("\n").trim();
}