"use client";

import { useEffect, useRef } from "react";

/**
 * Halo cálido que sigue el cursor, restringido al hero oscuro de Inicio.
 * Inspirado en el efecto de luz de juanjojaramillo.com, pero reinterpretado
 * en tono oro y muy atenuado — decorativo, nunca protagonista.
 * Se desactiva con prefers-reduced-motion y no se monta en mobile (sin hover).
 */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = { x: 0.5, y: 0.25 };
    let pos = { x: 0.5, y: 0.25 };
    let raf;

    function onMove(e) {
      const rect = parent.getBoundingClientRect();
      target = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    }

    function tick() {
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      el.style.setProperty("--gx", `${pos.x * 100}%`);
      el.style.setProperty("--gy", `${pos.y * 100}%`);
      raf = requestAnimationFrame(tick);
    }

    parent.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden sm:block"
      style={{
        background:
          "radial-gradient(480px circle at var(--gx, 70%) var(--gy, 20%), rgba(176,141,69,0.14), transparent 70%)",
      }}
    />
  );
}
