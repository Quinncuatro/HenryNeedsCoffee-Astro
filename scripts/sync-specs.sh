#!/bin/bash
# Post-commit hook: Sync specification documents with Jane

set -e

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Not in a git repository, skipping spec sync"
    exit 0
fi

# Get the latest commit message and hash
COMMIT_HASH=$(git rev-parse --short HEAD)
COMMIT_MSG=$(git log -1 --pretty=%B)

echo "Syncing specs after commit: $COMMIT_HASH"
echo "Commit message: $COMMIT_MSG"

# Check if any critical files changed that would affect our specs
CRITICAL_CHANGES=$(git diff --name-only HEAD~1 HEAD | grep -E '\.(astro|ts|js|json|md)$' || true)

if [ -n "$CRITICAL_CHANGES" ]; then
    echo "Critical files changed, consider updating specs:"
    echo "$CRITICAL_CHANGES"
    
    # Log for potential spec updates
    echo "$(date): Commit $COMMIT_HASH may require spec updates. Files: $CRITICAL_CHANGES" >> .claude/spec-sync.log
fi

# Update project status in CLAUDE.md
if [ -f "CLAUDE.md" ]; then
    # Add commit info to CLAUDE.md
    if ! grep -q "## Recent Changes" CLAUDE.md; then
        echo -e "\n## Recent Changes\n- $COMMIT_HASH: $COMMIT_MSG" >> CLAUDE.md
    else
        sed -i "/^## Recent Changes/a - $COMMIT_HASH: $COMMIT_MSG" CLAUDE.md
    fi
    echo "Added commit info to CLAUDE.md"
fi

echo "Spec sync completed"