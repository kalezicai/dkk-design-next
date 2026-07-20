import type { Metadata } from "next";
import { FAQ_DATA } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Häufig gestellte Fragen zu Druckvorstufe, Fahrzeugfolierung, Webdesign und Branding bei DKK design&marketing.",
  alternates: { canonical: "https://dkk-design.de/faq" },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[800px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: FAQ_DATA.map((item) => ({
            "@type": "Question", name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dkk-design.de/" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://dkk-design.de/faq" },
          ],
        })}} />

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ ECHTE ANTWORTEN ]</span>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-navy tracking-tight leading-tight">Häufig gestellte Fragen</h1>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => (
            <details key={index} className="bg-white border border-slate-200 transition-colors hover:border-slate-300 group">
              <summary className="w-full text-left p-5 flex items-center justify-between font-display font-bold text-navy text-sm md:text-base cursor-pointer [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{faq.question}</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
