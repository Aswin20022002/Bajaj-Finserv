import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { hrKpis, engagementTrend, riskDistribution, deptBreakdown } from "../data/mockData";
import AiTag from "./AiTag";

const kpiColor = { green: "text-green", coral: "text-coral", gold: "text-gold" };
const pieColors = ["#1F8A63", "#E3A83B", "#E8455B"];

const burnoutBadge = {
  Moderate: "bg-gold-dim text-gold",
  Elevated: "bg-coral-dim text-coral",
};
const trendBadge = {
  Improving: "bg-green-dim text-green",
  Flat: "bg-navy/5 text-navy/50",
  Declining: "bg-coral-dim text-coral",
};

export default function HRDashboard() {
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-4">
        {hrKpis.map((k) => (
          <div key={k.label} className="bg-white rounded-2xl border border-navy/10 p-5">
            <div className="text-xs text-navy/50 mb-2">{k.label}</div>
            <div className={`font-display text-3xl mb-1 ${kpiColor[k.color]}`}>{k.value}</div>
            <div className="text-xs text-navy/40">{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 bg-white rounded-2xl border border-navy/10 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg">Engagement trend</h3>
            <AiTag label="Aggregated" />
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementTrend} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#0E1E33" strokeOpacity={0.08} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#0E1E33aa" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#0E1E33aa" }} axisLine={false} tickLine={false} width={30} unit="%" />
                <Tooltip
                  formatter={(v) => [`${v}%`, "Engagement"]}
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #0E1E331a" }}
                />
                <Line type="monotone" dataKey="engagement" stroke="#E8455B" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border border-navy/10 p-5">
          <h3 className="font-display text-lg mb-4">Chronic-risk distribution</h3>
          <div className="h-40 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={38}
                  outerRadius={62}
                  paddingAngle={3}
                >
                  {riskDistribution.map((_, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v, n) => [`${v}%`, n]} contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-xs mt-1">
            {riskDistribution.map((r, i) => (
              <span key={r.name} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: pieColors[i] }} />
                {r.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-navy/10 p-5 overflow-x-auto">
        <h3 className="font-display text-lg mb-4">Department breakdown</h3>
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr className="text-left text-xs text-navy/40 uppercase tracking-wide">
              <th className="pb-2 font-medium">Department</th>
              <th className="pb-2 font-medium">Engagement</th>
              <th className="pb-2 font-medium">Burnout signal</th>
              <th className="pb-2 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {deptBreakdown.map((d) => (
              <tr key={d.dept} className="border-t border-navy/5">
                <td className="py-2.5 font-medium">{d.dept}</td>
                <td className="py-2.5 font-mono">{d.engagement}</td>
                <td className="py-2.5">
                  <span className={`text-xs px-2 py-1 rounded-full ${burnoutBadge[d.burnout]}`}>
                    {d.burnout}
                  </span>
                </td>
                <td className="py-2.5">
                  <span className={`text-xs px-2 py-1 rounded-full ${trendBadge[d.trend]}`}>
                    {d.trend}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-navy/40 mt-3">
          All figures are anonymized and aggregated at department level — no individual employee
          data is ever surfaced here.
        </p>
      </div>
    </div>
  );
}
