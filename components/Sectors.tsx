const sectors = [
  { icon: '🏥', name: 'Salud & Clínicas', desc: 'Citas, seguros, resultados', color: 'from-emerald-500/20 to-teal-500/20' },
  { icon: '🏨', name: 'Hostelería', desc: 'Reservas, menú, eventos', color: 'from-amber-500/20 to-orange-500/20' },
  { icon: '⚖️', name: 'Legal & Consultoría', desc: 'Consultas previas, agenda', color: 'from-blue-500/20 to-indigo-500/20' },
  { icon: '🏗️', name: 'Inmobiliaria', desc: 'Propiedades, visitas, contratos', color: 'from-rose-500/20 to-pink-500/20' },
  { icon: '💆', name: 'Bienestar & Spa', desc: 'Tratamientos, reservas, tips', color: 'from-purple-500/20 to-violet-500/20' },
  { icon: '🛍️', name: 'Retail & E-commerce', desc: 'Productos, pedidos, soporte', color: 'from-yellow-500/20 to-lime-500/20' },
  { icon: '🏋️', name: 'Fitness & Deporte', desc: 'Horarios, membresías, clases', color: 'from-cyan-500/20 to-sky-500/20' },
  { icon: '🎓', name: 'Educación', desc: 'Matrículas, cursos, tutorías', color: 'from-teal-500/20 to-green-500/20' },
  { icon: '🏦', name: 'Finanzas & Seguros', desc: 'Asesoría, cálculos, leads', color: 'from-slate-500/20 to-zinc-500/20' },
]

export default function Sectors() {
  return (
    <section id="sectores" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,229,200,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="sector-tag mb-4 inline-block">Sectores</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            FLOWY trabaja en <span className="gradient-text">cualquier industria</span>
          </h2>
          <p className="text-white/50 font-body text-lg max-w-lg mx-auto">
            Adaptado al vocabulario, procesos y tono de cada sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((s, i) => (
            <div key={i} className={`card-glow neon-border rounded-2xl p-6 group cursor-pointer`}>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} border border-white/5 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-1">{s.name}</h3>
              <p className="text-white/45 text-sm font-body">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* "Tu sector no está" CTA */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm font-body">
            ¿No ves tu sector?{' '}
            <a href="mailto:info@flowsuite.ch" className="text-neon hover:underline">
              Cuéntanos tu caso →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
