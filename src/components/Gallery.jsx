import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { gallery } from "../data/gallery.js";
import { INSTAGRAM_URL } from "../data/contact.js";

export default function Gallery() {
  return (
    <section id="galerie" className="section-pad bg-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="section-heading mx-0 text-left">
            <p className="eyebrow">Galerie</p>
            <h2>Instants Villa Soudan</h2>
            <p>Une galerie inspirée d'Instagram, prête à accueillir les vraies photos de Villa Soudan.</p>
          </div>
          <a className="btn-secondary w-fit" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Camera size={18} />
            Instagram
          </a>
        </div>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {gallery.map((item, index) => (
            <motion.a
              key={item.label}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className={`group relative overflow-hidden ${index === 0 || index === 4 ? "row-span-2" : ""} ${index === 1 ? "md:col-span-2" : ""}`}
            >
              <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={item.label} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 bg-ivory/92 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
