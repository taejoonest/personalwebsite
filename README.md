# Personal portfolio (Kye Shimizu–style)

Minimal portfolio built with **Astro**, **Tailwind CSS**, and **React** (for hover preview and clock), inspired by [kyeshimizu.com](https://kyeshimizu.com/).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Deploy to a real URL

Push this project to **GitHub** (or GitLab), then connect it to one of these (all have free tiers):

| Service | Steps | You get |
|--------|--------|--------|
| **[Vercel](https://vercel.com)** | Sign in with GitHub → **Add New Project** → import this repo → leave **Build**: `npm run build`, **Output**: `dist` → Deploy. | `your-project.vercel.app` (and optional custom domain) |
| **[Netlify](https://netlify.com)** | Sign in with GitHub → **Add new site** → **Import from Git** → pick repo → **Build command**: `npm run build`, **Publish directory**: `dist` → Deploy. | `something.netlify.app` (and optional custom domain) |
| **[Cloudflare Pages](https://pages.cloudflare.com)** | Sign in → **Create project** → **Connect to Git** → pick repo → **Build command**: `npm run build`, **Build output**: `dist` → Save and Deploy. | `your-project.pages.dev` (and optional custom domain) |

After the first deploy, every push to your main branch will trigger a new build and update the live site.

**If the project isn’t on GitHub yet:** in this folder run `git init`, create a new repo on GitHub, then `git remote add origin <your-repo-url>` and push. Then connect that repo to Vercel/Netlify/Cloudflare as above.

## Edit content

- **Projects:** `src/data/projects.ts` — add/edit projects (title, year, slug, image URL).
- **About:** `src/pages/about.astro` — replace the placeholder text.
- **CV link:** In `src/layouts/BaseLayout.astro`, set the `href` of the CV nav link to your PDF or URL.
- **Branding:** Change “K / S” and “( c ) 2015 - 2025” in the layout to your name and years.

## Features

- Fixed header with logo, About / Projects / CV, and live clock (Tokyo time)
- Vertical copyright in bottom-right corner
- Home: projects grouped by year; hover a project to see image preview on the right (desktop)
- View Transitions between pages
- Responsive; hover preview and clock hidden on small screens
