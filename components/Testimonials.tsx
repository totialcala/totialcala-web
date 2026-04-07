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
    name: "Lucía Ferrer",
    role: "Creadora de contenido · Plan anual",
    quote:
      "El ensayo técnico lo cambió todo. Yo pensaba que era un trámite, pero fue donde detectamos tres fallos que habrían arruinado el lanzamiento. Toti tiene un ojo clínico para los detalles que a mí se me escapan por estar en el escenario.",
    bg: "/images/photos/Clients_Bernat_001.png",
  },
  {
    id: 2,
    name: "Carlos Santamaría",
    role: "CEO · Evento corporativo Healthtech",
    quote:
      "Produjimos un evento híbrido para 400 personas con streaming simultáneo para Europa. Cero incidencias técnicas. El equipo de Toti coordinó todo sin que yo tuviera que preocuparme de nada. Profesionalidad de otro nivel.",
    bg: "/images/photos/Banzai_Badalona_Sanofi.png",
  },
  {
    id: 3,
    name: "Marta Iglesias",
    role: "Coach · 1er lanzamiento online",
    quote:
      "Era mi primer lanzamiento en directo y estaba aterrada. Toti no solo resolvió la técnica — me dio confianza. Llegué al directo tranquila, sabiendo que si algo pasaba, él lo tenía cubierto. Cerré el 40% de ventas en los primeros 20 minutos.",
    bg: "/images/photos/Live_ANDORRA_Criptoprofe1.png",
  },
];

const secondary = [
  {
    name: "Diego Ramos",
    role: "Consultor · Webinar de lanzamiento",
    quote: "\"Pensaba que con buen contenido era suficiente. Toti me demostró que la ejecución técnica es la mitad de la venta.\"",
  },
  {
    name: "Ana Cortés",
    role: "Directora de marketing · Sanofi",
    quote: "\"Para un evento farmacéutico con regulaciones estrictas, necesitaba a alguien que no fallara. Toti fue esa persona.\"",
  },
  {
    name: "Pau Vidal",
    role: "Emprendedor · Programa formativo",
    quote: "\"Lo que más me sorprendió fue la reunión previa. Ya en esa llamada vi que estaba ante un profesional de otro nivel.\"",
  },
  {
    name: "Sara Montoya",
    role: "Infoproductora · Latam",
    quote: "\"Trabajar con Toti desde Colombia fue como tenerle en la sala. La coordinación remota fue impecable de principio a fin.\"",
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

        {/* Bottom row — 4 static secondary testimonials */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {secondary.map((s, i) => (
            <FadeIn key={s.name} delay={0.2 + i * 0.07}>
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 h-full">
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {s.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 text-xs font-bold shrink-0">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{s.name}</div>
                    <div className="text-slate-600 text-xs">{s.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
