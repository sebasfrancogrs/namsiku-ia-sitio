import Kicker from "@/components/Kicker";
import FaqAccordion from "./FaqAccordion";

export const metadata = { title: "Servicios" };

const SERVICIOS = [
  {
    numero: "01",
    titulo: "Automatización de procesos",
    descripcion:
      "Esa tarea que alguien arma a mano cada semana, una cotización, un traspaso de datos entre sistemas, la convertimos en un flujo que corre solo.",
  },
  {
    numero: "02",
    titulo: "Agentes conversacionales",
    descripcion:
      "Un asistente que recuerda de qué se habló hace tres mensajes, no solo el último. Vive en WhatsApp, en tu web, o en el canal donde ya está tu cliente.",
  },
  {
    numero: "03",
    titulo: "Extracción y generación de documentos con IA",
    descripcion:
      "Leemos un documento con visión por computadora y generamos el certificado o el reporte del otro lado, por código, sin depender de una plantilla de Word a punto de romperse.",
  },
  {
    numero: "04",
    titulo: "Análisis de datos y modelos predictivos",
    descripcion:
      "Un modelo que mira tus datos y encuentra la correlación que ya sospechabas, pero no podías demostrar.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-xl">
        <Kicker tone="selva">Servicios</Kicker>
        <h1 className="mt-4 font-display text-4xl font-bold text-selva sm:text-5xl">
          Cómo lo hacemos
        </h1>
        <p className="mt-4 text-obsidiana/65">
          Cuatro formas concretas de amplificar lo que tu equipo ya hace
          bien. Ninguna empieza por &ldquo;instalar IA&rdquo;: todas
          arrancan por el problema real.
        </p>
      </div>

      <div className="mt-16 divide-y divide-selva/10 border-t border-selva/10">
        {SERVICIOS.map((s) => (
          <div
            key={s.numero}
            className="grid gap-4 py-10 sm:grid-cols-[auto_1fr] sm:gap-10"
          >
            <span className="font-display text-4xl font-semibold text-oro sm:text-5xl">
              {s.numero}
            </span>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-selva">
                {s.titulo}
              </h2>
              <p className="mt-3 leading-relaxed text-obsidiana/70">
                {s.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl">
        <Kicker tone="selva">Preguntas frecuentes</Kicker>
        <h2 className="mt-4 font-display text-3xl font-bold text-selva">
          Antes de que preguntes
        </h2>
        <div className="mt-8">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}
