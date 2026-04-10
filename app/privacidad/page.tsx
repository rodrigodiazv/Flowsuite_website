import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Flow.',
  description: 'Información sobre cómo Flow. recopila, usa y protege tus datos personales de acuerdo con el RGPD.',
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-bg text-white">
      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-neon transition-colors font-body"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-12 border-b border-white/5">
        <span className="sector-tag mb-6 inline-block">Legal</span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
          Política de <span className="gradient-text">Privacidad</span>
        </h1>
        <p className="font-body text-white/50 text-base">
          Última actualización: enero 2025 · RGPD (UE) 2016/679 &amp; nDSG (Suiza)
        </p>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-10 font-body text-white/70 leading-relaxed">

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">1. Responsable del tratamiento</h2>
          <p>
            <strong className="text-white">Flow.</strong> — Rodrigo A. Díaz Videla<br />
            Ormont-Dessous, Vaud, Suiza<br />
            Email:{' '}
            <a href="mailto:info@flowsuite.ch" className="text-neon hover:underline">
              info@flowsuite.ch
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">2. Datos que recopilamos</h2>
          <p>Recopilamos únicamente los datos necesarios para prestar el servicio:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Nombre y datos de contacto (email, teléfono) facilitados voluntariamente.</li>
            <li>Información de conversaciones con FLOWY, vinculada estrictamente a la prestación del servicio.</li>
            <li>Datos de navegación anonimizados (logs técnicos) para garantizar seguridad y rendimiento.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">3. Finalidad y base legal</h2>
          <p>Tratamos tus datos para:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Prestar el servicio de agentes IA contratado <em>(ejecución de contrato, Art. 6.1.b RGPD)</em>.</li>
            <li>Enviar comunicaciones comerciales propias <em>(interés legítimo / consentimiento, Art. 6.1.a/f)</em>.</li>
            <li>Cumplir obligaciones legales <em>(Art. 6.1.c RGPD)</em>.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">4. Conservación de datos</h2>
          <p>
            Los datos se conservan durante la vigencia de la relación contractual y se eliminan en un plazo máximo
            de <strong className="text-white">90 días</strong> tras la cancelación del servicio, salvo obligación
            legal superior.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">5. Tus derechos</h2>
          <p>
            Puedes ejercer los siguientes derechos escribiendo a{' '}
            <a href="mailto:info@flowsuite.ch" className="text-neon hover:underline">info@flowsuite.ch</a>:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-white">Acceso</strong> — conocer qué datos tenemos sobre ti.</li>
            <li><strong className="text-white">Rectificación</strong> — corregir datos inexactos.</li>
            <li><strong className="text-white">Supresión</strong> — solicitar el borrado de tus datos.</li>
            <li><strong className="text-white">Portabilidad</strong> — recibir tus datos en formato estructurado.</li>
            <li><strong className="text-white">Oposición</strong> — oponerte al tratamiento por interés legítimo.</li>
          </ul>
          <p>
            Si resides en España, puedes reclamar ante la{' '}
            <strong className="text-white">Agencia Española de Protección de Datos (AEPD)</strong>.
            Si resides en Suiza, ante el{' '}
            <strong className="text-white">PFPDT</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">6. Transferencias internacionales</h2>
          <p>
            Los datos se procesan en servidores ubicados en la Unión Europea y Suiza.
            No realizamos transferencias a terceros países sin las garantías adecuadas exigidas por el RGPD.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">7. Modificaciones</h2>
          <p>
            Flow. se reserva el derecho a actualizar esta política. Cualquier cambio relevante será comunicado
            por email o publicado con la nueva fecha de actualización en esta página.
          </p>
        </section>
      </article>

      {/* Footer */}
      <div className="max-w-3xl mx-auto px-6 pb-16 border-t border-white/5 pt-8">
        <p className="text-white/25 text-sm font-body">
          © 2025 Flow. · Rodrigo A. Díaz Videla · Ormont-Dessous, Vaud, Suiza
        </p>
      </div>
    </main>
  )
}
