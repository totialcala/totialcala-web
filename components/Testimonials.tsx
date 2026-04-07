"use client";

import { useState, useEffect } from "react";
import FadeIn from "./ui/FadeIn";
import Image from "next/image";

const featured = [
  {
    id: 0,
    name: "Marc Fortes",
    role: "Hospital Sant Joan de Déu, Barcelona",
    quote:
      "Excel·lent professional en tot el que es refereix al vídeo i el suport multimèdia. La seva expertesa en el sector salut ens ha donat una seguretat total en projectes molt complexes. Destaco el seu domini tècnic, la puntualitat i la capacitat d'adaptació a un entorn tan exigent com el nostre. Per als que ens agrada treballar amb bona gent, el Toti és un partner indispensable.",
    bg: "/images/photos/Congress_001.png",
    avatar: "/images/testimonials/marc-fortes.jpeg",
  },
  {
    id: 1,
    name: "Jordi Serrano Pons",
    role: "Medical Doctor · Digital Health, Global Health & Planetary Health",
    quote:
      "Trabajar con Toti desde 2012 ha sido una constante en muchos de nuestros proyectos más relevantes, desde Health 2.0 Barcelona hasta iniciativas internacionales como Universal Doctor o UhDa Health en Roma o Ginebra. Su manera de afrontar cada proyecto, combinando criterio, calma y precisión, aporta una tranquilidad difícil de encontrar. Es ese tipo de profesional que suma sin hacer ruido, pero cuya presencia se nota en cada resultado.",
    bg: "/images/photos/Auditori_AXA.png",
    avatar: "/images/testimonials/jordi-serrano.jpeg",
  },
  {
    id: 2,
    name: "Francisco Moreira",
    role: "CEO · Digital Tech Events",
    quote:
      "Llevo más de cinco años trabajando con Toti en eventos internacionales y, desde el primer momento, entendí que podía centrarme en el contenido y la experiencia sin preocuparme por la parte técnica. Ha liderado producciones complejas, conectando múltiples sedes y países en un mismo directo con una naturalidad que no es nada habitual. Trabajar con él es saber que todo fluye, incluso cuando el reto es especialmente exigente, sobretodo en LATAM (México y Colombia).",
    bg: "/images/photos/Banzai_Badalona_Sanofi.png",
    avatar: "/images/testimonials/francisco-moreira.jpeg",
  },
];


function getInitialIndex() {
  return Math.floor(Math.random() * featured.length);
}

export default function Testimonials() {
  const [active, setActive] = useState(getInitialIndex);

  // Auto-cycle every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = featured[active];

  return (
    <section className="py-20 px-6 section-gradient">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Lo que dicen los que ya lo vivieron
          </h2>
          <p className="text-slate-500 text-center mb-12">Clientes reales. Resultados reales.</p>
        </FadeIn>

        {/* Large featured — cycles through all 4 */}
        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden min-h-[320px] flex flex-col justify-end mb-6">
            {/* Background photo */}
            <div className="absolute inset-0">
              <Image
                key={t.bg}
                src={t.bg}
                alt=""
                fill
                className="object-cover opacity-25 saturate-50 blur-[2px] scale-105 transition-opacity duration-700"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="text-sky-800/60 text-7xl font-serif leading-none select-none mb-2">"</div>
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6 max-w-3xl">
                {t.quote}
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full border-2 border-sky-700/50 overflow-hidden shrink-0">
                    {"avatar" in t && t.avatar ? (
                      <Image src={t.avatar} alt={t.name} width={80} height={80} className="object-cover w-full h-full" />
                    ) : (
                      <div className="w-full h-full bg-sky-900/60 flex items-center justify-center text-sky-300 text-xl font-bold">
                        {t.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role}</div>
                  </div>
                </div>

                {/* Dot navigation */}
                <div className="flex gap-2">
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Testimonio ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === active ? "bg-sky-500 w-6" : "bg-slate-600 hover:bg-slate-400 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom row — hidden until real testimonials are ready */}
        {/* secondary.map(...) */}
      </div>
    </section>
  );
}
