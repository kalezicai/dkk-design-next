import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Präzise Druckvorstufe, Fahrzeugfolierung, Webentwicklung, Branding und Beschilderung. Fünf Leistungsbereiche mit klaren Liefergegenständen und messbaren Ergebnissen.",
  alternates: { canonical: "https://dkk-design.de/leistungen" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[800px] mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-mono block mb-2">ECHTE LEISTUNGEN &bull; KEIN FACHJARGON</span>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">Ein präziser, drucksicherer Operator, der fertige Assets liefert.</h1>
        </div>

        <div className="space-y-4">
          {SERVICES.map((service) => (
            <div key={service.id} className="border border-white/10 bg-white/5">
              <details className="group">
                <summary className="w-full text-left p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-mono text-gold font-bold bg-white/5 px-2.5 py-1 border border-white/10">{service.number}</span>
                    <h2 className="text-xl font-display font-bold text-white tracking-wide">{service.title}</h2>
                  </div>
                </summary>
                <div className="px-6 pb-6 border-t border-white/5 pt-6 bg-ink/60">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Was es ist</span>
                      <p className="text-slate-200">{service.whatItIs}</p>
                    </div>
                    <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                      <span className="text-[10px] font-mono text-gold uppercase tracking-widest block font-bold">Was Sie bekommen</span>
                      <ul className="space-y-1 text-slate-300 font-mono text-xs">
                        {service.deliverables.map((item, i) => <li key={i} className="flex items-start space-x-2"><span className="text-gold">&bull;</span><span>{item}</span></li>)}
                      </ul>
                    </div>
                    <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                      <span className="text-[10px] font-mono text-sky uppercase tracking-widest block font-bold">Was sich für Sie ändert</span>
                      <p className="text-slate-200">{service.result}</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <span>Ich vergebe Ihre Dateikonfiguration nicht an externe Fabriken. Jede millimetergenaue Anpassung erfolgt durch mich.</span>
          </div>
          <Link href="/kontakt" className="text-xs text-gold uppercase tracking-widest font-mono font-bold hover:text-white transition-colors shrink-0">
            WERKSTATT BEAUFTRAGEN &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
