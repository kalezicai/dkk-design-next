import type { Metadata } from "next";
import PortfolioGrid from "./PortfolioGrid";
import { Reveal } from "@/components/motion";

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

        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ PRODUKTIONSARCHIV ]</span>
              <h1 className="text-3xl md:text-4xl font-display font-medium text-heading tracking-tight leading-tight">Physische Ergebnisse aus realen Druckvorstufen- und Digitalsetups.</h1>
              <p className="text-muted text-sm mt-3 max-w-2xl">Jede Referenz zeigt zuerst, was für Sie dabei herauskommt – dann, wie es technisch umgesetzt wurde.</p>
            </div>
          </div>
        </Reveal>

        <PortfolioGrid />

        <div className="mt-12 bg-surface border border-line p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div><span className="font-display font-bold text-heading block text-sm">Meine Originaldateien einsehen?</span><span className="text-xs text-muted">Ich teile gern direkte Behance-Links.</span></div>
          <a href="/kontakt" className="text-xs font-bold uppercase tracking-widest px-5 py-3 bg-navy text-white hover:bg-gold hover:text-on-gold transition-colors">Mustervorlage anfordern</a>
        </div>
      </div>
    </div>
  );
}
