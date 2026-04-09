import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies — FlowSuite',
  description: 'Información sobre el uso de cookies en el sitio web de FlowSuite.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-bg text-white">
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

      <header className="max-w-3xl mx-auto px-6 pt-16 pb-12 border-b border-white/5">
        <span className="sector-tag mb-6 inline-block">Legal</span>
        <h1 className="font-display text-4xl md:text-5xl font-800 text-white mb-4">
          Política de <span className="gradient-text">Cookies</span>
        </h1>
        <p className="font-body text-white/50 text-base">Última actualización: enero 2025</p>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12 space-y-10 font-body text-white/70 leading-relaxed">

        <section className="space-y-3">
          <h2 className="font-display text-xl font-700 text-white">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo cuando lo visitas.
            Permiten que el sitio recuerde tus preferencias o analice cómo lo utilizas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-700 text-white">2. Cookies que utilizamos</h2>

          <div className="card-glow rounded-2xl overflow-hidden neon-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/50">
                  <th className="p-4 text-left font-600">Tipo</th>
                  <th className="p-4 text-left font-600">Finalidad</th>
                  <th className="p-4 text-left font-600">Duración</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Técnicas / esenciales', 'Funcionamiento básico del sitio (sesión, preferencias)', 'Sesión'],
                  ['Analíticas (anonimizadas)', 'Estadísticas de visitas y rendimiento del sitio', '13 meses'],
                  ['Funcionales', 'Recordar el mercado seleccionado (ES / CH)', '1 año'],
                ].map(([tipo, fin, dur], i) => (
                  <tr key={i}>
                    <td className="p-4 text-white/80">{tipo}</td>
                    <td className="p-4">{fin}</td>
                    <td className="p-4 text-white/50 whitespace-nowrap">{dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <strong className="text-white">No utilizamos cookies de publicidad comportamental ni compartimos datos
            con redes publicitarias de terceros.</strong>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-700 text-white">3. Gestión y desactivación</h2>
          <p>
            Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe una.
            Ten en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento del sitio.
          </p>
          <p>Instrucciones para los principales navegadores:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">
                Safari
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-700 text-white">4. Actualizaciones</h2>
          <p>
            FlowSuite puede actualizar esta política en cualquier momento. La fecha de la última revisión
            se indica al inicio de esta página.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-700 text-white">5. Contacto</h2>
          <p>
            Para cualquier consulta sobre el uso de cookies, escríbenos a{' '}
            <a href="mailto:info@flowsuite.ch" className="text-neon hover:underline">info@flowsuite.ch</a>.
          </p>
        </section>
      </article>

      <div className="max-w-3xl mx-auto px-6 pb-16 border-t border-white/5 pt-8">
        <p className="text-white/25 text-sm font-body">
          © 2025 FlowSuite · Rodrigo A. Díaz Videla · Ormont-Dessous, Vaud, Suiza
        </p>
      </div>
    </main>
  )
}
