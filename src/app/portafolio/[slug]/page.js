import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { casos, getCasoBySlug } from "@/lib/portfolio";

export function generateStaticParams() {
  return casos.map((caso) => ({ slug: caso.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caso = getCasoBySlug(slug);
  return { title: caso ? caso.nombre : "Caso no encontrado" };
}

export default async function CasoPage({ params }) {
  const { slug } = await params;
  const caso = getCasoBySlug(slug);

  if (!caso) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/portafolio" className="text-sm text-selva/70 hover:text-oro">
        ← Volver al portafolio
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl border border-selva/10">
        <div className="relative aspect-[8/5] w-full">
          <Image src={caso.imagen} alt={caso.nombre} fill className="object-cover" />
        </div>
      </div>

      <h1 className="mt-8 font-display text-3xl font-bold text-selva sm:text-4xl">
        {caso.nombre}
      </h1>

      {caso.esPlaceholder && (
        <p className="mt-2 inline-block rounded-full bg-oro/20 px-3 py-1 text-xs font-medium text-selva">
          Caso conceptual — placeholder de esta fase
        </p>
      )}

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-bold text-selva">Problema</h2>
          <p className="mt-2 text-sm text-obsidiana/70">{caso.problema}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-selva">Solución</h2>
          <p className="mt-2 text-sm text-obsidiana/70">{caso.solucion}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-bold text-selva">
          Herramientas usadas
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {caso.herramientas.map((h) => (
            <li
              key={h}
              className="rounded-full bg-selva/5 px-3 py-1 text-xs font-medium text-selva"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>

      {caso.mlResultado && (
        <div className="mt-10 rounded-2xl border border-selva/10 bg-crema p-6">
          <h2 className="font-display text-lg font-bold text-selva">
            {caso.mlResultado.titulo}
          </h2>
          <p className="mt-2 text-sm text-obsidiana/70">
            {caso.mlResultado.descripcion}
          </p>
          <div className="relative mt-4 aspect-[8/5] w-full overflow-hidden rounded-xl border border-selva/10">
            <Image
              src={caso.mlResultado.imagen}
              alt={caso.mlResultado.titulo}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
