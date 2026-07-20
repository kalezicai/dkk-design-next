"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/data/services";
import { getCategoryIcon } from "@/components/ServiceIcons";

function CategoryCard({ category }: { category: (typeof SERVICE_CATEGORIES)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 bg-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
            {getCategoryIcon(category.icon as any, "w-10 h-10 md:w-12 md:h-12 text-gold")}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-gold font-bold">{category.number}</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{category.subtitle}</span>
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-white tracking-wide">{category.title}</h2>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-gold shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/5 pt-5 md:pt-6 bg-ink/60 space-y-6">
          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{category.description}</p>
          {category.subcategories.map((sub) => (
            <div key={sub.id}>
              <div className="mb-3">
                <h3 className="text-sm font-display font-bold text-sky tracking-wide">{sub.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{sub.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sub.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="border border-white/10 bg-white/5 p-4 flex flex-col hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold">
                        {tier.name}
                      </span>
                      <span className="text-xs font-mono text-white font-bold">{tier.price}</span>
                    </div>
                    <ul className="space-y-1.5 flex-1">
                      {tier.items.map((item, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="text-gold mt-0.5 shrink-0">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/kontakt"
                      className="mt-4 text-[10px] font-mono text-gold uppercase tracking-widest font-bold hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      Angebot anfragen <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServicesContent() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DKK design&marketing Leistungen",
    description: "Branding, Druckvorstufe, Webentwicklung, Marketing und Printprodukte aus Deutschland.",
    itemListElement: SERVICE_CATEGORIES.map((c, i) => ({
      "@type": "Service",
      position: i + 1,
      name: c.title,
      description: c.description,
      provider: {
        "@type": "Person",
        name: "DKK design&marketing",
        url: "https://dkk-design.de",
      },
    })),
  };

  return (
    <div className="min-h-screen bg-ink text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[800px] mb-10">
          <span className="text-xs uppercase tracking-widest text-gold font-mono block mb-2">
            KLARE PAKETE &bull; FAIRE PREISE &bull; NULL FEHLER
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Leistungen, die Sie kaufen k&ouml;nnen &ndash; nicht nur Kategorien zum Anschauen.
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-xl">
            Keine versteckten Kosten, keine undefineden Leistungen. W&auml;hlen Sie ein Paket, und ich liefere die
            fertigen Assets innerhalb der vereinbarten Zeit.
          </p>
        </div>

        <div className="space-y-3">
          {SERVICE_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        <div className="mt-8 p-6 bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <span>Kein passendes Paket dabei? Ich erstelle Ihnen ein individuelles Angebot.</span>
          </div>
          <Link
            href="/kontakt"
            className="text-xs text-gold uppercase tracking-widest font-mono font-bold hover:text-white transition-colors shrink-0"
          >
            INDIVIDUELLES ANGEBOT &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
