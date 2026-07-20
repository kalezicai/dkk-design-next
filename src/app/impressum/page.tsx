import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der DKK design&marketing – Angaben gemäß § 5 DDG.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://dkk-design.de/impressum" },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[800px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy tracking-tight leading-tight mb-8">Impressum</h1>
        <div className="prose prose-sm text-slate-700 space-y-4">
          <p><strong>Angaben gemäß § 5 DDG</strong></p>
          <p>DKK design&marketing<br />E-Mail: info.dkk@gmail.com</p>
          <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />DKK design&marketing</p>
          <p><strong>Haftungsausschluss:</strong> Die Inhalte dieser Website wurden sorgfältig geprüft. Für die Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden.</p>
        </div>
      </div>
    </div>
  );
}
