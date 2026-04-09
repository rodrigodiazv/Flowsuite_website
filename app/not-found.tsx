import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Página no encontrada · FlowSuite',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="blob blob-teal absolute top-[-200px] left-[-200px] opacity-10 pointer-events-none" />
      <div className="blob blob-purple absolute bottom-[-100px] right-[-150px] opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <p className="font-mono text-neon text-sm tracking-widest mb-6 opacity-70">ERROR_404</p>

        <h1 className="font-display text-8xl md:text-9xl font-800 leading-none mb-4">
          <span className="gradient-text">404</span>
        </h1>

        <p className="font-display text-2xl md:text-3xl font-700 text-white mb-4">
          Página no encontrada
        </p>

        <p className="font-body text-white/50 text-base mb-10 leading-relaxed">
          La URL que buscas no existe o ha sido movida.
          Vuelve al inicio y FLOWY te ayudará con lo que necesites.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-neon btn-primary text-sm px-7 py-3 rounded-xl font-display font-700">
            Volver al inicio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a href="mailto:info@flowsuite.ch" className="btn-neon text-sm px-7 py-3 rounded-xl font-600">
            Contactar
          </a>
        </div>
      </div>
    </main>
  )
}
