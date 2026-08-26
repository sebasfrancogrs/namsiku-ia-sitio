import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Kicker from "@/components/Kicker";
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
    <article>
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-selva sm:aspect-[16/6]">
        <Image src={caso.imagen} alt={caso.nombre} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-selva/90 via-selva/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <Link href="/portafolio" className="kicker text-crema/60 hover:text-oro">
            ← Portafolio
          </Link>
          <h1 className="mt-3 font-display text-3xl font-bold text-crema sm:text-5xl">
            {caso.nombre}
          </h1>
          {caso.esPlaceholder && (
            <p className="kicker mt-3 text-oro">Caso conceptual — placeholder de esta fase</p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="border-t border-selva/10 pt-6">
            <Kicker tone="selva">Problema</Kicker>
            <p className="mt-4 text-lg leading-relaxed text-obsidiana/75">
              {caso.problema}
            </p>
          </div>
          <div className="border-t border-selva/10 pt-6">
            <Kicker tone="selva">Solución</Kicker>
            <p className="mt-4 text-lg leading-relaxed text-obsidiana/75">
              {caso.solucion}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-selva/10 pt-6">
          <Kicker tone="selva">Herramientas</Kicker>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {caso.herramientas.map((h) => (
              <li key={h} className="font-display text-lg text-selva">
                {h}
              </li>
            ))}
          </ul>
        </div>

        {caso.mlResultado && (
          <div className="mt-16 border border-oro/25 p-6 sm:p-10">
            <Kicker>{caso.mlResultado.titulo}</Kicker>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-obsidiana/65">
              {caso.mlResultado.descripcion}
            </p>
            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
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
    </article>
  );
}
