import Kicker from "@/components/Kicker";
import FaqAccordion from "./FaqAccordion";

export const metadata = { title: "Servicios" };

const SERVICIOS = [
  {
    numero: "01",
    id: "automatizacion",
    titulo: "Automatización de Procesos",
    descripcion:
      "Convertimos tareas manuales y repetitivas (cotizaciones, traspaso de datos entre sistemas, generación de reportes) en flujos que corren solos, sin intervención humana.",
  },
  {
    numero: "02",
    id: "agentes",
    titulo: "Agentes Autónomos y Agentes Conversacionales",
    subitems: [
      {
        etiqueta: "Agentes conversacionales",
        texto:
          "Asistentes que responden en WhatsApp, tu web o donde ya esté tu cliente, sosteniendo el contexto de toda la conversación.",
      },
      {
        etiqueta: "Agentes autónomos",
        texto:
          "Sistemas que no solo responden, sino que ejecutan tareas por sí mismos dentro de un flujo de trabajo. Investigan, deciden entre opciones predefinidas y actúan, sin que un humano dispare cada paso a mano.",
      },
    ],
  },
  {
    numero: "03",
    id: "consultoria",
    titulo: "Consultoría de IA",
    descripcion:
      "Ayudamos a tu organización a identificar dónde la inteligencia artificial resuelve algo real, diseñar la solución correcta para ese problema específico e implementarla de principio a fin, sin vender tecnología que no necesitas.",
  },
  {
    numero: "04",
    id: "sitios-web",
    titulo: "Creación de Sitios Web con IA",
    descripcion:
      "Sitios profesionales construidos con flujos de trabajo de IA de principio a fin: diseño, contenido y desarrollo acelerados por IA, sin sacrificar calidad ni verse genéricos.",
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
            id={s.id}
            className="grid scroll-mt-24 gap-4 py-10 sm:grid-cols-[auto_1fr] sm:gap-10"
          >
            <span className="font-display text-4xl font-semibold text-oro sm:text-5xl">
              {s.numero}
            </span>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-selva">
                {s.titulo}
              </h2>

              {s.descripcion && (
                <p className="mt-3 leading-relaxed text-obsidiana/70">
                  {s.descripcion}
                </p>
              )}

              {s.subitems && (
                <div className="mt-4 space-y-4">
                  {s.subitems.map((sub) => (
                    <p key={sub.etiqueta} className="leading-relaxed text-obsidiana/70">
                      <span className="font-semibold text-selva">{sub.etiqueta}: </span>
                      {sub.texto}
                    </p>
                  ))}
                </div>
              )}
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
