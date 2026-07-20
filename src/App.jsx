import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import Nav from "./components/Nav";
import AIAssistant from "./components/AIAssistant";
import Gamification from "./components/Gamification";
import DigitalTwin from "./components/DigitalTwin";
import HRDashboard from "./components/HRDashboard";
import TrustPanel from "./components/TrustPanel";

const COPY = {
  assistant: {
    eyebrow: "Pillar 01 — Personalization",
    title: "An assistant that reads your labs, not your mind",
    sub: "Every milestone below traces back to a real value in your annual report — ask the assistant how, anytime.",
  },
  engage: {
    eyebrow: "Pillar 01 — Gamification & Digital Twin",
    title: "Habit loops built for a whole company, not one user",
    sub: "Department challenges drive the daily loop; your digital twin shows where that effort compounds.",
  },
  hr: {
    eyebrow: "Pillar 02 — Enterprise Analytics",
    title: "What HR and underwriters see",
    sub: "Aggregated, anonymized, department-level only — built to justify premium conversations, not surveil employees.",
  },
  trust: {
    eyebrow: "Pillar 03 — Trust, GTM & Compliance",
    title: "Consent that's specific, not a wall of legal text",
    sub: "DPDP-aligned by design — every data use is itemized, reversible, and visible.",
  },
};

export default function App() {
  const [tab, setTab] = useState("assistant");
  const [bannerOpen, setBannerOpen] = useState(true);
  const copy = COPY[tab];

  return (
    <div className="min-h-screen flex flex-col">
      <Nav active={tab} onChange={setTab} />

      {bannerOpen && (
        <div className="bg-gold-dim text-navy text-xs sm:text-sm px-4 py-2.5 flex items-center justify-center gap-2 relative">
          <Sparkles size={14} className="text-gold shrink-0" />
          <span className="text-center">
            This demo uses AI to read health data and generate content. See exactly what's shared in{" "}
            <button onClick={() => setTab("trust")} className="underline underline-offset-2 font-medium">
              Trust & Privacy
            </button>
            .
          </span>
          <button
            onClick={() => setBannerOpen(false)}
            aria-label="Dismiss"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <main className="flex-1 mx-auto max-w-6xl w-full px-4 sm:px-6 py-8">
        <div className="mb-7">
          <div className="text-xs font-mono uppercase tracking-wider text-coral mb-2">
            {copy.eyebrow}
          </div>
          <h1 className="font-display text-2xl sm:text-3xl text-navy mb-2 max-w-2xl">
            {copy.title}
          </h1>
          <p className="text-sm text-navy/55 max-w-xl">{copy.sub}</p>
        </div>

        {tab === "assistant" && <AIAssistant />}
        {tab === "engage" && (
          <div className="space-y-5">
            <DigitalTwin />
            <Gamification />
          </div>
        )}
        {tab === "hr" && <HRDashboard />}
        {tab === "trust" && <TrustPanel />}
      </main>

      <footer className="border-t border-navy/10 py-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy/40">
          <span>PrimePulse — a Health Prime layer, Bajaj Finserv Health</span>
          <span>ATOM Season 9 · PS4 · Prototype for demonstration, not production data</span>
        </div>
      </footer>
    </div>
  );
}
