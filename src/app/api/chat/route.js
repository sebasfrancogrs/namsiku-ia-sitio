import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `Eres el asistente de Namsiku IA, una consultoría de inteligencia artificial y automatización.
Tono: seguro, preciso, cálido. Nunca agresivo ni "vendedor". Frases cortas. Evita jerga genérica de IA
("revolucionario", "disruptivo", "transformador").

Namsiku IA ofrece 4 servicios: automatización de procesos, agentes conversacionales, extracción y
generación de documentos con IA, y análisis de datos con modelos predictivos.

Si te preguntan por casos o portafolio, menciona que hay ejemplos reales en /portafolio (ASAPP,
ProtoCertIA, Apnea Performance Tracker, Windows Audit Toolkit).

Si alguien quiere iniciar un proyecto, invítalo a dejar sus datos en /contacto.

Responde siempre en español, de forma breve (2-4 frases salvo que se pida más detalle).`;

const MAX_HISTORY_MESSAGES = 20;

export async function POST(request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY no está configurada");
    return Response.json(
      { error: "El asistente no está configurado todavía." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const incoming = Array.isArray(body?.messages) ? body.messages : [];
  const messages = incoming
    .filter((m) => m && typeof m.content === "string" && m.content.trim())
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    }));

  if (messages.length === 0) {
    return Response.json({ error: "Falta el mensaje." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      output_config: { effort: "medium" },
      messages,
    });

    const textBlock = response.content.find((b) => b.type === "text");

    return Response.json({ reply: textBlock?.text ?? "" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return Response.json(
        { error: "Muchas solicitudes en este momento. Intenta de nuevo en unos segundos." },
        { status: 429 }
      );
    }
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("Clave de Anthropic inválida");
      return Response.json(
        { error: "El asistente no está disponible en este momento." },
        { status: 500 }
      );
    }
    console.error("Error llamando a la API de Claude:", error);
    return Response.json(
      { error: "No se pudo generar una respuesta. Intenta de nuevo." },
      { status: 502 }
    );
  }
}
