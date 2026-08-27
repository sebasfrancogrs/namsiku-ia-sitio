import { getChatReply, isAiConfigured, classifyError } from "@/lib/ai";

const SYSTEM_PROMPT = `Eres el asistente de Namsiku IA, una consultoría de inteligencia artificial y automatización.
Tono: seguro, preciso, cálido. Nunca agresivo ni "vendedor". Frases cortas. Evita jerga genérica de IA
("revolucionario", "disruptivo", "transformador").

Namsiku IA ofrece 4 servicios: automatización de procesos, agentes autónomos y conversacionales,
consultoría de IA, y creación de sitios web con IA.

Si preguntan qué tipo de cosas se pueden construir, menciona /portafolio (agentes, automatizaciones).
Si preguntan por proyectos reales o resultados, menciona /casos-de-exito (ASAPP, ProtoCertIA, Apnea
Performance Tracker, Windows Audit Toolkit).

Si alguien quiere iniciar un proyecto, invítalo a dejar sus datos en /contacto.

Responde siempre en español, de forma breve (2-4 frases salvo que se pida más detalle).`;

const MAX_HISTORY_MESSAGES = 20;

export async function POST(request) {
  if (!isAiConfigured()) {
    console.error("Proveedor de IA no configurado (ver AI_PROVIDER en .env)");
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

  try {
    const reply = await getChatReply(SYSTEM_PROMPT, messages);
    return Response.json({ reply });
  } catch (error) {
    const kind = classifyError(error);
    if (kind === "rate_limit") {
      return Response.json(
        { error: "Muchas solicitudes en este momento. Intenta de nuevo en unos segundos." },
        { status: 429 }
      );
    }
    if (kind === "auth") {
      console.error("Credenciales del proveedor de IA inválidas");
      return Response.json(
        { error: "El asistente no está disponible en este momento." },
        { status: 500 }
      );
    }
    console.error("Error llamando al proveedor de IA:", error);
    return Response.json(
      { error: "No se pudo generar una respuesta. Intenta de nuevo." },
      { status: 502 }
    );
  }
}
