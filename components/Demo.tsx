'use client'
import { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'

const DEMO_PHONES = [
  { flag: '🇪🇸', label: 'España', number: '+34 634 13 44 66' },
  { flag: '🇨🇭', label: 'Suiza', number: '+41 77 941 35 32' },
]

export default function Demo() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<'chat' | 'voice'>('chat')

  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(139,92,246,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <span className="sector-tag mb-6 inline-block">Demo en vivo</span>
            <div className="flex items-center gap-5 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-neon/30 flex-shrink-0 shadow-lg shadow-neon/10">
                <Image
                  src="/flow-agent.png"
                  alt="FLOWY — agente IA de FlowSuite"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                Habla ahora con <br/>
                <span className="gradient-text">FLOWY</span>
              </h2>
            </div>
            <p className="font-body text-white/55 text-lg leading-relaxed mb-8">
              FLOWY es nuestro agente IA estrella. Prueba en este chat lo que vivirán tus clientes: 
              respuestas inmediatas, personalizadas y en tu idioma.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-10">
              {[
                { icon: '🎙️', text: 'Voz natural con IA — no suena a robot' },
                { icon: '🌍', text: 'Responde en español, francés, alemán, inglés, italiano' },
                { icon: '🧠', text: 'Conoce tu negocio desde el primer segundo' },
                { icon: '📋', text: 'Captura leads automáticamente al CRM' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center text-lg flex-shrink-0">
                    {f.icon}
                  </div>
                  <span className="text-white/70 font-body text-sm">{f.text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp / Phone */}
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/34634134466" target="_blank" rel="noopener noreferrer"
                className="btn-neon text-sm py-3 px-5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              {DEMO_PHONES.map((p) => (
                <a key={p.label} href={`tel:${p.number.replace(/\s/g, '')}`}
                  className="btn-neon text-sm py-3 px-5">
                  {p.flag} {p.number}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Widget */}
          <div className="relative">
            {/* Glow behind widget */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-purple/10 rounded-3xl blur-3xl scale-95" />

            <div className="flowy-wrapper relative bg-[#080C18] rounded-2xl overflow-hidden border border-neon/20" style={{ minHeight: 520 }}>
              {/* Widget header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full border border-neon/30 overflow-hidden">
                    <Image
                      src="/flow-agent.png"
                      alt="FLOWY — agente IA de FlowSuite"
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="pulse-ring" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-neon rounded-full border-2 border-[#080C18]" />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">FLOWY</div>
                  <div className="text-neon text-xs font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
                    En línea ahora
                  </div>
                </div>
              </div>

              {/* Snowie embed */}
              <div id="snowie-widget-container" className="w-full" style={{ minHeight: 460 }}>
                <Script
                  src="https://app.snowie.ai/widget-embed.js"
                  data-agent-id="89f12538-fbf4-4cec-97e1-1fd63a902f13"
                  strategy="lazyOnload"
                  onLoad={() => setWidgetLoaded(true)}
                />
                {!widgetLoaded && (
                  <div className="flex flex-col items-center justify-center h-64 gap-4">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-2 h-2 rounded-full bg-neon/60 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                    <span className="text-white/30 text-xs font-mono">Iniciando FLOWY...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
