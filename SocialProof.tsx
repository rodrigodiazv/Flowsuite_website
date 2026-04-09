const items = [
  '🏥 Clínica Dental Córdoba — 3x más citas reservadas',
  '🏨 Hotel Rural Granada — 0 llamadas perdidas',
  '⚖️ Asesoría Zurich — leads cualificados 24/7',
  '💆 Centro Bienestar Lausanne — atención en FR/DE/ES',
  '🛍️ Tienda Online Madrid — soporte automático',
  '🏋️ Gym Barcelona — 80% menos gestión manual',
  '🎓 Academia de Idiomas — matrículas sin fricción',
  '🏗️ Inmobiliaria Valencia — visitas agendadas por IA',
]

export default function SocialProof() {
  const doubled = [...items, ...items]

  return (
    <section className="py-10 border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
              <span className="text-white/50 text-sm font-body">{item}</span>
              <span className="text-neon/30 text-lg">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
