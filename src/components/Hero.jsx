import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import heroImage from "../assets/images/hero-villa.png";
import { whatsappUrl } from "../data/contact.js";

const stats = [
  ["12+", "Chambres"],
  ["6", "Services"],
  ["80+", "Événements"],
  ["1k+", "Clients satisfaits"],
];

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[92vh] overflow-hidden bg-ink text-ivory">
      <img className="absolute inset-0 h-full w-full object-cover" src={heroImage} alt="Villa Soudan à Bamako" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,10,0.88),rgba(12,12,10,0.56),rgba(12,12,10,0.22)),linear-gradient(0deg,rgba(12,12,10,0.95),rgba(12,12,10,0.02)_42%,rgba(12,12,10,0.75))]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-8 pt-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="badge"><Sparkles size={14} /> Réservation rapide</span>
            <span className="badge"><ShieldCheck size={14} /> Ouvert à Bamako</span>
            <span className="badge"><Utensils size={14} /> Livraison disponible</span>
          </div>
          <h1 className="font-serif text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
            Villa Soudan — Hôtel, Restaurant & Art de vivre à Bamako
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/78 md:text-xl">
            Un lieu chaleureux et raffiné pour séjourner, manger, se détendre et célébrer vos meilleurs moments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Réserver sur WhatsApp
            </a>
            <a className="btn-secondary border-ivory/28 text-ivory hover:bg-ivory hover:text-ink" href="#services">
              Voir nos services
              <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 border border-white/14 bg-ivory/8 backdrop-blur-md md:grid-cols-4"
        >
          {stats.map(([value, label]) => (
            <div key={label} className="border-white/12 p-5 md:border-r last:md:border-r-0">
              <p className="font-serif text-3xl text-gold md:text-4xl">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-ivory/62">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
