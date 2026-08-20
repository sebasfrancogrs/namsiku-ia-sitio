import Anthropic from "@anthropic-ai/sdk";

const DEFAULT_MODEL = "claude-opus-5";

export function isConfigured() {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

export async function getReply(systemPrompt, messages) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const response = await client.messages.create({
    model: process.env.ANTHROPIC_MODEL || DEFAULT_MODEL,
    max_tokens: 1024,
    system: systemPrompt,
    output_config: { effort: "medium" },
    messages,
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock?.text ?? "";
}

export function isAuthError(error) {
  return error instanceof Anthropic.AuthenticationError;
}

export function isRateLimitError(error) {
  return error instanceof Anthropic.RateLimitError;
}
