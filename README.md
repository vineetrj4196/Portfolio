# Vineet R J — Portfolio

A modern, fast, accessible portfolio built with **Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4**. Four routes (`/`, `/about`, `/projects`, `/contact`) with dark/light theming, scroll animations, a filterable project grid, an accessible contact form, and full SEO/PWA metadata generated via Next's Metadata API.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (flat config, next/core-web-vitals + next/typescript)
```

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx           Root layout — theme init script, JSON-LD, chrome (Header/Footer/Loader/etc.)
│   ├── page.tsx              Home — assembles all preview sections
│   ├── about/page.tsx         Full bio, experience timeline, education, certifications
│   ├── projects/page.tsx       Filterable project grid + modal
│   ├── contact/page.tsx         Validated contact form
│   ├── not-found.tsx            404 page
│   ├── sitemap.ts               Generates /sitemap.xml
│   ├── robots.ts                 Generates /robots.txt
│   ├── manifest.ts               Generates /manifest.webmanifest
│   └── globals.css               Tailwind v4 import, design tokens (@theme), keyframes
├── components/
│   ├── header.tsx, footer.tsx, loader.tsx, scroll-progress-bar.tsx, back-to-top.tsx
│   ├── theme-toggle.tsx, reveal.tsx, breadcrumb.tsx, social-icons.tsx
│   └── sections/                One component per portfolio section (Hero, About, Skills, …)
└── lib/
    ├── site-data.ts              All real + placeholder content lives here (single source of truth)
    ├── theme-provider.tsx         Dark/light context, localStorage persistence
    ├── toast-provider.tsx          Toast notification system
    ├── validation.ts                Contact form validation rules
    └── use-*.ts                      Hooks: in-view reveal, typewriter, counter, scroll-spy, scroll-progress, lock-body-scroll

public/
├── assets/images, assets/icons, assets/resume    Optimized photos, favicons, OG image, resume PDF
└── favicon.ico
```

## ⚠️ Before You Deploy — Customize These

Every real detail from the original site (name, skills, email, social links, work photos) was preserved. Sections with no source content use clearly-labeled **placeholders** — all content lives in `src/lib/site-data.ts`, so start there:

| What | Where | Replace with |
|---|---|---|
| Site URL | `siteConfig.url` in `site-data.ts` | Your real deployed domain (drives canonical URLs, OG tags, sitemap, JSON-LD) |
| Experience & Education | `experience`, `education` in `site-data.ts` | Real company/role names, dates, bullet points |
| Certifications | `certifications` in `site-data.ts` | Real titles, issuers, dates |
| Testimonials | `testimonials` in `site-data.ts` | Real quotes and names, or delete the `<Testimonials />` section |
| Projects | `projects` in `site-data.ts` | Real titles, descriptions, tags, screenshots (`public/assets/images/projects/`), live/GitHub links |
| Resume | `public/assets/resume/Vineet_RJ_Resume.pdf` | Auto-generated placeholder — swap in your finished resume PDF |
| Contact form backend | `SUBMIT_ENDPOINT` in `src/components/sections/contact-form.tsx` | Currently simulated client-side — point at Formspree/EmailJS/your API |

## Design System

Tailwind v4's CSS-first config: all tokens live in `src/app/globals.css` under `@theme` (colors, custom keyframes/animations, the `xs` breakpoint). Dark mode uses the `dark` class on `<html>` (see `@custom-variant dark` in `globals.css`), toggled by `ThemeProvider` and persisted to `localStorage`. Re-theme the whole site by changing two variables:

```css
--color-primary: #2563eb;
--color-primary-2: #7c3aed;
```

## Notable Implementation Details

- **No flash of wrong theme**: a small inline `<script>` in `layout.tsx`'s `<head>` sets the `dark` class before first paint — the one deliberate inline script in the project, documented in place.
- **Fonts**: `next/font/google` self-hosts Poppins at build time — zero runtime requests to Google Fonts.
- **Icons**: `lucide-react` for UI icons; the four brand/social icons (LinkedIn, GitHub, Instagram, Facebook) are hand-rolled SVGs in `social-icons.tsx` because lucide-react's v1 release dropped all brand icons.
- **Images**: `next/image` throughout — automatic format negotiation (WebP/AVIF), lazy loading, and responsive sizing without hand-written `<picture>` tags.
- **Animations**: scroll-reveal, typewriter, counters and skill bars are custom hooks built on `IntersectionObserver`/`requestAnimationFrame` — no animation library dependency. All respect `prefers-reduced-motion`.
- **SEO**: per-page `generateMetadata`/`metadata` exports (title, description, OG, canonical), `Person`/`WebSite`/`BreadcrumbList` JSON-LD, and `sitemap.ts`/`robots.ts`/`manifest.ts` route handlers — no hand-written meta tags.

## Deployment

Optimized for **Vercel** (zero-config). For other Node hosts, `npm run build && npm run start`. This app uses Next's Image Optimization and the Metadata API, so a plain static export (`next export`) is not recommended — deploy to a Node-capable platform instead.

Remember to update `siteConfig.url` in `src/lib/site-data.ts` to your real domain after deploying — it drives every canonical URL, Open Graph tag, and the sitemap.

## Browser Support

Latest versions of Chrome, Firefox, Edge, Safari, Opera, and their mobile equivalents.
