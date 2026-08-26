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
        <div className="mb-3 flex h-[70vh] max-h-[520px] w-[90vw] max-w-sm flex-col overflow-hidden border border-selva/15 bg-crema">
          <div className="flex items-center justify-between border-b border-oro/25 bg-selva px-4 py-3">
            <p className="font-display text-sm font-bold text-crema">
              Asistente Namsiku IA
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-crema/70 hover:text-oro"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-oro/15 text-obsidiana"
                    : "bg-white text-obsidiana"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] bg-white px-3 py-2 text-sm text-obsidiana/50">
                Escribiendo…
              </div>
            )}
            {error && <p className="text-xs text-ember">{error}</p>}
          </div>

          <form onSubmit={enviarMensaje} className="flex gap-3 border-t border-selva/10 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta…"
              className="flex-1 border-0 border-b border-selva/25 bg-transparent px-1 py-2 text-sm text-selva outline-none focus:border-oro"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="btn btn-ghost-on-light !px-4 !py-2 disabled:opacity-40"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-oro/40 bg-oro text-selva transition-colors hover:bg-crema"
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
