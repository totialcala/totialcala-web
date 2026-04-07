"use client";

import FadeIn from "./ui/FadeIn";

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-28 px-6 section-gradient overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: video,sticky on desktop */}
          <FadeIn direction="right">
            <div className="md:sticky md:top-24">
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[3/4] max-w-sm mx-auto md:mx-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/Toti_Geneve.webm" type="video/webm" />
                  <source src="/videos/Toti_Geneve.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
              </div>

            </div>
          </FadeIn>

          {/* Right: bio,scrolls past sticky video */}
          <FadeIn direction="left" delay={0.15}>
            <div className="space-y-8">

              {/* Opening */}
              <div>
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-4">
                  El invisible detrás de cada directo
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Hola, soy Toti.
                </h2>
                <p className="text-white text-xl leading-relaxed font-medium">
                  No soy "el técnico del directo". Soy quien se asegura de que el directo no falle cuando hay dinero en juego.
                </p>
              </div>

              {/* Who + role */}
              <div className="border-l-2 border-slate-800 pl-5 space-y-3">
                <p className="text-slate-400 text-base leading-relaxed">
                  Trabajo con creadores, empresas y equipos que no pueden dejar nada al azar. Lanzamientos, eventos, streamings, donde cada segundo importa.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Mi rol no es solo operar botones. Es diseñar el guión, estructurar y dirigir todo lo que pasa antes y durante el día D, para que tú solo tengas que hacer una cosa: <span className="text-white font-medium">vender</span>.
                </p>
              </div>

              {/* Philosophy */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
                <p className="text-slate-300 text-base leading-relaxed mb-2">
                  He estado en directos donde todo podía salir mal. Y también en los que todo sale perfecto.
                </p>
                <p className="text-white font-semibold text-lg">
                  La diferencia nunca es la suerte. Es tener un sistema.
                </p>
              </div>

              {/* Personal */}
              <div className="space-y-3">
                <p className="text-slate-400 text-base leading-relaxed">
                  Fuera del directo, necesito movimiento. Mar, montaña, viajar, cambiar de contexto. Los retos, cuanto más exigentes, mejor.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Había sido nadador toda mi vida. Volver al agua me ha devuelto algo clave: <span className="text-white">claridad</span>. La misma que necesito antes de cada directo importante,donde no hay espacio para el ruido.
                </p>
              </div>

              {/* Mission */}
              <div className="border-l-2 border-sky-500/50 pl-5">
                <p className="text-slate-400 text-base leading-relaxed mb-3">
                  Basado en Andorra. Con movilidad total y equipo cuando hace falta. A veces partner técnico. A veces parte del equipo. Pero siempre con el mismo objetivo:
                </p>
                <p className="text-white font-semibold text-lg leading-snug">
                  Que el directo deje de ser un riesgo y se convierta en una herramienta de crecimiento.
                </p>
              </div>

              {/* Closing */}
              <div className="pt-2">
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                  Con muchos clientes, la relación acaba yendo más allá del proyecto. Porque cuando compartes presión real, ésta se convierte en confianza.
                </p>
                <p className="text-sky-400 font-medium text-lg">
                  Y así es como me gusta trabajar.
                </p>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
