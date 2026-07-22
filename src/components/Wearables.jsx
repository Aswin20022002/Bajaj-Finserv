import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Smartphone, MessageCircle, Check } from "lucide-react";
import { wearableTiers, connectedSources, earnBack, weeklyActivity } from "../data/mockData";
import AiTag from "./AiTag";

const sourceIcon = {
  "Google Health Connect": <Smartphone size={16} />,
  "Apple HealthKit": <Smartphone size={16} />,
  "WhatsApp check-ins": <MessageCircle size={16} />,
};

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-brand-dark text-white text-xs rounded-lg px-3 py-2 shadow-lg">
      <div className="font-medium">{label}</div>
      <div>{payload[0].value.toLocaleString()} steps</div>
    </div>
  );
}

export default function Wearables() {
  const payoffPct = Math.round((earnBack.paidDown / earnBack.originalCost) * 100);

  return (
    <div className="space-y-5">
      <div className="grid lg:grid-cols-3 gap-5">
        {wearableTiers.map((t) => (
          <div key={t.tier} className="bg-white rounded-2xl border border-ink/10 p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wide text-brand">{t.tier}</span>
              <span className="text-[10px] text-ink/40">{t.status}</span>
            </div>
            <h3 className="font-semibold text-base mb-1">{t.title}</h3>
            <p className="text-xs text-ink/55 leading-relaxed">{t.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 bg-white rounded-2xl border border-ink/10 p-5">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="font-semibold text-lg">This week's activity</h3>
              <p className="text-xs text-ink/50">Pulled from your phone sensors, no wearable required</p>
            </div>
            <AiTag label="Continuous" />
          </div>
          <div className="h-56 mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyActivity} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#16232E" strokeOpacity={0.08} vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#16232Eaa" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#16232Eaa" }} axisLine={false} tickLine={false} width={36} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "#005DAC0d" }} />
                <Bar dataKey="steps" fill="#005DAC" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-ink/50 mt-2">
            A single annual lab report used to be the only signal for eleven months. This feed
            keeps the plan current every day instead.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="bg-brand-dark rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-1">Earn-back progress</h3>
            <p className="text-xs text-white/50 mb-4">{earnBack.deviceName}</p>
            <div className="flex items-end justify-between mb-1.5">
              <span className="text-2xl font-mono text-white">{payoffPct}%</span>
              <span className="text-xs text-white/50">paid down</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-3">
              <div className="h-full rounded-full bg-watch" style={{ width: `${payoffPct}%` }} />
            </div>
            <p className="text-xs text-white/50">
              {earnBack.weeksActive} of {earnBack.weeksTotal} weekly activity goals met. Reaches
              zero due at full completion, the same mechanic Discovery Vitality validated abroad.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-ink/10 p-5">
            <h3 className="font-semibold text-base mb-3">Connected sources</h3>
            <div className="space-y-3">
              {connectedSources.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      s.connected ? "bg-positive-dim text-positive" : "bg-ink/5 text-ink/40"
                    }`}
                  >
                    {sourceIcon[s.name]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-xs text-ink/50 truncate">{s.detail}</div>
                  </div>
                  {s.connected && <Check size={16} className="text-positive shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
