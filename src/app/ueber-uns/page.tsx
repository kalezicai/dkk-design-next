import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem, CountUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Über Uns",
  description: "Solo-Designer und Druckvorstufen-Techniker mit Wurzeln in Ulcinj und Basis in Deutschland. 12 Jahre Erfahrung, 1.500+ druckfertige Dateien, 0 Druckerei-Rückweisungen.",
  alternates: { canonical: "https://dkk-design.de/ueber-uns" },
};

const VALUES = [
  { title: "Präzision", desc: "Jede Datei wird druck- oder produktionsfertig konfiguriert – CMYK-Dichten, Farbfallen, Beschnitt." },
  { title: "Verlässlichkeit", desc: "Termintreu, transparent und ohne Agentur-Overhead. Antwort innerhalb von 12 Stunden." },
  { title: "Handwerksstolz", desc: "12 Jahre Erfahrung in Druckvorstufe und Medienproduktion. 0 Rückweisungen an der Druckmaschine." },
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
            description: "Solo-Designer mit 12 Jahren Erfahrung und über 1.500 druckfertigen Dateien.",
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

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" staggerMs={100}>
          <StaggerItem>
            <div className="bg-[#0B0E14] text-white p-6 border border-[#0B0E14]">
              <span className="text-4xl font-display font-bold text-gold block"><CountUp value={12} suffix=" Jahre" /></span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono mt-1 block">Druckvorstufe & Medienproduktion</span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-surface border border-line p-6 hover:border-gold transition-colors">
              <span className="text-4xl font-display font-bold text-gold block"><CountUp value={1500} suffix="+" /></span>
              <span className="text-xs uppercase tracking-widest text-muted font-mono mt-1 block">Druckfertige Dateien geliefert</span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-surface border border-line p-6 hover:border-gold transition-colors">
              <span className="text-4xl font-display font-bold text-gold block">0</span>
              <span className="text-xs uppercase tracking-widest text-muted font-mono mt-1 block">Druckerei-Rückweisungen in 12 Jahren</span>
            </div>
          </StaggerItem>
        </Stagger>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ ÜBER MICH ]</span>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-heading tracking-tight leading-tight mb-6">Solo-Designer mit Druckereiwurzeln.</h1>
              <div className="space-y-4 text-sm text-(--color-ink-80) leading-relaxed">
              <p>Ich bin ein unabhängiger Grafikdesigner und Druckvorstufen-Techniker mit über 12 Jahren Erfahrung. Meine Wurzeln liegen in Ulcinj (Montenegro), meine Basis in Deutschland.</p>
              <p>Anders als eine Agentur arbeite ich direkt – von der ersten Skizze bis zur produktionsreifen Datei. Jedes Projekt durchläuft meine persönliche Qualitätskontrolle.</p>
              <p>Mein Fokus liegt auf druck- und produktionsgerechtem Design. Ob Offsetdruck, Fahrzeugfolierung oder Webentwicklung – ich liefere Dateien, die in der realen Produktion bestehen.</p>
            </div>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-7">
            <div className="bg-surface border border-line p-6 md:p-8 space-y-6">
              <h2 className="text-lg font-display font-bold text-heading border-b border-line pb-3">Meine Arbeitsweise</h2>
            <div className="space-y-4 text-sm text-(--color-ink-80) leading-relaxed">
                <p>Jedes Projekt beginnt mit einer gründlichen Analyse Ihrer Anforderungen. Ich prüfe Ihre Dateien auf Drucktauglichkeit, Farbraum, Auflösung und Beschnitt.</p>
                <p>Nach der Analyse folgt die Gestaltung. Jede Datei wird in der produktionsgerechten Version ausgeliefert – ob für den Offsetdruck, die Folienplotteranlage oder das Web.</p>
                <p>Mein Versprechen: Sie erhalten keine &bdquo;Entwürfe&ldquo;, sondern druckfertige, produktionssichere Ergebnisse.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-line pt-5">
                <p className="flex items-center gap-2 text-xs text-muted font-mono">
                  <Clock size={14} className="text-gold" /> Antwortzeit: innerhalb von 12 Stunden an Werktagen
                </p>
                <Link href="/kontakt" className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-on-gold transition-all duration-200 group">
                  <span>Projekt anfragen</span><ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" staggerMs={110}>
          {VALUES.map((v) => (
            <StaggerItem key={v.title}>
              <div className="bg-surface border border-line p-6 hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full">
                <h3 className="font-display font-bold text-heading text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
