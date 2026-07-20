import { ArrowRight, Star, Quote } from "lucide-react";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AnimatedBackground from "@/components/AnimatedBackground";
import FileCheckTool from "@/components/FileCheckTool";
import { SLIDER_EXAMPLES } from "@/data/sliderExamples";

const TESTIMONIALS = [
  { quote: "Unsere 96-seitige Broschüre wurde von der Druckerei ohne eine einzige Rückfrage angenommen. Wir haben über 1.200 € Makulaturkosten gespart.", author: "Geschäftsführer, Regionalverlag", project: "Druckvorstufe Kulturhandbuch" },
  { quote: "Die Fahrzeugfolierung unserer 10-Sprinter-Flotte saß auf Anhieb. Die Montagezeit war 40 % kürzer als bei unserem vorherigen Anbieter.", author: "Fuhrparkleiter, Münchner Logistik GmbH", project: "Fahrzeugfolierung Flottenbranding" },
  { quote: "Endlich jemand, der versteht, dass eine Datei nicht nur auf dem Bildschirm gut aussehen muss. Die Druckdaten waren sofort produktionsbereit.", author: "Marketingleiter, Weingut Rheingau", project: "Etiketten-Design & Druckvorstufe" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Product",
        name: "DKK design&marketing Dienstleistungen",
        description: "Druckvorstufe, Fahrzeugfolierung, Branding & Webentwicklung aus Deutschland.",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite", item: "https://dkk-design.de/" }],
      })}} />

      <header className="relative bg-ink text-white pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <AnimatedBackground />
          <div className="absolute top-1/4 left-1/3 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-sky/5 blur-[120px] ambient-glow-element" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-gold/5 blur-[100px] ambient-glow-element" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 relative z-10">
          <div className="inline-flex items-center space-x-2 border border-white/10 px-3 py-1 bg-white/5 mb-6 md:mb-8">
            <span className="inline-block w-1.5 h-1.5 bg-sky rounded-full animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300">DESIGN &middot; WEB &middot; DRUCKVORSTUFE &middot; FOLIERUNG &middot; BRANDING</span>
          </div>
          <div className="max-w-[950px] mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.05] text-white">
              Ihre Marke, druckfertig geliefert – <span className="text-gold underline decoration-white/10 decoration-wavy underline-offset-8">beim ersten Mal.</span>
            </h1>
          </div>
          <div className="max-w-[700px] mb-8 md:mb-12">
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">Ich bin ein freier Design- und Druckvorstufentechniker mit Sitz in Deutschland. Keine Account-Manager, keine generischen Vorlagen und null abgelehnte Dateien an der Druckmaschine.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-16 max-w-lg">
            <Link href="/portfolio" className="flex-1 text-center py-4 px-6 bg-gold text-ink font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-ink transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Zum Portfolio</span><ArrowRight size={16} />
            </Link>
            <Link href="/kontakt" className="flex-1 text-center py-4 px-6 bg-transparent text-white border border-white/20 text-sm font-semibold uppercase tracking-wider hover:bg-white/5 hover:border-white transition-all duration-200 flex items-center justify-center space-x-1">
              <span>Kostenlose Dateiprüfung anfordern</span>
            </Link>
          </div>

          <div className="border-t border-b border-white/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 bg-ink/30 backdrop-blur-xs">
            <div className="flex flex-col justify-between">
              <div><span className="text-4xl md:text-5xl font-display font-bold text-gold tracking-tight block">1.500+</span><span className="text-xs uppercase tracking-widest text-slate-400 font-mono mt-1 block">Abgeschlossene Projekte</span></div>
              <p className="text-xs text-slate-300 mt-2 max-w-xs">Von Luxusfolien-Auflagen bis zu flottenfertigen Folienfahrzeugen.</p>
            </div>
            <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <div><span className="text-4xl md:text-5xl font-display font-bold text-gold tracking-tight block">500+</span><span className="text-xs uppercase tracking-widest text-slate-400 font-mono mt-1 block">Aktive Direktkunden</span></div>
              <p className="text-xs text-slate-300 mt-2 max-w-xs">Einzelhandel, Bauunternehmen, Weingüter, Transportflotten.</p>
            </div>
            <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <div><div className="flex items-center space-x-1"><span className="text-4xl md:text-5xl font-display font-bold text-gold tracking-tight">0</span><span className="text-xs text-sky font-mono bg-sky/10 px-2 py-0.5 rounded uppercase">Null-Fehler-Garantie</span></div><span className="text-xs uppercase tracking-widest text-slate-400 font-mono mt-1 block">Druckereirückweisungen in 12 Jahren</span></div>
              <p className="text-xs text-slate-300 mt-2 max-w-xs">Lehnt Ihre Druckerei mein Layout ab, schreibe ich es innerhalb von 12 Stunden kostenfrei neu.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-paper text-ink py-16 md:py-24 border-t border-b border-slate-200" aria-label="Vorher-Nachher-Vergleich">
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6">
          <div className="max-w-[750px] mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ DIE SIGNATUR-INTERAKTION ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-navy tracking-tight leading-tight">Ich male nicht nur hübsche Bilder. Ich liefere physische Ausrichtung und technische Konformität.</h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">Die meisten Designagenturen senden Ihnen Mockups, die auf einem hellen iMac-Bildschirm gut aussehen, aber am Druckertresen versagen. Klicken Sie auf die Voreinstellungen unten.</p>
          </div>
          <BeforeAfterSlider examples={SLIDER_EXAMPLES} />
        </div>
      </section>

      {/* SERVICES CTA */}
      <section className="bg-ink text-white py-16 md:py-20 border-t border-white/5" aria-label="Leistungen Übersicht">
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-mono block mb-2">[ LEISTUNGEN & PAKETE ]</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight">
                Sechs Kategorien. Drei Stufen. Ein Ansprechpartner.
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-md">
                Branding, Druckvorstufe, Webentwicklung, Marketing, Printprodukte und Zusatzleistungen &ndash; alle als Starter-, Professional- oder Premium-Paket buchbar. Mit Festpreisen, ohne böse Überraschungen.
              </p>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-200"
              >
                <span>ALLE PAKETE ANSEHEN</span>
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Branding", icon: "branding" },
                { label: "Druckvorstufe", icon: "prepress" },
                { label: "Webentwicklung", icon: "web" },
                { label: "Marketing", icon: "marketing" },
                { label: "Printprodukte", icon: "print" },
                { label: "Add-Ons", icon: "addons" },
              ].map((item) => (
                <div key={item.label} className="border border-white/10 bg-white/5 p-3 text-center hover:border-gold/30 transition-colors">
                  <span className="text-xs font-mono text-gold font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TOOL */}
      <section className="bg-ink text-white py-16 md:py-24" aria-label="Druckdaten-Check">
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-gold font-mono block mb-2">[ KOSTENLOSER PREFLIGHT-CHECK ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight">Prüfen Sie Ihre Druckdaten in 30 Sekunden</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">Beantworten Sie 5 Fragen – ich sage Ihnen, ob Ihre Datei drucktauglich ist.</p>
          </div>
          <div className="max-w-[700px] mx-auto">
            <FileCheckTool />
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 md:py-24 border-t border-b border-white/5 relative" aria-label="Über das Studio">
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="border border-white/10 p-2 bg-white/5">
                <div className="relative aspect-3/4 bg-slate-900 overflow-hidden">
                  <img src="/images/about-portrait.jpg" alt="Portrait DKK design&marketing" className="w-full h-full object-cover grayscale brightness-95 contrast-105" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/20 mix-blend-color pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-ink/90 text-white/80 font-mono text-[9px] px-2 py-0.5 tracking-widest border border-white/10">DKK GERMANY STUDIO // 1:1</div>
                  <div className="absolute bottom-3 right-3 bg-gold text-ink font-mono text-[9px] px-2 py-0.5 font-bold tracking-widest">SOLO-FREELANCER</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold font-mono block">HANDFESTER TECHNIKER</span>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">Kein Agentur-Bläh. Nur der Techniker hinter der Vektordatei.</h2>
              </div>
              <div className="text-slate-300 text-sm md:text-base space-y-4 leading-relaxed">
                <p>Ich bin ein freier Designer, Druckvorstufenoperator und Frontend-Entwickler mit Sitz in Deutschland. Mein Handwerk habe ich in den Druck- und Schilderwerkstätten von Ulcinj gelernt.</p>
                <p className="border-l-2 border-gold pl-4 text-white font-medium italic my-4 text-xs md:text-sm">&bdquo;In 12 Jahren Druckvorstufe habe ich über 1.500 physische Dateien vorbereitet. Jede Datei verlässt meinen Schreibtisch mit korrekten CMYK-Dichten, passenden Farbfallen und maßstabsgerechter Skalierung.&rdquo;</p>
              </div>
              <Link href="/kontakt" className="inline-flex items-center space-x-2 px-5 py-3 bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition-all duration-200">
                <span>Meine Arbeitszeit buchen</span><ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink py-16 md:py-24" aria-label="Kundenstimmen">
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ KUNDENSTIMMEN ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-navy tracking-tight leading-tight">Was meine Kunden sagen</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">Keine Fake-Testimonials. Echte Projekte, echte Ergebnisse.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 flex flex-col relative hover:border-gold-dim/30 transition-colors">
                <Quote size={24} className="text-gold-dim/20 absolute top-4 right-4" />
                <div className="flex space-x-1 mb-4">{Array.from({ length: 5 }).map((_, s) => <Star key={s} size={14} className="text-gold fill-gold" />)}</div>
                <blockquote className="text-sm text-slate-700 leading-relaxed mb-6 flex-1 italic">&bdquo;{t.quote}&rdquo;</blockquote>
                <div className="border-t border-slate-100 pt-4 mt-auto"><p className="text-xs font-bold text-navy">{t.author}</p><p className="text-[10px] font-mono text-slate-400">{t.project}</p></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/kontakt" className="inline-flex items-center space-x-2 px-5 py-3 bg-ink text-white font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-all duration-200">
              <span>Mehr Referenzen anfordern</span><ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
