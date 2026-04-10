import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum — FlowSuite',
  description: 'Angaben gemäß gesetzlicher Anforderungen für FlowSuite.',
}

export default function ImpressumPage() {
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
          <span className="gradient-text">Impressum</span>
        </h1>
        <p className="font-body text-white/50 text-base">
          Pflichtangaben gemäß schweizerischem Recht / Menciones obligatorias según el derecho suizo
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12 space-y-10 font-body text-white/70 leading-relaxed">

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">Unternehmen / Empresa</h2>
          <p>
            <strong className="text-white">FlowSuite</strong><br />
            Rodrigo A. Díaz Videla<br />
            Ormont-Dessous<br />
            Vaud, Schweiz / Suiza
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">Kontakt / Contacto</h2>
          <p>
            Email:{' '}
            <a href="mailto:info@flowsuite.ch" className="text-neon hover:underline">
              info@flowsuite.ch
            </a><br />
            Tel. (ES):{' '}
            <a href="tel:+34634134466" className="text-neon hover:underline">
              +34 634 13 44 66
            </a><br />
            Tel. (CH):{' '}
            <a href="tel:+41779413532" className="text-neon hover:underline">
              +41 77 941 35 32
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">Mehrwertsteuer / IVA</h2>
          <p>
            FlowSuite ist von der Mehrwertsteuerpflicht befreit (Art. 10 MWSTG).<br />
            FlowSuite está exenta del IVA suizo (Art. 10 LTVA).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">Haftungsausschluss / Limitación de responsabilidad</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
          <p>
            A pesar del cuidado en el control de los contenidos, no asumimos responsabilidad por los contenidos
            de los enlaces externos. Los responsables de las páginas enlazadas son únicamente sus operadores.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">Urheberrecht / Derechos de autor</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            schweizerischen Urheberrecht.<br />
            Los contenidos y obras creados por el titular de este sitio están sujetos al derecho de autor suizo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">Streitschlichtung / Resolución de conflictos</h2>
          <p>
            Für Verbraucher mit Wohnsitz in der EU steht die Online-Streitbeilegungsplattform der EU-Kommission
            zur Verfügung:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>.
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
