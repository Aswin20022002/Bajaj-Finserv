# PrimePulse — MVP demo

A front-end-only demo of PrimePulse, the GenAI corporate wellness concept for the ATOM Season 9
(PS4 — Bajaj Finserv Health) case. Built with React + Vite + Tailwind v4. No backend, no API keys —
the "AI" responses are scripted/mocked so the demo runs anywhere instantly.

Covers all four pillars from the strategy document, each as a tab:

- **AI Assistant** — chat that reads a mock lab report and explains its own milestones (scripted keyword-matched replies + free-text fallback)
- **Gamify & Digital Twin** — department leaderboard, challenge cards, 30/90-day trajectory chart with a "what-if with PrimePulse" toggle, and a generated-content list (voice meditation, avatar trainer, future-self)
- **HR & Insurer View** — KPI cards, engagement trend, chronic-risk distribution, department breakdown table
- **Trust & Privacy** — per-category consent toggles, DPDP Act alignment, AI-safety/hallucination guardrails

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL.

## Deploy — GitHub + Vercel (fastest path)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "PrimePulse MVP"
   gh repo create primepulse --public --source=. --push
   # or: create an empty repo on github.com, then
   # git remote add origin <your-repo-url> && git branch -M main && git push -u origin main
   ```

2. **Import into Vercel**
   Go to vercel.com/new, choose "Import Git Repository," select the
   repo you just pushed. Vercel auto-detects Vite — no config needed. Click **Deploy**.
   You'll have a live `.vercel.app` URL in under a minute.

3. **(Optional) Vercel CLI instead of the dashboard**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

No environment variables are required — everything in this build is static/mocked.

## Notes for the pitch

- All names, lab values, leaderboard scores, and dashboard figures are illustrative demo data
  (`src/data/mockData.js`) — swap in real structure later without touching component code.
- The chat is intentionally scripted (no LLM call) to keep the MVP dependency-free per the time
  constraint — the strategy document's Phase 0 roadmap item is where a real RAG-grounded assistant
  gets built.
