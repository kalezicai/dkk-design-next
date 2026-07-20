export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modifiedDate: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "druckdaten-richtig-vorbereiten",
    title: "Druckdaten richtig vorbereiten: So vermeiden Sie teure Fehler in der Druckvorstufe",
    excerpt: "Unsaubere Druckdaten kosten Zeit und Geld. Erfahren Sie, worauf es bei der Druckvorstufe wirklich ankommt – von Beschnittzugabe bis Farbprofil – und wie Sie bis zu 1.200 € Makulaturkosten pro Auftrag vermeiden.",
    content: `Jeder Grafiker kennt das Szenario: Die Druckdatei ist fertig, der Kunde gibt grünes Licht, und dann kommt die Rückmeldung der Druckerei: „Datei nicht druckbar – Bitte überarbeiten." Was folgt, sind kostspielige Verzögerungen, zusätzliche Korrekturläufe und im schlimmsten Fall Tausende Euro Makulatur.

Was ist die häufigste Ursache für Druckfehler? Nach über 1.500 abgeschlossenen Druckprojekten kann ich sagen: Es sind fast immer vermeidbare technische Fehler in der Druckvorstufe. Fehlende Beschnittzugabe, falsche Farbprofile und nicht eingebettete Schriften machen rund 70 % aller Druckereirückweisungen aus.

## Warum ist die Beschnittzugabe so kritisch?

Fehlende oder falsche Beschnittzugabe (engl. Bleed) ist der häufigste Grund für abgelehnte Druckdateien. Standard sind 3 mm pro Seite – das bedeutet, dass Hintergrundelemente, Farbflächen und Bilder mindestens 3 mm über das spätere Endformat hinausragen müssen. Ein Kunde sparte allein durch korrekte Beschnittzugabe 1.200 € Makulaturkosten bei einer 96-seitigen Broschüre.

## Welches Farbprofil ist für den Druck richtig?

Ein weiterer Dauerbrenner: RGB-Dateien im Druck. Monitore arbeiten mit RGB, Druckmaschinen mit CMYK. Wird eine RGB-Datei direkt in den Druck gegeben, verschieben sich die Farben massiv. Konvertieren Sie alle Farben vorab in das richtige CMYK-Profil (ISO Coated v2 oder FOGRA39). Reine Schwarzflächen sollten aus 100 % K bestehen.

## Wie vermeide ich Schriftarten-Probleme im Druck?

Die sichere Methode: Wandeln Sie alle Texte in Pfade um („Schriften erstellen" in Adobe Illustrator oder InDesign). Bewahren Sie immer eine separate, bearbeitbare Version auf.

## Was ist bei Transparenzen und Überdrucken zu beachten?

Reduzieren Sie Transparenzen vor der Druckausgabe und prüfen Sie die „Überdrucken"-Vorschau. Ein häufiger Fehler: Weißer Text, der auf „Überdrucken" gestellt ist und im Druck verschwindet.

## Fazit: Lohnt sich ein professioneller Preflight-Check?

Studien zeigen, dass unsaubere Druckdaten durchschnittlich 8–12 % der Gesamtauflagekosten verursachen. Ein professioneller Preflight-Check kostet dagegen nur einen Bruchteil. Bei DKK design&marketing prüfen wir Ihre Dateien innerhalb von 48 Stunden.`,
    date: "2026-03-15",
    modifiedDate: "2026-07-20",
    author: "DKK design&marketing",
    category: "Druckvorstufe",
    tags: ["Druckvorbereitung", "Preflight", "CMYK", "PDF/X-4", "Beschnittzugabe"],
    readingTime: "7 Min."
  },
  {
    slug: "fahrzeugfolierung-vorlage-ergebnis",
    title: "Fahrzeugfolierung: Warum die Vorlage über das Ergebnis entscheidet – Leitfaden für perfekte Vehicle Wraps",
    excerpt: "Eine Fahrzeugfolierung steht und fällt mit der Vorlage. Wir erklären, warum präzise Vektordaten und maßstabsgetreue Blueprints den Unterschied zwischen einer professionellen und einer misslungenen Folierung ausmachen.",
    content: `Sie haben ein neues Firmenfahrzeug und möchten es mit Ihrem Markendesign folieren lassen. Sie beauftragen einen Grafiker, der Ihnen ein schönes Mockup präsentiert. Die Folierung wird gedruckt – und beim Aufbringen stellen Sie fest: Der Schriftzug wird genau von der Türfuge durchtrennt, das Logo liegt versetzt.

Was ist der häufigste Fehler bei Fahrzeugfolierungen? Nach über 500 realisierten Fahrzeugprojekten kann ich sagen: Es ist fast immer die Vorlage. Etwa 60 % aller Nachbesserungen bei Fahrzeugfolierungen sind auf fehlerhafte Vorlagen zurückzuführen.

## Warum reicht ein flaches Mockup nicht?

Die meisten Designagenturen erstellen Fahrzeug-Mockups auf Basis von Seitenansichten. Das Problem: Diese Ansichten zeigen das Fahrzeug zweidimensional und berücksichtigen nicht die realen Panelübergänge.

## Wie funktioniert der 1:30-Blueprint-Ansatz?

Der einzig verlässliche Weg ist die Arbeit mit einem maßstabsgetreuen Blueprint des exakten Fahrzeugmodells. Ich konstruiere jedes Layout auf Basis der originalen Herstellerdaten. Ein Münchner Logistikunternehmen sparte mit diesem Ansatz über 3.000 € Nachdruckkosten bei seiner 10-Fahrzeug-Flotte.

## Warum sind Panel-Überlappungen und Montagezugabe entscheidend?

Eine gute Folierungsvorlage enthält zwingend Überlappungszugaben an den Panelgrenzen – in der Regel 150 mm pro Seite. Der Folierer benötigt Material, um die Folie um die Kante zu ziehen und sauber anzudrücken.

## Fazit: Investition in die Vorlage lohnt sich

Studien zeigen, dass eine hochwertige Vorlage die Montagezeit um bis zu 40 % reduziert und die Haltbarkeit der Folierung um durchschnittlich 2 Jahre verlängert.`,
    date: "2026-04-02",
    modifiedDate: "2026-07-20",
    author: "DKK design&marketing",
    category: "Fahrzeugfolierung",
    tags: ["Fahrzeugfolierung", "Vehicle Wrap", "Blueprint", "Vektordaten", "Foliendesign"],
    readingTime: "8 Min."
  },
  {
    slug: "seo-vs-geo-2026-deutschland",
    title: "SEO vs. GEO 2026: So werden Sie in Deutschland bei Google und KI-Suche gefunden",
    excerpt: "Während klassische Suchmaschinenoptimierung wichtiger bleibt, verändert Generative Engine Optimization (GEO) die Spielregeln für KI-Suchassistenten wie ChatGPT und Perplexity.",
    content: `Die Art und Weise, wie Menschen in Deutschland suchen, verändert sich grundlegend. Während Google lange Zeit der unangefochtene Kanal war, zeichnen sich 2026 zwei parallele Entwicklungen ab: die Verfeinerung der klassischen SEO und das Aufkommen der Generative Engine Optimization (GEO).

Was ist der Unterschied zwischen SEO und GEO? Klassische SEO optimiert Inhalte für die zehn blauen Links. GEO optimiert Inhalte für KI-gestützte Suchassistenten wie Googles AI Overviews, ChatGPT Search und Perplexity.

## Was ist GEO – Generative Engine Optimization?

GEO ist die Optimierung von Inhalten für KI-Suchassistenten. Laut einer SparkToro-Studie verzeichneten KI-referierte Besuche zwischen Januar und Mai 2025 einen Anstieg von 527 %. Googles AI Overviews erreichen über 1,5 Milliarden Nutzer monatlich.

## Bleibt klassische SEO 2026 noch relevant?

Klassische SEO ist 2026 nicht tot. Laut einer Ahrefs-Studie mit 75.000 Marken korrelieren Backlinks nur schwach (0,266) mit KI-Zitaten, während 92 % aller AI Overviews-Zitate aus Top-10-Ergebnissen stammen.

## Was sind die neuen Anforderungen von GEO?

GEO belohnt Autorität und Struktur. Brand Mentions korrelieren 3x stärker mit KI-Zitaten als Backlinks. YouTube-Erwähnungen haben mit 0,737 die stärkste Korrelation.

## Wie wichtig ist der deutsche Markt für GEO?

Deutsche KI-Suchassistenten bevorzugen deutschsprachige, lokal relevante Quellen. Das ist eine hervorragende Nachricht für regionale Unternehmen.

## Fazit für 2026

SEO und GEO ergänzen sich. Content, der jünger als 3 Monate ist, hat eine etwa 3x höhere Wahrscheinlichkeit, in KI-Antworten zitiert zu werden.`,
    date: "2026-05-10",
    modifiedDate: "2026-07-20",
    author: "DKK design&marketing",
    category: "SEO & Marketing",
    tags: ["SEO", "GEO", "Generative Engine Optimization", "KI-Suche", "Deutschland", "AI Overviews"],
    readingTime: "9 Min."
  }
];
