import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Mic, PersonStanding, Sparkle } from "lucide-react";
import { trajectoryData, generativeContent } from "../data/mockData";
import AiTag from "./AiTag";

const contentIcon = {
  voice: <Mic size={16} />,
  trainer: <PersonStanding size={16} />,
  future: <Sparkle size={16} />,
};

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-navy text-paper text-xs rounded-lg px-3 py-2 shadow-lg">
      <div className="font-medium mb-1">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: p.color }}
          />
          {p.dataKey === "withPP" ? "With PrimePulse" : "Current path"}: {p.value}
        </div>
      ))}
    </div>
  );
}

export default function DigitalTwin() {
  const [showWhatIf, setShowWhatIf] = useState(true);

  return (
    <div className="grid lg:grid-cols-5 gap-5">
      <div className="lg:col-span-3 bg-white rounded-2xl border border-navy/10 p-5">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="font-display text-lg">90-day health trajectory</h3>
            <p className="text-xs text-navy/50">
              Composite cardiometabolic risk score — lower is better
            </p>
          </div>
          <AiTag label="Simulated" />
        </div>

        <label className="flex items-center gap-2 mt-4 mb-2 text-sm cursor-pointer select-none w-fit">
          <input
            type="checkbox"
            checked={showWhatIf}
            onChange={(e) => setShowWhatIf(e.target.checked)}
            className="accent-coral w-4 h-4"
          />
          Show "what-if with PrimePulse" scenario
        </label>

        <div className="h-64 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trajectoryData} margin={{ left: -20, right: 10 }}>
              <defs>
                <linearGradient id="currentGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0E1E33" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#0E1E33" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="ppGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F8A63" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#1F8A63" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#0E1E33" strokeOpacity={0.08} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#0E1E33aa" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#0E1E33aa" }} axisLine={false} tickLine={false} width={30} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="current"
                stroke="#0E1E33"
                strokeWidth={2}
                fill="url(#currentGrad)"
                name="Current path"
              />
              {showWhatIf && (
                <Area
                  type="monotone"
                  dataKey="withPP"
                  stroke="#1F8A63"
                  strokeWidth={2.5}
                  fill="url(#ppGrad)"
                  name="With PrimePulse"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-navy/50 mt-2">
          Illustrative projection built from cohort-level intervention data — shown to the
          employee as a directional guide, not a clinical prediction.
        </p>
      </div>

      <div className="lg:col-span-2 bg-navy rounded-2xl p-5">
        <h3 className="font-display text-lg text-paper mb-1">Generated for you</h3>
        <p className="text-xs text-paper/50 mb-4">Refreshed weekly based on your milestones</p>
        <div className="space-y-3">
          {generativeContent.map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-3 bg-white/[0.06] rounded-xl p-3.5 hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-coral/20 text-coral flex items-center justify-center shrink-0">
                {contentIcon[c.icon]}
              </div>
              <div>
                <div className="text-sm text-paper font-medium">{c.title}</div>
                <div className="text-xs text-paper/50">{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
