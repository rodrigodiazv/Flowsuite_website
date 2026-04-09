'use client'
import dynamic from 'next/dynamic'

const NeuralCanvas = dynamic(() => import('./NeuralCanvas'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid">
      {/* Ambient blobs */}
      <div className="blob blob-teal absolute top-[-100px] left-[-100px] opacity-[0.15]" />
      <div className="blob blob-purple absolute bottom-[-50px] right-[-100px] opacity-[0.12]" />
      <div className="blob blob-teal absolute bottom-[20%] left-[60%] w-[300px] h-[300px] opacity-[0.08]" />

      {/* Neural network canvas */}
      <NeuralCanvas />

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#02060F_80%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sector-tag mb-8 animate-pulse-slow">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />
          Agentes IA · 24/7 · ES · FR · DE · IT · EN
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] tracking-tight mb-6">
          <span className="text-white">Tu negocio,</span>
          <br />
          <span className="gradient-text">siempre activo.</span>
          <br />
          <span className="text-white/70 text-4xl md:text-5xl lg:text-6xl font-semibold">Con inteligencia.</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
          Empleados digitales que <span className="text-neon font-medium">atienden, convierten y fidelizan</span> a tus clientes.
          Voz, texto y automatización inteligente para PYMEs en España y Suiza.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#demo" className="btn-neon btn-primary text-base px-8 py-4 rounded-xl font-bold font-display">
            Hablar con FLOWY
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#como-funciona" className="btn-neon text-base px-8 py-4 rounded-xl font-semibold">
            Ver cómo funciona
          </a>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { n: '24/7', label: 'Sin interrupciones' },
            { n: '+40%', label: 'Más conversiones' },
            { n: '< 2s', label: 'Tiempo de respuesta' },
            { n: '6', label: 'Idiomas nativos' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-display text-neon font-bold text-lg neon-glow">{s.n}</span>
              <span className="text-white/40 text-sm font-body">{s.label}</span>
              {i < 3 && <span className="text-white/15 ml-5">·</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-white/50 tracking-widest uppercase">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
