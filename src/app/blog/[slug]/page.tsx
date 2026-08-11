import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogPosts";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://dkk-design.de/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date, modifiedTime: post.modifiedDate, authors: [post.author] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const slug = (await params).slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="min-h-screen bg-paper text-ink">
      <article className="max-w-[800px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Person", name: post.author },
          datePublished: post.date,
          dateModified: post.modifiedDate || post.date,
          publisher: { "@type": "Organization", name: "DKK design&marketing" },
          mainEntityOfPage: { "@type": "WebPage", "@id": `https://dkk-design.de/blog/${post.slug}` },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dkk-design.de/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://dkk-design.de/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://dkk-design.de/blog/${post.slug}` },
          ],
        })}} />

        <Link href="/blog" className="inline-flex items-center space-x-2 text-xs font-bold text-navy hover:text-gold-dim uppercase tracking-wider mb-8 group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span><span>Alle Artikel</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-4">
          <span className="bg-slate-100 px-2 py-0.5">{post.category}</span>
          <span>{post.readingTime}</span>
          <span>{post.author}</span>
          <span>{post.date} {post.modifiedDate && `(aktualisiert: ${post.modifiedDate})`}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy tracking-tight leading-tight mb-4">{post.title}</h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 border-l-2 border-gold pl-4 italic">{post.excerpt}</p>

        <div className="prose prose-sm md:prose-base max-w-none text-slate-700 leading-relaxed space-y-4">
          {paragraphs.map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={idx} className="text-xl font-display font-bold text-navy mt-8 mb-3">{paragraph.replace("## ", "")}</h2>;
            }
            return <p key={idx} className="text-sm md:text-base">{paragraph}</p>;
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
          {post.tags.map((tag) => <span key={tag} className="text-[10px] font-mono text-slate-500 bg-white border border-slate-200 px-2 py-1">#{tag}</span>)}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-xs font-bold text-navy hover:text-gold-dim uppercase tracking-wider group">
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span><span>Zurück zur Übersicht</span>
          </Link>
        </div>

        <div className="mt-10 bg-ink text-white p-6 md:p-8">
          <p className="text-xs font-mono text-gold uppercase tracking-widest mb-2">[ HILFE AUS DER WERKSTATT ]</p>
          <h2 className="text-xl md:text-2xl font-display font-bold mb-2">Ihre Datei soll nicht abgelehnt werden?</h2>
          <p className="text-sm text-slate-300 mb-5">Kostenloser Preflight-Check: Ich prüfe Ihre Druckdaten in 30 Sekunden &ndash; kostenlos, unverbindlich, ohne Registrierung. Antwort innerhalb von 12 Stunden.</p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-200 group">
            <span>Kostenlose Prüfung anfordern</span><span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
