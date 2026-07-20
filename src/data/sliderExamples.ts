export interface SliderExample {
  title: string;
  description: string;
  beforeTitle: string;
  beforeDetails: string[];
  afterTitle: string;
  afterDetails: string[];
}

export const SLIDER_EXAMPLES: SliderExample[] = [
  {
    title: "Vector-Logo – Druckvorstufen-Check",
    description: "Aus Pixel-Rohlingen werden produktionsreife Maschinendateien mit echten Schmuckfarbkanälen.",
    beforeTitle: "Rohdatei des Kunden (abgelehnt)",
    beforeDetails: [
      "72 DPI RGB-Pixel-PNG",
      "Kein Beschnitt (0 mm)",
      "Schriften nicht in Pfade umgewandelt",
      "Farben verschieben sich beim Druck"
    ],
    afterTitle: "Aufbereitete Vektordatei (druckgarantiert)",
    afterDetails: [
      "Unendlich auflösendes Vektor-PDF/X-4",
      "3 mm Beschnittzugabe",
      "Alle Texte in Pfade umgewandelt",
      "Reine CMYK- und Pantone-Schmuckgold-Separationen"
    ]
  },
  {
    title: "Fahrzeugfolierungs-Layout",
    description: "Markenexakt auf reale Blechschnitte und Türgriffe ausgerichtet.",
    beforeTitle: "Entwurf auf flacher Fläche",
    beforeDetails: [
      "Generische Seitenansicht",
      "Text über Türscharnieren",
      "Keine Panel-Überlappungszugabe",
      "Maßstab geschätzt – verzerrte Folie"
    ],
    afterTitle: "1:30-Produktions-Blueprint",
    afterDetails: [
      "Auf exakten Modelljahr-Blueprint konstruiert",
      "Kritische Texte 50 mm von Türfalzen entfernt",
      "150 mm Überlappungszugabe",
      "100 % maßstabsgetreue Ausgabedatei"
    ]
  },
  {
    title: "Web-Performance & sauberer Code",
    description: "Weg von aufgeblähten Page-Buildern, hin zu handgetipptem Markup.",
    beforeTitle: "Template-Blähung (4,2 s Ladezeit)",
    beforeDetails: [
      "12 MB unkomprimierte Bilder",
      "Schwere Script-Elemente",
      "Dutzende CSS-Plugins",
      "Kaputte Mobile-Layouts"
    ],
    afterTitle: "DKK-Handaufbau (0,3 s Ladezeit)",
    afterDetails: [
      "Optimierte WebP-Bilder",
      "Reines responsives CSS",
      "Null renderblockierende Skripte",
      "Semantisches HTML für SEO"
    ]
  }
];
