import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import heroImage from "../assets/images/hero-villa.png";
import { whatsappUrl } from "../data/contact.js";
import BrandLogo from "./BrandLogo.jsx";

const stats = [
  ["12+", "Chambres"],
  ["6", "Services"],
  ["80+", "Événements"],
  ["1k+", "Clients satisfaits"],
];

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[92vh] overflow-hidden bg-ink text-ivory">
      <motion.img
        initial={{ scale: 1.04 }}
        animate={{ scale: 1.11 }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 h-full w-full object-cover"
        src={heroImage}
        alt="Villa Soudan à Bamako"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.62),rgba(0,0,0,0.3)),linear-gradient(0deg,rgba(0,0,0,0.98),rgba(0,0,0,0.06)_44%,rgba(0,0,0,0.78))]" />
      <div className="brand-pattern absolute inset-0 opacity-35" />
      <div className="absolute -right-20 top-24 hidden h-[72vh] w-[44vw] min-w-[380px] max-w-[620px] border-[10px] border-villa-red/70 opacity-75 arch-frame lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-villa-red" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-8 pt-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <BrandLogo compact className="mb-6" />
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="badge"><Sparkles size={14} /> Réservation rapide</span>
            <span className="badge"><ShieldCheck size={14} /> Ouvert à Bamako</span>
            <span className="badge"><Utensils size={14} /> Livraison disponible</span>
          </div>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
            Villa Soudan, élégance malienne à Bamako
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/78 md:text-xl">
            Hôtel boutique, table généreuse, piscine et événements dans une adresse pensée autour des arches soudanaises, du noir profond et du rouge signature.
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
          className="premium-card mt-16 grid grid-cols-2 overflow-hidden backdrop-blur-md md:grid-cols-4"
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
