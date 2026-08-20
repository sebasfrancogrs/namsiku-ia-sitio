import * as anthropic from "./anthropic";
import * as openrouter from "./openrouter";

const PROVIDERS = { anthropic, openrouter };

function resolveProvider() {
  const name = (process.env.AI_PROVIDER || "anthropic").toLowerCase();
  const provider = PROVIDERS[name];
  if (!provider) {
    throw new Error(
      `AI_PROVIDER="${name}" no reconocido. Valores válidos: ${Object.keys(PROVIDERS).join(", ")}.`
    );
  }
  return { name, provider };
}

export function isAiConfigured() {
  try {
    const { provider } = resolveProvider();
    return provider.isConfigured();
  } catch {
    return false;
  }
}

/**
 * Envía la conversación al proveedor de IA configurado por AI_PROVIDER
 * (ver .env.example) y devuelve el texto de respuesta.
 */
export async function getChatReply(systemPrompt, messages) {
  const { provider } = resolveProvider();
  return provider.getReply(systemPrompt, messages);
}

export function classifyError(error) {
  const { provider } = resolveProvider();
  if (provider.isAuthError(error)) return "auth";
  if (provider.isRateLimitError(error)) return "rate_limit";
  return "unknown";
}
