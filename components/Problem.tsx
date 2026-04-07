"use client";

import FadeIn from "./ui/FadeIn";
import SectionBg from "./ui/SectionBg";

const problems = [
  "El audio falla justo cuando presentas el precio",
  "Las slides no entran a tiempo",
  "Un invitado se desconecta sin avisar",
  "Tú mirando pantallas en lugar de conectar con tu audiencia",
  "Tu equipo de marketing preguntándote cosas que no debería preguntarte",
  "Ventas que no llegan porque algo rompió la magia del momento",
];

export default function Problem() {
  return (
    <section className="relative py-28 px-6 section-gradient overflow-hidden">
      <SectionBg src="/images/photos/Vmix_Calls.png" alt="" side="left" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Cuando hay dinero en juego,
            <br />
            <span className="text-red-400">improvisar no es una opción.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-14 max-w-xl">
            Cada vez que haces un directo importante, algo puede salir mal.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-3">
          {problems.map((problem, i) => (
            <FadeIn key={problem} delay={i * 0.08}>
              <div className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 hover:border-red-900/50 rounded-xl p-4 transition-colors duration-200">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">✕</span>
                <p className="text-slate-300 text-base leading-relaxed">{problem}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-10 border-l-2 border-red-500/50 pl-6">
            <p className="text-xl md:text-2xl font-semibold text-white">
              Un directo de ventas no es un directo normal.
            </p>
            <p className="text-slate-400 mt-2">
              Y cada fallo técnico tiene un coste concreto: ventas que no se cierran.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
