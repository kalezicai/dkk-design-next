import type { Metadata } from "next";
import { Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie DKK design&marketing für Druckvorstufe, Fahrzeugfolierung, Webdesign und Branding. Antwortgarantie: 12 Stunden an Werktagen. info.dkk@gmail.com",
  alternates: { canonical: "https://dkk-design.de/kontakt" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dkk-design.de/" },
            { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://dkk-design.de/kontakt" },
          ],
        })}} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ KONTAKTAUFNAHME ]</span>
              <h1 className="text-3xl md:text-4xl font-display font-medium text-heading tracking-tight leading-tight">Projekt starten ohne Agentur-Overhead.</h1>
              <p className="text-muted text-sm mt-3 leading-relaxed">Senden Sie Ihre Anfrage oder Rohdaten für eine direkte technische Prüfung. Sie erhalten innerhalb von 12 Stunden eine direkte Antwort – keine Warteschleife, keine automatischen Antworten.</p>
            </div>

            <div className="bg-[#0B0E14] text-white border border-[#0B0E14] p-5">
              <div className="flex items-center gap-2 text-gold">
                <Clock size={14} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">ANTWORTGARANTIE</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">Ich prüfe Einsendungen täglich. Sie erhalten innerhalb von <strong className="text-white">12 Stunden</strong> (an Werktagen) eine Antwort – meist deutlich schneller.</p>
            </div>

            <div className="bg-surface border border-line p-5">
              <div className="flex items-center gap-2 text-gold-dim">
                <ShieldCheck size={14} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">NULL-FEHLER-VERSPRECHEN</span>
              </div>
              <p className="text-xs text-(--color-ink-80) mt-2">Lehnt Ihre Druckerei meine Datei ab, schreibe ich sie innerhalb von <strong>12 Stunden</strong> kostenfrei neu. In 12 Jahren ist das nie passiert.</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="text-heading shrink-0"><Mail size={16} /></div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">DIREKTE E-MAIL</span>
                  <a href="mailto:info.dkk@gmail.com" className="text-sm font-mono font-bold text-heading hover:text-gold-dim transition-colors">info.dkk@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-heading shrink-0"><MapPin size={16} /></div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">STANDORT</span>
                  <span className="text-sm font-medium text-(--color-ink-80)">Sitz in Deutschland</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7 bg-surface border border-line p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-heading border-b border-line pb-3 mb-6">Projektdetails einreichen</h2>
            <p className="text-sm text-muted">
              Bitte senden Sie eine E-Mail an{" "}
              <a href="mailto:info.dkk@gmail.com" className="text-sky underline font-semibold">info.dkk@gmail.com</a>
              {" "}mit einer Beschreibung Ihres Projekts. Fügen Sie gern Referenzdateien oder Fahrzeugfotos bei.
            </p>
            <ol className="mt-6 space-y-3 text-sm text-(--color-ink-80)">
              {[
                "Sie beschreiben Ihr Projekt und hängen Rohdaten an.",
                "Ich prüfe die Dateien kostenlos auf Drucktauglichkeit.",
                "Sie erhalten innerhalb von 12 Stunden Festpreis-Angebot und Starttermin.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-navy text-gold font-mono text-[10px] font-bold shrink-0">{i + 1}</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <a
              href="mailto:info.dkk@gmail.com"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gold text-on-gold font-bold text-xs uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-200 group"
            >
              <span>E-Mail an DKK senden</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
