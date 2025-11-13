#!/bin/bash

# Auto-save script for GitHub
# This script watches for file changes and automatically commits and pushes to GitHub

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting auto-save to GitHub...${NC}"
echo "Watching for changes in: $REPO_DIR"
echo "Press Ctrl+C to stop"
echo ""

# Function to commit and push
commit_and_push() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] Changes detected, committing...${NC}"
    
    # Add all changes
    git add -A
    
    # Commit with timestamp
    git commit -m "Auto-save: $(date '+%Y-%m-%d %H:%M:%S')" || {
        echo "No changes to commit"
        return
    }
    
    # Push to GitHub
    git push origin main 2>/dev/null || git push origin master 2>/dev/null || {
        echo "Failed to push. Make sure you have a GitHub remote configured."
        echo "Run: git remote add origin <your-github-repo-url>"
        return
    }
    
    echo -e "${GREEN}✓ Changes pushed to GitHub${NC}"
    echo ""
}

# Find fswatch in common locations
FSWATCH_CMD=""
if command -v fswatch &> /dev/null; then
    FSWATCH_CMD="fswatch"
elif [ -f /opt/homebrew/bin/fswatch ]; then
    FSWATCH_CMD="/opt/homebrew/bin/fswatch"
elif [ -f /usr/local/bin/fswatch ]; then
    FSWATCH_CMD="/usr/local/bin/fswatch"
fi

# Check if fswatch is installed (macOS)
if [ -n "$FSWATCH_CMD" ]; then
    echo "Using fswatch to monitor changes..."
    $FSWATCH_CMD -o . | while read f; do
        commit_and_push
    done
# Check if inotifywait is installed (Linux)
elif command -v inotifywait &> /dev/null; then
    echo "Using inotifywait to monitor changes..."
    while inotifywait -r -e modify,create,delete,move . 2>/dev/null; do
        commit_and_push
    done
# Fallback to polling
else
    echo "No file watcher found. Installing fswatch is recommended for macOS:"
    echo "  brew install fswatch"
    echo ""
    echo "Falling back to polling every 30 seconds..."
    while true; do
        if ! git diff --quiet || ! git diff --cached --quiet; then
            commit_and_push
        fi
        sleep 30
    done
fi

