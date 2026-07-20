export interface Tier {
  name: string;
  price: string;
  items: string[];
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  tiers: Tier[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  subcategories: SubCategory[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "branding",
    number: "01",
    title: "Branding & Markenidentität",
    subtitle: "Strategische Markenentwicklung",
    description: "Entwickeln Sie eine unverwechselbare Markenidentität, die Ihre Vision widerspiegelt und bei Ihrer Zielgruppe einen bleibenden Eindruck hinterlässt.",
    icon: "branding",
    subcategories: [
      {
        id: "branding-pakete",
        title: "Branding-Pakete",
        description: "Komplette Branding-Lösungen für jeden Bedarf – vom Logo bis zur vollständigen Markenidentität.",
        tiers: [
          {
            name: "Starter",
            price: "490 €",
            items: [
              "Logo-Entwicklung (3 Konzepte)",
              "Farbpalette & Typografie",
              "Markenrichtlinien (Kurzversion)",
              "Primäre Geschäftsausstattung",
              "Digitale Markenelemente"
            ]
          },
          {
            name: "Professional",
            price: "990 €",
            items: [
              "Umfassendes Logo-Design & Markenentwicklung",
              "Vollständige Farb- & Schriftdefinition",
              "Ausführliches Markenhandbuch",
              "Komplette Geschäftsausstattung",
              "Social Media Branding-Kit",
              "Präsentationsvorlagen"
            ]
          },
          {
            name: "Premium",
            price: "1.990 €",
            items: [
              "Strategische Markenberatung & Positionierung",
              "Umfangreiches Logo-System mit Variationen",
              "Detailliertes Brandbook (40+ Seiten)",
              "Full Business Stationery Suite",
              "Social Media & Digital Branding Package",
              "Marketingmaterialien-Design",
              "Markenrichtlinien-Schulung",
              "Priority-Support & Revisions-Sprint"
            ]
          }
        ]
      },
      {
        id: "brand-strategy",
        title: "Brand Strategy",
        description: "Fundierte Markenstrategien für nachhaltigen Erfolg und klare Markenpositionierung im Markt.",
        tiers: [
          {
            name: "Starter",
            price: "690 €",
            items: [
              "Markenanalyse & Wettbewerbscheck",
              "Zielgruppendefinition & Personas",
              "Markenpositionierung",
              "Mission, Vision & Werte",
              "Strategie-Report (10-15 Seiten)"
            ]
          },
          {
            name: "Professional",
            price: "1.290 €",
            items: [
              "Tiefgehende Markt- & Wettbewerbsanalyse",
              "Detaillierte Zielgruppensegmentierung",
              "Umfassende Markenpositionierungsstrategie",
              "Markenarchitektur & Markenmodell",
              "Content-Strategie & Tone of Voice",
              "Strategie-Handbuch (25-35 Seiten)",
              "Marken-Workshop (halbtägig)"
            ]
          },
          {
            name: "Premium",
            price: "2.490 €",
            items: [
              "Vollständige Markenstrategie von der Analyse bis zur Implementierung",
              "Quantitative & qualitative Marktforschung",
              "Multi-Channel-Markenstrategie",
              "Brand Experience & Customer Journey Mapping",
              "Marken-Compliance-System",
              "Umfangreiches Strategie-Handbuch (50+ Seiten)",
              "Zwei Marken-Workshops (ganztägig)",
              "Implementierungsbegleitung (3 Monate)",
              "Performance-Messung & Optimierung"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "prepress",
    number: "02",
    title: "Druckvorstufe & Druckaufbereitung",
    subtitle: "Professionelle Druckvorbereitung",
    description: "Optimale Druckaufbereitung für perfekte Ergebnisse – von der Datenprüfung bis zur druckfertigen Datei.",
    icon: "prepress",
    subcategories: [
      {
        id: "druckvorstufe",
        title: "Druckvorstufe & Datenaufbereitung",
        description: "Professionelle Aufbereitung Ihrer Druckdaten für optimale Druckergebnisse in jeder Auflage.",
        tiers: [
          {
            name: "Starter",
            price: "190 €",
            items: [
              "Datenprüfung & Formatkontrolle",
              "Farbkonvertierung (RGB nach CMYK)",
              "Bildoptimierung & Auflösungsprüfung",
              "PDF/X-Export",
              "Druckfertige Dateiausgabe"
            ]
          },
          {
            name: "Professional",
            price: "490 €",
            items: [
              "Umfassende Datenaufbereitung & -optimierung",
              "Farbmanagement & Proofing",
              "Bildretusche & Farbkorrektur",
              "Schriftmanagement & -einbettung",
              "Ausgangsformaterstellung",
              "Kontrollausdruck & Qualitätssicherung",
              "Druckbegleitung & Abstimmung"
            ]
          },
          {
            name: "Premium",
            price: "990 €",
            items: [
              "Komplette Druckvorstufe für Printprojekte aller Art",
              "Hochpräzises Farbmanagement & Softproofing",
              "Professionelle Bildbearbeitung & Retusche",
              "Komplexe Ausgangsformaterstellung (Sonderformate, Veredelungen)",
              "Farbmusteranlage & Andruckbegleitung",
              "Produktionsbegleitung (Drucküberwachung)",
              "Qualitätssicherung nach ISO 12647",
              "Notfall-Support bei Druckproblemen",
              "Optimierung für verschiedene Druckverfahren"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "web",
    number: "03",
    title: "Webentwicklung & Digitale Präsenz",
    subtitle: "Moderne Webauftritte",
    description: "Maßgeschneiderte Webentwicklung für eine starke digitale Präsenz – von der Konzeption bis zur Umsetzung.",
    icon: "web",
    subcategories: [
      {
        id: "website-pakete",
        title: "Website-Pakete",
        description: "Professionelle Websites für jedes Budget – responsiv, modern und suchmaschinenoptimiert.",
        tiers: [
          {
            name: "Starter",
            price: "790 €",
            items: [
              "1-seitige Premium-Website",
              "Modernes & responsives Design",
              "CMS-Integration (WordPress)",
              "Kontaktformular",
              "Mobile Optimierung",
              "SSL-Zertifikat & Hosting (1 Jahr)"
            ]
          },
          {
            name: "Professional",
            price: "1.990 €",
            items: [
              "5-seitige Business-Website",
              "Individuelles Webdesign",
              "CMS-Integration mit Redaktionssystem",
              "SEO-Grundoptimierung",
              "Blog-Integration",
              "Cookie-Consent-Lösung",
              "Google Analytics Integration",
              "Social Media Verknüpfung"
            ]
          },
          {
            name: "Premium",
            price: "3.990 €",
            items: [
              "Unlimited-Seiten Premium-Website",
              "Komplett individuelles Design & UX",
              "Headless CMS oder maßgeschneiderte Lösung",
              "Umfassende SEO-Strategie & Optimierung",
              "E-Commerce-Funktionalität (Shop-Integration)",
              "Multi-Sprachen-Fähigkeit",
              "Performance-Optimierung & PageSpeed-Score >90",
              "Individuelle Funktionen nach Bedarf",
              "Priority-Support & Wartung (6 Monate)"
            ]
          }
        ]
      },
      {
        id: "website-addons",
        title: "Website-Add-ons",
        description: "Erweiterungen und Zusatzfunktionen zur Aufwertung Ihrer bestehenden Website.",
        tiers: [
          {
            name: "Einzelleistung",
            price: "ab 290 €",
            items: [
              "Individuelle Funktionsentwicklung",
              "API-Integrationen (Schnittstellen)",
              "Datenbankanbindung",
              "Erweiterte Formularlösungen",
              "SEO-Audit & Optimierung",
              "Performance-Tuning",
              "Barrierefreiheit (WCAG-Anpassungen)",
              "Newsletter-Anbindung"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "marketing",
    number: "04",
    title: "Marketing & Werbung",
    subtitle: "Zielgerichtete Marketingstrategien",
    description: "Effektive Marketinglösungen für mehr Sichtbarkeit, Reichweite und Kundenbindung – digital wie traditionell.",
    icon: "marketing",
    subcategories: [
      {
        id: "social-media",
        title: "Social Media Pakete",
        description: "Strategische Social-Media-Betreuung für mehr Reichweite und Engagement auf allen relevanten Kanälen.",
        tiers: [
          {
            name: "Starter",
            price: "390 €",
            items: [
              "Profil-Optimierung (3 Kanäle)",
              "Content-Plan (8 Beiträge/Monat)",
              "Grafik-Design für Beiträge",
              "Hashtag-Strategie",
              "Monatliches Reporting"
            ]
          },
          {
            name: "Professional",
            price: "790 €",
            items: [
              "Kanal-Audit & Strategieentwicklung",
              "Content-Plan (16 Beiträge/Monat)",
              "Professionelles Grafik-Design & Copywriting",
              "Storytelling & Kampagnen-Konzepte",
              "Community-Management",
              "Wettbewerbsanalyse",
              "Detailliertes Monats-Reporting"
            ]
          },
          {
            name: "Premium",
            price: "1.490 €",
            items: [
              "Vollständige Social-Media-Betreuung (4+ Kanäle)",
              "Content-Plan (30+ Beiträge/Monat)",
              "Hochwertige Content-Produktion (Video, Foto, Grafik)",
              "Influencer-Koordination",
              "Social Advertising (Anzeigenmanagement)",
              "Community-Management & Engagements",
              "Umfassende Analyse & Optimierung",
              "Wöchentliches Reporting & Strategieanpassung"
            ]
          }
        ]
      },
      {
        id: "seo",
        title: "SEO & Suchmaschinenoptimierung",
        description: "Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und gewinnen Sie mehr organischen Traffic.",
        tiers: [
          {
            name: "Starter",
            price: "390 €",
            items: [
              "SEO-Audit & Ist-Analyse",
              "Keyword-Recherche (bis 20 Suchbegriffe)",
              "OnPage-Optimierung (bis 5 Seiten)",
              "Meta-Tag-Optimierung",
              "Google Search Console Einrichtung"
            ]
          },
          {
            name: "Professional",
            price: "890 €",
            items: [
              "Umfassendes SEO-Audit & Wettbewerbsanalyse",
              "Keyword-Strategie (bis 50 Suchbegriffe)",
              "OnPage-Optimierung (bis 20 Seiten)",
              "Technisches SEO (Crawling, Indexierung)",
              "Content-Optimierung & -Empfehlungen",
              "Local SEO Optimierung",
              "Monatliches Ranking-Reporting"
            ]
          },
          {
            name: "Premium",
            price: "1.690 €",
            items: [
              "Vollständige SEO-Betreuung & Strategie",
              "Umfangreiche Keyword-Strategie (100+ Suchbegriffe)",
              "OnPage & OffPage Optimierung (alle Seiten)",
              "Content-Strategie & Linkbuilding",
              "Technisches SEO & Core Web Vitals",
              "E-Commerce SEO (bei Shop-Systemen)",
              "Conversion-Optimierung",
              "Wöchentliches Reporting & Forecasts",
              "Laufende Anpassung & Optimierung"
            ]
          }
        ]
      },
      {
        id: "advertising",
        title: "Werbeanzeigen & Advertising",
        description: "Zielgruppengenaue Werbekampagnen für maximale Rendite auf Google, Social Media und weiteren Plattformen.",
        tiers: [
          {
            name: "Starter",
            price: "490 €",
            items: [
              "Kampagnen-Strategie & Konzeption",
              "Google Ads Einrichtung (1 Kampagne)",
              "Anzeigentexte & Creatives",
              "Keyword-Recherche",
              "Conversion-Tracking Einrichtung"
            ]
          },
          {
            name: "Professional",
            price: "990 €",
            items: [
              "Multi-Channel-Kampagnenstrategie",
              "Google Ads (Search, Display, Shopping)",
              "Social Media Advertising (Meta, LinkedIn)",
              "A/B-Testing von Anzeigen & Zielgruppen",
              "Remarketing-Strategie",
              "Budget-Überwachung & Optimierung",
              "Wöchentliches Performance-Reporting"
            ]
          },
          {
            name: "Premium",
            price: "1.990 €",
            items: [
              "Vollständiges Advertising-Management",
              "Google Ads Premium (Search, Display, Shopping, YouTube)",
              "Social Advertising (Meta, LinkedIn, TikTok, Pinterest)",
              "Programmatic Advertising",
              "Conversion Rate Optimization (CRO)",
              "Detaillierte Zielgruppensegmentierung & Lookalikes",
              "Tägliches Bid-Management & Optimierung",
              "Umfassendes Reporting mit Handlungsempfehlungen"
            ]
          }
        ]
      },
      {
        id: "content-marketing",
        title: "Content Marketing",
        description: "Hochwertiger Content, der Ihre Zielgruppe begeistert, bindet und zu Kunden macht.",
        tiers: [
          {
            name: "Starter",
            price: "490 €",
            items: [
              "Content-Strategie & Redaktionsplan",
              "4 Blogartikel oder Content-Stücke pro Monat",
              "Keyword-optimierte Texte",
              "Content-Format-Vielfalt",
              "Monatliche Performance-Auswertung"
            ]
          },
          {
            name: "Professional",
            price: "990 €",
            items: [
              "Umfassende Content-Strategie",
              "8 Content-Stücke pro Monat (Blog, Whitepaper, Case Studies)",
              "Professionelles Lektorat & Korrektorat",
              "SEO-optimierte Content-Produktion",
              "Content-Distribution & Promotion",
              "Lead-Magnet-Entwicklung",
              "Detaillierte Content-Analyse & Optimierung"
            ]
          },
          {
            name: "Premium",
            price: "1.990 €",
            items: [
              "Vollständige Content-Marketing-Betreuung",
              "16+ Content-Stücke pro Monat (alle Formate)",
              "Content-Funnel-Strategie (TOFU, MOFU, BOFU)",
              "Video- & Multimedia-Content-Produktion",
              "E-Book- & Whitepaper-Erstellung",
              "Gastbeiträge & Kooperationen",
              "Content-Repurposing (Mehrfachverwertung)",
              "Umfassende Analyse & ROI-Messung"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "print",
    number: "05",
    title: "Printprodukte & Druckerzeugnisse",
    subtitle: "Hochwertige Druckprodukte",
    description: "Exzellente Printprodukte für einen bleibenden Eindruck – von der Geschäftsausstattung bis zum Verpackungsdesign.",
    icon: "print",
    subcategories: [
      {
        id: "geschaftsausstattung",
        title: "Geschäftsausstattung",
        description: "Professionelle Geschäftsausstattung, die Ihr Unternehmen repräsentiert und Wiedererkennung schafft.",
        tiers: [
          {
            name: "Starter",
            price: "290 €",
            items: [
              "Briefpapier (DIN A4)",
              "Visitenkarten (einfach)",
              "Musterbriefbogen",
              "Digitale Vorlagen (PDF)"
            ]
          },
          {
            name: "Professional",
            price: "590 €",
            items: [
              "Briefpapier & Fortsetzungsblätter",
              "Visitenkarten (doppelseitig, Sonderformat)",
              "Musterbriefbogen & Faltblätter",
              "Ordnerrücken & Register",
              "Notizblöcke",
              "Digitale & druckbare Vorlagen"
            ]
          },
          {
            name: "Premium",
            price: "1.190 €",
            items: [
              "Komplette Geschäftsausstattung inkl. Sonderformate",
              "Visitenkarten (Premium-Veredelung, Prägefolie)",
              "Briefpapier, Fortsetzungsblätter & Kuverts",
              "Ordner, Register & Ablagesysteme",
              "Notizblöcke, Kugelschreiber & Werbeartikel",
              "Präsentationsmappen",
              "Hochwertige Veredelungen (Folienprägung, UV-Lack)",
              "Digitale Brand-Guidelines für Print"
            ]
          }
        ]
      },
      {
        id: "marketingmaterialien",
        title: "Marketingmaterialien",
        description: "Wirkungsvolle Marketingmaterialien, die Ihre Botschaft professionell transportieren.",
        tiers: [
          {
            name: "Starter",
            price: "390 €",
            items: [
              "Flyer (DIN Lang oder DIN A6)",
              "Plakat (DIN A3)",
              "Infoblatt (DIN A4)",
              "Druckdatenerstellung"
            ]
          },
          {
            name: "Professional",
            price: "790 €",
            items: [
              "Broschüre (bis 8 Seiten)",
              "Flyer & Plakate (mehrere Formate)",
              "Imagebroschüre (bis 12 Seiten)",
              "Produktkatalog (bis 16 Seiten)",
              "Mailing-Vorlagen",
              "Druckdatenoptimierung"
            ]
          },
          {
            name: "Premium",
            price: "1.590 €",
            items: [
              "Umfangreicher Produktkatalog oder Imagebroschüre (beliebig viele Seiten)",
              "Mehrsprachige Marketingmaterialien",
              "Hochwertige Prospekte mit Veredelungen",
              "Kampagnen-Kits (Plakat, Flyer, Anzeige, Display)",
              "Premium-Drucksachen mit Sonderfarben",
              "Messe- und Präsentationsmaterialien",
              "Komplette Druckbegleitung & Qualitätskontrolle"
            ]
          }
        ]
      },
      {
        id: "event-materialien",
        title: "Event- & Messematerialien",
        description: "Auffällige Event- und Messematerialien, die Ihr Unternehmen professionell präsentieren.",
        tiers: [
          {
            name: "Starter",
            price: "490 €",
            items: [
              "Roll-up-Banner-Design",
              "Einladungskarten (Digitaldruck)",
              "Namensschilder",
              "Programmflyer"
            ]
          },
          {
            name: "Professional",
            price: "990 €",
            items: [
              "Messestand-Design (Kleinstand)",
              "Roll-up-Banner & Fahnen (mehrere)",
              "Einladungs- & Dankeskarten",
              "Giveaways & Werbeartikel-Design",
              "Programmhefte (bis 16 Seiten)",
              "Ausstellerbroschüre"
            ]
          },
          {
            name: "Premium",
            price: "1.990 €",
            items: [
              "Komplettes Messe-Event-Kit",
              "Messestand-Konzeption & Design (Großstand)",
              "Großformatdrucke & Branding-Elemente",
              "Exklusive Einladungen & VIP-Karten",
              "Umfangreiches Giveaway-Konzept",
              "Digitale & gedruckte Programmübersichten",
              "After-Event-Materialien & Follow-up-Vorlagen",
              "On-Site-Betreuung (optional)"
            ]
          }
        ]
      },
      {
        id: "verpackungsdesign",
        title: "Verpackungsdesign",
        description: "Verpackungsdesign, das im Regal heraussticht und Ihre Marke perfekt präsentiert.",
        tiers: [
          {
            name: "Starter",
            price: "490 €",
            items: [
              "Verpackungskonzept & Ideenentwicklung",
              "Label-Design (1 Produktvariante)",
              "Format- & Materialberatung",
              "Druckdaten-Erstellung"
            ]
          },
          {
            name: "Professional",
            price: "1.190 €",
            items: [
              "Verpackungsdesign (1-3 Produktvarianten)",
              "3D-Visualisierung der Verpackung",
              "Label- & Faltschachtel-Design",
              "Material- & Veredelungsauswahl",
              "Druckdaten-Aufbereitung",
              "Nachhaltigkeitsberatung"
            ]
          },
          {
            name: "Premium",
            price: "2.490 €",
            items: [
              "Komplettes Verpackungsdesign (beliebig viele Varianten)",
              "Markenübergreifendes Verpackungssystem",
              "Realistische 3D-Visualisierungen & Animationen",
              "Prototypen-Entwicklung & Materialtests",
              "Nachhaltigkeitsoptimierung & Zertifizierungsberatung",
              "Regalwirkungs-Analyse",
              "Produktionsbegleitung & Qualitätssicherung",
              "Internationale Markenanpassungen"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "addons",
    number: "06",
    title: "Zusatzleistungen & High-Margin-Add-Ons",
    subtitle: "Wertvolle Ergänzungen",
    description: "Exklusive Zusatzleistungen, die Ihr Projekt auf das nächste Level heben – individuell, flexibel und gewinnbringend.",
    icon: "addons",
    subcategories: [
      {
        id: "zusatzleistungen",
        title: "Zusatzleistungen",
        description: "Flexible Add-ons und Sonderleistungen zur individuellen Erweiterung Ihres Projekts.",
        tiers: [
          {
            name: "Individuelle Leistung",
            price: "nach Vereinbarung",
            items: [
              "Fotoshooting & Bildproduktion",
              "Videoproduktion & Animation",
              "Texterstellung & Copywriting",
              "Urheberrechtliche Beratung",
              "Markenrecherche & -anmeldung",
              "Schulungen & Workshops",
              "Notfall-Support & Express-Service",
              "Wartungsverträge & Betreuung"
            ]
          }
        ]
      }
    ]
  }
];
