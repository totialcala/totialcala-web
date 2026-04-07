"use client";

import FadeIn from "./ui/FadeIn";
import SectionBg from "./ui/SectionBg";

const steps = [
  { step: "01", title: "Cuéntame tu proyecto", description: "WhatsApp, email o formulario. Me explicas qué tienes en mente." },
  { step: "02", title: "Nos reunimos", description: "Una llamada donde te doy todo lo que sé. Suele convertirse en una mentoría — sin coste." },
  { step: "03", title: "Hacemos match", description: "Solo acepto proyectos donde puedo aportar de verdad. Si encajamos, seguimos." },
  { step: "04", title: "Preparamos juntos", description: "Escenario a medida, coordinación con tu equipo de marketing, planificación técnica completa." },
  { step: "05", title: "Ensayo técnico", description: "Obligatorio. Sin excepciones. Ningún cliente llega al directo sin pasar por él. Aquí es donde se gana el directo. No el día del evento." },
  { step: "06", title: "El directo", description: "Tú vendes. Yo dirijo desde el backstage con pinganillo, controlando cada segundo." },
  { step: "07", title: "Post-directo", description: "Grabación máster a máxima calidad entregada y lista para reutilizar. Más las métricas clave que necesitas para seguir mejorando en cada nuevo directo." },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-28 px-6 section-gradient overflow-hidden">
      <SectionBg src="/images/photos/Streamdeck001.png" alt="" side="left" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Así funciona
            <br />
            <span className="text-slate-400 font-normal">trabajar conmigo</span>
          </h2>
          <p className="text-slate-400 text-lg mb-16 max-w-xl">
            Un proceso pensado para que llegues al directo con cero preocupaciones técnicas.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.08}>
              <div className="flex items-start gap-6 group">
                <div className={`shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors duration-200 ${
                  i === steps.length - 1
                    ? "bg-sky-700 border-sky-600 text-white"
                    : "bg-slate-900 border-slate-800 group-hover:border-slate-600 text-slate-500 group-hover:text-slate-300"
                }`}>
                  {s.step}
                </div>
                <div className="flex-1 py-2.5">
                  <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed">{s.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
