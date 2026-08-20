import ContactForm from "./ContactForm";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-selva sm:text-4xl">
        Contacto
      </h1>
      <p className="mt-3 text-obsidiana/70">
        Contanos brevemente tu proyecto y te respondemos a la brevedad.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
