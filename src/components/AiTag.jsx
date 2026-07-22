import { Sparkles } from "lucide-react";

export default function AiTag({ label = "AI-generated" }) {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-brand bg-brand-dim px-2 py-0.5 rounded-full">
      <Sparkles size={10} strokeWidth={2.5} />
      {label}
    </span>
  );
}
