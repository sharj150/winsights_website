# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js site to GitHub Pages.

## Prerequisites

- A GitHub repository (already set up: `winsights_website`)
- GitHub Pages enabled in your repository settings

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/sharj150/winsights_website`
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Save the settings

### 2. Configure Custom Domain (Optional)

If you're using a custom domain (`winsights.info`):

1. In the same **Pages** settings section
2. Enter your custom domain in the **Custom domain** field: `winsights.info`
3. Check **Enforce HTTPS** (recommended)
4. Add a `CNAME` file to your repository root (see below)

### 3. Create CNAME File (For Custom Domain)

If using a custom domain, create a `CNAME` file in the `public` folder:

```
winsights.info
```

Or if you want it in the root, create it at the repository root.

### 4. Configure Base Path (If Needed)

**Important**: If your repository name is NOT your username (e.g., `username.github.io`), you'll need to set a base path.

- If deploying to: `username.github.io/winsights_website/`
  - Uncomment `basePath: '/winsights_website'` in `next.config.js`
  - Uncomment `trailingSlash: true` in `next.config.js`

- If deploying to root domain: `winsights.info` or `username.github.io`
  - Keep `basePath` commented out (current setup)

### 5. Push Changes

The GitHub Actions workflow will automatically:
1. Build your Next.js site as a static export
2. Deploy it to GitHub Pages
3. Make it available at your configured URL

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 6. Verify Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

## Deployment URLs

- **GitHub Pages default**: `https://sharj150.github.io/winsights_website/` (if basePath is set)
- **Custom domain**: `https://winsights.info` (if configured)

## Troubleshooting

### Build Fails

- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify `next.config.js` is correctly configured

### Images Not Loading

- Static export requires `unoptimized: true` in `next.config.js` (already configured)
- Ensure image paths are relative (starting with `/`)

### 404 Errors

- If using a basePath, ensure it's correctly set in `next.config.js`
- Check that `trailingSlash: true` is set if using basePath
- Verify GitHub Pages source is set to "GitHub Actions"

### Custom Domain Not Working

1. Verify DNS settings:
   - Add a CNAME record pointing to `sharj150.github.io`
   - Or add A records for GitHub Pages IPs
2. Wait for DNS propagation (can take up to 24 hours)
3. Check that the CNAME file exists in your repository

## Manual Deployment

If you want to test the build locally first:

```bash
npm run build
```

This will create an `out` folder with the static files. You can preview it locally or deploy manually.

## Continuous Deployment

The workflow is configured to automatically deploy on every push to the `main` branch. You can also manually trigger it from the **Actions** tab.

