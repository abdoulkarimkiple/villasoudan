import { CalendarCheck, Handshake, MessageCircle, UsersRound } from "lucide-react";
import eventImage from "../assets/images/event-feature.png";
import { whatsappUrl } from "../data/contact.js";

const eventTypes = [
  "Anniversaires",
  "Dîners privés",
  "Réunions",
  "Cérémonies",
  "Événements familiaux",
  "Événements professionnels",
];

export default function Events() {
  return (
    <section id="evenements" className="section-pad bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <p className="eyebrow">Événementiel</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Recevez vos invités dans un cadre qui fait bonne impression</h2>
          <p className="mt-6 text-lg leading-8 text-ink/68">
            Pour une célébration intime, un dîner professionnel ou une cérémonie familiale, Villa Soudan offre un lieu accessible, chaleureux et bien organisé.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {eventTypes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-ivory px-4 py-4">
                <CalendarCheck size={19} className="text-palm" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <a className="btn-primary mt-8" href={whatsappUrl("Bonjour Villa Soudan, je souhaite demander un devis pour un événement.")} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            Demander un devis
          </a>
        </div>
        <div className="relative">
          <img className="aspect-[0.9] w-full object-cover shadow-soft" src={eventImage} alt="Événement à Villa Soudan" />
          <div className="absolute -bottom-6 left-5 right-5 grid grid-cols-2 gap-3 bg-ink p-5 text-ivory shadow-soft md:left-8 md:right-8">
            <div>
              <UsersRound className="text-gold" />
              <p className="mt-3 font-serif text-2xl">Familial</p>
            </div>
            <div>
              <Handshake className="text-gold" />
              <p className="mt-3 font-serif text-2xl">Professionnel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
