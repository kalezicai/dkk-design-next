import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der DKK design&marketing Website.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://dkk-design.de/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[800px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-heading tracking-tight leading-tight mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-sm text-(--color-ink-80) space-y-4">
          <p><strong>Stand: Juli 2026</strong></p>
          <h2 className="text-xl font-display font-bold text-heading mt-6">1. Verantwortlicher</h2>
          <p>DKK design&marketing<br />E-Mail: info.dkk@gmail.com</p>
          <h2 className="text-xl font-display font-bold text-heading mt-6">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>Beim Besuch dieser Website werden keine personenbezogenen Daten automatisch erhoben. Die Website wird statisch ausgeliefert und setzt keine Cookies oder Tracking-Dienste ein.</p>
          <h2 className="text-xl font-display font-bold text-heading mt-6">3. Kontaktformular</h2>
          <p>Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre angegebenen Daten (Name, E-Mail, Nachricht) zwecks Bearbeitung der Anfrage gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht weitergegeben.</p>
          <h2 className="text-xl font-display font-bold text-heading mt-6">4. Rechte der betroffenen Person</h2>
          <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer gespeicherten Daten. Kontaktieren Sie uns hierzu per E-Mail.</p>
        </div>
      </div>
    </div>
  );
}
