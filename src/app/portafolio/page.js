import Kicker from "@/components/Kicker";
import { casos } from "@/lib/portfolio";
import PortfolioCarousel from "./PortfolioCarousel";

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

      <div className="mt-14">
        <PortfolioCarousel casos={casos} />
      </div>
    </div>
  );
}
