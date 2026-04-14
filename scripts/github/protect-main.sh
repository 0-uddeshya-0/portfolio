#!/usr/bin/env bash
set -euo pipefail

# Applies production-style protection rules to main branch via GitHub CLI.
# Usage:
#   scripts/github/protect-main.sh <owner/repo>
# Example:
#   scripts/github/protect-main.sh 0-uddeshya-0/portfolio-main

REPO="${1:-}"
if [[ -z "$REPO" ]]; then
  echo "Usage: $0 <owner/repo>"
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required. Install: https://cli.github.com/"
  exit 1
fi

# Requires repo admin permission.
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  "repos/${REPO}/branches/main/protection" \
  -f required_linear_history=true \
  -f enforce_admins=true \
  -F allow_force_pushes=false \
  -F allow_deletions=false \
  -F required_conversation_resolution=true \
  -F lock_branch=false \
  -F allow_fork_syncing=true \
  -f required_status_checks.strict=true \
  -f required_status_checks.contexts[]='build' \
  -f required_pull_request_reviews.dismiss_stale_reviews=true \
  -f required_pull_request_reviews.require_code_owner_reviews=true \
  -f required_pull_request_reviews.required_approving_review_count=1

echo "Branch protection applied to ${REPO}:main"
