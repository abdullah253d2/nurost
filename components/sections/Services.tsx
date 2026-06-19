"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Smartphone, Palette, TrendingUp, PenTool, Video, Brain, Cloud,
  BookOpen, FileText, Users, BarChart3, Megaphone, Paintbrush, Share2, BarChart2,
  ArrowRight, Code2, DollarSign,
} from "lucide-react";
import { itServices, financialServices } from "@/lib/data/services";
import SectionReveal from "@/components/shared/SectionReveal";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Smartphone, Palette, TrendingUp, PenTool, Video, Brain, Cloud,
  BookOpen, FileText, Users, BarChart3, Megaphone, Paintbrush, Share2, BarChart2,
};

const tabs = [
  { key: "it" as const,        label: "IT Services",        Icon: Code2,      count: itServices.length },
  { key: "financial" as const, label: "Financial Services", Icon: DollarSign, count: financialServices.length },
];

function ServiceCard({ service, index, onLearnMore }: { service: typeof itServices[0]; index: number; onLearnMore: () => void }) {
  const Icon = iconMap[service.icon] ?? Monitor;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.18, ease: "easeOut" } }}
      className="group relative flex flex-col rounded-2xl p-6 cursor-pointer overflow-hidden"
      style={{
        background: "rgba(11, 14, 20, 0.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Ambient radial glow — top-left on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 10% 0%, ${service.color}18 0%, transparent 70%)`,
        }}
      />

      {/* Colored border overlay on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${service.color}45` }}
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom, ${service.color}, ${service.color}30)`,
        }}
      />

      {/* Bottom shimmer line */}
      <div
        className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(to right, transparent, ${service.color}55, transparent)`,
        }}
      />

      {/* Number watermark */}
      <span
        className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none opacity-[0.035] group-hover:opacity-[0.07] transition-opacity duration-300"
        style={{ color: service.color, fontFamily: "var(--font-syne, sans-serif)" }}
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Icon */}
      <div className="relative mb-5 w-fit">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative"
          style={{
            background: `${service.color}14`,
            border: `1px solid ${service.color}28`,
          }}
        >
          {/* Icon blur glow on hover */}
          <div
            className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"
            style={{ background: `${service.color}38` }}
          />
          <Icon size={20} className="relative z-10" style={{ color: service.color }} />
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-[15px] font-bold text-slate-200 mb-2 group-hover:text-white transition-colors duration-200 leading-snug"
        style={{ fontFamily: "var(--font-syne, sans-serif)" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-3 group-hover:text-slate-400 transition-colors duration-200 flex-1">
        {service.description}
      </p>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {service.features.map((f) => (
          <span
            key={f}
            className="text-[11px] px-2 py-0.5 rounded-md transition-colors duration-200"
            style={{
              background: `${service.color}0c`,
              border: `1px solid ${service.color}22`,
              color: "rgb(100, 116, 139)",
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={onLearnMore}
        className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-200 mt-auto cursor-pointer"
      >
        Learn More
        <ArrowRight
          size={12}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </motion.div>
  );
}

export default function Services() {
  const [tab, setTab] = useState<"it" | "financial">("it");
  const services = tab === "it" ? itServices : financialServices;

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section-pad relative overflow-hidden">

      {/* Ambient glow orb — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="section-container relative">

        {/* Header */}
        <SectionReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block">What We Do</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Built for Startups.{" "}
            <span className="gradient-text">Ready for Scale.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every service we offer is backed by engineers with real production experience
            not juniors learning on your budget.
          </p>
        </SectionReveal>

        {/* Tab switcher with spring-animated indicator */}
        <SectionReveal delay={0.1} className="flex justify-center mb-12">
          <div
            className="inline-flex rounded-2xl p-1.5 gap-1"
            style={{
              background: "rgba(11, 14, 20, 0.85)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {tabs.map(({ key, label, Icon, count }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer z-10"
                >
                  {/* Sliding background */}
                  {active && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, #1d4ed8 0%, #2563EB 100%)",
                        boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}

                  <Icon
                    size={14}
                    className={cn(
                      "relative z-10 transition-colors duration-200",
                      active ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                    )}
                  />
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-200",
                      active ? "text-white" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {label}
                  </span>
                  <span
                    className={cn(
                      "relative z-10 text-[11px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center transition-all duration-200",
                      active
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-slate-600"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* Cards grid with tab transition */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className={cn(
              "grid gap-4",
              tab === "it"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            )}
          >
            {services.map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} onLearnMore={scrollToContact} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
