import Link from "next/link";
import { Mail } from "lucide-react";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="24" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const NAV_LINKS = [
  { path: "/", label: "Startseite" },
  { path: "/ueber-uns", label: "Über Uns" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/leistungen", label: "Leistungen" },
  { path: "/faq", label: "FAQ" },
  { path: "/blog", label: "Blog" },
  { path: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0E14] text-white pt-16 pb-12 border-t border-white/10 mt-auto">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 space-y-4">
            <span className="block">
              <img
                src="/logo-v3.png"
                alt="DKK design&marketing"
                className="h-8 w-auto object-contain"
                width={2048}
                height={512}
              />
            </span>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">Print-shop-gerechte Markenidentität, Webentwicklung und Druckvorstufe aus einer Hand. 12 Jahre Druckvorstufe &ndash; 0 Druckerei-Rückweisungen.</p>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono text-[#C9B27A] uppercase tracking-wider font-bold">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-slate-300 hover:text-white transition-colors">&rarr; {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono text-[#C9B27A] uppercase tracking-wider font-bold">Handwerk & Werte</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Präzision aus der Druckvorstufe – verwurzelt in der Balkan-Print-Shop-Tradition Ulcinjs.</p>
          </div>
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono text-[#C9B27A] uppercase tracking-wider font-bold">Schnelle Kanäle</h4>
            <div className="space-y-2">
              <a href="mailto:info.dkk@gmail.com" className="flex items-center space-x-1.5 text-xs font-mono font-bold text-sky hover:text-white transition-colors">
                <Mail size={14} /><span>info.dkk@gmail.com</span>
              </a>
              <div className="flex space-x-3 text-slate-400 pt-1">
                <a href="https://www.instagram.com/dkk.design.marketing" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram"><InstagramIcon size={18} /></a>
                <a href="https://www.behance.net/dkk-design-marketing" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors font-mono font-bold text-xs flex items-center">Behance</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-2 w-full mb-6 overflow-hidden">
          <div className="flex-1 bg-sky" /><div className="flex-1 bg-fuchsia-600" /><div className="flex-1 bg-amber-400" /><div className="flex-1 bg-slate-900" />
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} DKK design&marketing. Alle Rechte vorbehalten.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <span className="text-slate-700">|</span>
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full border border-slate-500 flex items-center justify-center text-[7px] font-bold">+</span>
            <span>REGISTRIERMARKIERUNG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
