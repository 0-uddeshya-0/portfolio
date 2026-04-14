# Deployment Playbook (GitHub + Actions)

This guide gets your portfolio live with a clean professional setup.

## 1) Create the GitHub repository

### Option A: GitHub UI
1. Go to [github.com/new](https://github.com/new)
2. Create a repo (this project targets [`0-uddeshya-0/portfolio`](https://github.com/0-uddeshya-0/portfolio))
3. Keep it empty (no README/license/gitignore)
4. Push your local project:

```bash
git init
git add .
git commit -m "Initial portfolio with CI/CD"
git branch -M main
git remote add origin https://github.com/0-uddeshya-0/portfolio.git
git push -u origin main
```

### Option B: GitHub CLI

```bash
gh auth login
gh repo create portfolio --public --source . --remote origin --push
# (Use the repo name that matches your GitHub account; clone URL should match origin above.)
```

---

## 2) GitHub Actions already included

- `./.github/workflows/ci.yml` → build validation on PRs and main
- `./.github/workflows/deploy-pages.yml` → auto deploy to GitHub Pages on main

No extra code needed.

---

## 3) Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. Under **Build and deployment**, choose **GitHub Actions**
3. Push to `main` once more (or trigger workflow manually)

---

## 4) Set base path correctly

In GitHub repo settings:

- **Settings** → **Secrets and variables** → **Actions** → **Variables**
- Add variable:

| Name | Value |
|------|-------|
| `VITE_BASE_PATH` | `/` for custom domain or user site |

If using repo path deployment (`https://<user>.github.io/<repo>/`), set:

| Name | Value |
|------|-------|
| `VITE_BASE_PATH` | `/<repo>/` |

---

## 5) (Optional) Connect custom domain `uddeshya.de`

1. Repo → **Settings** → **Pages** → add custom domain `uddeshya.de`
2. In DNS:
   - `A` records to GitHub Pages IPs
   - `CNAME` `www` → `<username>.github.io`
3. Enable HTTPS in Pages settings.

---

## 6) Upload German CV later

When ready, place file at:

- `public/Resume-DE.pdf`

Contact page already has download card wired for it.

---

## 7) Professional branch policy (recommended)

- Protect `main` branch
- Require status checks: `CI / build`
- Optionally require PR reviews

---

## 8) Troubleshooting

- 404 on direct route refresh (`/projects`):
  - Already handled by deploy workflow copying `dist/index.html` to `dist/404.html`.
- Broken assets:
  - Check `VITE_BASE_PATH` value.
- Workflow not running:
  - Confirm Actions are enabled in repo settings.

