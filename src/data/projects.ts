export interface Project {
  id: string;
  title: string;
  category: "print" | "vehicle" | "web" | "pre-press" | "branding";
  categoryLabel: string;
  image: string;
  tagline: string;
  technicalDetails: string;
  clientResult: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Seaside Gastro-Identity System",
    category: "print",
    categoryLabel: "Identity & Print Setup",
    image: "/images/project-branding.jpg",
    tagline: "Logo- und Papeterie-Paket für eine Fischgaststätte.",
    technicalDetails: "Aufbereitet für 350g/qm Karton, CMYK-Farbraum, 3 mm Beschnitt, separierte Goldfolien-Vektorebene.",
    clientResult: "Keine Rückfragen der Druckerei. Direkt lieferbar für den Offsetdruck."
  },
  {
    id: "proj-2",
    title: "Munich Logistics Sprinter Livery",
    category: "vehicle",
    categoryLabel: "Fahrzeugfolierung",
    image: "/images/project-vehicle.jpg",
    tagline: "Ganzfahrzeug-Layout optimiert für komplexe Panelübergänge.",
    technicalDetails: "1:30-Maßstab Mercedes Sprinter 2024-Vektorblueprint. 150 mm Überlappungszugabe.",
    clientResult: "Keine Schriftzüge durch Türgriffe zerschnitten. Nahtlose Ausrichtung."
  },
  {
    id: "proj-3",
    title: "Atelier Custom Woodwork Web Showcase",
    category: "web",
    categoryLabel: "Responsive Webseite",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    tagline: "Leichtgewichtige Präsentation für einen Schreinermeister.",
    technicalDetails: "Handgeschriebener React-Code, optimierte WebP-Bilder, Kontaktformular.",
    clientResult: "98 % Lighthouse-Score. Voll responsive auf allen Geräten."
  },
  {
    id: "proj-4",
    title: "Brochure Pre-Press & Image Correction",
    category: "pre-press",
    categoryLabel: "Druckvorstufe",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    tagline: "96-seitiges Kulturhandbuch – Korrekturlauf.",
    technicalDetails: "42 RGB-Bilder in CMYK konvertiert. Transparenzen reduziert.",
    clientResult: "Kunde sparte über 1.200 € Makulaturkosten."
  },
  {
    id: "proj-5",
    title: "Tactile Varnish Winery Label Set",
    category: "print",
    categoryLabel: "Identity & Print Setup",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    tagline: "Visuelle Auffrischung für Premium-Jahrgangsweine.",
    technicalDetails: "Spot-UV-Masken, TAC unter 280 % für schnelle Etikettenlinien.",
    clientResult: "Tiefschwarzer Hintergrund ohne Farbeinbluten."
  },
  {
    id: "proj-6",
    title: "Ulcinj Marina Wayfinding Signs",
    category: "branding",
    categoryLabel: "Beschilderung & physische Identität",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tagline: "Beschilderungsvorlagen für eloxierte Aluminiumtafeln.",
    technicalDetails: "UV-Druck auf gebürsteten Metallplatten. Ankerlöcher in Vektordatei.",
    clientResult: "Legenden aus 25 Metern lesbar."
  }
];
