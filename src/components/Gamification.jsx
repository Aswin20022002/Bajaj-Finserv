import { Flame, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { leaderboard, challenges } from "../data/mockData";

const trendIcon = {
  up: <TrendingUp size={14} className="text-positive" />,
  down: <TrendingDown size={14} className="text-risk" />,
  flat: <Minus size={14} className="text-ink/40" />,
};

const progressColor = { brand: "bg-brand", positive: "bg-positive", watch: "bg-watch" };

export default function Gamification() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="bg-white rounded-2xl border border-ink/10 p-5">
        <h3 className="font-semibold text-lg mb-1">Department leaderboard</h3>
        <p className="text-xs text-ink/50 mb-4">
          Anonymized, opt-in participation points. No individual scores are shown to other departments.
        </p>
        <div className="space-y-1">
          {leaderboard.map((row, i) => (
            <div
              key={row.dept}
              className="flex items-center gap-3 py-2.5 border-b border-ink/5 last:border-0"
            >
              <span className="font-mono text-xs text-ink/40 w-4">{i + 1}</span>
              <span className="flex-1 text-sm font-medium">{row.dept}</span>
              <span className="flex items-center gap-1 text-xs text-ink/50">
                <Flame size={13} className="text-watch" />
                {row.streak}d
              </span>
              <span className="font-mono text-sm w-14 text-right">{row.points}</span>
              {trendIcon[row.trend]}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-ink/10 p-5">
        <h3 className="font-semibold text-lg mb-1">Active challenges</h3>
        <p className="text-xs text-ink/50 mb-4">
          Challenge types rotate weekly so the habit loop does not go stale.
        </p>
        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.title}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-medium">{c.title}</span>
                <span className="text-ink/50 text-xs">{c.detail}</span>
              </div>
              <div className="h-2 rounded-full bg-ink/[0.06] overflow-hidden">
                <div
                  className={`h-full rounded-full ${progressColor[c.color]}`}
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
