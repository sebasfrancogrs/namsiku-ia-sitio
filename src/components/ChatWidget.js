"use client";

import { useRef, useState, useEffect } from "react";

const SALUDO_INICIAL = {
  role: "assistant",
  content:
    "Hola, soy el asistente de Namsiku IA. Preguntame sobre nuestros servicios, casos o cómo empezar un proyecto.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([SALUDO_INICIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function enviarMensaje(e) {
    e.preventDefault();
    const texto = input.trim();
    if (!texto || loading) return;

    const nuevosMensajes = [...messages, { role: "user", content: texto }];
    setMessages(nuevosMensajes);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nuevosMensajes }),
      });

      if (!res.ok) {
        throw new Error("No se pudo obtener respuesta");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setError("Hubo un problema al conectar con el asistente. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-3 flex h-[70vh] max-h-[520px] w-[90vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-selva/10 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-selva px-4 py-3">
            <p className="font-display text-sm font-bold text-crema">
              Asistente Namsiku IA
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-crema/80 hover:text-oro"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-oro/20 text-obsidiana"
                    : "bg-crema text-obsidiana"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-xl bg-crema px-3 py-2 text-sm text-obsidiana/60">
                Escribiendo…
              </div>
            )}
            {error && <p className="text-xs text-ember">{error}</p>}
          </div>

          <form onSubmit={enviarMensaje} className="flex gap-2 border-t border-selva/10 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta…"
              className="flex-1 rounded-full border border-selva/20 px-4 py-2 text-sm outline-none focus:border-oro"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-full bg-selva px-4 py-2 text-sm font-medium text-crema disabled:opacity-40"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-oro text-selva shadow-lg transition-transform hover:scale-105"
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
