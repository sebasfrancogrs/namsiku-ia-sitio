import Image from "next/image";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import BenefitIcon from "@/components/BenefitIcon";
import { casos } from "@/lib/casos";

export const metadata = { title: "Casos de éxito" };

export default function CasosDeExitoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-xl">
        <Kicker tone="selva">Casos de éxito</Kicker>
        <h1 className="mt-4 font-display text-4xl font-bold text-selva sm:text-5xl">
          Lo que ya construimos
        </h1>
        <p className="mt-4 text-obsidiana/65">
          Proyectos reales, con el problema que resolvían y lo que cambió
          después de construirlos. Uno todavía está en desarrollo: lo
          marcamos así, no como caso cerrado.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {casos.map((caso) => (
          <article key={caso.slug} className="border-t border-selva/10 pt-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-selva">
                  <Image src={caso.imagen} alt={caso.nombre} fill className="object-contain" />
                </div>
                {caso.enDesarrollo && (
                  <p className="kicker mt-3 text-oro">En desarrollo — caso propuesto</p>
                )}
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-selva sm:text-3xl">
                  {caso.nombre}
                </h2>

                <div className="mt-6 space-y-5">
                  <div>
                    <Kicker>Problema</Kicker>
                    <p className="mt-2 leading-relaxed text-obsidiana/75">{caso.problema}</p>
                  </div>
                  <div>
                    <Kicker>Qué construimos</Kicker>
                    <p className="mt-2 leading-relaxed text-obsidiana/75">
                      {caso.queConstruimos}
                    </p>
                  </div>
                  <div>
                    <Kicker>{caso.enDesarrollo ? "Resultado esperado" : "Resultado"}</Kicker>
                    <p className="mt-2 leading-relaxed text-obsidiana/75">{caso.resultado}</p>
                    {caso.beneficios && (
                      <ul className="mt-4 space-y-2">
                        {caso.beneficios.map((b) => (
                          <li key={b.texto} className="flex items-start gap-3 text-sm">
                            <BenefitIcon name={b.icono} className="mt-0.5 h-4 w-4 shrink-0 text-oro" />
                            <span className="text-obsidiana/70">{b.texto}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-selva/10 pt-5">
                  {caso.herramientas.map((h) => (
                    <span key={h} className="text-xs text-obsidiana/50">
                      {h}
                    </span>
                  ))}
                </div>

                {caso.servicioRelacionado && (
                  <Link
                    href={caso.servicioRelacionado.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-selva hover:text-oro"
                  >
                    Servicio relacionado: {caso.servicioRelacionado.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}

                {caso.mlResultado && (
                  <div className="mt-8 border border-oro/25 p-6">
                    <Kicker>{caso.mlResultado.titulo}</Kicker>
                    <p className="mt-2 text-sm leading-relaxed text-obsidiana/65">
                      {caso.mlResultado.descripcion}
                    </p>
                    <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden">
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
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-start gap-4 border-t border-selva/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-obsidiana/70">
          ¿Quieres ver qué más podemos construir para un problema como el tuyo?
        </p>
        <Link href="/portafolio" className="btn btn-ghost-on-light">
          Ver capacidades <span className="btn-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
