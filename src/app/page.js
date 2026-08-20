import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-selva">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 sm:py-24">
          <Image
            src="/logo-mark.svg"
            alt="Namsiku IA"
            width={96}
            height={96}
            className="h-20 w-20 sm:h-24 sm:w-24"
            priority
          />
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold text-crema sm:text-6xl">
              Namsiku IA
            </h1>
            <p className="font-display text-xl text-oro sm:text-2xl">
              Percibe. Piensa. Actúa.
            </p>
          </div>
          <p className="max-w-xl text-balance text-base text-crema/80 sm:text-lg">
            Consultoría en inteligencia artificial y automatización. Diseñamos
            agentes, flujos y modelos que amplifican lo que tu equipo ya sabe
            hacer — sin ruido, sin promesas vacías.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portafolio"
              className="rounded-full bg-oro px-6 py-3 text-sm font-medium text-selva transition-transform hover:scale-105"
            >
              Ver portafolio
            </Link>
            <Link
              href="/contacto"
              className="rounded-full border border-crema/30 px-6 py-3 text-sm font-medium text-crema transition-colors hover:border-oro hover:text-oro"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { titulo: "Automatización de procesos", href: "/servicios" },
            { titulo: "Agentes conversacionales", href: "/servicios" },
            { titulo: "Documentos con IA", href: "/servicios" },
            { titulo: "Análisis y modelos predictivos", href: "/servicios" },
          ].map((item) => (
            <Link
              key={item.titulo}
              href={item.href}
              className="group rounded-2xl border border-selva/10 bg-white p-6 transition-colors hover:border-oro"
            >
              <p className="font-display text-lg font-bold text-selva group-hover:text-oro">
                {item.titulo}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
