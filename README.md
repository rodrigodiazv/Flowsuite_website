# FlowSuite Website v2

> Sitio web oficial de FlowSuite — Empleados Digitales con IA para tu Negocio.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/License-Proprietary-red)

🌐 **Live:** https://www.flowsuite.ch

---

## 📚 Table of Contents

- [Features](#-características)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Development Scripts](#️-development-scripts)
- [Deployment Guide](#-deployment-guide)
- [Performance & Optimization](#-performance--optimization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

---

## 📋 Características

- **Agentes IA 24/7** — Atención al cliente automatizada
- **Multiidioma** — ES, FR, DE, IT, EN
- **Responsive** — Optimizado para móvil y desktop
- **Rendimiento** — Sitio optimizado, máxima velocidad
- **SEO** — Metadatos completos, sitemap y robots.txt

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.5 | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations |
| [Vercel](https://vercel.com/) | — | Hosting & deployment |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18 or higher
- **npm** (bundled with Node.js) or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rodrigodiazv/Flowsuite_website.git
cd Flowsuite_website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-reloads on file changes.

---

## 📁 Project Structure

```
Flowsuite_website/
├── app/
│   ├── page.tsx           # Home page (entry point)
│   ├── layout.tsx         # Root layout & metadata
│   ├── globals.css        # Global styles
│   ├── not-found.tsx      # 404 page
│   ├── cookies/           # Cookie policy page
│   ├── legal/             # Legal notice page
│   ├── privacidad/        # Privacy policy page
│   └── impressum/         # Imprint page
├── components/
│   ├── Nav.tsx            # Navigation bar
│   ├── Hero.tsx           # Hero / landing section
│   ├── HowItWorks.tsx     # Product explanation section
│   ├── Sectors.tsx        # Industries served
│   ├── Demo.tsx           # Interactive demo section
│   ├── SocialProof.tsx    # Testimonials / social proof
│   ├── Pricing.tsx        # Plans & pricing
│   ├── FAQ.tsx            # Frequently asked questions
│   ├── CTA.tsx            # Call-to-action section
│   ├── NeuralCanvas.tsx   # Animated background canvas
│   └── Footer.tsx         # Site footer
├── robots.txt             # SEO robots directives
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies & scripts
```

---

## 🔐 Environment Variables

This project currently runs without required environment variables for the basic website. If you add integrations (analytics, CMS, APIs), create a `.env.local` file in the project root:

```bash
# .env.local — never commit this file
# Example variables (add as needed):

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact form API (if integrated)
CONTACT_API_KEY=your_api_key_here
```

> **Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. All others are server-side only.

---

## ⚙️ Development Scripts

All scripts are defined in `package.json` and run with `npm run <script>`:

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev` | Start local development server at `http://localhost:3000` |
| `build` | `next build` | Build the production site |
| `start` | `next start` | Serve the production build locally for preview |

---

## 🚢 Deployment Guide

This site is deployed on [Vercel](https://vercel.com/).

### Vercel (Recommended)

1. **Connect your repository** to Vercel via the [Vercel Dashboard](https://vercel.com/dashboard).
2. **Framework preset:** Next.js (auto-detected).
3. **Build command:** `npm run build`
4. **Output directory:** `.next` (default Next.js output)
5. **Install command:** `npm install`
6. Click **Deploy** — Vercel automatically redeploys on every push to the main branch.

### robots.txt

The `robots.txt` file in the project root is served by Vercel automatically. It currently allows all crawlers while blocking admin/auth routes:

```
User-agent: *
Disallow: /admin/
Disallow: /login/
Disallow: /register/
Allow: /
```

Update this file directly to adjust crawl rules without a code change.

### Manual / Self-Hosted

```bash
# Build the site
npm run build

# The .next/ output can be served with `next start` or deployed to any Node.js host
```

---

## ⚡ Performance & Optimization

This site is optimized for production out of the box:

- **Tailwind CSS purging** — Unused CSS classes are automatically removed in production builds.
- **Framer Motion** — Animations are hardware-accelerated and only run in the browser.
- **React Strict Mode** — Enabled (`reactStrictMode: true`) to catch potential issues during development.
- **Image Optimization** — Use Next.js `<Image>` component for automatic format conversion and lazy loading when adding images.
- **Font loading** — Prefer `next/font` for self-hosted fonts to avoid layout shifts.

---

## 🔧 Troubleshooting

### `npm install` fails

- Ensure you are using **Node.js 18+**: `node -v`
- Delete `node_modules` and `package-lock.json`, then retry:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### `npm run dev` port already in use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Build fails with TypeScript errors

```bash
# Check TypeScript errors without building
npx tsc --noEmit
```

### Framer Motion animations not working in production

- Ensure `framer-motion` is in `dependencies` (not `devDependencies`) in `package.json`.
- Animations that depend on browser APIs (e.g., `window`) should be wrapped in a `useEffect` or use the `AnimatePresence` component.

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository and create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** — keep commits focused and descriptive.
3. **Test locally** before opening a pull request:
   ```bash
   npm run build   # Ensure the build passes
   npm run dev     # Verify changes in the browser
   ```
4. **Open a Pull Request** against the `main` branch with a clear description of your changes.

### Code Style

- Follow existing **TypeScript** conventions (strict mode enabled).
- Use **Tailwind CSS** utility classes for styling — avoid inline styles.
- Keep components in the `components/` directory; pages in `app/`.
- Use descriptive variable and component names in English.

---

## 📧 Contact

| Channel | Details |
|---|---|
| Email | [info@flowsuite.ch](mailto:info@flowsuite.ch) |
| Website | [https://www.flowsuite.ch](https://www.flowsuite.ch) |

---

## 📄 License

© 2025 FlowSuite. All rights reserved. — Proprietary software, not open source.
