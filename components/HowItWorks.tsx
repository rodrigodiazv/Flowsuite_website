'use client'

const steps = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M14 20a6 6 0 1112 0 6 6 0 01-12 0z" fill="currentColor" opacity="0.8"/>
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Conecta tu negocio',
    desc: 'Configuramos FLOWY con el conocimiento de tu empresa: servicios, precios, horarios, FAQs. Sin código, en menos de 24h.',
    tag: 'Setup en 24h',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="10" width="28" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M13 18h14M13 23h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <circle cx="30" cy="10" r="5" fill="currentColor" opacity="0.9"/>
        <path d="M28.5 10l1.5 1.5L33 8" stroke="#02060F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'FLOWY atiende 24/7',
    desc: 'Tu agente IA recibe clientes por voz y chat, responde en su idioma, captura datos y agenda citas automáticamente.',
    tag: 'Multi-canal',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 30L16 22l6 6 10-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <circle cx="32" cy="12" r="4" fill="currentColor" opacity="0.5"/>
        <path d="M8 14l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: 'Tú mides y escala',
    desc: 'Dashboard en tiempo real: leads captados, conversaciones, conversiones. Automatizaciones que alimentan tu CRM.',
    tag: 'Analytics live',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-neon/30" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="sector-tag mb-4 inline-block">Proceso</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            De cero a <span className="gradient-text">empleado digital</span>
            <br />en menos de 24 horas
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            Sin complicaciones técnicas. Sin contratos de permanencia.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* Connector line (desktop) */}
              {i < 2 && (
                <div className="hidden md:block absolute top-14 left-[calc(100%_-_24px)] w-[calc(100%_-_-48px)] z-10">
                  <div className="step-line" />
                </div>
              )}

              <div className="card-glow neon-border rounded-2xl p-8 h-full group">
                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-5xl font-bold text-neon/15 group-hover:text-neon/30 transition-colors">
                    {s.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/15 transition-colors">
                    {s.icon}
                  </div>
                </div>

                <div className="sector-tag mb-3 text-xs">{s.tag}</div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="font-body text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="#demo" className="btn-neon inline-flex text-sm">
            Quiero mi empleado digital
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
