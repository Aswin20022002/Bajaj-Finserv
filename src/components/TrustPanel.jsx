import { useState } from "react";
import { ShieldCheck, ScrollText } from "lucide-react";
import { consentItems, dpdpPoints, safetyPoints } from "../data/mockData";

export default function TrustPanel() {
  const [consents, setConsents] = useState(
    Object.fromEntries(consentItems.map((c) => [c.key, c.default]))
  );

  function toggle(key) {
    setConsents((c) => ({ ...c, [key]: !c[key] }));
  }

  return (
    <div className="grid lg:grid-cols-5 gap-5">
      <div className="lg:col-span-3 bg-white rounded-2xl border border-ink/10 p-5">
        <h3 className="font-semibold text-lg mb-1">Your data, your controls</h3>
        <p className="text-xs text-ink/50 mb-4">
          Each category is opt-in and independent. Turning one off never affects the others.
        </p>
        <div className="divide-y divide-ink/5">
          {consentItems.map((c) => (
            <div key={c.key} className="flex items-start justify-between gap-4 py-3.5">
              <div>
                <div className="text-sm font-medium">{c.title}</div>
                <div className="text-xs text-ink/50 mt-0.5">{c.detail}</div>
              </div>
              <button
                role="switch"
                aria-checked={consents[c.key]}
                aria-label={c.title}
                onClick={() => toggle(c.key)}
                className={`shrink-0 w-11 h-6 rounded-full transition-colors relative ${
                  consents[c.key] ? "bg-brand" : "bg-ink/15"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    consents[c.key] ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 space-y-5">
        <div className="bg-brand-dark rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <ScrollText size={16} className="text-watch" />
            <h3 className="font-semibold text-base text-white">DPDP Act alignment</h3>
          </div>
          <ul className="space-y-2.5">
            {dpdpPoints.map((p) => (
              <li key={p} className="text-xs text-white/70 leading-relaxed flex gap-2">
                <span className="text-watch mt-0.5">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-ink/10 p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={16} className="text-positive" />
            <h3 className="font-semibold text-base">Guarding against AI error</h3>
          </div>
          <ul className="space-y-2.5">
            {safetyPoints.map((p) => (
              <li key={p} className="text-xs text-ink/60 leading-relaxed flex gap-2">
                <span className="text-positive mt-0.5">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
