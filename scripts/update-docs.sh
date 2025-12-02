#!/bin/bash
# Post-file-edit hook: Update documentation when files change

set -e

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Not in a git repository, skipping documentation update"
    exit 0
fi

# Get the list of changed files
CHANGED_FILES=$(git diff --name-only HEAD)

# Only proceed if there are actual changes
if [ -z "$CHANGED_FILES" ]; then
    exit 0
fi

echo "Files changed: $CHANGED_FILES"

# Update CLAUDE.md timestamp
if [ -f "CLAUDE.md" ]; then
    sed -i "s/Last updated: .*/Last updated: $(date -u +"%Y-%m-%d %H:%M:%S UTC")/" CLAUDE.md
    echo "Updated CLAUDE.md timestamp"
fi

# Log the update
echo "$(date): Documentation auto-update triggered by file changes" >> .claude/update.log

echo "Documentation update completed"