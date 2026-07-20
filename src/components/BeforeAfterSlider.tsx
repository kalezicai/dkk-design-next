"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Check, ArrowRight, Sliders } from "lucide-react";
import type { SliderExample } from "@/data/sliderExamples";

export default function BeforeAfterSlider({ examples }: { examples: SliderExample[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const current = examples[activeIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    if (pct < 0) pct = 0; if (pct > 100) pct = 100;
    setSliderPos(pct);
  }, []);

  useEffect(() => {
    const globalMove = (e: MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
    const globalUp = () => { isDragging.current = false; };
    document.addEventListener("mousemove", globalMove);
    document.addEventListener("mouseup", globalUp);
    return () => { document.removeEventListener("mousemove", globalMove); document.removeEventListener("mouseup", globalUp); };
  }, [handleMove]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {examples.map((ex, idx) => (
          <button key={idx} onClick={() => { setActiveIdx(idx); setSliderPos(50); }}
            className={`px-4 py-3 text-xs uppercase tracking-wider font-semibold border transition-all duration-200 cursor-pointer ${
              activeIdx === idx ? "bg-navy text-white border-navy" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
            }`}>
            {ex.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <div ref={sliderRef}
            onMouseDown={(e) => { isDragging.current = true; handleMove(e.clientX); }}
            onTouchStart={(e) => { isDragging.current = true; if (e.touches[0]) handleMove(e.touches[0].clientX); }}
            onTouchMove={(e) => { if (isDragging.current && e.touches[0]) handleMove(e.touches[0].clientX); }}
            className="relative h-[340px] md:h-[420px] bg-ink rounded-none border border-slate-300 select-none overflow-hidden cursor-ew-resize no-select"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none flex items-start justify-between p-2">
              <span className="text-[9px] font-mono text-white/30 tracking-widest">AUSGABEGRENZE: BESCHNITT 3MM</span>
              <span className="text-[9px] font-mono text-white/30">CMYK-ZIEL OK</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#0E2A47]">
              <div className="text-center max-w-sm">
                <div className="inline-block p-4 bg-white/5 border border-gold rounded-xs mb-3">
                  <div className="w-20 h-20 mx-auto border-2 border-dashed border-gold flex items-center justify-center rounded-full relative">
                    <span className="text-gold font-display font-black text-2xl">DKK</span>
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-sky" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-sky" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-sky" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-sky" />
                  </div>
                </div>
                <div className="text-[10px] font-mono text-sky tracking-widest uppercase mb-1">Vektormaßstab 1:1 // HD Ausgabe</div>
                <p className="font-display text-lg text-white font-medium">Schmuckfarbe Gold Separation</p>
                <span className="text-xs text-slate-300 block font-mono">PANTONE 872 C &bull; Beschnitt geprüft</span>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 bg-[#1e2330] overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#1B1E26]" style={{ width: sliderRef.current ? sliderRef.current.getBoundingClientRect().width : "100%" }}>
                <div className="text-center max-w-sm">
                  <div className="inline-block p-4 bg-red-500/10 border border-red-500/50 rounded-none mb-3 opacity-80">
                    <div className="w-20 h-20 mx-auto border-2 border-red-500/30 flex items-center justify-center rounded-none relative bg-red-950/20">
                      <span className="text-red-500/60 font-sans font-bold text-xs line-through">LOGO_BILD.PNG</span>
                      <span className="absolute bottom-1 right-1 text-[8px] bg-red-500 text-white px-1">72 DPI</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-red-400 tracking-widest uppercase mb-1">Niedrigauflösendes RGB-Bitmap</div>
                  <p className="font-sans text-sm text-slate-400 line-through">Falsches Farbformat</p>
                  <span className="text-xs text-red-400 block font-mono mt-1">[ VON DER DRUCKVORSCHAU ABGELEHNT ]</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 w-[3px] bg-gold z-30 cursor-ew-resize flex items-center justify-center" style={{ left: `${sliderPos}%` }}>
              <div className="h-10 w-6 bg-gold text-ink border border-white flex flex-col items-center justify-center space-y-0.5 shadow-md">
                <span className="w-1 h-3 bg-ink/50" /><span className="w-1 h-3 bg-ink/50" />
              </div>
            </div>
            <div className="absolute left-6 bottom-6 pointer-events-none bg-red-900/80 text-white px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest border border-red-500">Vorher: Roh / Problematisch</div>
            <div className="absolute right-6 bottom-6 pointer-events-none bg-sky/80 text-ink px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest border border-white">Ergebnis: DKK Output</div>
          </div>
          <div className="mt-2 text-xs text-slate-500 text-center flex items-center justify-center space-x-2">
            <Sliders size={12} className="text-gold-dim" /><span>Ziehen Sie den Griff nach links oder rechts, um die technischen Assets zu vergleichen.</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-xs font-mono uppercase text-gold-dim tracking-wider font-bold">DETAILS FÜR DEN KRITISCHEN BLICK</h3>
              <p className="text-lg font-display font-bold text-navy mt-1">{current.title}</p>
              <p className="text-xs text-slate-600 mt-2">{current.description}</p>
            </div>
            <div>
              <h4 className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-wider mb-2 flex items-center space-x-1"><span>&times;</span><span>Typische Fehler</span></h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {current.beforeDetails.map((det, i) => (
                  <li key={i} className="flex items-start space-x-2"><span className="text-red-500 font-bold">&bull;</span><span>{det}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-mono text-emerald-600 font-bold uppercase tracking-wider mb-2 flex items-center space-x-1"><Check size={12} className="text-emerald-500" /><span>Meine Lieferung</span></h4>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                {current.afterDetails.map((det, i) => (
                  <li key={i} className="flex items-start space-x-2"><span className="text-gold font-bold">&bull;</span><span>{det}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-200 mt-6 lg:mt-0">
            <p className="text-xs text-slate-500 leading-normal">Benötigen Sie eine Layout-Prüfung? Senden Sie mir Ihre Dateien.</p>
            <a href="/kontakt" className="inline-flex items-center space-x-1 text-xs font-bold text-navy hover:text-gold-dim uppercase tracking-wider mt-2 group">
              <span>Rohdateien einreichen</span><ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
