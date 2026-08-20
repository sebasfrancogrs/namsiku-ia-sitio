export const metadata = { title: "Sobre Namsiku IA" };

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-selva sm:text-4xl">
        Sobre Namsiku IA
      </h1>

      <div className="mt-8 space-y-6 text-obsidiana/80">
        <p>
          El nombre Namsiku toma su raíz del pueblo kogi y la figura del{" "}
          <strong>hombre-jaguar</strong>: quien percibe con precisión antes de
          actuar, y actúa con la fuerza de haber entendido primero. No es una
          metáfora decorativa — es el orden de trabajo que seguimos en cada
          proyecto: percibir el problema real, pensar la solución correcta,
          actuar sin ruido.
        </p>
        <p>
          Creemos que la inteligencia artificial no reemplaza el criterio de
          un equipo — lo amplifica. Por eso no vendemos IA como fin en sí
          misma: la usamos como herramienta cuando resuelve algo concreto, y
          la dejamos fuera cuando no.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-selva/10 bg-white p-6">
          <h2 className="font-display text-xl font-bold text-selva">Misión</h2>
          <p className="mt-2 text-sm text-obsidiana/70">
            Diseñar automatizaciones, agentes y modelos que amplifican la
            capacidad real de un equipo, con precisión y sin promesas vacías.
          </p>
        </div>
        <div className="rounded-2xl border border-selva/10 bg-white p-6">
          <h2 className="font-display text-xl font-bold text-selva">Visión</h2>
          <p className="mt-2 text-sm text-obsidiana/70">
            Ser la consultoría de referencia para equipos que quieren adoptar
            IA con criterio: lo justo, bien construido, sostenible.
          </p>
        </div>
      </div>
    </div>
  );
}
