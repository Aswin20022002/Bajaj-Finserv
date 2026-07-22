# Health Prime, MVP demo

A front-end-only demo of the Health Prime GenAI wellness engine, built for the ATOM Season 9
(PS4, Bajaj Finserv Health) case. React + Vite + Tailwind v4, no backend, no API keys. The
"AI" responses are scripted so the demo runs anywhere instantly.

Typography is IBM Plex Sans and IBM Plex Mono. Colors are drawn from Bajaj Finserv Health's own
brand blue (#005DAC), not an invented palette.

Covers four pillars, each as a tab:

- **AI Assistant**: chat that reads a mock lab report and explains its own milestones, using
  scripted keyword-matched replies plus a free-text fallback
- **Continuous & Rewards**: the wearables strategy (phone-only Tier 0, earn-back Tier 1, targeted
  clinical Tier 2), connected-source status for Health Connect, HealthKit, and WhatsApp, a weekly
  activity chart, department leaderboard, and challenge cards
- **HR & Insurer View**: KPI cards matched to the roadmap's KPI table, engagement trend, risk
  distribution, and a department breakdown table
- **Trust & Privacy**: per-category consent toggles (wearable sharing kept separate from base app
  consent), DPDP Act alignment, and AI-safety guardrails

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed localhost URL.

## Deploy: GitHub + Vercel (fastest path)

1. **Push to GitHub.** Use git directly rather than GitHub's web uploader. Nested folders
   (`src`, `public`) can silently fail to upload through the browser button, which is what
   causes a build to fail looking for `src/main.jsx`.
   ```bash
   git init
   git add .
   git commit -m "Health Prime MVP"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import into Vercel.** Go to vercel.com/new, choose "Import Git Repository," and select the
   repo. Vercel auto-detects Vite, no config needed. Click Deploy. A live `.vercel.app` URL is
   ready in under a minute.

3. **Vercel CLI, if you prefer it to the dashboard:**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

No environment variables are needed. Everything in this build is static or mocked.

## Notes for the pitch

- All names, lab values, leaderboard scores, and dashboard figures are illustrative demo data in
  `src/data/mockData.js`. Swap in real structure later without touching component code.
- The chat is intentionally scripted, no LLM call, to keep the MVP dependency-free under a time
  crunch. The strategy document's Phase 1 roadmap item is where the real retrieval-grounded
  assistant gets built.
- The wearables tab reflects the BYOD-first strategy in the document: no hardware to manufacture,
  just integration through Health Connect, HealthKit, and device OAuth APIs.
