"use client";

import { useState } from "react";
import FadeIn from "./ui/FadeIn";

const WITHOUT = {
  border: "border-red-900/40",
  bg: "from-red-950/20",
  glow: "from-red-950/10",
  icon: "✕",
  iconColor: "text-red-500",
  labelActive: "text-red-400",
  titleSpan: "text-red-400",
  titleEnd: "O puede que no.",
  titleStart: "Tu próximo directo puede salir perfecto.",
  bullets: [
    "Pendiente de pantallas en lugar de vender",
    "El audio falla justo cuando presentas el precio",
    "Tu equipo te pregunta lo que no debería preguntarte",
    "Intentando sostenerlo todo, solo",
  ],
  insight: "No es un problema técnico. Es un problema de estructura. Sin un sistema claro, cada directo depende de la suerte, del estrés y de que «todo salga bien».",
  close: "El día que deberías estar cerrando ventas, estás gestionando problemas.",
};

const WITH = {
  border: "border-green-900/40",
  bg: "from-green-950/20",
  glow: "from-green-950/10",
  icon: "✓",
  iconColor: "text-green-500",
  labelActive: "text-green-400",
  titleSpan: "text-green-400",
  titleEnd: "Porque ya está diseñado para que lo sea.",
  titleStart: "Tu próximo directo va a salir perfecto.",
  bullets: [
    "Entras al directo con todo ensayado",
    "El sonido revisado, el equipo sabe qué hacer en cada momento",
    "Tú solo tienes una responsabilidad: vender",
  ],
  insight: "Hay una estructura detrás. Un plan claro. Un sistema probado. Todo está pensado: antes, durante y después del directo. Nada se improvisa. Y precisamente por eso… todo fluye.",
  close: "El directo deja de ser un riesgo.\nY se convierte en una herramienta para escalar.",
};

export default function FearCallout() {
  const [isPro, setIsPro] = useState(false);
  const s = isPro ? WITH : WITHOUT;

  return (
    <section className="py-8 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div
            className={`relative rounded-3xl border ${s.border} bg-gradient-to-br ${s.bg} to-slate-950/40 p-6 md:p-14 text-center overflow-hidden transition-colors duration-500`}
          >
            <div className={`absolute inset-0 bg-gradient-to-t ${s.glow} to-transparent pointer-events-none transition-colors duration-500`} />

            <div className="relative z-10">

              {/* Toggle */}
              <div className="flex items-center justify-center gap-3 mb-5 md:mb-10">
                <span className={`text-sm font-medium transition-colors duration-300 ${!isPro ? "text-red-400" : "text-slate-500"}`}>
                  Sin productora
                </span>
                <button
                  onClick={() => setIsPro(!isPro)}
                  aria-label="Cambiar escenario"
                  className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 cursor-pointer flex-shrink-0 ${
                    isPro ? "bg-green-500" : "bg-slate-700"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                      isPro ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium transition-colors duration-300 ${isPro ? "text-green-400" : "text-slate-500"}`}>
                  Con productora
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-4xl font-bold leading-tight mb-4 md:mb-8 text-white transition-all duration-300">
                {s.titleStart}
                <br />
                <span className={`${s.titleSpan} transition-colors duration-300`}>{s.titleEnd}</span>
              </h2>

              {/* Bullets */}
              <ul className="text-left max-w-md mx-auto mb-4 md:mb-8 space-y-2 md:space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className={`${s.iconColor} font-bold mt-0.5 shrink-0 transition-colors duration-300`}>{s.icon}</span>
                    <span className="text-slate-300 text-sm md:text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Insight */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-3 md:mb-6 italic transition-all duration-300">
                {s.insight}
              </p>

              {/* Close line */}
              <p className={`${s.titleSpan} font-semibold text-base md:text-lg mb-5 md:mb-10 transition-colors duration-300 whitespace-pre-line`}>
                {s.close}
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-slate-700 mx-auto mb-5 md:mb-8" />

              {/* Final question */}
              <p className="text-white text-xl md:text-3xl font-bold leading-tight mb-5 md:mb-8">
                ¿Y tú en qué vas a pensar<br className="hidden md:block" /> el día de tu lanzamiento?
              </p>

              {/* CTA */}
              <a
                href="#contacto"
                className="inline-block bg-white hover:bg-white/90 text-slate-950 font-bold px-8 py-3 md:py-4 rounded-xl transition-colors duration-200 cursor-pointer tracking-wide text-sm uppercase"
              >
                Agenda una llamada conmigo
              </a>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
