export const metadata = { title: "Servicios" };

const SERVICIOS = [
  {
    titulo: "Automatización de procesos",
    descripcion:
      "Diseñamos y construimos flujos que eliminan trabajo manual repetitivo — desde cotizaciones hasta reportes — conectando las herramientas que tu equipo ya usa.",
  },
  {
    titulo: "Agentes conversacionales",
    descripcion:
      "Asistentes que sostienen una conversación real, con memoria y estado, integrados a WhatsApp, web o los canales donde ya está tu cliente.",
  },
  {
    titulo: "Extracción y generación de documentos con IA",
    descripcion:
      "Leemos documentos con visión por computadora y generamos certificados, reportes o contratos oficiales por código, sin plantillas frágiles.",
  },
  {
    titulo: "Análisis de datos y modelos predictivos",
    descripcion:
      "Modelos que encuentran la correlación real detrás de tus datos, para decisiones basadas en evidencia y no en intuición.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-selva sm:text-4xl">
          Servicios
        </h1>
        <p className="mt-3 text-obsidiana/70">
          Cuatro formas concretas en las que la IA puede amplificar lo que tu
          equipo ya hace bien.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {SERVICIOS.map((s) => (
          <div
            key={s.titulo}
            className="rounded-2xl border border-selva/10 bg-white p-6"
          >
            <h2 className="font-display text-xl font-bold text-selva">
              {s.titulo}
            </h2>
            <p className="mt-2 text-sm text-obsidiana/70">{s.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
