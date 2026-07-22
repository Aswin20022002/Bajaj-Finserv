import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import Nav, { EMPLOYEE_TABS, EMPLOYER_TABS } from "./components/Nav";
import AIAssistant from "./components/AIAssistant";
import Gamification from "./components/Gamification";
import Wearables from "./components/Wearables";
import HRDashboard from "./components/HRDashboard";
import TrustPanel from "./components/TrustPanel";

const COPY = {
  assistant: {
    eyebrow: "Personalization engine",
    title: "An assistant that reads your labs, not your mind",
    sub: "Every milestone below traces back to a real value in your annual report. Ask the assistant how, any time.",
  },
  continuous: {
    eyebrow: "Continuous data and habit loop",
    title: "The plan does not go stale for eleven months",
    sub: "Phone sensors, wearables, and WhatsApp check-ins keep the plan current between annual checkups.",
  },
  hr: {
    eyebrow: "Enterprise analytics",
    title: "What HR and underwriters see",
    sub: "Aggregated and anonymized at department level, built to support premium conversations, not to watch employees.",
  },
  trust: {
    eyebrow: "Trust, GTM, and compliance",
    title: "Consent that is specific, not a wall of legal text",
    sub: "Aligned with the DPDP Act by design. Every data use is itemized, reversible, and visible.",
  },
};

export default function App() {
  const [role, setRole] = useState("employee");
  const [tab, setTab] = useState("assistant");
  const [bannerOpen, setBannerOpen] = useState(true);
  const copy = COPY[tab];

  function changeRole(nextRole) {
    setRole(nextRole);
    const defaultTab = nextRole === "employee" ? EMPLOYEE_TABS[0].id : EMPLOYER_TABS[0].id;
    setTab(defaultTab);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav role={role} tab={tab} onRoleChange={changeRole} onTabChange={setTab} />

      {bannerOpen && role === "employee" && (
        <div className="bg-watch-dim text-ink text-xs sm:text-sm px-4 py-2.5 flex items-center justify-center gap-2 relative">
          <Sparkles size={14} className="text-watch shrink-0" />
          <span className="text-center">
            This demo uses AI to read health data and generate your wellness plan. See exactly what's shared in{" "}
            <button onClick={() => setTab("trust")} className="underline underline-offset-2 font-medium">
              Trust & Privacy
            </button>
            .
          </span>
          <button
            onClick={() => setBannerOpen(false)}
            aria-label="Dismiss"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <main className="flex-1 mx-auto max-w-6xl w-full px-4 sm:px-6 py-8">
        <div className="mb-7">
          <div className="text-xs font-mono uppercase tracking-wider text-brand mb-2">
            {copy.eyebrow}
          </div>
          <h1 className="font-semibold text-2xl sm:text-3xl text-ink mb-2 max-w-2xl">
            {copy.title}
          </h1>
          <p className="text-sm text-ink/55 max-w-xl">{copy.sub}</p>
        </div>

        {tab === "assistant" && <AIAssistant />}
        {tab === "continuous" && (
          <div className="space-y-5">
            <Wearables />
            <Gamification />
          </div>
        )}
        {tab === "hr" && <HRDashboard />}
        {tab === "trust" && <TrustPanel />}
      </main>

      <footer className="border-t border-ink/10 py-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink/40">
          <span>Health Prime, a GenAI wellness layer for Bajaj Finserv Health</span>
          <span>ATOM Season 9 · PS4 · Prototype for demonstration, not production data</span>
        </div>
      </footer>
    </div>
  );
}
