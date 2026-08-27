"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCarousel({ casos }) {
  const trackRef = useRef(null);

  function scrollByCard(direction) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const distance = card ? card.getBoundingClientRect().width + 24 : 360;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <div>
      <div className="mb-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Caso anterior"
          className="flex h-11 w-11 items-center justify-center border border-selva/25 text-selva transition-colors hover:border-selva hover:bg-selva hover:text-crema"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Caso siguiente"
          className="flex h-11 w-11 items-center justify-center border border-selva/25 text-selva transition-colors hover:border-selva hover:bg-selva hover:text-crema"
        >
          →
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 sm:-mx-6 sm:px-6"
      >
        {casos.map((caso) => (
          <Link
            key={caso.slug}
            data-card
            href={`/portafolio/${caso.slug}`}
            className="group w-[85vw] shrink-0 snap-start border border-selva/10 bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:border-oro sm:w-[380px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-selva">
              <Image
                src={caso.imagen}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              {caso.esPlaceholder && (
                <span className="kicker absolute right-3 top-3 z-10 bg-crema/90 px-2 py-1 text-selva">
                  Concepto
                </span>
              )}
            </div>
            <div className="p-6">
              <p className="kicker text-oro">{caso.categoria}</p>
              <p className="mt-2 font-display text-xl font-bold leading-tight text-selva">
                {caso.nombre}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-obsidiana/65">
                {caso.resumen}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-selva transition-transform group-hover:translate-x-1">
                Ver caso <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
