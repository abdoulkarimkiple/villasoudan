import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <section className="section-pad brand-pattern bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-heading">
          <p className="eyebrow text-gold">Avis clients</p>
          <h2>Une adresse qui donne confiance</h2>
          <p className="text-ivory/68">Avis fictifs de présentation, à remplacer par les vrais retours clients.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="premium-card p-6 backdrop-blur-sm">
              <Quote className="text-gold" size={28} />
              <div className="mt-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 leading-7 text-ivory/74">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-serif text-xl">{testimonial.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/45">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
