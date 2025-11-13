#!/bin/bash

# Setup script to connect this repository to GitHub

echo "GitHub Repository Setup"
echo "======================"
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "GitHub remote already configured:"
    git remote get-url origin
    echo ""
    read -p "Do you want to change it? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Keeping existing remote."
        exit 0
    fi
    git remote remove origin
fi

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME
if [ -z "$GITHUB_USERNAME" ]; then
    echo "Error: GitHub username is required"
    exit 1
fi

# Get repository name
read -p "Enter repository name (default: winsights_website): " REPO_NAME
REPO_NAME=${REPO_NAME:-winsights_website}

# Ask for HTTPS or SSH
echo ""
echo "Choose connection method:"
echo "1) HTTPS (recommended, easier setup)"
echo "2) SSH (requires SSH keys setup)"
read -p "Enter choice (1 or 2): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[1]$ ]]; then
    GITHUB_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
else
    GITHUB_URL="git@github.com:${GITHUB_USERNAME}/${REPO_NAME}.git"
fi

# Add remote
git remote add origin "$GITHUB_URL"
echo ""
echo "✓ Added GitHub remote: $GITHUB_URL"
echo ""

# Set branch to main
git branch -M main

# Ask if user wants to push now
read -p "Do you want to push to GitHub now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Pushing to GitHub..."
    git push -u origin main
    if [ $? -eq 0 ]; then
        echo ""
        echo "✓ Successfully pushed to GitHub!"
        echo ""
        echo "You can now start the auto-save script with:"
        echo "  ./autosave.sh"
    else
        echo ""
        echo "⚠ Push failed. Make sure:"
        echo "  1. The repository exists on GitHub"
        echo "  2. You have the correct permissions"
        echo "  3. You're authenticated (for HTTPS, you may need a personal access token)"
        echo ""
        echo "You can push manually later with:"
        echo "  git push -u origin main"
    fi
else
    echo ""
    echo "To push later, run:"
    echo "  git push -u origin main"
fi

echo ""
echo "Setup complete!"

