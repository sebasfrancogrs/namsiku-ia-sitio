"use client";

import { useState } from "react";

const TIPOS_PROYECTO = [
  "Automatización de procesos",
  "Agente conversacional",
  "Documentos con IA",
  "Análisis de datos / modelo predictivo",
  "Otro",
];

const ESTADO = {
  IDLE: "idle",
  ENVIANDO: "enviando",
  OK: "ok",
  ERROR: "error",
};

const inputClass =
  "mt-2 w-full border-0 border-b border-selva/25 bg-transparent px-0 py-2 text-selva outline-none transition-colors focus:border-oro";

export default function ContactForm() {
  const [estado, setEstado] = useState(ESTADO.IDLE);
  const [errores, setErrores] = useState({});

  function validar(datos) {
    const errs = {};
    if (!datos.nombre.trim()) errs.nombre = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
      errs.email = "Ingresa un email válido.";
    }
    if (!datos.mensaje.trim()) errs.mensaje = "Contanos brevemente tu proyecto.";
    return errs;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const datos = {
      nombre: form.get("nombre")?.toString() ?? "",
      email: form.get("email")?.toString() ?? "",
      tipoProyecto: form.get("tipoProyecto")?.toString() ?? "",
      mensaje: form.get("mensaje")?.toString() ?? "",
    };

    const errs = validar(datos);
    setErrores(errs);
    if (Object.keys(errs).length > 0) return;

    setEstado(ESTADO.ENVIANDO);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) throw new Error("request failed");
      setEstado(ESTADO.OK);
      formEl.reset();
    } catch {
      setEstado(ESTADO.ERROR);
    }
  }

  if (estado === ESTADO.OK) {
    return (
      <div className="border border-oro/30 p-8 sm:p-10">
        <p className="font-display text-2xl font-bold text-selva">
          Mensaje enviado
        </p>
        <p className="mt-2 text-obsidiana/65">
          Gracias por escribirnos. Te respondemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div>
        <label htmlFor="nombre" className="kicker text-selva/60">
          Nombre
        </label>
        <input id="nombre" name="nombre" type="text" required className={inputClass} />
        {errores.nombre && <p className="mt-2 text-xs text-ember">{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="email" className="kicker text-selva/60">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
        {errores.email && <p className="mt-2 text-xs text-ember">{errores.email}</p>}
      </div>

      <div>
        <label htmlFor="tipoProyecto" className="kicker text-selva/60">
          Tipo de proyecto
        </label>
        <select
          id="tipoProyecto"
          name="tipoProyecto"
          defaultValue={TIPOS_PROYECTO[0]}
          className={`${inputClass} cursor-pointer`}
        >
          {TIPOS_PROYECTO.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="kicker text-selva/60">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className={`${inputClass} resize-none`}
        />
        {errores.mensaje && <p className="mt-2 text-xs text-ember">{errores.mensaje}</p>}
      </div>

      {estado === ESTADO.ERROR && (
        <p className="text-sm text-ember">
          No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.
        </p>
      )}

      <button
        type="submit"
        disabled={estado === ESTADO.ENVIANDO}
        className="btn btn-ghost-on-light w-full justify-center sm:w-auto disabled:opacity-40"
      >
        {estado === ESTADO.ENVIANDO ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
