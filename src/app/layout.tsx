import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dkk-design.de"),
  title: {
    default: "DKK design&marketing | Print-Shop-Level Designstudio aus Deutschland",
    template: "%s | DKK design&marketing",
  },
  description: "DKK design&marketing — Solo-Designstudio für Druckvorstufe, Branding, Fahrzeugfolierung, Webentwicklung und Beschilderung aus Deutschland. 1.500+ druckfertige Projekte.",
  keywords: ["Designstudio Deutschland", "Druckvorstufe", "Branding", "Fahrzeugfolierung", "Webdesign", "Beschilderung", "Pre-Press"],
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "DKK design&marketing",
    url: "https://dkk-design.de",
    title: "DKK design&marketing | Print-Shop-Level Designstudio aus Deutschland",
    description: "Solo-Designstudio für Druckvorstufe, Branding, Fahrzeugfolierung und Webentwicklung. 1.500+ druckfertige Projekte.",
  },
  twitter: { card: "summary_large_image", title: "DKK design&marketing | Print-Shop-Level Designstudio", description: "Druckvorstufe, Branding, Fahrzeugfolierung, Webentwicklung – aus Deutschland." },
  alternates: {
    canonical: "https://dkk-design.de",
    languages: { de: "https://dkk-design.de", "x-default": "https://dkk-design.de" },
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DKK design&marketing",
  url: "https://dkk-design.de",
  description: "Solo-Designstudio für Druckvorstufe, Branding, Fahrzeugfolierung, Webentwicklung und Beschilderung.",
  contactPoint: { "@type": "ContactPoint", email: "info.dkk@gmail.com", contactType: "customer service" },
  sameAs: ["https://www.behance.net/dkk-design-marketing", "https://www.instagram.com/dkk.design.marketing"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }} />
      </head>
      <body className="bg-[#F7F8FA] text-[#0B0E14] antialiased selection:bg-[#C9A24C] selection:text-[#0B0E14] font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
