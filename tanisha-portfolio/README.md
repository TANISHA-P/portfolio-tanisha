# Tanisha Pareek — Portfolio

A space-exploration themed portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
npm run start
```

## Project Structure

```
tanisha-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       # Base styles, fonts, CSS variables
│   │   ├── layout.tsx        # Root layout + metadata
│   │   └── page.tsx          # Main page composition
│   └── components/
│       ├── ui/
│       │   ├── Starfield.tsx  # Animated canvas starfield
│       │   ├── Nav.tsx        # Fixed navigation bar
│       │   └── Reveal.tsx     # Scroll-triggered reveal wrapper
│       └── sections/
│           ├── Hero.tsx       # Landing section
│           ├── About.tsx      # About + stats
│           ├── Experience.tsx # Work history
│           ├── Projects.tsx   # Project cards
│           ├── Skills.tsx     # Skills grouped by category
│           ├── Contact.tsx    # Contact + links
│           └── Footer.tsx     # Footer with quote
├── public/
│   └── Tanisha_Pareek_Resume.pdf  ← DROP YOUR RESUME HERE
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Add Your Resume

Drop your resume PDF into `public/` and name it exactly:
```
public/Tanisha_Pareek_Resume.pdf
```

The "Download Resume" and "Resume" nav button will automatically serve it.

## Customization

- **Colors**: Edit CSS variables in `src/app/globals.css` (`:root` block)
- **Content**: Each section is a self-contained component — edit inline data arrays
- **Fonts**: Loaded via Google Fonts in `globals.css` (`@import` at the top)
- **Starfield**: Tune `STAR_COUNT`, speed, and colors in `Starfield.tsx`

---

## Deploy on Vercel (Recommended)

### Option A — GitHub + Vercel (easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/tanisha-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) → Sign in with GitHub
   - Click **"New Project"**
   - Import your `tanisha-portfolio` repository
   - Vercel auto-detects Next.js — no config needed
   - Click **"Deploy"**
   - Done. You get a live URL like `tanisha-portfolio.vercel.app`

3. **Custom domain (optional)**
   - In Vercel dashboard → Project → Settings → Domains
   - Add your domain (e.g. `tanishapareek.dev`)
   - Update DNS records as instructed

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel          # follow prompts — auto-deploys
vercel --prod   # promote to production
```

### Environment Variables (if needed later)
In Vercel dashboard → Project → Settings → Environment Variables.
No env vars needed for this project by default.

---

## Performance Notes

- Starfield canvas uses `requestAnimationFrame` with a fill opacity trick to avoid re-clearing each frame (motion blur effect with zero memory leak risk)
- Framer Motion `useInView` with `once: true` ensures animations trigger only once
- Google Fonts loaded with `display=swap` to prevent layout shift
- All images/assets served from `public/` via Next.js static optimization
