import Link from "next/link";
import Kicker from "@/components/Kicker";
import BenefitIcon from "@/components/BenefitIcon";
import { capacidades } from "@/lib/capacidades";

export const metadata = { title: "Portafolio" };

export default function PortafolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-xl">
        <Kicker tone="selva">Portafolio</Kicker>
        <h1 className="mt-4 font-display text-4xl font-bold text-selva sm:text-5xl">
          Esto es lo que podemos construir
        </h1>
        <p className="mt-4 text-obsidiana/65">
          Antes de mostrar proyectos terminados, mostramos con qué piezas
          trabajamos. Elige la que más se parezca a tu problema y hablemos
          de cómo aplicarla en tu caso.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {capacidades.map((grupo) => (
          <div key={grupo.grupo}>
            <div className="flex items-baseline justify-between gap-4 border-b border-selva/10 pb-4">
              <h2 className="font-display text-2xl font-bold text-selva">
                {grupo.grupo}
              </h2>
              <Link
                href={grupo.servicioHref}
                className="kicker whitespace-nowrap text-oro hover:text-selva"
              >
                Ver servicio →
              </Link>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {grupo.items.map((item) => (
                <div key={item.titulo}>
                  <div className="flex h-11 w-11 items-center justify-center border border-oro/30 text-oro">
                    <BenefitIcon name={item.icono} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-selva">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-obsidiana/65">
                    {item.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-start gap-4 border-t border-selva/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-obsidiana/70">
          ¿Prefieres ver resultados reales en vez de piezas sueltas?
        </p>
        <Link href="/casos-de-exito" className="btn btn-ghost-on-light">
          Ver casos de éxito <span className="btn-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
