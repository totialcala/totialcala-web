"use client";

import { useState, useEffect } from "react";
import FadeIn from "./ui/FadeIn";
import Image from "next/image";

const cases = [
  {
    tag: "Evento híbrido corporativo",
    type: "Roche Tomorrowland · Ciudad de México",
    stats: [
      { label: "Presencial", value: "600" },
      { label: "Online", value: "+850" },
      { label: "Salas simultáneas", value: "4" },
    ],
    images: [
      "/images/photos/Congress_001.png",
      "/images/photos/Auditori_AXA.png",
      "/images/photos/Banzai_Badalona_Sanofi.png",
    ],
    problem: { title: "Múltiples salas en paralelo, 3 idiomas, sin internet en el pabellón", body: "600 directivos y comerciales de toda Latam presenciales + 850 online en 4 salas de Zoom simultáneas. Traducción simultánea a inglés, español y portugués. Sin conexión a internet en el Pabellón de la Medicina." },
    solution: { title: "Despliegue técnico completo desde cero", body: "Internet vía satélite instalado in-situ. Streaming doble a Zoom y YouTube. 2 cámaras robóticas por sala × 4 salas + main stage con 3 cámaras, todas centralizadas vía NDI e IP. Realización con 5 PC VMix. Dirección técnica y ejecución integral." },
    result: { title: "Evento de referencia del sector Health Tech en Latam", body: "Feedback excelente de todos los asistentes. Grabación completa reutilizada para publicaciones internas de la compañía. Cero incidencias técnicas." },
  },
  {
    tag: "Evento híbrido corporativo",
    type: "Sector Healthtech · Europa",
    stats: [
      { label: "Duración", value: "1 día" },
      { label: "Asistentes", value: "400 + 2.000 online" },
      { label: "Países", value: "8" },
    ],
    images: [
      "/images/photos/Congress_001.png",
      "/images/photos/Auditori_AXA.png",
      "/images/photos/Banzai_Badalona_Sanofi.png",
    ],
    problem: { title: "Múltiples salas, idiomas y mercados simultáneos", body: "Streaming a 8 países, traducción simultánea y regulaciones estrictas del sector. Sin margen de error." },
    solution: { title: "Producción multicámara + streaming profesional", body: "Coordinación completa de producción presencial y remota con gestión diferenciada por mercado." },
    result: { title: "Evento de referencia del sector", body: "Cero incidencias. Feedback extraordinario de patrocinadores internacionales. Repeat client al año siguiente." },
  },
  {
    tag: "Webinar de lanzamiento",
    type: "Creadora de contenido",
    stats: [
      { label: "Días de directo", value: "1" },
      { label: "Asistentes", value: "+1.200" },
      { label: "Resultado", value: "60.000€" },
    ],
    images: [
      "/images/photos/Vmix_Calls.png",
      "/images/photos/Live CenteIA.png",
      "/images/photos/Fx6Cam_001.png",
    ],
    problem: { title: "Primer directo de venta, setup casero, pánico escénico", body: "Primera vez vendiendo en directo con carrito de alta inversión. Sin experiencia previa en este formato." },
    solution: { title: "Consultoría previa + realización técnica remota", body: "Estructura del directo, setup revisado en remoto y ensayo completo con simulación de venta en tiempo real." },
    result: { title: "Foco total en vender. Récord de conversión", body: "Sin ningún problema técnico. Foco 100% en vender. Mejor ratio de conversión de su historial." },
  },
];

function CaseDetail({ c, imgIdx }: { c: typeof cases[0]; imgIdx: number }) {
  return (
    <div className="flex flex-col md:flex-row h-full gap-0">
      {/* Left: text content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between min-w-0">
        <div>
          <div className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-1">{c.tag}</div>
          <div className="text-slate-400 text-sm mb-5">{c.type}</div>
          <div className="flex flex-wrap gap-2 mb-6">
            {c.stats.map((s) => (
              <div key={s.label} className="bg-slate-800/60 rounded-lg px-3 py-1.5">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-slate-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Proyecto inicial", color: "text-red-400", dot: "bg-red-500", data: c.problem },
            { label: "Solución", color: "text-sky-400", dot: "bg-sky-500", data: c.solution },
            { label: "Resultado", color: "text-green-400", dot: "bg-green-500", data: c.result },
          ].map(({ label, color, dot, data }) => (
            <div key={label}>
              <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-1 ${color}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${dot} shrink-0`} />
                {label}
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">{data.title}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{data.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: cycling image */}
      <div className="relative w-full md:w-52 h-48 md:h-auto shrink-0 overflow-hidden">
        {c.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className={`object-cover transition-opacity duration-700 ${i === imgIdx ? "opacity-70" : "opacity-0"}`}
            sizes="(max-width: 768px) 100vw, 208px"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 md:hidden" />
        {/* Image dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {c.images.map((_, i) => (
            <span
              key={i}
              className={`block h-1 rounded-full transition-all duration-300 ${i === imgIdx ? "bg-white w-4" : "bg-white/30 w-1"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [imgIndices, setImgIndices] = useState([0, 0, 0]);

  // Cycle images for the active case every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndices((prev) => {
        const next = [...prev];
        next[active] = (next[active] + 1) % cases[active].images.length;
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="py-28 px-6 section-gradient">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Casos de éxito</h2>
          <p className="text-slate-400 text-lg mb-16 max-w-xl">
            Proyectos reales. Problemas reales. Resultados reales.
          </p>
        </FadeIn>

        {/* ── DESKTOP: horizontal expanding panels ── */}
        <FadeIn delay={0.1}>
          <div className="hidden md:flex gap-3 h-[420px]">
            {cases.map((c, i) => {
              const isActive = i === active;
              return (
                <div
                  key={c.tag}
                  onMouseEnter={() => setActive(i)}
                  style={{ flex: isActive ? "2 1 0%" : "0.6 1 0%" }}
                  className={`relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "border-sky-800/50 bg-sky-950/20"
                      : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                  }`}
                >
                  {isActive ? (
                    <CaseDetail c={c} imgIdx={imgIndices[i]} />
                  ) : (
                    /* Compact inactive state */
                    <div className="flex flex-col justify-between h-full p-5">
                      <div>
                        <div className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-1 truncate">{c.tag}</div>
                        <div className="text-slate-500 text-xs truncate">{c.type}</div>
                      </div>
                      <div className="space-y-2">
                        {c.stats.map((s) => (
                          <div key={s.label}>
                            <div className="text-white font-bold text-sm">{s.value}</div>
                            <div className="text-slate-600 text-xs leading-tight">{s.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-slate-600 text-xs flex items-center gap-1.5">
                        <span>Ver caso</span>
                        <span>→</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* ── MOBILE: vertical accordion ── */}
        <div className="md:hidden space-y-3">
          {cases.map((c, i) => {
            const isOpen = i === active;
            return (
              <FadeIn key={c.tag} delay={i * 0.08}>
                <div
                  className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                    isOpen ? "border-sky-800/50 bg-sky-950/20" : "border-slate-800 bg-slate-900/60"
                  }`}
                >
                  {/* Accordion header — always visible */}
                  <button
                    onClick={() => setActive(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 cursor-pointer"
                  >
                    <div className="text-left">
                      <div className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-0.5">{c.tag}</div>
                      <div className="text-slate-400 text-sm">{c.type}</div>
                    </div>
                    <span className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>→</span>
                  </button>

                  {/* Accordion body */}
                  {isOpen && (
                    <div className="border-t border-slate-800/60">
                      <CaseDetail c={c} imgIdx={imgIndices[i]} />
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
