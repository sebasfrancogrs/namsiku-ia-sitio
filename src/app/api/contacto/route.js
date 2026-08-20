const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("N8N_CONTACT_WEBHOOK_URL no está configurada");
    return Response.json(
      { error: "El formulario no está configurado todavía." },
      { status: 500 }
    );
  }

  let datos;
  try {
    datos = await request.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const { nombre, email, tipoProyecto, mensaje } = datos ?? {};

  if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
    return Response.json(
      { error: "Nombre, email y mensaje son obligatorios." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Email inválido." }, { status: 400 });
  }

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        email,
        tipoProyecto: tipoProyecto ?? "",
        mensaje,
        origen: "namsiku-ia-sitio",
        enviadoEn: new Date().toISOString(),
      }),
    });

    if (!webhookRes.ok) {
      throw new Error(`n8n respondió ${webhookRes.status}`);
    }
  } catch (err) {
    console.error("Error reenviando al webhook de n8n:", err);
    return Response.json(
      { error: "No se pudo enviar el mensaje. Intenta más tarde." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
