import Kicker from "@/components/Kicker";

export const metadata = { title: "Sobre Namsiku IA" };

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <Kicker tone="selva">Sobre Namsiku IA</Kicker>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-selva sm:text-5xl">
        Percibir antes de actuar
      </h1>

      <blockquote className="mt-12 border-l-2 border-oro pl-6 sm:pl-10">
        <p className="font-display text-2xl italic leading-snug text-selva sm:text-3xl">
          Namsiku toma su nombre del hombre-jaguar del pueblo kogi: quien
          percibe con precisión antes de actuar, y actúa con la fuerza de
          haber entendido primero.
        </p>
      </blockquote>

      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-obsidiana/75">
        <p>
          No es una metáfora decorativa. Es el orden de trabajo que seguimos
          en cada proyecto: percibir el problema real, pensar la solución
          correcta, actuar sin ruido de por medio.
        </p>
        <p>
          La inteligencia artificial no reemplaza el criterio de un equipo,
          lo amplifica. Por eso no vendemos IA como fin en sí misma: la
          usamos cuando resuelve algo concreto y la dejamos fuera cuando no
          hace falta.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden border border-selva/10 bg-selva/10 sm:grid-cols-2">
        <div className="bg-crema p-8">
          <p className="kicker text-oro">Misión</p>
          <p className="mt-3 leading-relaxed text-obsidiana/75">
            Diseñar automatizaciones, agentes y modelos que amplifican la
            capacidad real de un equipo, con precisión y sin promesas
            vacías.
          </p>
        </div>
        <div className="bg-crema p-8">
          <p className="kicker text-oro">Visión</p>
          <p className="mt-3 leading-relaxed text-obsidiana/75">
            Ser la consultoría de referencia para equipos que quieren
            adoptar IA con criterio: lo justo, bien construido.
          </p>
        </div>
      </div>
    </div>
  );
}
