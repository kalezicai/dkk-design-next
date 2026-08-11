"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { path: "/", label: "Startseite" },
  { path: "/ueber-uns", label: "Über Uns" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/leistungen", label: "Leistungen" },
  { path: "/faq", label: "FAQ" },
  { path: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("dkk-theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  const isHome = pathname === "/";
  const showBg = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 h-16 flex items-center transition-colors duration-300",
        showBg ? "bg-(--color-surface-95) border-b border-line backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center group focus:outline-none" aria-label="DKK design&marketing — Zur Startseite">
          <img
            src="/logo-v3.png"
            alt="DKK design&marketing"
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            width={2048}
            height={512}
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8" aria-label="Hauptnavigation">
          <ul className="flex items-center space-x-6 text-sm font-medium tracking-wide">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path} className="group/li">
                  <Link
                    href={link.path}
                    className={cn(
                      "relative py-2 text-xs uppercase tracking-wider transition-colors duration-200 hover:text-ink",
                      isActive ? "text-gold font-semibold" : "text-muted"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover/li:w-full"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href="mailto:info.dkk@gmail.com" className="hidden lg:block text-[10px] font-mono text-faint hover:text-gold transition-colors">info.dkk@gmail.com</a>
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Zum hellen Design wechseln" : "Zum dunklen Design wechseln"}
            className="p-2 border border-line-strong text-muted hover:text-gold hover:border-gold transition-colors duration-200 focus:outline-none"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <Link href="/kontakt" className="text-xs font-semibold uppercase tracking-wider px-4 py-2 bg-transparent text-ink border border-gold hover:bg-gold hover:text-on-gold transition-all duration-300 focus:outline-none">
            Projekt starten
          </Link>
        </nav>

        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Zum hellen Design wechseln" : "Zum dunklen Design wechseln"}
            className="p-2 text-muted hover:text-gold transition-colors focus:outline-none"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-ink hover:text-gold p-1 focus:outline-none" onClick={() => setMobileOpen(p => !p)} aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-(--color-surface-98) pt-20 px-6 flex flex-col space-y-6 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <ul className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path} className="border-b border-line pb-2">
                    <Link href={link.path} className={cn("block py-1 text-sm uppercase tracking-widest", isActive ? "text-gold font-bold" : "text-muted")}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="pt-4 flex flex-col space-y-4">
              <Link href="/kontakt" className="w-full text-center text-xs uppercase tracking-widest bg-gold text-on-gold font-bold py-3 hover:bg-gold-dim transition-colors">Kostenlose Prüfung</Link>
              <div className="text-xs text-faint text-center">Direkter Kontakt: <a href="mailto:info.dkk@gmail.com" className="text-ink font-mono underline">info.dkk@gmail.com</a></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
