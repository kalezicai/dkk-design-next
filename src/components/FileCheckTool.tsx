"use client";
import { useState } from "react";
import { Upload, CheckCircle, XCircle, AlertTriangle, FileWarning } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileCheckResult {
  field: string;
  status: "pass" | "fail" | "warn";
  message: string;
}

export default function FileCheckTool() {
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [colorMode, setColorMode] = useState("");
  const [hasBleed, setHasBleed] = useState<boolean | null>(null);
  const [resolution, setResolution] = useState("");
  const [fontsOutlined, setFontsOutlined] = useState<boolean | null>(null);
  const [results, setResults] = useState<FileCheckResult[] | null>(null);

  const runCheck = () => {
    const checks: FileCheckResult[] = [];
    let score = 0;
    let maxScore = 0;

    if (fileType === "pdf") {
      maxScore++;
      checks.push({ field: "Dateiformat", status: "pass", message: "PDF ist das ideale Druckformat." });
      score++;
    } else if (fileType === "jpg" || fileType === "png") {
      maxScore++;
      checks.push({ field: "Dateiformat", status: "warn", message: `${fileType.toUpperCase()} ist nicht ideal für den Druck. PDF/X-4 wird empfohlen.` });
    } else if (fileType) {
      maxScore++;
      checks.push({ field: "Dateiformat", status: "fail", message: `${fileType.toUpperCase()} ist nicht druckgeeignet. Bitte in PDF konvertieren.` });
    }

    maxScore++;
    if (colorMode === "cmyk") {
      checks.push({ field: "Farbmodus", status: "pass", message: "CMYK ist korrekt für den Druck." });
      score++;
    } else if (colorMode === "rgb") {
      checks.push({ field: "Farbmodus", status: "fail", message: "RGB ist nicht für den Druck geeignet. In CMYK konvertieren." });
    }

    maxScore++;
    if (hasBleed === true) {
      checks.push({ field: "Beschnittzugabe", status: "pass", message: "Beschnittzugabe vorhanden (min. 3 mm)." });
      score++;
    } else if (hasBleed === false) {
      checks.push({ field: "Beschnittzugabe", status: "fail", message: "Keine Beschnittzugabe. 3 mm pro Seite erforderlich." });
    }

    maxScore++;
    if (resolution === "300") {
      checks.push({ field: "Auflösung", status: "pass", message: "300 DPI – ideal für den Druck." });
      score++;
    } else if (resolution === "150") {
      checks.push({ field: "Auflösung", status: "warn", message: "150 DPI – für Großformat akzeptabel, aber 300 DPI empfohlen." });
    } else if (resolution === "72") {
      checks.push({ field: "Auflösung", status: "fail", message: "72 DPI – zu niedrig für den Druck. Mindestens 300 DPI erforderlich." });
    }

    maxScore++;
    if (fontsOutlined === true) {
      checks.push({ field: "Schriften", status: "pass", message: "Schriften in Pfade umgewandelt – keine Schriftprobleme." });
      score++;
    } else if (fontsOutlined === false) {
      checks.push({ field: "Schriften", status: "warn", message: "Schriften nicht in Pfade umgewandelt. Risiko von Schriftfehlern in der Druckerei." });
    }

    const pct = Math.round((score / maxScore) * 100);
    if (pct >= 80) {
      checks.unshift({ field: "Gesamtergebnis", status: "pass", message: `Drucktauglichkeit: ${pct}% – Datei ist druckfertig.` });
    } else if (pct >= 50) {
      checks.unshift({ field: "Gesamtergebnis", status: "warn", message: `Drucktauglichkeit: ${pct}% – Es gibt Optimierungspotenzial.` });
    } else {
      checks.unshift({ field: "Gesamtergebnis", status: "fail", message: `Drucktauglichkeit: ${pct}% – Datei muss überarbeitet werden.` });
    }

    setResults(checks);
  };

  return (
    <div className="border border-line bg-surface p-6 md:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gold/20 border border-gold flex items-center justify-center">
          <FileWarning size={20} className="text-gold" />
        </div>
        <div>
          <h3 className="text-lg font-display font-bold text-ink">Druckdaten-Check</h3>
          <p className="text-[10px] font-mono text-muted">Kostenloser Preflight-Check – 30 Sekunden</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold block">Dateiformat</label>
          <select value={fileType} onChange={e => setFileType(e.target.value)}
            className="w-full bg-surface-2 border border-line px-3 py-2.5 text-xs text-ink focus:border-gold transition-colors">
            <option value="">Bitte wählen</option>
            <option value="pdf">PDF/X-4</option>
            <option value="pdf">PDF (Standard)</option>
            <option value="ai">Adobe Illustrator (.ai)</option>
            <option value="psd">Adobe Photoshop (.psd)</option>
            <option value="jpg">JPEG (.jpg)</option>
            <option value="png">PNG</option>
            <option value="tiff">TIFF</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold block">Farbmodus</label>
          <select value={colorMode} onChange={e => setColorMode(e.target.value)}
            className="w-full bg-surface-2 border border-line px-3 py-2.5 text-xs text-ink focus:border-gold transition-colors">
            <option value="">Bitte wählen</option>
            <option value="cmyk">CMYK</option>
            <option value="rgb">RGB</option>
            <option value="grayscale">Graustufen</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold block">Beschnittzugabe (3 mm?)</label>
          <select value={hasBleed === null ? "" : hasBleed ? "yes" : "no"} onChange={e => setHasBleed(e.target.value === "yes" ? true : e.target.value === "no" ? false : null)}
            className="w-full bg-surface-2 border border-line px-3 py-2.5 text-xs text-ink focus:border-gold transition-colors">
            <option value="">Bitte wählen</option>
            <option value="yes">Ja, 3 mm oder mehr</option>
            <option value="no">Nein, keine Beschnittzugabe</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold block">Auflösung</label>
          <select value={resolution} onChange={e => setResolution(e.target.value)}
            className="w-full bg-surface-2 border border-line px-3 py-2.5 text-xs text-ink focus:border-gold transition-colors">
            <option value="">Bitte wählen</option>
            <option value="300">300 DPI (Druckqualität)</option>
            <option value="150">150 DPI (Großformat)</option>
            <option value="72">72 DPI (Bildschirm)</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold block">Schriften in Pfade?</label>
          <select value={fontsOutlined === null ? "" : fontsOutlined ? "yes" : "no"} onChange={e => setFontsOutlined(e.target.value === "yes" ? true : e.target.value === "no" ? false : null)}
            className="w-full bg-surface-2 border border-line px-3 py-2.5 text-xs text-ink focus:border-gold transition-colors">
            <option value="">Bitte wählen</option>
            <option value="yes">Ja, alle Schriften umgewandelt</option>
            <option value="no">Nein, Texte noch bearbeitbar</option>
          </select>
        </div>
        <div className="flex items-end">
          <button onClick={runCheck} disabled={!fileType || !colorMode || hasBleed === null || !resolution || fontsOutlined === null}
            className={cn(
              "w-full py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center space-x-2",
              fileType && colorMode && hasBleed !== null && resolution && fontsOutlined !== null
                ? "bg-gold text-on-gold hover:bg-white cursor-pointer" : "bg-surface-2 text-muted cursor-not-allowed"
            )}>
            <Upload size={14} /><span>Prüfung starten</span>
          </button>
        </div>
      </div>

      {results && (
        <div className="space-y-3 border-t border-line pt-6">
          {results.map((r, i) => (
            <div key={i} className={cn(
              "flex items-start space-x-3 p-3 text-xs",
              r.status === "pass" ? "bg-emerald-100 border border-emerald-300 dark:bg-emerald-900/20 dark:border-emerald-800/30" :
              r.status === "warn" ? "bg-amber-100 border border-amber-300 dark:bg-amber-900/20 dark:border-amber-800/30" :
              "bg-red-100 border border-red-300 dark:bg-red-900/20 dark:border-red-800/30"
            )}>
              {r.status === "pass" ? <CheckCircle size={16} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" /> :
               r.status === "warn" ? <AlertTriangle size={16} className="text-amber-700 dark:text-amber-400 mt-0.5 shrink-0" /> :
               <XCircle size={16} className="text-red-700 dark:text-red-400 mt-0.5 shrink-0" />}
              <div>
                <span className="font-bold text-ink block mb-0.5">{r.field}</span>
                <span className={cn(
                  r.status === "pass" ? "text-emerald-800 dark:text-emerald-200" : r.status === "warn" ? "text-amber-800 dark:text-amber-200" : "text-red-800 dark:text-red-200"
                )}>{r.message}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
