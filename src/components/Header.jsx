import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl } from "../data/contact.js";

const navItems = [
  ["Accueil", "#accueil"],
  ["Hôtel", "#hotel"],
  ["Restaurant", "#restaurant"],
  ["Piscine", "#piscine-bar"],
  ["Événements", "#evenements"],
  ["Galerie", "#galerie"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink/90 shadow-2xl backdrop-blur-xl" : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#accueil" className="group flex items-center gap-3 text-ivory">
          <span className="grid h-11 w-11 place-items-center border border-gold/60 bg-ivory/8 font-serif text-xl text-gold">
            VS
          </span>
          <span>
            <span className="block font-serif text-xl leading-none tracking-wide">Villa Soudan</span>
            <span className="text-[0.66rem] uppercase tracking-[0.3em] text-ivory/55">Bamako</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-primary py-3" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={17} />
            Réserver
          </a>
        </div>

        <button className="icon-btn lg:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Ouvrir le menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-white/10 bg-ink/96 px-5 pb-6 text-ivory backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 pt-4">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/8 py-4 text-sm uppercase tracking-[0.22em] text-ivory/78"
                >
                  {label}
                </a>
              ))}
              <a className="btn-primary mt-4 justify-center" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Réserver
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
