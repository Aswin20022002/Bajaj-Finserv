import { User, Building2 } from "lucide-react";
import PulseLogo from "./PulseLogo";

export const EMPLOYEE_TABS = [
  { id: "assistant", label: "AI Assistant" },
  { id: "continuous", label: "Continuous & Rewards" },
  { id: "trust", label: "Trust & Privacy" },
];

export const EMPLOYER_TABS = [{ id: "hr", label: "HR & Insurer View" }];

const ROLE_COPY = {
  employee: {
    eyebrow: "Employee app",
    desc: "What a staff member sees, logged into their own account",
  },
  employer: {
    eyebrow: "Employer & insurer console",
    desc: "A separate login for HR admins and underwriters, aggregate data only",
  },
};

export default function Nav({ role, tab, onRoleChange, onTabChange }) {
  const tabs = role === "employee" ? EMPLOYEE_TABS : EMPLOYER_TABS;
  const roleCopy = ROLE_COPY[role];

  return (
    <header className="sticky top-0 z-30">
      <div className="bg-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 py-2.5 sm:py-0 sm:h-16">
            <div className="flex items-center gap-3 shrink-0">
              <PulseLogo />
              <div className="leading-tight">
                <div className="font-semibold text-lg tracking-tight">Health Prime</div>
                <div className="text-[11px] text-white/60 hidden sm:block">
                  Bajaj Finserv Health
                </div>
              </div>
            </div>

            <div className="flex items-center gap-0.5 bg-white/5 border border-white/15 rounded-full p-1">
              <button
                onClick={() => onRoleChange("employee")}
                className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  role === "employee" ? "bg-brand text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <User size={13} />
                <span className="hidden sm:inline">Employee app</span>
                <span className="sm:hidden">Employee</span>
              </button>
              <button
                onClick={() => onRoleChange("employer")}
                className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  role === "employer" ? "bg-brand text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <Building2 size={13} />
                <span className="hidden sm:inline">Employer & insurer</span>
                <span className="sm:hidden">Employer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="shrink-0">
            <div className="text-[11px] font-mono uppercase tracking-wide text-brand font-medium">
              {roleCopy.eyebrow}
            </div>
            <div className="text-[11px] text-ink/45">{roleCopy.desc}</div>
          </div>

          {tabs.length > 1 && (
            <nav className="flex gap-1 overflow-x-auto sm:ml-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onTabChange(t.id)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    tab === t.id
                      ? "bg-brand text-white"
                      : "text-ink/60 hover:text-ink hover:bg-ink/5"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
