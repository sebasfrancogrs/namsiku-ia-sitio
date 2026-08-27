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
          <a href="mailto:sefraur@gmail.com" className="block text-sm text-crema/80 hover:text-oro">
            sefraur@gmail.com
          </a>
          <a
            href="https://wa.me/573215841393"
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-crema/80 hover:text-oro"
          >
            WhatsApp
          </a>
        </div>

        <div className="space-y-3">
          <p className="kicker text-oro/80">Redes</p>
          <a
            href="https://www.linkedin.com/in/sefraur/"
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-crema/80 hover:text-oro"
          >
            LinkedIn
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
