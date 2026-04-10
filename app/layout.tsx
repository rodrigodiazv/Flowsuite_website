import type { Metadata } from 'next'
import { Syne, Manrope, Space_Mono } from 'next/font/google'
import '@/app/globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FlowSuite — Empleados Digitales con IA para tu Negocio',
  description: 'Agentes de IA que atienden, convierten y fidelizan clientes 24/7. Voz, texto y automatización para PYMEs en España y Suiza.',
  keywords: ['agente IA', 'empleado digital', 'automatización', 'chatbot', 'voz IA', 'PYME', 'Switzerland', 'España'],
  authors: [{ name: 'FlowSuite', url: 'https://flowsuite.ch' }],
  openGraph: {
    title: 'FlowSuite — Empleados Digitales con IA',
    description: 'Tu negocio atendido por IA. 24/7, en todos los idiomas.',
    url: 'https://flowsuite.ch',
    siteName: 'FlowSuite',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowSuite — Empleados Digitales con IA',
  },
  metadataBase: new URL('https://flowsuite.ch'),
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body className="noise bg-bg antialiased">
        <div className="scan-line" />
        {children}
      </body>
    </html>
  )
}
