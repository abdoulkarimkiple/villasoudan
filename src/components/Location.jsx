import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { GOOGLE_MAPS_URL, PHONE_NUMBER, whatsappUrl } from "../data/contact.js";

export default function Location() {
  return (
    <section id="contact" className="section-pad bg-sand text-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
        <div className="rounded-[8px] border border-ink/10 bg-ivory p-7 shadow-soft md:p-10">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Nous trouver à Bamako</h2>
          <p className="mt-6 leading-8 text-ink/68">
            Adresse à compléter, Bamako, Mali. Ajoutez ici le quartier, les repères utiles et les horaires exacts.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex gap-3">
              <MapPin className="mt-1 text-terracotta" size={21} />
              <div>
                <p className="font-semibold">Villa Soudan</p>
                <p className="text-ink/62">Bamako, Mali</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="btn-secondary" href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
                <Navigation size={18} />
                Ouvrir dans Google Maps
              </a>
              <a className="btn-secondary" href={`tel:${PHONE_NUMBER}`}>
                <Phone size={18} />
                Appeler
              </a>
              <a className="btn-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-ink">
          <div className="brand-pattern absolute inset-0 opacity-75" />
          <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-gold/15 text-gold backdrop-blur-md">
            <MapPin size={42} />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-[8px] border border-villa-red/20 bg-ivory p-5 shadow-soft">
            <p className="font-serif text-2xl">Carte Google Maps</p>
            <p className="mt-2 text-sm leading-6 text-ink/62">Remplacez ce placeholder par une iframe Google Maps dès que l'adresse exacte est validée.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
