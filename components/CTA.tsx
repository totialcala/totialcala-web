"use client";

import FadeIn from "./ui/FadeIn";
import SlotsBadge from "./ui/Slotsbadge";

export default function CTA() {
  return (
    <section id="contacto" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="flex flex-col items-center gap-3 mb-8">
            <SlotsBadge size="md" />
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-sm text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 live-dot" />
              Acepto entre 3 y 4 proyectos al mes
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Si tu lanzamiento está en los próximos 90 días,
            <br />
            <span className="text-sky-400">no hay tiempo que perder.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            Tu directo tiene que estar al nivel de lo que vendes. Hablamos.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://calendly.com/totialcala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-white/90 text-slate-950 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer text-center"
            >
              Reserva en Calendly
            </a>
            <a
              href="https://wa.me/34615116485"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-700/20 hover:bg-green-700/40 border border-green-700/40 text-green-400 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer text-center"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            O escríbeme a{" "}
            <a
              href="mailto:hello@totialcala.com"
              className="text-sky-400 hover:text-sky-300 transition-colors duration-200 cursor-pointer"
            >
              hello@totialcala.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
