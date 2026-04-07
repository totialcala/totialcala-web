"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SlotsBadge from "./ui/Slotsbadge";

const stats = [
  { value: "+10 años", label: "produciendo livestreams" },
  { value: "+500 horas", label: "en directo de lanzamientos" },
  { value: "+8 países", label: "producciones internacionales" },
  { value: "+25", label: "lanzamientos producidos" },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      {/* Fullscreen background photo */}
      <Image
        src="/images/photos/Live_Criptoprofe.png"
        alt="Toti Alcalà dirigiendo un lanzamiento en directo"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

      {/* Top badges — stacked vertically */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-24 left-6 md:left-12 z-10 flex flex-col gap-2"
      >
        {/* Slots badge — prominent */}
        <SlotsBadge size="md" />

        {/* Role badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 live-dot" />
          Director técnico de lanzamientos y directos de venta
        </div>
      </motion.div>

      {/* Main content — bottom left */}
      <div className="relative z-10 px-6 md:px-12 pb-32 md:pb-36 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          El día del lanzamiento{" "}
          <br className="hidden md:block" />
          ya es demasiado tarde{" "}
          <br className="hidden md:block" />
          <span className="text-sky-400">para empezar a pensar en la producción.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
        >
          Cuando hay dinero en juego en un directo,
          la parte técnica no puede fallar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-white hover:bg-white/90 text-slate-950 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer text-center"
          >
            Reserva una llamada
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-medium px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer text-center backdrop-blur-sm"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-slate-950/70 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
