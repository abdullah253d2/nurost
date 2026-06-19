"use client";

import { Rocket, Users, Globe, Award } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  {
    icon: Rocket,
    value: 15,
    suffix: "+",
    label: "Products Shipped",
    description: "Web apps, mobile platforms, and SaaS tools delivered to production.",
    color: "#2563EB",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Engineers in Network",
    description: "On-demand team of vetted developers, designers and QA specialists.",
    color: "#06B6D4",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "+",
    label: "Countries Served",
    description: "UK, US, UAE and growing — paid in $, £, and €.",
    color: "#10B981",
  },
  {
    icon: Award,
    value: 8,
    suffix: "",
    label: "Years Combined Lead Experience",
    description: "Senior engineers with real industry backgrounds.",
    color: "#F59E0B",
  },
];

export default function Stats() {
  return (
    <section className="section-pad relative">
      {/* Background stripe */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />

      <div className="section-container">
        <SectionReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block">By the Numbers</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Real Experience.{" "}
            <span className="gradient-text">Real Delivery.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our team&apos;s combined track record across fintech, e-commerce, healthcare
            and recruitment platforms.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="group glass-card rounded-2xl p-8 text-center card-hover">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${stat.color}15`,
                      border: `1px solid ${stat.color}25`,
                      boxShadow: `0 0 24px ${stat.color}18`,
                    }}
                  >
                    <Icon size={24} style={{ color: stat.color }} />
                  </div>

                  <div
                    className="text-5xl font-black text-white mb-2"
                    style={{ fontFamily: "var(--font-syne, sans-serif)", color: stat.color }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2200} />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{stat.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
