import Link from "next/link";

export const metadata = {
  title: "Aviso Legal — Toti Alcalà",
  description: "Aviso legal de totialcala.com",
};

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sky-400 text-sm hover:text-sky-300 transition-colors mb-8 inline-block">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Aviso Legal</h1>
        <p className="text-slate-500 text-sm mb-12">Última actualización: abril 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-400">

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Datos identificativos del titular</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-slate-300">Razón social:</strong> TOTI STREAM SLU</li>
              <li><strong className="text-slate-300">CIF:</strong> L-716433-A</li>
              <li><strong className="text-slate-300">Domicilio social:</strong> Andorra</li>
              <li><strong className="text-slate-300">Correo electrónico:</strong> hello@totialcala.com</li>
              <li><strong className="text-slate-300">Sitio web:</strong> totialcala.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Objeto y ámbito de aplicación</h2>
            <p>El presente Aviso Legal regula el acceso y uso del sitio web totialcala.com, titularidad de TOTI STREAM SLU, cuya actividad es la prestación de servicios de producción técnica, realización de directos de venta y lanzamientos online.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Condiciones de uso</h2>
            <p>El acceso a este sitio web es libre y gratuito. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos, y a no emplearlos para actividades ilícitas o contrarias a las leyes, la moral o el orden público.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio web — textos, imágenes, logotipos, diseño, código fuente y demás elementos — son propiedad de TOTI STREAM SLU o de terceros que han autorizado su uso. Queda expresamente prohibida su reproducción, distribución, comunicación pública o transformación sin autorización previa y por escrito.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Exclusión de responsabilidad</h2>
            <p>TOTI STREAM SLU no garantiza la disponibilidad continua del sitio web ni se responsabiliza de posibles daños derivados de su uso. Los enlaces a sitios de terceros (Calendly, WhatsApp) son responsabilidad de sus respectivos titulares.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Legislación aplicable</h2>
            <p>Este aviso legal se rige por la normativa española y andorrana aplicable. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales competentes.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
