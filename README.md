# FORGE — Fitness Coach Website

An energetic personal-trainer site with programs, nutrition plans, transformations and membership signup.

Built with **React 18, Vite, Tailwind CSS 3, React Router 6** and **lucide-react** icons.

## Features
- Home: hero, benefits, programs, before/after highlight, coach intro, BMI calculator (Asian cut-offs), CTA
- Programs: Fat Loss, Muscle Gain, General Fitness + Nutrition Coaching section with a sample Indian meal day
- Program detail: features, sample week, 3 pricing tiers with monthly/3/6-month toggle and discounts
- Transformations: drag-to-compare before/after sliders, testimonials, filter by program
- About: coach profile, certifications, story timeline; Tips/blog with article pages
- Contact: 3-step membership signup (goal → plan → details), saved to localStorage (`forge-signups`)

## How to run
1. Install [Node.js](https://nodejs.org) 18 or newer.
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the link shown (usually http://localhost:5173).

Build for production: `npm run build` (output in `dist/`), preview it with `npm run preview`.

## Project structure
```
src/
  data.js          # all sample content (edit text, prices, images here)
  components/      # reusable UI pieces
  pages/           # one file per page
  App.jsx          # routes
  index.css        # Tailwind + shared styles
tailwind.config.js # brand colours & fonts
```

## Notes
- Photos load from Unsplash, so an internet connection is needed. If an image fails, a placeholder is shown automatically.
- Forms and checkout are front-end only (demo). Data is kept in the browser's localStorage — connect a backend/API to go live.
- Deploy-ready: `vercel.json` (Vercel) and `public/_redirects` (Netlify) make page refreshes work on any route. On Vercel or Netlify just import the repo — no settings needed.

## Author
**Thota Sathwika** — [GitHub](https://github.com/ThotaSathwika) · [LinkedIn](https://linkedin.com/in/thota-sathwika-9046b2297)
