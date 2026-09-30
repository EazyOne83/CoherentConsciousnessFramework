# Coherent Consciousness Framework

> Documentation site for [coherentsystems.institute](https://coherentsystems.institute)

A rigorous, systems-informed framework for understanding how coherence emerges in conscious, complex, and organizational systems. Built with [Astro](https://astro.build) and MDX.

---

## Stack

| Technology | Role |
|---|---|
| [Astro 4](https://astro.build) | Static site framework |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | MDX support — use Astro components in docs |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Auto-generated sitemap |
| Custom CSS | Dark-mode design system via CSS variables |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:4321
npm run dev

# Build for production → dist/
npm run build

# Preview the production build
npm run preview
```

---

## Project Structure

```
coherentconsciousnessframework/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Sidebar.astro
│   │   └── TableOfContents.astro
│   ├── layouts/
│   │   └── DocsLayout.astro
│   ├── pages/
│   │   ├── index.astro               ← Landing page
│   │   └── docs/
│   │       ├── introduction.mdx
│   │       ├── quick-start.mdx
│   │       ├── installation.mdx
│   │       ├── framework/
│   │       │   ├── overview.mdx
│   │       │   ├── core-principles.mdx
│   │       │   ├── coherence-model.mdx
│   │       │   └── consciousness-layers.mdx
│   │       ├── philosophy/
│   │       │   ├── foundations.mdx
│   │       │   ├── systems-theory.mdx
│   │       │   └── emergence.mdx
│   │       ├── applications/
│   │       │   ├── organizational-design.mdx
│   │       │   ├── decision-systems.mdx
│   │       │   └── knowledge-architectures.mdx
│   │       └── reference/
│   │           ├── glossary.mdx
│   │           ├── contributing.mdx
│   │           └── changelog.mdx
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Adding a Doc Page

1. Create `src/pages/docs/[section]/my-page.mdx`
2. Add frontmatter:

```mdx
---
layout: ../../../layouts/DocsLayout.astro
title: My Page Title
description: SEO description.
---

## Your content here
```

3. Register it in `src/components/Sidebar.astro` under the appropriate nav group.

---

## Push to GitHub

```bash
# From the project root
git init
git add .
git commit -m "feat: initial Astro docs site for coherentsystems.institute"
git remote add origin https://github.com/yourusername/coherentconsciousnessframework.git
git push -u origin main
```

---

## Deployment

This is a fully static site. Deploy the `dist/` output to:

- **Cloudflare Pages** — connect repo, build command: `npm run build`, output: `dist`
- **Vercel** — auto-detected as Astro; zero config needed
- **Netlify** — same as Vercel
- **GitHub Pages** — use the official [Astro GitHub Action](https://docs.astro.build/en/guides/deploy/github/)

---

## License

MIT — fork freely.
