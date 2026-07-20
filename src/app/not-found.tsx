import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink text-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 border border-white/10 bg-white/5 mb-6">
          <span className="text-gold text-4xl">!</span>
        </div>
        <h1 className="text-7xl font-display font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-display font-medium text-white mb-3">Seite nicht gefunden</h2>
        <p className="text-sm text-slate-400 mb-8">Die angeforderte Seite existiert nicht.</p>
        <Link href="/" className="inline-flex items-center space-x-2 px-6 py-4 bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition-all duration-200">
          <span>Zurück zur Startseite</span>
        </Link>
      </div>
    </div>
  );
}
