"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/data/services";
import { getCategoryIcon } from "@/components/ServiceIcons";
import ZeroErrorBadge from "@/components/ZeroErrorBadge";

function CategoryCard({ category }: { category: (typeof SERVICE_CATEGORIES)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`border transition-colors duration-300 ${open ? "border-gold/40 bg-surface-2" : "border-line bg-surface"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between cursor-pointer hover:bg-surface-2 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-surface-2 border border-line shrink-0">
            {getCategoryIcon(category.icon as any, "w-10 h-10 md:w-12 md:h-12 text-gold")}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-gold font-bold">{category.number}</span>
              <span className="text-xs font-mono text-muted uppercase tracking-widest">{category.subtitle}</span>
            </div>
            <h2 className="text-lg md:text-xl font-display font-bold text-ink tracking-wide">{category.title}</h2>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-gold shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-line pt-5 md:pt-6 bg-surface/60 space-y-6">
              <p className="text-sm text-muted leading-relaxed max-w-2xl">{category.description}</p>
              {category.subcategories.map((sub) => (
                <div key={sub.id}>
                  <div className="mb-3">
                    <h3 className="text-sm font-display font-bold text-sky tracking-wide">{sub.title}</h3>
                    <p className="text-xs text-muted mt-0.5">{sub.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {sub.tiers.map((tier) => (
                      <motion.div
                        key={tier.name}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="border border-line bg-surface p-4 flex flex-col hover:border-gold/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold">
                            {tier.name}
                          </span>
                          <span className="text-xs font-mono text-ink font-bold">{tier.price}</span>
                        </div>
                        <ul className="space-y-1.5 flex-1">
                          {tier.items.map((item, i) => (
                            <li key={i} className="text-xs text-muted flex items-start gap-2">
                              <span className="text-gold mt-0.5 shrink-0">&bull;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/kontakt"
                          className="mt-4 text-[10px] font-mono text-gold uppercase tracking-widest font-bold hover:text-ink transition-colors inline-flex items-center gap-1"
                        >
                          Angebot anfragen <ArrowRight size={12} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesContent() {
  const offers = SERVICE_CATEGORIES.flatMap((c) =>
    c.subcategories.flatMap((s) =>
      s.tiers
        .map((t) => {
          const priceMatch = t.price.replace(/\./g, "").match(/(\d+)/);
          if (!priceMatch) return null;
          return {
            "@type": "Offer",
            name: `${c.title} – ${s.title} (${t.name})`,
            price: priceMatch[1],
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          };
        })
        .filter(Boolean)
    )
  );

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
    ...(offers.length > 0 && { offers: { "@type": "OfferCatalog", name: "DKK Festpreis-Pakete", itemListElement: offers } }),
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[800px] mb-10">
          <span className="text-xs uppercase tracking-widest text-gold font-mono block mb-2">
            KLARE PAKETE &bull; FAIRE PREISE &bull; NULL FEHLER
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-ink tracking-tight leading-tight">
            Leistungen, die Sie kaufen k&ouml;nnen &ndash; nicht nur Kategorien zum Anschauen.
          </h1>
          <p className="text-muted text-sm md:text-base mt-3 max-w-xl">
            Keine versteckten Kosten, keine undefinierten Leistungen. W&auml;hlen Sie ein Paket, und ich liefere die
            fertigen Assets innerhalb der vereinbarten Zeit.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <ZeroErrorBadge />
            <p className="text-xs text-muted font-mono">
              Festpreis pro Paket &ndash; kein Stundenlohn, keine Nachforderungen
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {SERVICE_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        <div className="mt-8 p-6 bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-muted">
            <BadgeCheck size={16} className="text-gold shrink-0" />
            <span>Kein passendes Paket dabei? Jedes Paket hat einen Festpreis – ich erstelle Ihnen ein individuelles Angebot.</span>
          </div>
          <Link
            href="/kontakt"
            className="text-xs text-gold uppercase tracking-widest font-mono font-bold hover:text-ink transition-colors shrink-0"
          >
            INDIVIDUELLES ANGEBOT &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
