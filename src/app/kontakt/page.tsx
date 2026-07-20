import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie DKK design&marketing für Druckvorstufe, Fahrzeugfolierung, Webdesign und Branding. Direkte E-Mail: info.dkk@gmail.com",
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
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ KONTAKTAUFNAHME ]</span>
              <h1 className="text-3xl md:text-4xl font-display font-medium text-navy tracking-tight leading-tight">Projekt starten ohne Agentur-Overhead.</h1>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">Senden Sie Ihre Anfrage oder Rohdaten für eine direkte technische Prüfung. Sie erhalten innerhalb von 24 bis 48 Stunden eine direkte Antwort.</p>
            </div>

            <div className="bg-white border border-slate-200 p-5">
              <div className="flex items-center space-x-2 text-gold-dim"><span className="text-xs font-mono uppercase tracking-widest font-bold">ANTWORTGARANTIE</span></div>
              <p className="text-xs text-slate-800 mt-2">Ich prüfe Einsendungen täglich. Sie erhalten innerhalb von <strong>24 bis 48 Stunden</strong> eine Antwort.</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="text-navy shrink-0"><span className="text-sm">&#9993;</span></div>
                <div><span className="text-[10px] font-mono text-slate-500 uppercase block">DIREKTE E-MAIL</span>
                  <a href="mailto:info.dkk@gmail.com" className="text-sm font-mono font-bold text-navy hover:text-gold-dim transition-colors">info.dkk@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-navy shrink-0"><span className="text-sm">&#x1F4CD;</span></div>
                <div><span className="text-[10px] font-mono text-slate-500 uppercase block">STANDORT</span>
                  <span className="text-sm font-medium text-slate-800">Sitz in Deutschland</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-navy border-b border-slate-100 pb-3 mb-6">Projektdetails einreichen</h2>
            <p className="text-sm text-slate-600">
              Bitte senden Sie eine E-Mail an{" "}
              <a href="mailto:info.dkk@gmail.com" className="text-sky underline font-semibold">info.dkk@gmail.com</a>
              {" "}mit einer Beschreibung Ihres Projekts. Fügen Sie gern Referenzdateien oder Fahrzeugfotos bei.
              Ich antworte innerhalb von 24–48 Stunden mit einer konkreten Einschätzung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
