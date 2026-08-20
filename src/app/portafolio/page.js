import Image from "next/image";
import Link from "next/link";
import { casos } from "@/lib/portfolio";

export const metadata = { title: "Portafolio" };

export default function PortafolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-selva sm:text-4xl">
          Portafolio
        </h1>
        <p className="mt-3 text-obsidiana/70">
          Casos reales — y uno conceptual — de lo que construimos cuando la IA
          se aplica con criterio.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {casos.map((caso) => (
          <Link
            key={caso.slug}
            href={`/portafolio/${caso.slug}`}
            className="group overflow-hidden rounded-2xl border border-selva/10 bg-white transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[8/5] w-full overflow-hidden bg-selva">
              <Image
                src={caso.imagen}
                alt={caso.nombre}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {caso.esPlaceholder && (
                <span className="absolute right-3 top-3 rounded-full bg-crema/90 px-3 py-1 text-xs font-medium text-selva">
                  Concepto
                </span>
              )}
            </div>
            <div className="p-5">
              <h2 className="font-display text-lg font-bold text-selva group-hover:text-oro">
                {caso.nombre}
              </h2>
              <p className="mt-2 text-sm text-obsidiana/70">{caso.resumen}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
