import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Toti Alcalà"
              width={140}
              height={35}
              className="h-7 w-auto mb-4 opacity-80"
            />
            <p className="text-slate-500 text-sm leading-relaxed">
              Director técnico de lanzamientos
              <br />y directos de venta online.
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">Dónde estoy</p>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <span>🇦🇩</span>
                <span>Andorra — <span className="text-slate-500">residencia actual</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span>🇪🇸</span>
                <span>Girona — <span className="text-slate-500">plató propio 95m²</span></span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span>✈️</span>
                <span>Disponible en cualquier parte del mundo</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">Contacto</p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:hello@totialcala.com"
                className="block text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                hello@totialcala.com
              </a>
              <a
                href="https://wa.me/34615116485"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                WhatsApp +34 615 116 485
              </a>
              <a
                href="https://calendly.com/totialcala"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Reservar llamada
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} Toti Alcalà. Todos los derechos reservados.</p>
          <p>Basado en Andorra 🇦🇩 · Plató en Girona 🇪🇸 · Disponible en todo el mundo 🌍</p>
        </div>
      </div>
    </footer>
  );
}
