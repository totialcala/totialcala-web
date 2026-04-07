"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./ui/FadeIn";
import SectionBg from "./ui/SectionBg";
import Image from "next/image";

const services = [
  {
    level: "01",
    title: "Consultoría técnica",
    description: "Auditamos juntos tu setup técnico y te doy un plan de acción claro para que tu próximo directo sea profesional.",
    ideal: "Ideal si quieres saber exactamente qué mejorar antes de tu siguiente lanzamiento.",
    highlight: false,
  },
  {
    level: "02",
    title: "Realización técnica remota",
    description: "Tú presentas desde donde estés. Yo controlo y dirijo toda la producción en remoto, en tiempo real.",
    ideal: "Ideal para lanzamientos online sin necesidad de presencia física.",
    highlight: false,
  },
  {
    level: "03",
    title: "Producción presencial",
    description: "Me desplazo a tu ubicación con equipo completo. Un día, in situ, producción profesional de principio a fin.",
    ideal: "Ideal para lanzamientos presenciales o híbridos de un día.",
    highlight: true,
  },
  {
    level: "04",
    title: "Lanzamiento completo",
    description: "Me convierto en tu director técnico de confianza. No solo ejecuto: tomo decisiones en directo. Preparación, ensayos y todos los directos.",
    ideal: "Ideal para lanzamientos completos donde quieres delegar toda la parte técnica.",
    highlight: false,
  },
];

const moreServices = [
  {
    title: "Podcast",
    desc: "Grabación y podcast en directo desde cualquier lugar del mundo",
    image: "/images/photos/MicsRode.png",
  },
  {
    title: "Eventos globales",
    desc: "Producción audiovisual completa de eventos presenciales e híbridos",
    image: "/images/photos/Congress_001.png",
  },
  {
    title: "Webinars",
    desc: "Para los que no necesitan toda la artillería pero sí que funcione bien",
    image: "/images/photos/Vmix_Calls.png",
  },
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.intersectionRatio >= 0.6),
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeIn delay={index * 0.1}>
      <div
        ref={ref}
        className={`relative rounded-2xl p-6 border h-full transition-all duration-300 hover:-translate-y-1 ${
          s.highlight
            ? `bg-sky-950/40 border-sky-800/50 hover:border-sky-600 ${active ? "border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.15)] md:border-sky-800/50 md:shadow-none" : ""}`
            : `bg-slate-900/60 border-slate-800 hover:border-slate-600 ${active ? "border-white/50 shadow-[0_0_16px_rgba(255,255,255,0.06)] md:border-slate-800 md:shadow-none" : ""}`
        }`}
      >
        {s.highlight && (
          <span className="absolute -top-3 left-6 bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Más solicitado
          </span>
        )}
        <div className="text-sky-500 text-xs font-bold mb-2">NIVEL {s.level}</div>
        <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
        <p className="text-slate-400 text-base leading-relaxed mb-3">{s.description}</p>
        <p className="text-slate-500 text-sm italic">{s.ideal}</p>
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 px-6 section-gradient overflow-hidden">
      <SectionBg src="/images/photos/Fx6Cam_001.png" alt="" side="left" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Elige el nivel de soporte
          </h2>
          <p className="text-slate-400 text-lg mb-14">
            ¿No sabes cuál necesitas?{" "}
            <a href="#contacto" className="text-sky-400 hover:text-sky-300 transition-colors duration-200 cursor-pointer">
              La consulta inicial es gratuita.
            </a>
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {services.map((s, i) => (
            <ServiceCard key={s.level} s={s} index={i} />
          ))}
        </div>

        {/* Extras row */}
        <FadeIn delay={0.4}>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-slate-500 text-sm">También incluyo:</span>
              <span className="bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-full border border-slate-700">Días de ensayo técnico</span>
              <span className="bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-full border border-slate-700">Diseño gráfico — overlays · lower thirds · portadas</span>
            </div>
          </div>
        </FadeIn>

        {/* More services */}
        <FadeIn delay={0.45}>
          <div className="flex items-center gap-4 mb-5 mt-4">
            <div className="h-px flex-1 bg-slate-800" />
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">Más allá de los lanzamientos</span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {moreServices.map((s, i) => (
            <FadeIn key={s.title} delay={0.5 + i * 0.1}>
              <div className="group flex flex-col gap-3">
                <div className="bg-slate-900/40 border border-slate-800 group-hover:border-slate-600 rounded-xl p-5 transition-colors duration-200">
                  <h4 className="text-white font-semibold mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>

                {/* Mobile: always in color. Desktop: desaturated until hover */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover scale-105 opacity-60 saturate-100 md:opacity-20 md:saturate-0 group-hover:opacity-90 group-hover:saturate-100 group-hover:scale-100 transition-all duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
