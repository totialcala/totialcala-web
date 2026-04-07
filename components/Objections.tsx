"use client";

import { useState } from "react";
import FadeIn from "./ui/FadeIn";

const mobileObjections: { question: string; answer: string[] }[] = [
  {
    question: "¿Puedo hacerlo yo mismo?",
    answer: ["Sí.", "Pero entonces no estarás 100% centrado en vender."],
  },
  {
    question: "¿Es caro?",
    answer: ["Depende.", "Si el directo importa, no lo es."],
  },
  {
    question: "¿Qué pasa si algo falla?",
    answer: ["Se gestiona.", "Sin que afecte al resultado."],
  },
  {
    question: "¿Trabajas con equipos?",
    answer: ["Sí. Me integro y coordino."],
  },
  {
    question: "¿Cuándo tiene sentido trabajar contigo?",
    answer: ["Cuando hay dinero en juego."],
  },
];

const objections: { question: string; answer: string[] }[] = [
  {
    question: "¿No puedo gestionarlo yo mismo o con mi equipo?",
    answer: [
      "Sí, puedes.",
      "Pero la pregunta no es si puedes… es si quieres estar pendiente de la técnica cuando deberías estar vendiendo.",
      "En un directo de ventas, cualquier fallo rompe el momento. Y ese momento no vuelve.",
      "Mi trabajo es que tú no tengas que pensar en nada de eso. Solo en ejecutar.",
    ],
  },
  {
    question: "¿Es caro para lo que es?",
    answer: [
      "Depende de cómo lo mires.",
      "Si lo comparas con \"alguien que conecta cámaras\", sí. Si lo comparas con lo que está en juego en tu lanzamiento, no.",
      "No estás pagando por técnica. Estás pagando por control, tranquilidad y ejecución cuando importa.",
    ],
  },
  {
    question: "¿Qué pasa si no hacemos match?",
    answer: [
      "No pasa nada.",
      "Solo trabajo con proyectos donde sé que puedo aportar de verdad. Si no lo veo claro, te lo diré.",
      "Prefiero eso a aceptar proyectos donde no voy a marcar la diferencia.",
    ],
  },
  {
    question: "¿Puedes trabajar con mi equipo de marketing?",
    answer: [
      "Sí. De hecho, es lo normal.",
      "Me integro con tu equipo y coordino la parte técnica para que todo funcione con lo que ellos necesitan.",
      "Mi objetivo no es sustituir a nadie. Es que todo esté alineado y fluya.",
    ],
  },
  {
    question: "¿Y si algo falla igualmente en el directo?",
    answer: [
      "Siempre pueden pasar cosas.",
      "La diferencia es cómo se gestionan.",
      "Cuando hay estructura, ensayo y dirección, los problemas no escalan. Se resuelven sin que el espectador lo note.",
      "Eso es lo que cambia todo.",
    ],
  },
  {
    question: "¿Trabajas fuera de España?",
    answer: [
      "Sí.",
      "Estoy basado en Andorra, pero trabajo donde tenga sentido estar: España, Europa o Latinoamérica.",
    ],
  },
  {
    question: "¿Qué resultados puedo esperar?",
    answer: [
      "No garantizo ventas.",
      "Pero sí garantizo que el directo no será el problema.",
      "Y eso, en muchos casos, ya cambia el resultado.",
    ],
  },
  {
    question: "¿En qué momento tiene sentido trabajar contigo?",
    answer: [
      "Cuando hay dinero en juego. Cuando el directo importa de verdad.",
      "Si es \"una prueba\" o algo sin presión, probablemente no soy lo que necesitas.",
    ],
  },
];

function AccordionList({ items }: { items: { question: string; answer: string[] }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((obj, i) => (
        <FadeIn key={i} delay={i * 0.06}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left bg-slate-900/60 border border-slate-800 hover:border-slate-600 rounded-2xl px-6 py-5 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-white font-semibold text-lg leading-snug">
                {obj.question}
              </span>
              <span
                className={`shrink-0 text-slate-400 text-2xl leading-none mt-0.5 transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            {open === i && (
              <div className="mt-4 border-t border-slate-800 pt-4 space-y-2">
                {obj.answer.map((paragraph, j) => (
                  <p key={j} className="text-slate-400 text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </button>
        </FadeIn>
      ))}
    </div>
  );
}

export default function Objections() {
  return (
    <section className="py-28 px-6 section-gradient">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Lo que te estás
            <br />
            <span className="text-slate-400 font-normal">preguntando ahora mismo</span>
          </h2>
          <p className="text-slate-400 text-lg mb-14">
            Respuestas directas a las dudas más habituales.
          </p>
        </FadeIn>

        {/* Mobile: condensed version */}
        <div className="md:hidden">
          <AccordionList items={mobileObjections} />
        </div>

        {/* Desktop: full version */}
        <div className="hidden md:block">
          <AccordionList items={objections} />
        </div>
      </div>
    </section>
  );
}
