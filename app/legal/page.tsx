import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal — Flow.',
  description: 'Información legal sobre Flow., sus condiciones de uso y responsabilidades.',
}

export default function LegalPage() {
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
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
          Aviso <span className="gradient-text">Legal</span>
        </h1>
        <p className="font-body text-white/50 text-base">Última actualización: enero 2025</p>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12 space-y-10 font-body text-white/70 leading-relaxed">

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">1. Titular del sitio web</h2>
          <p>
            <strong className="text-white">Flow.</strong> — Rodrigo A. Díaz Videla<br />
            Ormont-Dessous, Vaud, Suiza<br />
            Email:{' '}
            <a href="mailto:info@flowsuite.ch" className="text-neon hover:underline">
              info@flowsuite.ch
            </a><br />
            Teléfono ES: <a href="tel:+34634134466" className="text-neon hover:underline">+34 634 13 44 66</a><br />
            Teléfono CH: <a href="tel:+41779413532" className="text-neon hover:underline">+41 77 941 35 32</a><br />
            Empresa exenta de IVA (Art. 10 LTVA)
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">2. Objeto y ámbito de aplicación</h2>
          <p>
            El presente Aviso Legal regula el acceso y uso del sitio web{' '}
            <strong className="text-white">flowsuite.ch</strong> y sus subdominios (en adelante, «el Sitio»),
            titularidad de Flow.. El acceso al Sitio implica la aceptación plena de las presentes condiciones.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del Sitio (textos, imágenes, logotipos, código fuente, diseño, etc.) son propiedad
            de Flow. o de sus licenciantes y están protegidos por la legislación aplicable sobre propiedad
            intelectual. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">4. Exclusión de garantías y responsabilidad</h2>
          <p>
            Flow. no garantiza la disponibilidad continua del Sitio ni la ausencia de errores en sus contenidos.
            No se asume responsabilidad por daños derivados del uso del Sitio o de la imposibilidad de acceso al mismo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">5. Ley aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación suiza. Para los usuarios residentes en España,
            serán de aplicación las disposiciones imperativas del ordenamiento jurídico español. Cualquier
            controversia se someterá a los Tribunales de Vaud (Suiza), sin perjuicio de la normativa de
            protección al consumidor aplicable en el país de residencia del usuario.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">6. Modificaciones</h2>
          <p>
            Flow. se reserva el derecho a modificar el presente Aviso Legal en cualquier momento.
            Las modificaciones entrarán en vigor desde su publicación en el Sitio.
          </p>
        </section>
      </article>

      <div className="max-w-3xl mx-auto px-6 pb-16 border-t border-white/5 pt-8">
        <p className="text-white/25 text-sm font-body">
          © 2025 Flow. · Rodrigo A. Díaz Videla · Ormont-Dessous, Vaud, Suiza
        </p>
      </div>
    </main>
  )
}
