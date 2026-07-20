export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  whatItIs: string;
  deliverables: string[];
  result: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "branding",
    number: "01",
    title: "Branding & Corporate Identity",
    whatItIs: "Ein vollständiger visueller Auftritt, konstruiert für den kommerziellen Nutzen. Ich entwerfe logische Vektor-Logos, wähle haltbare Typografie-Paarungen und lege einheitliche Markenpaletten fest.",
    deliverables: [
      "Vektor-Assets (.AI, .EPS, .PDF, .SVG)",
      "Strenge Farbcodes (CMYK, RGB, HEX, Pantone)",
      "Komprimierte 1-Seiten-Richtlinie für Druckereien",
      "Ausgearbeitete Typografie-Dateien",
      "Negativ-Kontrast-Logo-Varianten"
    ],
    result: "Sie wirken nicht mehr wie ein temporäres Start-up. Jeder Hersteller kann Ihre Dateien sofort nutzen, ohne manuelle Nachzeichnungskosten."
  },
  {
    id: "pre-press",
    number: "02",
    title: "Druckvorstufe & professionelle Druckaufbereitung",
    whatItIs: "Technische Anpassung von Layoutdateien an die Grenzen physischer Druckmaschinen.",
    deliverables: [
      "PDF/X-4-konforme, druckfertige Dateien",
      "Korrigierte CMYK-Farbraumanpassung",
      "Individuelle Stanzform-Vektorlayer",
      "Spotlack- und Goldfolienplatten-Separationen",
      "Beschnittzugaben und Falzlückenberechnung"
    ],
    result: "Sie vermeiden abgelehnte Layouts oder Tausende Exemplare mit Druckfehlern. Null Druckabfall, keine Nachberechnung."
  },
  {
    id: "web",
    number: "03",
    title: "Digitaldesign & responsive Webportfolios",
    whatItIs: "Hochoptimierte Webauftritte ohne WordPress-Builder-Blähung. Ich designe direkt im Code.",
    deliverables: [
      "Responsive HTML5/React-Arbeitsdateien",
      "Vorkonfigurierte Domain-Einrichtung",
      "Optimierte WebP-Bilder",
      "Semantisches Markup für SEO",
      "Funktionierende Kontaktformulare"
    ],
    result: "Ihre mobilen Besucher laden die Seite in unter 0,5 Sekunden."
  },
  {
    id: "vehicle",
    number: "04",
    title: "Fahrzeugbeklebung & hochbelastbare Folierungen",
    whatItIs: "Physische Layout-Architektur für Fahrzeuge jeder Größe.",
    deliverables: [
      "1:30-Maßstab-Blueprint-Vektoren",
      "Schnittpfad-Dateien für Vinyl-Plotter",
      "150 mm Überlappungspanels",
      "Realistische 3D-Mockups",
      "Vollständige Folierungs-Assets"
    ],
    result: "Ihre Fahrzeugflotte wird zur hochlesbaren mobilen Werbefläche. Montage in halber Zeit."
  },
  {
    id: "signage",
    number: "05",
    title: "Beschilderung, Produkt-Mockups & Präsentationen",
    whatItIs: "Entwicklung physischer Wegweisungssysteme und fotorealistischer Produktvorschauen.",
    deliverables: [
      "Architektur-Blueprints für Schildermontage",
      "Hochauflösende PSD-Produkt-Mockups",
      "Vektorvorlagen mit Bohrpunktangaben",
      "Lesbarkeitsprüfung aus physischen Entfernungen"
    ],
    result: "Sie vermeiden teure Baufehler. Ihre Schilder sitzen exakt dort, wo gebohrt wird."
  }
];
