export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,229,200,0.07),rgba(139,92,246,0.05),transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-neon/5 animate-spin" style={{ animationDuration: '30s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple/5 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 sector-tag mb-8">
          <span className="w-1.5 h-1.5 bg-neon rounded-full animate-ping" />
          Plazas limitadas este mes
        </div>

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
          Tu competencia ya<br />
          <span className="gradient-text">está automatizando.</span>
        </h2>

        <p className="font-body text-xl text-white/50 max-w-2xl mx-auto mb-12">
          Cada cliente que no recibe respuesta en 5 minutos es un cliente perdido.
          FLOWY lo atiende en 2 segundos, 24/7, sin vacaciones ni bajas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#demo" className="btn-neon btn-primary text-base px-10 py-4 rounded-xl font-display font-bold text-lg">
            Activar mi empleado digital
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="mailto:info@flowsuite.ch" className="btn-neon text-base px-8 py-4 rounded-xl font-semibold">
            Hablar con Rodrigo
          </a>
        </div>

        <p className="text-white/25 text-sm font-body">
          Sin permanencia · Setup en 24h · RGPD compliant · Soporte en ES, FR, DE, EN
        </p>
      </div>
    </section>
  )
}
