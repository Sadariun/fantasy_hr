# Complete Guide: Deploying React App to GitHub Pages

## Prerequisites
- A React app (created with Vite, Create React App, or similar)
- A GitHub account
- Git installed on your machine
- Node.js and npm installed

## Step-by-Step Deployment Process

### 1. Prepare Your React App

#### For Vite-based React apps:
```bash
# Install gh-pages package
npm install --save-dev gh-pages
```

#### For Create React App:
```bash
# Install gh-pages package
npm install --save-dev gh-pages
```

### 2. Configure Your Build Tool

#### Vite Configuration (vite.config.ts)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// IMPORTANT: Set the correct base path for your repository
const repoName = 'your-repo-name'; // ⚠️ CHANGE THIS TO YOUR ACTUAL REPO NAME
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? `/${repoName}/` : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

#### Create React App Configuration
Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

### 3. Add Deployment Scripts to package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Note:** For Create React App, use `"deploy": "gh-pages -d build"` instead.

### 4. Create GitHub Repository

1. Go to GitHub.com and create a new repository
2. **IMPORTANT:** Make sure the repository is public (GitHub Pages doesn't work with private repos on free tier)
3. Don't initialize with README, .gitignore, or license (if you already have a local project)

### 5. Initialize Git and Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote origin
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 6. Deploy to GitHub Pages

```bash
npm run deploy
```

### 7. Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

## Common Mistakes and Solutions

### ❌ Mistake 1: Wrong Repository Name in Configuration
**Problem:** Your app doesn't load or shows 404 errors
**Solution:** Make sure the `repoName` in `vite.config.ts` matches your actual GitHub repository name exactly (case-sensitive)

### ❌ Mistake 2: Using Private Repository
**Problem:** GitHub Pages deployment fails or doesn't work
**Solution:** Make your repository public, or upgrade to GitHub Pro for private repo support

### ❌ Mistake 3: Wrong Build Directory
**Problem:** Deployment succeeds but site shows blank page
**Solution:** 
- For Vite: Use `"deploy": "gh-pages -d dist"`
- For Create React App: Use `"deploy": "gh-pages -d build"`

### ❌ Mistake 4: Missing Base Path Configuration
**Problem:** Assets (CSS, JS, images) fail to load
**Solution:** Ensure your `vite.config.ts` has the correct `base` configuration for production

### ❌ Mistake 5: Not Running Build Before Deploy
**Problem:** Old version or no changes appear
**Solution:** Always run `npm run build` before `npm run deploy`, or use the `predeploy` script

### ❌ Mistake 6: Wrong Branch Selection in GitHub Settings
**Problem:** Site shows 404 or old content
**Solution:** In GitHub Pages settings, make sure you're deploying from the `gh-pages` branch, not `main`

### ❌ Mistake 7: Using Hash Router Instead of Browser Router
**Problem:** Direct URL access doesn't work
**Solution:** Use `BrowserRouter` instead of `HashRouter` for better URL handling

### ❌ Mistake 8: Forgetting to Commit and Push Changes
**Problem:** Local changes don't appear on the deployed site
**Solution:** Always commit and push your changes before deploying

## Troubleshooting Checklist

### Before Deployment:
- [ ] Repository name is correct in configuration
- [ ] Repository is public
- [ ] All changes are committed and pushed
- [ ] Build script works locally (`npm run build`)
- [ ] No TypeScript or linting errors

### After Deployment:
- [ ] Check GitHub Actions tab for deployment status
- [ ] Verify gh-pages branch was created
- [ ] Check GitHub Pages settings (gh-pages branch selected)
- [ ] Wait 5-10 minutes for changes to propagate
- [ ] Clear browser cache and try incognito mode

### Common Error Messages:

**"404 Not Found"**
- Check repository name in configuration
- Verify GitHub Pages is enabled
- Ensure gh-pages branch exists

**"Build failed"**
- Check for TypeScript errors
- Verify all dependencies are installed
- Check build script in package.json

**"Assets not loading"**
- Verify base path configuration
- Check if assets are in the correct build directory
- Ensure relative paths are correct

## Advanced Configuration

### Custom Domain (Optional)
1. Add a `CNAME` file to your `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

### Environment Variables
For environment variables, create `.env.production`:
```
VITE_API_URL=https://your-api.com
```

### SEO Optimization
Add meta tags to your `index.html`:
```html
<meta name="description" content="Your app description">
<meta name="keywords" content="react, app, keywords">
```

## Final Notes

- GitHub Pages can take 5-10 minutes to update after deployment
- Always test your build locally before deploying
- Keep your `gh-pages` package updated
- Consider using GitHub Actions for automated deployments
- Monitor your repository's Actions tab for deployment status

## Quick Commands Reference

```bash
# Build and deploy
npm run deploy

# Build only
npm run build

# Check deployment status
git status

# View gh-pages branch
git branch -a

# Force rebuild and redeploy
npm run build && npm run deploy
```

Your site will be available at: `https://yourusername.github.io/your-repo-name` 