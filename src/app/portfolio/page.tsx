import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sehen Sie abgeschlossene Projekte aus Druck, Fahrzeugfolierung, Webentwicklung und Beschilderung.",
  alternates: { canonical: "https://dkk-design.de/portfolio" },
};

const FILTERS = [
  { id: "print", label: "Print" },
  { id: "vehicle", label: "Fahrzeugfolien" },
  { id: "web", label: "Web" },
  { id: "pre-press", label: "Druckvorstufe" },
  { id: "branding", label: "Beschilderung" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "CollectionPage",
          name: "Portfolio – DKK design&marketing",
          description: "Eine Auswahl abgeschlossener Projekte.",
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dkk-design.de/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://dkk-design.de/portfolio" },
          ],
        })}} />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ PRODUKTIONSARCHIV ]</span>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-navy tracking-tight leading-tight">Physische Ergebnisse aus realen Druckvorstufen- und Digitalsetups.</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div key={p.id} className="group bg-white border border-slate-200 overflow-hidden hover:border-gold transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" loading="lazy" />
                  <div className="absolute top-2 left-2 bg-ink/90 text-white font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase border border-white/10">{p.categoryLabel}</div>
                  <div className="absolute bottom-2 right-2 bg-ink/90 text-gold font-mono text-[9px] px-2 py-0.5 border border-gold-dim">DRUCKFERTIG KONFIGURIERT</div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-navy group-hover:text-gold-dim transition-colors">{p.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{p.tagline}</p>
                </div>
              </div>
              <div className="p-5 pt-0 mt-auto">
                <div className="bg-slate-50 border border-slate-200 p-3">
                  <div className="flex items-start space-x-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">SPECS: </span>
                    <span className="text-[10px] font-mono text-slate-700 leading-tight">{p.technicalDetails}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div><span className="font-display font-bold text-navy block text-sm">Meine Originaldateien einsehen?</span><span className="text-xs text-slate-600">Ich teile gern direkte Behance-Links.</span></div>
          <a href="/kontakt" className="text-xs font-bold uppercase tracking-widest px-5 py-3 bg-navy text-white hover:bg-gold hover:text-ink transition-colors">Mustervorlage anfordern</a>
        </div>
      </div>
    </div>
  );
}
