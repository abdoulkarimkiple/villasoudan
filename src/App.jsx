import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Rooms from "./components/Rooms.jsx";
import Restaurant from "./components/Restaurant.jsx";
import PoolBar from "./components/PoolBar.jsx";
import Events from "./components/Events.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import { PHONE_NUMBER, whatsappUrl } from "./data/contact.js";
import BrandLogo from "./components/BrandLogo.jsx";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory text-ink">
      <div className={`loading-screen ${loaded ? "is-hidden" : ""}`} aria-hidden={loaded}>
        <div className="loading-ring">
          <BrandLogo compact />
        </div>
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Rooms />
        <Restaurant />
        <PoolBar />
        <Events />
        <Gallery />
        <Testimonials />
        <Location />
        <section className="section-pad brand-pattern bg-ink text-ivory">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
            <div>
              <p className="eyebrow text-gold">Réservation rapide</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                Réservez votre expérience à Villa Soudan dès maintenant
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ivory/72 md:text-lg">
                Chambres, tables, piscine, événements ou livraison : l'équipe vous répond rapidement
                pour préparer votre venue dans les meilleures conditions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a className="btn-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Réserver sur WhatsApp
              </a>
              <a className="btn-secondary border-ivory/25 text-ivory hover:bg-ivory hover:text-ink" href={`tel:${PHONE_NUMBER}`}>
                <Phone size={18} />
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/18 bg-villa-red text-white shadow-[0_18px_45px_rgba(255,36,0,0.28)] transition hover:-translate-y-1 hover:bg-white hover:text-ink"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Réserver sur WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  );
}

export default App;
