import { Camera, MessageCircle, Phone } from "lucide-react";
import { INSTAGRAM_URL, PHONE_NUMBER, whatsappUrl } from "../data/contact.js";

const links = [
  ["Accueil", "#accueil"],
  ["Hôtel", "#hotel"],
  ["Restaurant", "#restaurant"],
  ["Piscine", "#piscine-bar"],
  ["Événements", "#evenements"],
  ["Galerie", "#galerie"],
  ["Contact", "#contact"],
];
const services = ["Hôtel", "Restaurant", "Bar", "Piscine", "Événementiel", "Livraison"];

export default function Footer() {
  return (
    <footer className="bg-[#080806] px-5 py-12 text-ivory md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="font-serif text-3xl text-gold">Villa Soudan</p>
          <p className="mt-4 max-w-sm leading-7 text-ivory/60">
            Hôtel, restaurant, bar, piscine et événementiel à Bamako, Mali.
          </p>
        </div>
        <div>
          <p className="footer-title">Liens rapides</p>
          <div className="mt-4 grid gap-2">
            {links.map(([label, href]) => (
              <a key={href} className="footer-link" href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Services</p>
          <div className="mt-4 grid gap-2 text-ivory/58">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="mt-4 grid gap-3">
            <a className="footer-contact" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Camera size={18} /> Instagram</a>
            <a className="footer-contact" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
            <a className="footer-contact" href={`tel:${PHONE_NUMBER}`}><Phone size={18} /> {PHONE_NUMBER}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-ivory/45">
        © {new Date().getFullYear()} Villa Soudan. Tous droits réservés.
      </div>
    </footer>
  );
}
