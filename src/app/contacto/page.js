import Kicker from "@/components/Kicker";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Kicker tone="selva">Contacto</Kicker>
          <h1 className="mt-4 font-display text-4xl font-bold text-selva sm:text-5xl">
            Contanos qué tenés en mente
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-obsidiana/70">
            Nosotros vemos si tiene sentido resolverlo con IA. Y si no lo
            tiene, también te lo decimos.
          </p>

          <div className="mt-12 space-y-4 border-t border-selva/10 pt-6">
            <div>
              <p className="kicker text-oro">Email</p>
              <a href="mailto:hola@namsiku.ia" className="text-lg text-selva hover:text-oro">
                hola@namsiku.ia
              </a>
            </div>
            <div>
              <p className="kicker text-oro">WhatsApp</p>
              <a
                href="https://wa.me/50000000000"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-selva hover:text-oro"
              >
                Escribinos directo
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
