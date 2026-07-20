import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Fachartikel zu Druckvorstufe, Fahrzeugfolierung, Webentwicklung und SEO. Praxistipps von DKK design&marketing.",
  alternates: { canonical: "https://dkk-design.de/blog" },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Blog",
          name: "DKK design&marketing Blog",
          description: "Fachartikel zu Druckvorstufe, Fahrzeugfolierung, Webdesign und SEO.",
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dkk-design.de/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://dkk-design.de/blog" },
          ],
        })}} />

        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-dim font-bold block mb-2 font-mono">[ FACHWISSEN AUS DER WERKSTATT ]</span>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-navy tracking-tight leading-tight">Blog & Fachartikel</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-slate-200 overflow-hidden hover:border-gold transition-all flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3">
                  <span className="bg-slate-100 px-2 py-0.5">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-lg font-display font-bold text-navy group-hover:text-gold-dim transition-colors leading-tight mb-3">{post.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">{post.date}</span>
                  <span className="text-[10px] font-bold text-navy group-hover:text-gold-dim uppercase tracking-wider">Weiterlesen &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
