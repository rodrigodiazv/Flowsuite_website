'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Demo', href: '#demo' },
    { label: 'Precios', href: '#precios' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-blur py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon/30 to-purple/30 border border-neon/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M12 2L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-5z" stroke="#00E5C8" strokeWidth="1.5" fill="rgba(0,229,200,0.1)"/>
                <circle cx="12" cy="12" r="3" fill="#00E5C8" opacity="0.8"/>
              </svg>
            </div>
          </div>
          <span className="font-display font-700 text-lg tracking-tight text-white group-hover:text-neon transition-colors">
            Flow<span className="text-neon">Suite</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-body text-white/60 hover:text-neon transition-colors duration-200 tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:info@flowsuite.ch" className="text-sm text-white/50 hover:text-white transition-colors">
            Contacto
          </a>
          <a href="#demo" className="btn-neon text-sm py-2.5 px-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
            </span>
            Demo en vivo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/70 hover:text-neon">
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur border-t border-neon/10 px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-neon transition-colors py-1 font-body">
              {l.label}
            </a>
          ))}
          <a href="#demo" className="btn-neon w-full justify-center mt-2">Demo en vivo</a>
        </div>
      )}
    </nav>
  )
}
