import { motion } from "framer-motion";
import { Bike, ChefHat, Coffee, MessageCircle, Utensils } from "lucide-react";
import restaurantImage from "../assets/images/restaurant-feature.png";
import { whatsappUrl } from "../data/contact.js";

const highlights = [
  [Utensils, "Plats africains"],
  [ChefHat, "Cuisine moderne"],
  [Coffee, "Boissons fraîches"],
  [Bike, "Livraison possible"],
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="section-pad bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <img className="aspect-[0.94] w-full object-cover shadow-soft" src={restaurantImage} alt="Restaurant Villa Soudan" />
          <div className="absolute bottom-5 left-5 right-5 bg-ink/88 p-5 text-ivory backdrop-blur-md">
            <p className="font-serif text-2xl">Table généreuse, service élégant</p>
            <p className="mt-2 text-sm leading-6 text-ivory/68">Idéal pour les déjeuners, dîners, moments familiaux et commandes rapides.</p>
          </div>
        </motion.div>

        <div>
          <p className="eyebrow">Restaurant</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
            Une cuisine savoureuse dans un cadre raffiné
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/68">
            Villa Soudan valorise la convivialité autour de plats africains, de propositions modernes,
            de boissons bien servies et d'une ambiance familiale soignée. Sur place ou en livraison,
            chaque repas doit donner envie de revenir.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 border border-ink/10 bg-sand px-4 py-4">
                <Icon size={20} className="text-terracotta" />
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-secondary" href="#galerie">Voir le menu</a>
            <a className="btn-primary" href={whatsappUrl("Bonjour Villa Soudan, je souhaite commander au restaurant.")} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
