import PulseLogo from "./PulseLogo";

const TABS = [
  { id: "assistant", label: "AI Assistant" },
  { id: "continuous", label: "Continuous & Rewards" },
  { id: "hr", label: "HR & Insurer View" },
  { id: "trust", label: "Trust & Privacy" },
];

export default function Nav({ active, onChange }) {
  return (
    <header className="sticky top-0 z-30 bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <PulseLogo />
            <div className="leading-tight">
              <div className="font-semibold text-lg tracking-tight">Health Prime</div>
              <div className="text-[11px] text-white/60 hidden sm:block">
                Bajaj Finserv Health
              </div>
            </div>
          </div>
          <nav className="flex gap-1 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === tab.id
                    ? "bg-brand text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
