"use client";

import FadeIn from "./ui/FadeIn";
import SectionBg from "./ui/SectionBg";
import Image from "next/image";

const phases = [
  {
    number: "01",
    title: "Nos conocemos",
    description: "Me cuentas tu proyecto. Yo te digo exactamente cómo lo produciría, qué necesitas y qué no.",
  },
  {
    number: "02",
    title: "Preparamos juntos",
    description: "Diseño el escenario y la producción a medida. No hay plantillas. Cada lanzamiento es diferente.",
  },
  {
    number: "03",
    title: "Ensayo técnico",
    description: "Obligatorio. Sin excepciones. Ningún cliente llega al directo sin pasar por él. Aquí es donde se gana el directo. No el día del evento.",
  },
  {
    number: "04",
    title: "El gran día",
    description: "Tú en el escenario. Yo en el backstage con pinganillo, coordinando cada segundo junto a tu equipo.",
  },
];

export default function Solution() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <SectionBg src="/images/photos/Auditori Palau COngressos Andorra.png" alt="" side="right" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Tú vendes en el escenario.
              <br />
              <span className="text-sky-400">Yo y mi equipo nos encargamos de que nada falle desde el backstage.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Trabajo con creadores e infoproductores que tienen dinero real en juego y necesitan que el día del lanzamiento lo único que tengan que hacer sea vender.
            </p>
          </FadeIn>

          {/* Photo */}
          <FadeIn direction="left" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/photos/PlatoGirona_VirtualSet.png"
                alt="Plató propio en Girona"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-black/60 backdrop-blur-sm text-white/80 text-xs px-3 py-1.5 rounded-full border border-white/10">
                  Plató propio · Girona 95m²
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Phases */}
        <div className="grid md:grid-cols-4 gap-5">
          {phases.map((phase, i) => (
            <FadeIn key={phase.number} delay={i * 0.1}>
              <div className="bg-slate-900/60 border border-slate-800 hover:border-sky-900/50 rounded-2xl p-6 transition-colors duration-200 h-full">
                <div className="text-sky-500 font-bold text-sm mb-3">{phase.number}</div>
                <h3 className="text-white font-semibold mb-2">{phase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

