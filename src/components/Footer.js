import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-oro/25 bg-selva">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="font-display text-lg italic text-crema/60">
            Percibe. Piensa. Actúa.
          </p>
        </div>

        <div className="space-y-3">
          <p className="kicker text-oro/80">Contacto</p>
          <a href="mailto:hola@namsiku.ia" className="block text-sm text-crema/80 hover:text-oro">
            hola@namsiku.ia
          </a>
          <a
            href="https://wa.me/50000000000"
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-crema/80 hover:text-oro"
          >
            WhatsApp
          </a>
        </div>

        <div className="space-y-3">
          <p className="kicker text-oro/80">Redes</p>
          <a href="#" className="block text-sm text-crema/80 hover:text-oro">
            LinkedIn
          </a>
          <a href="#" className="block text-sm text-crema/80 hover:text-oro">
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-crema/10 px-4 py-5 sm:px-6">
        <p className="mx-auto max-w-6xl text-xs text-crema/45">
          © {year} Namsiku IA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
