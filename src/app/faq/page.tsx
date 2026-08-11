import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { FAQ_DATA } from "@/data/faq";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Häufig gestellte Fragen zu Druckvorstufe, Fahrzeugfolierung, Webdesign und Branding bei DKK design&marketing – inklusive Festpreis- und Verfügbarkeitsfragen.",
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

        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ ECHTE ANTWORTEN ]</span>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-heading tracking-tight leading-tight">Häufig gestellte Fragen</h1>
          </div>
        </Reveal>

        <Stagger className="space-y-3" staggerMs={60}>
          {FAQ_DATA.map((faq, index) => (
            <StaggerItem key={index}>
              <details className="bg-surface border border-line transition-all duration-200 hover:border-(--color-gold-40) group open:border-(--color-gold-40)">
                <summary className="w-full text-left p-5 flex items-center justify-between font-display font-bold text-heading text-sm md:text-base cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <Plus size={16} className="text-gold shrink-0 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-muted border-t border-line leading-relaxed bg-surface-2">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
