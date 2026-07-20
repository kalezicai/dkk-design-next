import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über Uns",
  description: "Solo-Designer und Druckvorstufen-Techniker mit Wurzeln in Ulcinj und Basis in Deutschland. 12 Jahre Erfahrung in der Druck- und Medienvorbereitung.",
  alternates: { canonical: "https://dkk-design.de/ueber-uns" },
};

const VALUES = [
  { title: "Präzision", desc: "Jede Datei wird druck- oder produktionsfertig konfiguriert." },
  { title: "Verlässlichkeit", desc: "Termintreu, transparent und ohne Agentur-Overhead." },
  { title: "Handwerksstolz", desc: "12 Jahre Erfahrung in Druckvorstufe und Medienproduktion." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "AboutPage",
          name: "Über DKK design&marketing",
          mainEntity: {
            "@type": "Person", name: "DKK design&marketing",
            jobTitle: "Druckvorstufentechniker & Designer",
            description: "Solo-Designer mit 12 Jahren Erfahrung.",
            knowsAbout: ["Druckvorstufe", "Prepress", "Fahrzeugfolierung", "Vehicle Wrap Design", "Webentwicklung", "Branding"],
            sameAs: ["https://www.behance.net/dkk-design-marketing", "https://www.instagram.com/dkk.design.marketing"],
            workLocation: { "@type": "Place", name: "Deutschland & Adria-Region" },
            alumniOf: { "@type": "Organization", name: "Druck- und Schilderwerkstätten Ulcinj" }
          }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dkk-design.de/" },
            { "@type": "ListItem", position: 2, name: "Über Uns", item: "https://dkk-design.de/ueber-uns" },
          ],
        })}} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ ÜBER MICH ]</span>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-navy tracking-tight leading-tight mb-6">Solo-Designer mit Druckereiwurzeln.</h1>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>Ich bin ein unabhängiger Grafikdesigner und Druckvorstufen-Techniker mit über 12 Jahren Erfahrung. Meine Wurzeln liegen in Ulcinj (Montenegro), meine Basis in Deutschland.</p>
              <p>Anders als eine Agentur arbeite ich direkt – von der ersten Skizze bis zur produktionsreifen Datei. Jedes Projekt durchläuft meine persönliche Qualitätskontrolle.</p>
              <p>Mein Fokus liegt auf druck- und produktionsgerechtem Design. Ob Offsetdruck, Fahrzeugfolierung oder Webentwicklung – ich liefere Dateien, die in der realen Produktion bestehen.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-6 md:p-8 space-y-6">
              <h2 className="text-lg font-display font-bold text-navy border-b border-slate-100 pb-3">Meine Arbeitsweise</h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>Jedes Projekt beginnt mit einer gründlichen Analyse Ihrer Anforderungen. Ich prüfe Ihre Dateien auf Drucktauglichkeit, Farbraum, Auflösung und Beschnitt.</p>
                <p>Nach der Analyse folgt die Gestaltung. Jede Datei wird in der produktionsgerechten Version ausgeliefert – ob für den Offsetdruck, die Folienplotteranlage oder das Web.</p>
                <p>Mein Versprechen: Sie erhalten keine &bdquo;Entwürfe&ldquo;, sondern druckfertige, produktionssichere Ergebnisse.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-white border border-slate-200 p-6 hover:border-gold transition-colors">
              <h3 className="font-display font-bold text-navy text-sm mb-2">{v.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
