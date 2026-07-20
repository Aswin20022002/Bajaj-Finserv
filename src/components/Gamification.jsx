import { Flame, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { leaderboard, challenges } from "../data/mockData";

const trendIcon = {
  up: <TrendingUp size={14} className="text-green" />,
  down: <TrendingDown size={14} className="text-coral" />,
  flat: <Minus size={14} className="text-navy/40" />,
};

const progressColor = { coral: "bg-coral", green: "bg-green", gold: "bg-gold" };

export default function Gamification() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="bg-white rounded-2xl border border-navy/10 p-5">
        <h3 className="font-display text-lg mb-1">Department leaderboard</h3>
        <p className="text-xs text-navy/50 mb-4">
          Anonymized, opt-in participation points — no individual scores shown to other departments.
        </p>
        <div className="space-y-1">
          {leaderboard.map((row, i) => (
            <div
              key={row.dept}
              className="flex items-center gap-3 py-2.5 border-b border-navy/5 last:border-0"
            >
              <span className="font-mono text-xs text-navy/40 w-4">{i + 1}</span>
              <span className="flex-1 text-sm font-medium">{row.dept}</span>
              <span className="flex items-center gap-1 text-xs text-navy/50">
                <Flame size={13} className="text-gold" />
                {row.streak}d
              </span>
              <span className="font-mono text-sm w-14 text-right">{row.points}</span>
              {trendIcon[row.trend]}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-navy/10 p-5">
        <h3 className="font-display text-lg mb-1">Active challenges</h3>
        <p className="text-xs text-navy/50 mb-4">
          GenAI rotates challenge types weekly to keep habit loops from going stale.
        </p>
        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.title}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-medium">{c.title}</span>
                <span className="text-navy/50 text-xs">{c.detail}</span>
              </div>
              <div className="h-2 rounded-full bg-navy/[0.06] overflow-hidden">
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
