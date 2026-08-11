"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, type Project } from "@/data/projects";

const FILTERS = [
  { id: "all", label: "Alle" },
  { id: "print", label: "Print" },
  { id: "vehicle", label: "Fahrzeugfolien" },
  { id: "web", label: "Web" },
  { id: "pre-press", label: "Druckvorstufe" },
  { id: "branding", label: "Beschilderung" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-surface border border-line overflow-hidden hover:border-gold hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="p-5 pb-3">
        <p className="text-2xl font-display font-bold text-gold leading-tight">{project.result}</p>
      </div>
      <div className="relative aspect-4/3 bg-surface-2 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-[rgba(11,14,20,0.9)] text-white font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase border border-[rgba(255,255,255,0.1)]">{project.categoryLabel}</div>
        <div className="absolute bottom-2 right-2 bg-[rgba(11,14,20,0.9)] text-gold font-mono text-[9px] px-2 py-0.5 border border-gold-dim">DRUCKFERTIG KONFIGURIERT</div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-display font-bold text-heading group-hover:text-gold-dim transition-colors">{project.title}</h3>
        <p className="text-xs text-muted mt-2 leading-relaxed">{project.tagline}</p>
        <div className="mt-auto pt-4">
          <div className="bg-surface-2 border border-line p-3">
            <span className="text-[10px] font-mono text-muted uppercase font-bold tracking-wider">SPECS: </span>
            <span className="text-[10px] font-mono text-(--color-ink-80) leading-tight">{project.technicalDetails}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioGrid() {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Portfolio filtern">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={active === f.id}
            onClick={() => setActive(f.id)}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-200 ${
              active === f.id
                ? "bg-navy text-gold border-navy"
                : "bg-surface text-muted border-line hover:border-gold hover:text-heading"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
