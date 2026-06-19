"use client";

import React from "react";
import { MessageSquare, Pencil, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import SectionReveal from "@/components/shared/SectionReveal";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your business goals, users, and competitive landscape. Every engagement begins with a strategic brief that aligns your team and ours.",
    color: "#2563EB",
    glowColor: "blue" as const,
    highlights: ["Requirements workshop", "Technical audit", "Project roadmap"],
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design & Prototype",
    description:
      "Our designers translate strategy into interfaces. We ship hi-fi Figma prototypes, validate with real users, and iterate until every interaction feels inevitable.",
    color: "#7C3AED",
    glowColor: "purple" as const,
    highlights: ["User flows", "Hi-fi prototypes", "Design system"],
  },
  {
    icon: Code2,
    number: "03",
    title: "Build & Integrate",
    description:
      "Engineers take the handoff and build with production-readiness baked in. Two-week sprints, daily standups, and a staging environment so you see progress in real-time.",
    color: "#06B6D4",
    glowColor: "cyan" as const,
    highlights: ["Agile sprints", "Code reviews", "QA testing"],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy to production, monitor performance, and stay on as your growth partner. Post-launch support, analytics dashboards, and iteration cycles — we're invested in your outcomes.",
    color: "#10B981",
    glowColor: "green" as const,
    highlights: ["Zero-downtime deploy", "Performance monitoring", "Ongoing support"],
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden">

      {/* Ambient multi-color gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="section-container relative">

        {/* Header */}
        <SectionReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block">How We Work</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            A Process Built for{" "}
            <span className="gradient-text">Zero Surprises.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We've refined our delivery process across dozens of production projects. Every
            phase is designed to keep you informed, in control, and confident.
          </p>
        </SectionReveal>

        {/* Spotlight cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-5%" }}
                className="h-[390px]"
              >
                <GlowCard glowColor={step.glowColor} customSize className="h-full w-full">

                  {/* Step number — floats in the 1fr empty area */}
                  <div className="absolute top-4 right-5 select-none pointer-events-none" aria-hidden="true">
                    <span
                      className="text-[90px] font-black leading-none opacity-[0.055]"
                      style={{ color: step.color, fontFamily: "var(--font-syne, sans-serif)" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Card content — sits in the auto row at the bottom */}
                  <div className="flex flex-col gap-3 relative z-10">

                    {/* Icon + step label */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `${step.color}18`,
                          border: `1px solid ${step.color}35`,
                          boxShadow: `0 0 20px ${step.color}20`,
                        }}
                      >
                        <Icon size={19} style={{ color: step.color }} />
                      </div>
                      <span
                        className="text-[10px] font-bold tracking-[0.18em] uppercase"
                        style={{ color: `${step.color}cc` }}
                      >
                        Step {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[17px] font-bold text-white leading-snug"
                      style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] text-slate-500 leading-relaxed line-clamp-3">
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-col gap-2 pt-1">
                      {step.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[11.5px] text-slate-400">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: step.color, boxShadow: `0 0 6px ${step.color}` }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
