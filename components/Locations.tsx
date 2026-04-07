"use client";

import FadeIn from "./ui/FadeIn";
import SectionBg from "./ui/SectionBg";

const mainLocations = [
  {
    flag: "🇦🇩",
    country: "Andorra",
    detail: "Base actual",
    highlight: true,
  },
  {
    flag: "🇪🇸",
    country: "España",
    detail: "Girona · Barcelona · Madrid · Alicante",
    highlight: false,
  },
];

const latamLocations = [
  { flag: "🇲🇽", country: "México" },
  { flag: "🇨🇴", country: "Colombia" },
  { flag: "🇧🇷", country: "Brasil" },
  { flag: "🇦🇷", country: "Argentina" },
  { flag: "🇨🇱", country: "Chile" },
  { flag: "🇵🇪", country: "Perú" },
  { flag: "🇺🇾", country: "Uruguay" }, // fades out — suggests more
];

export default function Locations() {
  return (
    <section className="relative py-28 px-6 section-gradient overflow-hidden">
      <SectionBg src="/images/photos/Live_ANDORRA_Criptoprofe1.png" alt="" side="right" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: headline + copy */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Pocos productores
                <br />
                <span className="text-sky-400">se mueven tanto.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Basado en Andorra, con varios platós a disposición listos para grabar. Con plató propio en Girona de 95m². Y con decenas de platós listos gracias a la red de contactos, un simple WhatsApp y tienes tu plató confirmado en toda España.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tu trabajo me lleva donde necesitas que esté. He dirigido producciones en Latinoamérica como jefe de realización, streamings y eventos, sobre todo para el sector Health-Tech, con estándares de calidad muy elevados.
              </p>
            </div>

            {/* Right: location cards */}
            <div className="flex flex-col gap-3">
              {/* Andorra + España */}
              <div className="grid grid-cols-2 gap-3">
                {mainLocations.map((loc, i) => (
                  <FadeIn key={loc.country} delay={i * 0.08}>
                    <div
                      className={`rounded-2xl p-5 border transition-all duration-200 hover:-translate-y-1 h-full ${
                        loc.highlight
                          ? "bg-sky-950/40 border-sky-800/50"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-600"
                      }`}
                    >
                      <div className="text-3xl mb-2">{loc.flag}</div>
                      <div className="text-white font-semibold">{loc.country}</div>
                      <div className="text-slate-500 text-sm mt-1">{loc.detail}</div>
                      {loc.highlight && (
                        <div className="inline-flex items-center gap-1.5 mt-2 bg-sky-900/40 text-sky-400 text-xs px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 live-dot" />
                          Residencia actual
                        </div>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* LATAM row — compact badges, last one fades */}
              <FadeIn delay={0.2}>
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4">
                  <div className="text-slate-500 text-xs uppercase tracking-widest mb-3">Latinoamérica</div>
                  <div className="flex flex-wrap gap-2">
                    {latamLocations.map((loc, i) => {
                      const isLast = i === latamLocations.length - 1;
                      return (
                        <span
                          key={loc.country}
                          className={`inline-flex items-center gap-1.5 bg-slate-800/60 border border-slate-700 rounded-full px-3 py-1.5 text-sm transition-all duration-200 ${
                            isLast
                              ? "opacity-30 blur-[1px] select-none"
                              : "text-slate-300 hover:border-slate-500"
                          }`}
                        >
                          <span>{loc.flag}</span>
                          <span>{loc.country}</span>
                        </span>
                      );
                    })}
                    <span className="inline-flex items-center text-slate-600 text-sm px-1">···</span>
                  </div>
                </div>
              </FadeIn>

              {/* CTA line */}
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-3 text-slate-400 text-sm px-1">
                  <span className="text-sky-500">→</span>
                  <span>Nos movemos con tu proyecto donde sea necesario.</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
