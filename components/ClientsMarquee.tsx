"use client";

import FadeIn from "./ui/FadeIn";

const creatorsBase = [
  "CenteIA",
  "Criptoprofe",
  "Bernat Casanyes",
  "AgencyMaster",
  "Xavi Esquerigüela",
];

const corporatesBase = [
  "Sanofi",
  "Roche",
  "Honeywell",
  "BIOCAT",
  "Hospital Clínic",
  "Vall d'Hebron",
  "Sant Joan de Déu",
  "Werfen",
];

// 4 copies so the total track is always wider than the container,
// and the -50% animation jumps exactly 2 sets → perfectly seamless loop.
const creatorsRow = [...creatorsBase, ...creatorsBase, ...creatorsBase, ...creatorsBase];
const corporatesRow = [...corporatesBase, ...corporatesBase, ...corporatesBase, ...corporatesBase];

export default function ClientsMarquee() {
  return (
    <section id="clientes" className="py-24">
      <FadeIn>
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Han confiado en mí
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Desde grandes corporaciones (hospitales, farmacéuticas, eventos de Healthtech de Europa) a los mejores creadores del mercado hispanohablante.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto px-6">
        {/* Row 1 — scroll left */}
        <div className="relative mb-4 marquee-container overflow-hidden">
          <div className="flex gap-4 marquee-left">
            {creatorsRow.map((name, i) => (
              <div
                key={`creator-${i}`}
                className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl px-6 py-3 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                <span className="text-white font-semibold text-lg">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="relative marquee-container overflow-hidden">
          <div className="flex gap-4 marquee-right">
            {corporatesRow.map((name, i) => (
              <div
                key={`corp-${i}`}
                className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl px-6 py-3 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                <span className="text-white font-semibold text-lg">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <FadeIn delay={0.3}>
        <div className="max-w-5xl mx-auto px-6 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "+500h", label: "en directos de venta" },
              { value: "+25", label: "lanzamientos ejecutados" },
              { value: "2,5M€", label: "facturados en directo" },
              { value: "+8 países", label: "producciones internacionales" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl px-6 py-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

    </section>
  );
}
