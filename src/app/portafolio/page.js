import Image from "next/image";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import { casos } from "@/lib/portfolio";

export const metadata = { title: "Portafolio" };

export default function PortafolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-xl">
        <Kicker tone="selva">Portafolio</Kicker>
        <h1 className="mt-4 font-display text-4xl font-bold text-selva sm:text-5xl">
          Cinco casos, uno todavía en el papel
        </h1>
        <p className="mt-4 text-obsidiana/65">
          Así se ve la IA cuando resuelve algo puntual en vez de prometer
          todo. Cuatro proyectos ya construidos y uno conceptual, para
          mostrar cómo pensamos incluso antes de escribir código.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden border border-selva/10 bg-selva/10 sm:grid-cols-2 lg:grid-cols-3">
        {casos.map((caso, i) => (
          <Link
            key={caso.slug}
            href={`/portafolio/${caso.slug}`}
            className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-selva ${
              i === 0 ? "sm:col-span-2 sm:aspect-[16/9] lg:col-span-2 lg:aspect-[4/5]" : ""
            }`}
          >
            <Image
              src={caso.imagen}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-selva via-selva/10 to-transparent" />

            {caso.esPlaceholder && (
              <span className="kicker absolute right-4 top-4 z-10 text-oro/90">
                Concepto
              </span>
            )}

            <div className="relative z-10 p-6">
              <p className="font-display text-xl font-bold leading-tight text-crema">
                {caso.nombre}
              </p>
              <p className="mt-2 max-w-xs text-sm text-crema/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {caso.resumen}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
