"use client";

import FadeIn from "./ui/FadeIn";
import Image from "next/image";

export default function Recurrence() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: copy */}
            <div>
              <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-4">
                La primera vez, trabajamos juntos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                A partir de la segunda,
                <br />
                <span className="text-sky-400">me gusta formar parte de tu equipo.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Mis mejores clientes no me contratan por proyecto. Hacemos un primer directo juntos, para que compruebes cómo trabajo y para que yo entienda tu producto y tu audiencia.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                A partir de ahí, normalmente pasamos a un plan por pack de servicios o anual. Me encargo de todos sus directos, con precios mejores, sin tener que empezar de cero cada vez. La confianza que se genera vale más que cualquier setup técnico.
              </p>

              {/* Friendship paragraph + Panama photo */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40">
                {/* Background photo — blurred, low opacity */}
                {/* ↓ Substituir "panama_pool.jpg" per la foto real quan estigui disponible */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/photos/panama_pool.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-15 blur-sm saturate-50"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />
                </div>

                <div className="relative z-10 p-6">
                  <p className="text-slate-300 text-base leading-relaxed italic">
                    "Muchos de mis clientes son grandes amigos ahora mismo. Con algunos, a parte de seguir trabajando juntos, años después, montamos viajes y compartimos experiencias. La relación va mucho más allá de lo profesional."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: progression cards */}
            <div className="flex flex-col gap-4 md:mt-16">
              <FadeIn delay={0.1}>
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                  <div className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">Primer paso</div>
                  <h3 className="text-white font-semibold text-lg mb-2">Lanzamiento inicial</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Trabajamos juntos en tu primer directo. Conocemos tu proyecto, configuramos todo a medida y llegamos al día con confianza total.
                  </p>
                </div>
              </FadeIn>

              <div className="flex items-center gap-3 px-2">
                <div className="h-px flex-1 bg-slate-800" />
                <span className="text-slate-600 text-sm">y después</span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>

              <FadeIn delay={0.2}>
                <div className="bg-sky-950/40 border border-sky-800/50 rounded-2xl p-6">
                  <div className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2">Relación a largo plazo</div>
                  <h3 className="text-white font-semibold text-lg mb-2">Plan anual</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Me convierto en tu director técnico fijo. Todos tus lives cubiertos, mejores condiciones y cero fricciones — porque ya nos conocemos.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
