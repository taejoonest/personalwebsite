# Get your site on a real URL

Your project is already a Git repo with one commit. Do these steps in order.

---

## Step 1: Push to GitHub

**Option A — Using GitHub CLI (easiest)**

1. Log in (your current token is invalid):
   ```bash
   gh auth login -h github.com
   ```
2. Create the repo and push from your project folder:
   ```bash
   cd /Users/mmm/Downloads/PersonalWebsite
   gh repo create personal-website --public --source=. --remote=origin --push
   ```
   You’ll get a URL like `https://github.com/YOUR_USERNAME/personal-website`.

**Option B — Using the GitHub website**

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `personal-website` (or any name). Public. **Do not** add a README or .gitignore.
3. Create the repository.
4. In your project folder, add the remote and push:
   ```bash
   cd /Users/mmm/Downloads/PersonalWebsite
   git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 2: Deploy to get a live URL

Pick one. All have a free tier.

### Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New** → **Project** → import your `personal-website` repo.
3. Leave defaults: **Build Command** `npm run build`, **Output Directory** `dist`.
4. Click **Deploy**. In about a minute you’ll get a URL like `personal-website-xxx.vercel.app`.

### Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign in with GitHub.
2. **Add new site** → **Import an existing project** → **Deploy with GitHub** → choose `personal-website`.
3. **Build command:** `npm run build`  
   **Publish directory:** `dist`
4. **Deploy site**. You’ll get a URL like `something-random.netlify.app`.

### Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select your GitHub account and the `personal-website` repo.
3. **Build command:** `npm run build`  
   **Build output directory:** `dist`
4. **Save and Deploy**. You’ll get a URL like `personal-website.pages.dev`.

---

After Step 1 and Step 2, your site will be live at the URL the host gives you. You can add a custom domain later in the host’s dashboard.
