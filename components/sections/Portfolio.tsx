"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolioItems, portfolioCategories, type PortfolioCategory } from "@/lib/data/portfolio";
import SectionReveal from "@/components/shared/SectionReveal";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Web: "#2563EB", Mobile: "#7C3AED", Branding: "#EC4899", Finance: "#10B981", AI: "#F59E0B",
};

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const filtered = active === "All"
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-pad relative">
      <div className="section-container">
        <SectionReveal className="text-center mb-12">
          <span className="tag-pill mb-4 inline-block">Our Work</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Projects That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From fintech platforms to AI pipelines — a curated selection of work we&apos;re
            proud to put our name on.
          </p>
        </SectionReveal>

        {/* Filter tabs */}
        <SectionReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                active === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "glass text-slate-400 hover:text-white hover:bg-white/8"
              )}
            >
              {cat}
            </button>
          ))}
        </SectionReveal>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card rounded-2xl overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />

                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${categoryColors[item.category]}20`,
                      color: categoryColors[item.category],
                      border: `1px solid ${categoryColors[item.category]}30`,
                    }}
                  >
                    {item.category}
                  </span>

                  {/* Hover link icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight size={15} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-slate-600 font-medium mb-1">{item.client}</p>
                  <h3
                    className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors"
                    style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-white/4 text-slate-500 border border-white/6"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
