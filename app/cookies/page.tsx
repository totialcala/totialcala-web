import Link from "next/link";

export const metadata = {
  title: "Política de Cookies — Toti Alcalà",
  description: "Política de cookies de totialcala.com",
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sky-400 text-sm hover:text-sky-300 transition-colors mb-8 inline-block">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Política de Cookies</h1>
        <p className="text-slate-500 text-sm mb-12">Última actualización: abril 2026</p>

        <div className="space-y-10 text-slate-400">

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario para recordar preferencias, analizar el uso del sitio o personalizar la experiencia.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Cookies utilizadas actualmente</h2>
            <p>En su estado actual, <strong className="text-slate-300">totialcala.com no instala cookies propias de analítica ni de seguimiento</strong>. El sitio es un Next.js estático sin herramientas de terceros activas.</p>
            <p className="mt-3">Los servicios enlazados desde este sitio (Calendly, WhatsApp) pueden instalar sus propias cookies cuando el usuario accede a dichas plataformas. Estas cookies son responsabilidad de sus respectivos titulares.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Cookies previstas en el futuro</h2>
            <p>Próximamente se incorporarán las siguientes herramientas, que requerirán consentimiento previo:</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left text-slate-300 py-2 pr-4">Herramienta</th>
                    <th className="text-left text-slate-300 py-2 pr-4">Tipo</th>
                    <th className="text-left text-slate-300 py-2">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-2 pr-4">Google Analytics 4</td>
                    <td className="py-2 pr-4">Analítica</td>
                    <td className="py-2">Medir visitas y comportamiento</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-2 pr-4">Meta Pixel</td>
                    <td className="py-2 pr-4">Marketing</td>
                    <td className="py-2">Remarketing y seguimiento de conversiones</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">Cuando se activen, se implementará un banner de consentimiento y esta política se actualizará con todos los detalles.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Cómo gestionar las cookies</h2>
            <p>Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Safari</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Contacto</h2>
            <p>Para cualquier consulta sobre esta política: <strong className="text-slate-300">hello@totialcala.com</strong></p>
          </section>

        </div>
      </div>
    </main>
  );
}
