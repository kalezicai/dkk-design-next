import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Leistungen & Pakete",
  description: "Branding-Pakete, Druckvorstufe, Webentwicklung, Marketing und Printprodukte aus Deutschland. Klare 3-Stufen-Pakete mit Festpreisen – Starter, Professional, Premium.",
  alternates: { canonical: "https://dkk-design.de/leistungen" },
  openGraph: {
    title: "Leistungen & Pakete | DKK design&marketing",
    description: "Branding, Druckvorstufe, Webentwicklung, Marketing und Printprodukte. Klare Pakete mit Festpreisen.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
