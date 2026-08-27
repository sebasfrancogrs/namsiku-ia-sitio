import Link from "next/link";
import Image from "next/image";
import Kicker from "@/components/Kicker";
import CursorGlow from "@/components/CursorGlow";

const SERVICIOS_INDICE = [
  { numero: "01", titulo: "Automatización de Procesos", href: "/servicios#automatizacion" },
  { numero: "02", titulo: "Agentes Autónomos y Conversacionales", href: "/servicios#agentes" },
  { numero: "03", titulo: "Consultoría de IA", href: "/servicios#consultoria" },
  { numero: "04", titulo: "Creación de Sitios Web con IA", href: "/servicios#sitios-web" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-selva-textured">
        <CursorGlow />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-8">
          <div>
            <Kicker>Consultoría en IA y automatización</Kicker>
            <h1 className="mt-5 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] font-bold tracking-tight text-crema">
              Namsiku
              <br />
              <span className="text-oro">IA</span>
            </h1>
            <p className="mt-6 font-display text-2xl italic text-oro sm:text-3xl">
              Percibe. Piensa. Actúa.
            </p>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-md text-balance text-lg leading-relaxed text-crema/80">
              No vendemos inteligencia artificial. La usamos para resolver
              lo concreto: un agente que responde solo, un flujo que ya no
              necesita que alguien lo dispare a mano.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/casos-de-exito" className="btn btn-primary">
                Ver casos de éxito <span className="btn-arrow">→</span>
              </Link>
              <Link href="/contacto" className="btn btn-ghost-on-dark">
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </div>

        <Image
          src="/logo-mark.svg"
          alt=""
          aria-hidden="true"
          width={280}
          height={280}
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-[0.07] sm:h-72 sm:w-72"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Kicker>Lo que hacemos</Kicker>
            <h2 className="mt-4 font-display text-3xl font-bold text-selva">
              Cuatro formas de aplicar la IA con criterio
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-obsidiana/65">
              Cada proyecto empieza por el problema, no por la tecnología.
              La IA entra donde resuelve algo puntual. Donde no hace falta,
              se queda afuera.
            </p>
            <Link
              href="/servicios"
              className="btn btn-ghost-on-light mt-6 !inline-flex"
            >
              Ver servicios <span className="btn-arrow">→</span>
            </Link>
          </div>

          <ol className="flex-1 divide-y divide-selva/10 border-t border-selva/10">
            {SERVICIOS_INDICE.map((s) => (
              <li key={s.numero}>
                <Link
                  href={s.href}
                  className="group flex items-baseline gap-6 py-6 transition-colors hover:bg-selva/[0.03]"
                >
                  <span className="font-display text-sm text-oro">
                    {s.numero}
                  </span>
                  <span className="font-display text-xl font-semibold text-selva transition-transform group-hover:translate-x-1 sm:text-2xl">
                    {s.titulo}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
