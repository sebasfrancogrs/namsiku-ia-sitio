import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-selva">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-crema/70">Percibe. Piensa. Actúa.</p>
        </div>

        <div className="space-y-2 text-sm text-crema/80">
          <p className="font-medium text-crema">Contacto</p>
          <a href="mailto:hola@namsiku.ia" className="block hover:text-oro">
            hola@namsiku.ia
          </a>
          <a
            href="https://wa.me/50000000000"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-oro"
          >
            WhatsApp
          </a>
        </div>

        <div className="space-y-2 text-sm text-crema/80">
          <p className="font-medium text-crema">Redes</p>
          <a href="#" className="block hover:text-oro">
            LinkedIn
          </a>
          <a href="#" className="block hover:text-oro">
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-crema/10 px-4 py-4 text-center text-xs text-crema/50 sm:px-6">
        © {year} Namsiku IA. Todos los derechos reservados.
      </div>
    </footer>
  );
}
