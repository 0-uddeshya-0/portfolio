# Uddeshya Singh — portfolio

Personal portfolio site: **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**.  
Calm, editorial layout with projects, publications, and contact.

<p align="center">
  <a href="https://YOUR-DEPLOYED-SITE.example"><strong>Live site →</strong></a>
  &nbsp;·&nbsp;
  <a href="./CONTENT_GUIDE.md"><strong>Content guide →</strong></a>
</p>

---

## Preview

<p align="center">
  <a href="https://YOUR-DEPLOYED-SITE.example">
    <img src="./docs/preview-placeholder.svg" alt="Portfolio preview — replace docs/preview.png after deploy" width="920" />
  </a>
</p>

Add **`docs/preview.png`** (screenshot of your deployed site, ~1200px wide) and change the `<img src>` in this README from `preview-placeholder.svg` to `preview.png`. Replace **`https://YOUR-DEPLOYED-SITE.example`** with your real URL everywhere above.

> GitHub READMEs do not embed live iframes; the image + link above is the standard way to make the repo feel like a “window” into the site. Clicking the preview opens your live build.

---

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:5173**.

```bash
npm run build   # output in dist/
npm run preview # serve production build locally
```

---

## Stack

| Layer | Choice |
|--------|--------|
| UI | React 19, Tailwind, Framer Motion |
| Routing | React Router |
| Icons | Lucide React |

---

## Where to edit content

| Content | File / folder |
|---------|----------------|
| **Profile photo** | `public/profile.jpg` (path in `src/data/portfolio.ts` → `personalInfo.photo`) |
| **Projects, bio, skills, publications** | `src/data/portfolio.ts` |
| **Sketches / art images** | `public/sketches/` + `creativeWork` in `portfolio.ts` |
| **Featured projects on home** | `src/pages/Home.tsx` (Featured Work section) |

Full step-by-step instructions: **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**.
Deployment instructions: **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)**.
Repo hardening checklist: **[docs/REPO_HARDENING.md](./docs/REPO_HARDENING.md)**.

---

## Deploy

### GitHub (professional setup with Actions)

This repo now includes:

- CI workflow: `.github/workflows/ci.yml` (lint + build on PR and main)
- Deploy workflow: `.github/workflows/deploy-pages.yml` (auto deploy to GitHub Pages on main)
- Node version pin: `.nvmrc`

#### 1) Create and push a new GitHub repository

```bash
git init
git add .
git commit -m "Initial portfolio deployment setup"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

#### 2) Enable GitHub Pages

1. Open your repo → **Settings** → **Pages**
2. Under **Build and deployment**, choose **GitHub Actions**
3. Push to `main` (or run workflow manually) to trigger deployment

#### 3) Configure base path (important)

- If using **custom domain** (recommended for `uddeshya.de`), set repo variable:
  - Settings → Secrets and variables → Actions → Variables
  - Add `VITE_BASE_PATH` = `/`
- If using `https://<username>.github.io/<repo>/`, set:
  - `VITE_BASE_PATH` = `/<repo>/`

#### 4) Optional custom domain (`uddeshya.de`)

1. In Pages settings, add custom domain `uddeshya.de`
2. In your DNS provider:
   - Add `A` records for GitHub Pages IPs
   - Add `CNAME` for `www` to `<username>.github.io`
3. Enable HTTPS in Pages settings

#### 5) Verify

- CI passes in the **Actions** tab
- `Deploy to GitHub Pages` succeeds
- Site opens at your Pages URL or custom domain

### Other hosts (Vercel/Netlify/Cloudflare)

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_BASE_PATH=/`

---

## License

Private / personal portfolio — adjust as you like.
