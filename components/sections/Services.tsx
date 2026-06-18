"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Smartphone, Palette, TrendingUp, PenTool, Video, Brain, Cloud,
  BookOpen, FileText, Users, BarChart3, ArrowRight,
} from "lucide-react";
import { itServices, financialServices } from "@/lib/data/services";
import SectionReveal from "@/components/shared/SectionReveal";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Smartphone, Palette, TrendingUp, PenTool, Video, Brain, Cloud,
  BookOpen, FileText, Users, BarChart3,
};

function ServiceCard({ service, index }: { service: typeof itServices[0]; index: number }) {
  const Icon = iconMap[service.icon] ?? Monitor;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card rounded-2xl p-6 card-hover cursor-pointer"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      <h3
        className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors"
        style={{ fontFamily: "var(--font-syne, sans-serif)" }}
      >
        {service.title}
      </h3>

      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
        {service.description}
      </p>

      <ul className="flex flex-wrap gap-1.5 mb-5">
        {service.features.map((f) => (
          <li
            key={f}
            className="text-xs px-2 py-0.5 rounded-md bg-white/4 border border-white/6 text-slate-500"
          >
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
        Learn More <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [tab, setTab] = useState<"it" | "financial">("it");

  return (
    <section id="services" className="section-pad relative">
      <div className="section-container">
        {/* Header */}
        <SectionReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block">What We Do</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Services Built for{" "}
            <span className="gradient-text">Ambitious Companies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From software engineering to financial strategy — we cover every dimension of
            building and running a high-growth business.
          </p>
        </SectionReveal>

        {/* Tab switcher */}
        <SectionReveal delay={0.1} className="flex justify-center mb-12">
          <div className="glass-card inline-flex rounded-xl p-1 gap-1">
            {([
              { key: "it", label: "IT Services" },
              { key: "financial", label: "Financial Services" },
            ] as const).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                  tab === t.key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <div
            key={tab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {(tab === "it" ? itServices : financialServices).map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
