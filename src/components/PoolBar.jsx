import { motion } from "framer-motion";
import { Martini, Music2, Palmtree, Waves } from "lucide-react";
import poolImage from "../assets/images/pool-feature.png";

const moments = [
  [Waves, "Piscine & détente"],
  [Martini, "Cocktails"],
  [Music2, "Afterwork"],
  [Palmtree, "Week-end au calme"],
];

export default function PoolBar() {
  return (
    <section id="piscine-bar" className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover opacity-45" src={poolImage} alt="Piscine et bar Villa Soudan" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95),rgba(0,0,0,0.66),rgba(0,0,0,0.36))]" />
        <div className="brand-pattern absolute inset-0 opacity-30" />
      </div>
      <div className="section-pad relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-gold">Bar & piscine</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Un espace visuel pour respirer, boire un verre et profiter</h2>
          <p className="mt-6 text-lg leading-8 text-ivory/72">
            Détente au bord de l'eau, cocktails, week-ends tranquilles, afterworks et moments entre amis dans une atmosphère calme et élégante.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {moments.map(([Icon, label]) => (
            <div key={label} className="premium-card p-5 backdrop-blur-md">
              <Icon className="text-gold" size={25} />
              <p className="mt-5 font-serif text-2xl">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
