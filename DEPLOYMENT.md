# 🚀 Deployment Guide - Vercel

Your portfolio website is now available on GitHub at: **[https://github.com/Dewmikzz/dewx-web](https://github.com/Dewmikzz/dewx-web)**

## Quick Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account (or create an account)

2. **Import Your Repository**
   - Click on **"Add New..."** → **"Project"**
   - You'll see your GitHub repositories
   - Find and click **"Import"** next to `Dewmikzz/dewx-web`

3. **Configure Project Settings**
   Vercel will auto-detect Next.js and configure these settings automatically:
   - **Framework Preset**: Next.js ✅
   - **Root Directory**: `./` ✅
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `.next` ✅
   - **Install Command**: `npm install` ✅

4. **Deploy**
   - Click the **"Deploy"** button
   - Wait 2-3 minutes for the build to complete
   - Your site will be live automatically!

5. **Your Live URL**
   - After deployment, you'll get a URL like: `https://dewx-web.vercel.app`
   - You can customize the domain in Vercel settings

### Method 2: Via Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (run from your project directory)
cd d:\DewX
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? dewx-web (or your preferred name)
# - Directory? ./
# - Override settings? No
```

### Automatic Deployments

Once connected to Vercel:
- ✅ **Automatic Deployments**: Every push to `main` branch automatically deploys
- ✅ **Preview Deployments**: Pull requests get preview URLs automatically
- ✅ **Zero Configuration**: Works out of the box with Next.js

### Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `dewx.dev`)
4. Follow DNS configuration instructions

### Environment Variables (If Needed)

If you add environment variables later:
1. Go to **"Settings"** → **"Environment Variables"**
2. Add your variables
3. Redeploy to apply changes

## What's Included

- ✅ `vercel.json` - Vercel configuration file
- ✅ Next.js optimized build settings
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Check build logs in Vercel dashboard if issues occur

---

**Your code is ready to deploy! 🎉**

Visit [vercel.com](https://vercel.com) to get started.

