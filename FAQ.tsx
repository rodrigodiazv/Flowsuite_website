'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en estar listo mi agente?',
    a: 'En menos de 24 horas. Te enviamos un formulario de onboarding, recopilamos la información de tu negocio y configuramos FLOWY. Al día siguiente ya está atendiendo clientes.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'Cero. Nos encargamos de todo: configuración, integración con WhatsApp, CRM y automatizaciones. Tú solo revisas los resultados en el dashboard.',
  },
  {
    q: '¿En qué idiomas atiende FLOWY?',
    a: 'Español, francés, alemán, italiano, inglés y portugués. Detecta automáticamente el idioma del cliente y responde en el suyo.',
  },
  {
    q: '¿Hay contrato de permanencia?',
    a: 'No. Puedes cancelar en cualquier momento sin penalizaciones. Creemos en la calidad del servicio, no en los contratos.',
  },
  {
    q: '¿Cómo se integra con mis herramientas actuales?',
    a: 'Via Make.com conectamos FLOWY con Google Sheets (CRM), WhatsApp Business, calendarios, email y más de 1.000 apps. Si tienes un CRM propio, lo valoramos.',
  },
  {
    q: '¿Qué pasa con la privacidad de mis clientes?',
    a: 'Cumplimos con RGPD (España/UE) y nDSG (Suiza). Los datos se procesan en servidores europeos. Incluimos política de privacidad y consentimiento en todos los flujos.',
  },
  {
    q: '¿Puedo personalizar el nombre y la voz del agente?',
    a: 'Sí. En el plan Suite puedes tener un agente con el nombre de tu empresa, voz personalizada y flujos completamente adaptados a tu marca.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="sector-tag mb-4 inline-block">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`card-glow rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-neon/30' : 'neon-border'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-display font-600 text-white text-sm md:text-base pr-4 group-hover:text-neon transition-colors">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  open === i ? 'bg-neon/20 border-neon/40 rotate-45' : 'border-white/10'
                }`}>
                  <svg className="w-4 h-4 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-6 pb-6 text-white/55 font-body text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
