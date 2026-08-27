"use client";

import { useEffect, useRef } from "react";

const FAQS = [
  {
    pregunta: "¿Cómo es el proceso, de la primera reunión a la entrega?",
    respuesta:
      "Empezamos con una conversación corta para entender el problema real, no para vender un paquete cerrado. De ahí sale una propuesta con alcance y precio definidos. Construimos, mostramos avances en el camino y ajustamos antes de la entrega final.",
  },
  {
    pregunta: "¿Cuánto tiempo toma un proyecto típico?",
    respuesta:
      "Depende del alcance. La mayoría de las automatizaciones y agentes conversacionales quedan listos entre 2 y 6 semanas. Los proyectos de consultoría o sitios web varían más, según qué tan definido esté el alcance desde el inicio.",
  },
  {
    pregunta: "¿El sistema se despliega en mi infraestructura o en la de ustedes?",
    respuesta:
      "Las dos opciones son posibles. Podemos desplegarlo en tu propio servidor o cuenta cloud, o dejarlo corriendo en infraestructura que administramos nosotros. Lo definimos según qué tan cómodo te sientas gestionando el mantenimiento después.",
  },
  {
    pregunta: "¿Qué pasa si el flujo automatizado falla a mitad de proceso?",
    respuesta:
      "Cada flujo se construye con manejo de errores: si algo falla, no se pierde el dato ni queda a medias en silencio. Llega una alerta con el detalle exacto de qué paso falló, para reintentarlo o revisarlo a mano si hace falta.",
  },
  {
    pregunta: "¿Cuál es la diferencia entre un agente conversacional y uno autónomo?",
    respuesta:
      "Un agente conversacional responde: sostiene la conversación y entrega la información o el resultado que pediste. Un agente autónomo va un paso más allá: dentro de reglas claras, decide entre opciones y ejecuta la tarea sin que alguien dispare cada paso a mano. Muchos proyectos usan los dos juntos, uno conversa y el otro actúa detrás.",
  },
  {
    pregunta: "¿Y si no sé si la inteligencia artificial sirve para mi caso?",
    respuesta:
      "Para eso empieza ahí la consultoría, no al final. Revisamos tu proceso real y, si la conclusión es que la IA no aporta nada por ahora, te lo decimos directamente. No cobramos por instalar tecnología que no vas a usar.",
  },
  {
    pregunta: "¿Un sitio web hecho con flujos de IA no se ve genérico?",
    respuesta:
      "Ese riesgo es real cuando se usa IA para todo el proceso sin criterio. Nosotros la usamos para acelerar partes puntuales (redacción, iteración de diseño, primeras versiones de código), pero la dirección de marca y las decisiones de diseño las define un humano. El resultado se ve como tu marca, no como una plantilla.",
  },
  {
    pregunta: "¿Qué pasa si necesito soporte después de la entrega?",
    respuesta:
      "Cada proyecto incluye un periodo de soporte para ajustes y corrección de errores. Después de eso, podemos seguir con un plan de mantenimiento mensual, o dejar el sistema documentado para que tu equipo lo mantenga solo.",
  },
];

export default function FaqAccordion() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll("details"));

    function onToggle(e) {
      if (e.target.open) {
        items.forEach((d) => {
          if (d !== e.target) d.open = false;
        });
      }
    }

    items.forEach((d) => d.addEventListener("toggle", onToggle));
    return () => items.forEach((d) => d.removeEventListener("toggle", onToggle));
  }, []);

  return (
    <div ref={containerRef} className="divide-y divide-selva/10 border-t border-selva/10">
      {FAQS.map((f) => (
        <details key={f.pregunta} className="group py-6">
          <summary className="faq-summary flex cursor-pointer list-none items-center justify-between gap-6">
            <span className="font-display text-lg font-semibold text-selva sm:text-xl">
              {f.pregunta}
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-oro transition-transform duration-200 group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="mt-4 max-w-2xl leading-relaxed text-obsidiana/70">
            {f.respuesta}
          </p>
        </details>
      ))}
    </div>
  );
}
