'use client'
import { useState } from 'react'

const plans = [
  {
    name: 'Presencia',
    price: { es: '99', ch: '129' },
    currency: { es: '€', ch: 'CHF' },
    desc: 'Empieza a automatizar tu atención al cliente',
    features: [
      '1 agente FLOWY (chat + voz)',
      'Hasta 500 conversaciones/mes',
      'Personalización básica',
      'Integración WhatsApp',
      'Panel de resultados',
      'Soporte por email',
    ],
    cta: 'Empezar',
    featured: false,
  },
  {
    name: 'Captación',
    price: { es: '179', ch: '229' },
    currency: { es: '€', ch: 'CHF' },
    desc: 'El plan más popular. Convierte visitas en clientes',
    features: [
      'Todo lo de Presencia',
      'Conversaciones ilimitadas',
      'CRM automático (Google Sheets)',
      'Automatizaciones Make.com',
      'Múltiples idiomas (6)',
      'Agenda de citas integrada',
      'Soporte prioritario',
    ],
    cta: 'Quiero este plan',
    featured: true,
    badge: 'Más popular',
  },
  {
    name: 'Suite',
    price: { es: '299', ch: '389' },
    currency: { es: '€', ch: 'CHF' },
    desc: 'Automatización total. FLOWY como empleado completo',
    features: [
      'Todo lo de Captación',
      'Múltiples agentes especializados',
      'Integraciones personalizadas',
      'White-label disponible',
      'Análisis avanzados + BI',
      'Manager de cuenta dedicado',
      'SLA 99.9% uptime',
    ],
    cta: 'Hablar con ventas',
    featured: false,
  },
]

export default function Pricing() {
  const [market, setMarket] = useState<'es' | 'ch'>('es')

  return (
    <section id="precios" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,229,200,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="sector-tag mb-4 inline-block">Precios</span>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
            Sin permanencia. <span className="gradient-text">Sin sorpresas.</span>
          </h2>
          <p className="text-white/50 font-body text-lg mb-8">
            Cancela cuando quieras. Precio fijo mensual, todo incluido.
          </p>

          {/* Market toggle */}
          <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
            {(['es', 'ch'] as const).map(m => (
              <button key={m} onClick={() => setMarket(m)}
                className={`px-5 py-2.5 rounded-lg text-sm font-display font-600 transition-all duration-300 ${
                  market === m
                    ? 'bg-neon text-bg shadow-lg shadow-neon/30'
                    : 'text-white/50 hover:text-white'
                }`}>
                {m === 'es' ? '🇪🇸 España (€)' : '🇨🇭 Suiza (CHF)'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`card-glow rounded-2xl p-8 flex flex-col relative overflow-hidden ${plan.featured ? 'pricing-featured' : 'neon-border'}`}>
              {plan.featured && plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-neon to-purple text-bg text-xs font-display font-700 px-4 py-1.5 rounded-bl-xl">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-700 text-white mb-1">{plan.name}</h3>
                <p className="text-white/45 text-sm font-body mb-4">{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-800 text-white">
                    {plan.price[market]}
                  </span>
                  <span className="text-neon font-mono text-lg mb-2">{plan.currency[market]}</span>
                  <span className="text-white/40 text-sm mb-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm font-body">
                    <svg className="w-4 h-4 text-neon mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/65">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#demo"
                className={`w-full text-center py-3.5 rounded-xl font-display font-600 text-sm transition-all duration-300 ${
                  plan.featured
                    ? 'btn-primary btn-neon'
                    : 'btn-neon'
                }`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm font-body mt-8">
          * Setup único desde 299€ dependiendo de la complejidad. Sin permanencia.
        </p>
      </div>
    </section>
  )
}
