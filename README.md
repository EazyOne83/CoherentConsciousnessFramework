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

# Coherent Consciousness Framework (CCF)

The **Coherent Consciousness Framework (CCF)** is a formal theoretical model describing the organization, stability, and transition dynamics of conscious states. CCF integrates nonlinear dynamical systems, information geometry, and empirical signal analysis to characterize how distinct informational modes interact to produce coherent or non‑coherent conscious experience.

---

## 1. Overview

CCF models consciousness as a tripartite dynamical system:

- **Physical Mode of Consciousness (PMC)** — substrate-level physiological and neuroelectrical processes  
- **Entropic Mode of Consciousness (EMC)** — stochastic, dissipative, and entropy‑driven components  
- **Integrative Mode of Consciousness (IMC)** — coherence‑maintaining, information‑binding processes  

The interaction among these modes is governed by a nonlinear ODE/SDE system modulated by a **synergy parameter γ**, which determines the stability of IMC coherence. At a critical value γc, the system exhibits a **saddle‑node bifurcation**, marking a collapse of integrative stability.

---

## 2. Mathematical Structure

### 2.1 Dynamical System
CCF is expressed as:



\[
\dot{x} = F(x, \gamma), \quad x = (PMC, EMC, IMC)
\]



where γ modulates the coherence‑supporting contribution of IMC.  
The system’s qualitative behavior is characterized through:

- fixed‑point analysis  
- bifurcation structure  
- stability of IMC trajectories  
- sensitivity to γ‑driven perturbations  

### 2.2 Integrative Information Flow (IIF)
IIF provides a geometric measure of resistance to state transitions.  
Curvature properties of IIF encode:

- coherence stability  
- susceptibility to collapse  
- transition pathways between experiential states  

### 2.3 Integrative Micro‑Signals (IMS)
IMS vectors represent micro‑scale integrative events hypothesized to be detectable via EEG/fMRI.  
They constitute the empirical, falsifiable signature of CCF.

---

## 3. Repository Contents

### **/math**
Formal mathematical development of CCF:
- system equations  
- bifurcation analysis  
- IIF curvature definitions  
- IMS formulation  
- theoretical proofs and derivations  

### **/simulation**
Computational implementation:
- agent‑based simulation (ABM)  
- γ‑sweep experiments  
- IMC coherence metrics  
- synthetic IMS generation  
- phase portraits and trajectory visualizations  

### **/docs**
Conceptual and explanatory materials:
- theoretical background  
- diagrams and illustrations  
- interpretive notes  
- empirical predictions  

### **/paper**
Manuscript materials:
- arXiv submission  
- figures  
- supplementary notes  

---

## 4. Research Objectives

CCF aims to:

- provide a mathematically rigorous account of conscious state organization  
- define measurable, falsifiable empirical signatures (IMS)  
- unify dynamical systems, information geometry, and cognitive modeling  
- support computational and experimental investigation of coherence dynamics  
- establish a foundation for applications in neuroscience, AI systems, and clinical contexts  

---

## 5. Author

**Erik De La Rosa Sr**  
Independent Researcher — Arlington, TX

---

## 6. License

Code: MIT License  
Documentation/Theory: CC BY 4.0 recommended
