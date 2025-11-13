# Winsights Website

## Setup GitHub Repository

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Create a new repository (e.g., `winsights_website`)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)

2. **Connect your local repository to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/winsights_website.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username.

## Auto-Save to GitHub

This repository includes an auto-save script that automatically commits and pushes changes to GitHub.

### Setup

1. **Make the script executable:**
   ```bash
   chmod +x autosave.sh
   ```

2. **Install fswatch (recommended for macOS):**
   ```bash
   brew install fswatch
   ```

3. **Run the auto-save script:**
   ```bash
   ./autosave.sh
   ```

The script will:
- Watch for file changes in the repository
- Automatically commit changes with a timestamp
- Push changes to GitHub

### Running in Background

To run the auto-save script in the background:

```bash
nohup ./autosave.sh > autosave.log 2>&1 &
```

To stop it:
```bash
pkill -f autosave.sh
```

### Alternative: Using Git Hooks (Manual Trigger)

If you prefer manual control, you can also use git hooks. The auto-save script is more convenient for continuous syncing.

## First Commit

After setting up the GitHub remote, make your first commit:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

