# 异世界转职公会 · Guild of Destiny

A browser-only interactive fantasy personality quiz built with React, TypeScript, Vite and Framer Motion.

## Features
- 24 scenario questions, six per MBTI axis (E/I, S/N, T/F, J/P).
- Deterministic scoring. If an axis is tied, the answer to the earliest question in that axis decides the letter.
- All 16 MBTI outcomes have distinct class lore, three skills, five game-style attributes, weakness, recommended teammate, destiny and personality summary.
- Rarity is rolled independently after the MBTI type is determined; it never changes the result.
- Responsive mobile-first layout, progress tracking, previous/next navigation and local progress persistence.
- Native Web Share API with clipboard fallback, share copy, and downloadable PNG character card.
- A clearly labelled illustrative guild leaderboard with static sample percentages.

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel
1. Create a Git repository and push this project.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. No environment variables or backend services are required.

Netlify works similarly: build command `npm run build`, publish directory `dist`.

## Notes
- The leaderboard percentages are fictional presentation data, not real user analytics.
- This is an entertainment quiz inspired by the 16 MBTI type framework, not a psychometric or clinical assessment.
- The included fantasy art was generated for this project and used as decorative art; class identity is differentiated through each class's emblem, story, skills and attributes.
