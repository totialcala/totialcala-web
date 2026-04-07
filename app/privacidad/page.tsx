import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad — Toti Alcalà",
  description: "Política de privacidad de totialcala.com",
};

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sky-400 text-sm hover:text-sky-300 transition-colors mb-8 inline-block">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
        <p className="text-slate-500 text-sm mb-12">Última actualización: abril 2026</p>

        <div className="space-y-10 text-slate-400">

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Responsable del tratamiento</h2>
            <ul className="space-y-1">
              <li><strong className="text-slate-300">Razón social:</strong> TOTI STREAM SLU</li>
              <li><strong className="text-slate-300">CIF:</strong> L-716433-A</li>
              <li><strong className="text-slate-300">Correo electrónico:</strong> hello@totialcala.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Datos que recopilamos</h2>
            <p>Actualmente, este sitio web no dispone de formularios de contacto propios. El contacto se realiza a través de:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-slate-300">Calendly</strong> — plataforma de reserva de llamadas con su propia política de privacidad.</li>
              <li><strong className="text-slate-300">WhatsApp</strong> — servicio de mensajería de Meta Platforms Inc.</li>
              <li><strong className="text-slate-300">Correo electrónico</strong> — para comunicaciones directas.</li>
            </ul>
            <p className="mt-3">En el momento en que se incorporen formularios propios o herramientas de analítica, esta política se actualizará para reflejar los datos tratados, la base legitimadora y los plazos de conservación.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Finalidad del tratamiento</h2>
            <p>Los datos facilitados voluntariamente a través de los canales de contacto se utilizan exclusivamente para:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Gestionar solicitudes de información y presupuesto</li>
              <li>Mantener la relación comercial con clientes</li>
              <li>Enviar información relacionada con los servicios contratados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Base legitimadora</h2>
            <p>El tratamiento de datos se basa en el consentimiento del interesado (art. 6.1.a RGPD) y en la ejecución de un contrato o aplicación de medidas precontractuales (art. 6.1.b RGPD).</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Conservación de datos</h2>
            <p>Los datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recabados y, en su caso, para atender las responsabilidades legales derivadas del tratamiento.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Derechos del interesado</h2>
            <p>El interesado puede ejercer en cualquier momento los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un correo a <strong className="text-slate-300">hello@totialcala.com</strong>, indicando el derecho que desea ejercer y adjuntando copia de su documento de identidad.</p>
            <p className="mt-2">Asimismo, tiene derecho a presentar una reclamación ante la autoridad de control competente (AEPD en España: aepd.es).</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">7. Transferencias internacionales</h2>
            <p>Los servicios de terceros utilizados (Calendly, WhatsApp/Meta) pueden implicar transferencias de datos fuera del Espacio Económico Europeo. Dichas transferencias se realizan bajo las garantías previstas en el RGPD.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
