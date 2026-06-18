"use client";

import { MessageSquare, Pencil, Code2, Rocket } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your business goals, users, and competitive landscape. Every engagement begins with a strategic brief that aligns your team and ours.",
    color: "#2563EB",
    highlights: ["Requirements workshop", "Technical audit", "Project roadmap"],
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design & Prototype",
    description:
      "Our designers translate strategy into interfaces. We ship hi-fi Figma prototypes, validate with real users, and iterate until every interaction feels inevitable.",
    color: "#7C3AED",
    highlights: ["User flows", "Hi-fi prototypes", "Design system"],
  },
  {
    icon: Code2,
    number: "03",
    title: "Build & Integrate",
    description:
      "Engineers take the handoff and build with production-readiness baked in. Two-week sprints, daily standups, and a staging environment so you see progress in real-time.",
    color: "#06B6D4",
    highlights: ["Agile sprints", "Code reviews", "QA testing"],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy to production, monitor performance, and stay on as your growth partner. Post-launch support, analytics dashboards, and iteration cycles — we're invested in your outcomes.",
    color: "#10B981",
    highlights: ["Zero-downtime deploy", "Performance monitoring", "Ongoing support"],
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad relative">
      <div className="section-container">
        <SectionReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">How We Work</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            A Process Built for{" "}
            <span className="gradient-text">Zero Surprises</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We've refined our delivery process across 500+ projects. Every phase is designed
            to keep you informed, in control, and confident.
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-800/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <SectionReveal key={step.number} delay={i * 0.12} direction="up">
                  <div className="group flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Icon circle */}
                    <div className="relative mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${step.color}15`,
                          border: `1px solid ${step.color}30`,
                          boxShadow: `0 0 30px ${step.color}20`,
                        }}
                      >
                        <Icon size={24} style={{ color: step.color }} />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                        style={{ background: step.color }}
                      >
                        {i + 1}
                      </span>
                    </div>

                    <div
                      className="text-xs font-bold tracking-widest mb-2 uppercase"
                      style={{ color: step.color }}
                    >
                      Step {step.number}
                    </div>

                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <ul className="flex flex-col gap-1.5">
                      {step.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-slate-400">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: step.color }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
