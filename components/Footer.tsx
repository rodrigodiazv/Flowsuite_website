import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Producto: [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Precios', href: '#precios' },
    { label: 'Demo en vivo', href: '#demo' },
  ],
  Legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Aviso Legal', href: '/legal' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Impressum', href: '/impressum' },
  ],
  Contacto: [
    { label: 'info@flowsuite.ch', href: 'mailto:info@flowsuite.ch' },
    { label: '+34 634 13 44 66', href: 'tel:+34634134466' },
    { label: '+41 77 941 35 32', href: 'tel:+41779413532' },
    { label: 'WhatsApp', href: 'https://wa.me/34634134466' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="FlowSuite logo"
                width={32}
                height={32}
                className="rounded-lg object-contain"
              />
              <span className="font-display font-bold text-white">Flow<span className="text-neon">Suite</span></span>
            </div>
            <p className="text-white/40 text-sm font-body leading-relaxed mb-4">
              Empleados digitales con IA para PYMEs en España y Suiza.
            </p>
            <div className="flex gap-2">
              {['🇪🇸', '🇨🇭', '🇫🇷', '🇩🇪'].map((f, i) => (
                <span key={i} className="text-lg">{f}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith('/') ? (
                      <Link href={l.href} className="text-white/40 hover:text-neon text-sm font-body transition-colors">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-white/40 hover:text-neon text-sm font-body transition-colors">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25 font-body">
          <p>© 2025 FlowSuite · Rodrigo A. Díaz Videla · Ormont-Dessous, Vaud, Suiza</p>
          <p className="font-mono">flowsuite.ch · Empresa exenta de IVA (Art. 10 LTVA)</p>
        </div>
      </div>
    </footer>
  )
}
