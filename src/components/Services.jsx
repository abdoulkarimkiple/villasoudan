import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="section-pad bg-ivory text-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Tout l’art de recevoir au même endroit</h2>
          <p>
            Villa Soudan réunit hôtellerie, restauration, détente et événementiel dans une
            atmosphère chaleureuse, pensée pour les familles comme pour les moments premium.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="premium-card group overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={service.image} alt={service.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-t-full border border-white/25 bg-villa-red text-white">
                    <Icon size={23} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{service.title}</h3>
                  <p className="mt-3 min-h-[72px] leading-7 text-white/66">{service.description}</p>
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-villa-red" href={service.anchor}>
                    Découvrir <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
