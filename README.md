# Kitasystems Landing Page

This is a modern React application built with Vite, Tailwind CSS, and Framer Motion.

## How to Host on GitHub Pages

There are two primary ways to host this site on GitHub Pages:

### Method 1: Using GitHub Actions (Recommended)
This is the modern and automated way to deploy Vite applications.

1. Download this app as a ZIP file using the Settings menu in AI Studio.
2. Create a new repository on GitHub and commit all the extracted files (including `src/` and `package.json`).
3. In your GitHub repository, go to **Settings > Pages**.
4. Set the Source to **GitHub Actions**.
5. Create a new file in your repository: `.github/workflows/deploy.yml` with the Vite deployment YAML (you can find standard Vite GitHub Actions templates online).
6. Push to `main`. Every time you push, your site will build and deploy!

### Method 2: Manual Build and Deploy
If you just want to host static files immediately:

1. Download this app as a ZIP file.
2. Open your terminal in the extracted folder and run:
   ```bash
   npm install
   npm run build
   ```
3. A `dist/` folder will be generated containing your static website.
4. Upload **only** the contents of the `dist/` folder to your GitHub repository.
5. In your GitHub repository, go to **Settings > Pages**.
6. Set the Source to **Deploy from a branch**.
7. Select your **main** branch and **/** (root) folder.
8. Click Save. Your website will be live in minutes!

*Note: The `vite.config.ts` has already been configured with `base: './'` so the relative asset paths will work perfectly anywhere on GitHub Pages!*

