import { ShieldCheck } from "lucide-react";

export default function ZeroErrorBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-gold text-on-gold font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 ${className}`}
      title="Seit 2014 wurde keine von DKK erstellte Druckdatei von einer Druckerei abgelehnt."
    >
      <ShieldCheck size={14} className="shrink-0" />
      <span>
        0 Fehler&nbsp;<span className="font-mono font-normal opacity-70">/</span>&nbsp;12 Jahre
      </span>
    </span>
  );
}
