# FlowSuite Website

Sitio web oficial de **FlowSuite** — empleados digitales con IA para PYMEs en España y Suiza.

---

## 🚀 Descripción

FlowSuite es una plataforma de agentes IA (FLOWY) que atiende, convierte y fideliza clientes de forma autónoma mediante voz, chat y automatizaciones inteligentes. Esta web es su landing page principal, construida con Next.js 14 y diseñada para los mercados de España 🇪🇸 y Suiza 🇨🇭.

## 🛠️ Stack tecnológico

| Tecnología | Versión |
|---|---|
| [Next.js](https://nextjs.org/) | 14.2.3 |
| [React](https://react.dev/) | 18 |
| [TypeScript](https://www.typescriptlang.org/) | 5 |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 |
| [Framer Motion](https://www.framer.com/motion/) | 11 |

## 📁 Estructura del proyecto

```
/
├── page.tsx            # Página principal (ensamblado de secciones)
├── layout.tsx          # Layout global (fuentes, metadata)
├── globals.css         # Variables CSS y estilos globales
├── tailwind.config.ts  # Configuración de Tailwind
├── next.config.mjs     # Configuración de Next.js
├── tsconfig.json       # Configuración de TypeScript
│
├── Nav.tsx             # Barra de navegación
├── Hero.tsx            # Sección principal con NeuralCanvas
├── NeuralCanvas.tsx    # Animación de red neuronal (canvas)
├── SocialProof.tsx     # Prueba social / logotipos
├── HowItWorks.tsx      # Cómo funciona (3 pasos)
├── Sectors.tsx         # Sectores que cubre FLOWY
├── Demo.tsx            # Demo interactiva del agente
├── Pricing.tsx         # Planes de precios (ES / CH)
├── FAQ.tsx             # Preguntas frecuentes
├── CTA.tsx             # Llamada a la acción final
└── Footer.tsx          # Pie de página con enlaces y contacto
```

## ⚡ Primeros pasos

### Requisitos previos

- Node.js 18+
- npm, yarn o pnpm

### Instalación y desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |

## 🤖 Secciones de la landing page

| Sección | ID | Descripción |
|---|---|---|
| **Hero** | — | Headline principal con red neuronal animada |
| **Social Proof** | — | Métricas: 24/7, +40% conversiones, <2s respuesta, 6 idiomas |
| **Cómo funciona** | `#como-funciona` | 3 pasos: conecta, FLOWY atiende, tú mides |
| **Sectores** | `#sectores` | 9 industrias: Salud, Hostelería, Legal, Inmobiliaria, etc. |
| **Demo** | `#demo` | Conversación en vivo con FLOWY |
| **Precios** | `#precios` | 3 planes con toggle ES/CH |
| **FAQ** | — | Preguntas frecuentes |
| **CTA** | — | Llamada a la acción final |

## 💶 Planes de precios

| Plan | España | Suiza | Descripción |
|---|---|---|---|
| **Presencia** | 99 €/mes | 129 CHF/mes | 1 agente, 500 conversaciones/mes |
| **Captación** ⭐ | 179 €/mes | 229 CHF/mes | Conversaciones ilimitadas, CRM, Make.com |
| **Suite** | 299 €/mes | 389 CHF/mes | Multi-agente, white-label, SLA 99.9% |

> Setup único desde 299 €. Sin permanencia ni sorpresas.

## 📬 Contacto

- **Email:** [info@flowsuite.ch](mailto:info@flowsuite.ch)
- **Teléfono ES:** [+34 634 13 44 66](tel:+34634134466)
- **Teléfono CH:** [+41 77 941 35 32](tel:+41779413532)
- **WhatsApp:** [wa.me/34634134466](https://wa.me/34634134466)

---

© 2025 FlowSuite · Rodrigo A. Díaz Videla · Ormont-Dessous, Vaud, Suiza · [flowsuite.ch](https://flowsuite.ch)
