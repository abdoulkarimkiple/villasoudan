import { motion } from "framer-motion";
import { Check, MessageCircle, Snowflake, Wifi, ShieldCheck, Headphones } from "lucide-react";
import { rooms } from "../data/rooms.js";
import { whatsappUrl } from "../data/contact.js";

const comfort = [
  [Snowflake, "Climatisation"],
  [Wifi, "Wi-Fi"],
  [Headphones, "Service client"],
  [ShieldCheck, "Calme & sécurité"],
];

export default function Rooms() {
  return (
    <section id="hotel" className="section-pad bg-sand text-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow">Hôtel</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Des chambres calmes pour mieux vivre Bamako</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/68">
            Des espaces confortables, climatisés et sécurisés, avec un accueil attentionné pour les séjours courts, les voyages d'affaires et les moments en famille.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {comfort.map(([Icon, label]) => (
            <div key={label} className="flex items-center gap-3 rounded-[8px] border border-ink/10 bg-ivory px-4 py-4 shadow-sm">
              <Icon className="text-terracotta" size={20} />
              <span className="text-sm font-semibold uppercase tracking-[0.16em]">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.article
              key={room.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="premium-card overflow-hidden"
            >
              <img className="aspect-[1.18] w-full object-cover" src={room.image} alt={room.title} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl">{room.title}</h3>
                  <p className="max-w-[9rem] text-right text-sm font-semibold text-villa-red">{room.price}</p>
                </div>
                <div className="mt-5 grid gap-3">
                  {room.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-2 text-sm text-white/72">
                      <Check size={16} className="text-palm" />
                      {feature}
                    </span>
                  ))}
                </div>
                <a className="btn-secondary mt-6 w-full justify-center border-white/20 text-white hover:bg-white hover:text-ink" href={whatsappUrl(`Bonjour Villa Soudan, je souhaite réserver : ${room.title}.`)} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  Réserver
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
