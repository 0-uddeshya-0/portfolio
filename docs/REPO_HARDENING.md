# Repository Hardening Checklist

Use this after the first push to GitHub.

## 1) Enable branch protection

Run:

```bash
scripts/github/protect-main.sh <owner/repo>
```

Example:

```bash
scripts/github/protect-main.sh 0-uddeshya-0/portfolio-main
```

This enforces:
- Pull-request based changes on `main`
- Required status check (`build`)
- 1 approving review minimum
- CODEOWNERS review required
- Conversation resolution required
- No force pushes, no branch deletion
- Linear history

## 2) Enable Dependabot alerts

Repo Settings:
- Security & analysis:
  - Dependabot alerts = ON
  - Dependabot security updates = ON

## 3) Actions security

Repo Settings:
- Actions > General
  - Allow actions from Marketplace + verified creators
  - Enable workflow permissions: `Read and write` only if needed (Pages deploy needs write for pages token)

## 4) Environment protection (optional but recommended)

For `github-pages` environment:
- Require reviewers (if you want manual gate)
- Restrict deployment branches to `main`

## 5) Labels + project hygiene

Recommended labels:
- `bug`, `enhancement`, `documentation`, `security`, `ci`, `content`

## 6) Release process

- Tag release: `vX.Y.Z`
- Push tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

- `release.yml` builds and publishes release artifact automatically.
