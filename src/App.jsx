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

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory text-ink">
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
        <section className="section-pad bg-ink text-ivory">
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
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,211,102,0.32)]"
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
