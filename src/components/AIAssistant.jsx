import { useState, useRef, useEffect } from "react";
import { Send, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";
import {
  employee,
  labSummary,
  chatScript,
  chatFallback,
  suggestedPrompts,
} from "../data/mockData";
import AiTag from "./AiTag";

const statusStyles = {
  low: "text-risk bg-risk-dim",
  watch: "text-watch bg-watch-dim",
  good: "text-positive bg-positive-dim",
};

const pillarDot = { brand: "bg-brand", positive: "bg-positive", watch: "bg-watch" };

function matchReply(text) {
  const lower = text.toLowerCase();
  const hit = chatScript.find((entry) =>
    entry.keywords.some((k) => lower.includes(k))
  );
  return hit ? hit.reply : chatFallback;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `Hi ${employee.name.split(" ")[0]}, I read your annual lab report (parsed ${labSummary.parsedOn}) and put together three milestones for this week. Ask me anything about them, or how I got here.`,
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = matchReply(trimmed);
    setMessages((m) => [
      ...m,
      { from: "user", text: trimmed },
      { from: "bot", text: reply },
    ]);
    setInput("");
  }

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      {/* Lab parse summary */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-white rounded-2xl border border-ink/10 p-5">
          <div className="flex items-center gap-2 mb-1">
            <FileText size={16} className="text-ink/50" />
            <h3 className="font-semibold text-lg">Lab report, parsed</h3>
          </div>
          <p className="text-xs text-ink/50 mb-4">
            Structured values only. The source PDF is never forwarded or stored beyond this step.
          </p>
          <div className="space-y-2">
            {labSummary.flags.map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-between text-sm py-1.5"
              >
                <span className="text-ink/70">{f.label}</span>
                <span
                  className={`font-mono text-xs px-2 py-1 rounded-md ${statusStyles[f.status]}`}
                >
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-ink/10 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">This week's milestones</h3>
            <AiTag />
          </div>
          <div className="space-y-3">
            {labSummary.milestones.map((m) => (
              <div key={m.pillar} className="flex gap-3">
                <span
                  className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${pillarDot[m.color]}`}
                />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {m.pillar}
                  </div>
                  <div className="text-sm text-ink/80">{m.goal}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs text-ink/50 bg-ink/[0.03] rounded-xl p-3">
          <AlertTriangle size={14} className="shrink-0 mt-0.5 text-watch" />
          <span>
            Health Prime flags patterns in your own data. It never diagnoses. Anything outside a
            healthy range routes you to a doctor, not an AI opinion.
          </span>
        </div>
      </div>

      {/* Chat */}
      <div className="lg:col-span-3 bg-brand-dark rounded-2xl flex flex-col h-[560px] overflow-hidden">
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="font-semibold text-white text-base">Wellness Assistant</div>
            <div className="text-[11px] text-white/50">Scripted demo, illustrative responses</div>
          </div>
          <span className="flex items-center gap-1 text-[11px] text-positive bg-positive/15 px-2 py-1 rounded-full">
            <CheckCircle2 size={12} /> Grounded in your data
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "bg-brand text-white rounded-br-sm"
                    : "bg-white/[0.07] text-white/90 rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="px-5 pb-3 flex gap-2 flex-wrap">
          {suggestedPrompts.map((p) => (
            <button
              key={p}
              onClick={() => send(p)}
              className="text-xs text-white/70 border border-white/15 rounded-full px-3 py-1.5 hover:bg-white/10 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="p-3 border-t border-white/10 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your milestones, data, or how this works..."
            className="flex-1 bg-white/[0.07] text-white placeholder:text-white/40 text-sm rounded-full px-4 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brand"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="bg-brand text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 hover:brightness-110 transition"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
