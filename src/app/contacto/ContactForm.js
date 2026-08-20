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
      <div className="rounded-2xl border border-selva/10 bg-white p-6 text-center">
        <p className="font-display text-lg font-bold text-selva">
          Mensaje enviado
        </p>
        <p className="mt-2 text-sm text-obsidiana/70">
          Gracias por escribirnos. Te respondemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-selva">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-selva/20 px-4 py-2 text-sm outline-none focus:border-oro"
        />
        {errores.nombre && (
          <p className="mt-1 text-xs text-ember">{errores.nombre}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-selva">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-selva/20 px-4 py-2 text-sm outline-none focus:border-oro"
        />
        {errores.email && (
          <p className="mt-1 text-xs text-ember">{errores.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="tipoProyecto" className="block text-sm font-medium text-selva">
          Tipo de proyecto
        </label>
        <select
          id="tipoProyecto"
          name="tipoProyecto"
          defaultValue={TIPOS_PROYECTO[0]}
          className="mt-1 w-full rounded-lg border border-selva/20 px-4 py-2 text-sm outline-none focus:border-oro"
        >
          {TIPOS_PROYECTO.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-selva">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-selva/20 px-4 py-2 text-sm outline-none focus:border-oro"
        />
        {errores.mensaje && (
          <p className="mt-1 text-xs text-ember">{errores.mensaje}</p>
        )}
      </div>

      {estado === ESTADO.ERROR && (
        <p className="text-sm text-ember">
          No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.
        </p>
      )}

      <button
        type="submit"
        disabled={estado === ESTADO.ENVIANDO}
        className="rounded-full bg-selva px-6 py-3 text-sm font-medium text-crema transition-transform hover:scale-105 disabled:opacity-50"
      >
        {estado === ESTADO.ENVIANDO ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
