const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

export function isConfigured() {
  return Boolean(process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_MODEL);
}

export class OpenRouterAuthError extends Error {}
export class OpenRouterRateLimitError extends Error {}

export async function getReply(systemPrompt, messages) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      // Recomendado por OpenRouter para atribuir el tráfico a este sitio.
      "HTTP-Referer": process.env.SITE_URL || "https://namsiku.ia",
      "X-Title": "Namsiku IA",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL,
      max_tokens: 1024,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    }),
  });

  if (res.status === 401 || res.status === 403) {
    throw new OpenRouterAuthError(`OpenRouter auth error (${res.status})`);
  }
  if (res.status === 429) {
    throw new OpenRouterRateLimitError("OpenRouter rate limited");
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`OpenRouter error ${res.status}: ${body}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}

export function isAuthError(error) {
  return error instanceof OpenRouterAuthError;
}

export function isRateLimitError(error) {
  return error instanceof OpenRouterRateLimitError;
}
