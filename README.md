# Uddeshya Singh — Portfolio

Personal website and working portfolio for AI systems, data engineering, and product-minded software work.

Built with React + TypeScript + Vite, with bilingual support (EN/DE), subtle motion, and a clean editorial layout.

## Repository

- **GitHub:** [github.com/0-uddeshya-0/portfolio](https://github.com/0-uddeshya-0/portfolio)

## Live

- Production URL: `https://0-uddeshya-0.github.io/portfolio/`
- Planned domain: `uddeshya.de`

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Run locally

```bash
npm install
npm run dev
```

Build production bundle:

```bash
npm run build
npm run preview
```

## Content update map

- Core profile/projects/publications data: `src/data/portfolio.ts`
- Language copy (EN/DE): `src/i18n/translations.ts`
- Home layout: `src/pages/Home.tsx`
- Projects page: `src/pages/Projects.tsx`
- About page: `src/pages/About.tsx`
- Contact + CV cards: `src/pages/Contact.tsx`
- Static assets (photo/CV/book/sketches): `public/`

## Deployment

This repo includes CI/CD workflows out of the box:

- CI: `.github/workflows/ci.yml`
- GitHub Pages deploy: `.github/workflows/deploy-pages.yml`
- Release workflow: `.github/workflows/release.yml`

Detailed docs:

- Deployment guide: `docs/DEPLOYMENT.md`
- Repo hardening checklist: `docs/REPO_HARDENING.md`

## Notes

- For GitHub Pages on this repo, set `VITE_BASE_PATH=/portfolio/` in repository variables.
- When you add the German CV, place it at `public/Resume-DE.pdf`.

---

If you are reading this as a recruiter or collaborator: thanks for stopping by.
