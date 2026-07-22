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

const kpiColor = { positive: "text-positive", brand: "text-brand", watch: "text-watch", risk: "text-risk" };
const pieColors = ["#1B7A4D", "#A8710E", "#A93B3B"];

const burnoutBadge = {
  Moderate: "bg-watch-dim text-watch",
  Elevated: "bg-risk-dim text-risk",
};
const trendBadge = {
  Improving: "bg-positive-dim text-positive",
  Flat: "bg-ink/5 text-ink/50",
  Declining: "bg-risk-dim text-risk",
};

export default function HRDashboard() {
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hrKpis.map((k) => (
          <div key={k.label} className="bg-white rounded-2xl border border-ink/10 p-5">
            <div className="text-xs text-ink/50 mb-2">{k.label}</div>
            <div className={`font-semibold text-2xl mb-1 ${kpiColor[k.color]}`}>{k.value}</div>
            <div className="text-xs text-ink/40">{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 bg-white rounded-2xl border border-ink/10 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Engagement trend</h3>
            <AiTag label="Aggregated" />
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementTrend} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#16232E" strokeOpacity={0.08} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#16232Eaa" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#16232Eaa" }} axisLine={false} tickLine={false} width={30} unit="%" />
                <Tooltip
                  formatter={(v) => [`${v}%`, "Engagement"]}
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #16232E1a" }}
                />
                <Line type="monotone" dataKey="engagement" stroke="#005DAC" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border border-ink/10 p-5">
          <h3 className="font-semibold text-lg mb-4">Aggregate risk distribution</h3>
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

      <div className="bg-white rounded-2xl border border-ink/10 p-5 overflow-x-auto">
        <h3 className="font-semibold text-lg mb-4">Department breakdown</h3>
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr className="text-left text-xs text-ink/40 uppercase tracking-wide">
              <th className="pb-2 font-medium">Department</th>
              <th className="pb-2 font-medium">Engagement</th>
              <th className="pb-2 font-medium">Burnout signal</th>
              <th className="pb-2 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {deptBreakdown.map((d) => (
              <tr key={d.dept} className="border-t border-ink/5">
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
        <p className="text-xs text-ink/40 mt-3">
          All figures are anonymized and aggregated at department level. No individual employee
          data is ever surfaced here.
        </p>
      </div>
    </div>
  );
}
