"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Phone } from "lucide-react";
import { itPricing, financialPricing } from "@/lib/data/pricing";
import SectionReveal from "@/components/shared/SectionReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

function PricingCard({
  tier,
  billing,
  index,
}: {
  tier: typeof itPricing[0];
  billing: "monthly" | "annual";
  index: number;
}) {
  const price = billing === "monthly" ? tier.monthlyPrice : tier.annualPrice;
  const isCustom = price === 0;
  const savings =
    billing === "annual" && !isCustom
      ? Math.round(((tier.monthlyPrice - tier.annualPrice) / tier.monthlyPrice) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-2xl p-7 flex flex-col",
        tier.highlighted
          ? "border border-blue-500/40 bg-gradient-to-b from-blue-950/40 to-[#0F172A] shadow-2xl shadow-blue-500/10"
          : "glass-card"
      )}
    >
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-lg shadow-blue-600/40">
            <Sparkles size={10} />
            {tier.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className="text-xl font-bold text-white mb-1"
          style={{ fontFamily: "var(--font-syne, sans-serif)" }}
        >
          {tier.name}
        </h3>
        <p className="text-sm text-slate-500">{tier.description}</p>
      </div>

      <div className="mb-7">
        {isCustom ? (
          <div className="flex items-end gap-2">
            <span
              className="text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-syne, sans-serif)" }}
            >
              Custom
            </span>
          </div>
        ) : (
          <div className="flex items-end gap-2">
            <span
              className="text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-syne, sans-serif)" }}
            >
              ${price.toLocaleString()}
            </span>
            <span className="text-slate-500 text-sm mb-1.5">/ month</span>
            {savings > 0 && (
              <span className="text-emerald-400 text-xs font-bold ml-1 mb-1.5">
                Save {savings}%
              </span>
            )}
          </div>
        )}
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              size={14}
              className="text-emerald-400 mt-0.5 flex-shrink-0"
            />
            <span className="text-sm text-slate-400">{f}</span>
          </li>
        ))}
      </ul>

      <MagneticButton
        variant={tier.highlighted ? "primary" : "secondary"}
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full justify-center text-sm"
      >
        {isCustom && <Phone size={14} />}
        {tier.cta}
      </MagneticButton>
    </motion.div>
  );
}

export default function Pricing() {
  const [tab, setTab] = useState<"it" | "financial">("it");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="section-pad relative">
      <div className="section-container">
        <SectionReveal className="text-center mb-12">
          <span className="tag-pill mb-4 inline-block">Pricing</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Transparent Pricing,{" "}
            <span className="gradient-text">Real Value</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No hidden fees. No long-term lock-in. Choose the plan that matches your
            stage and scale as you grow.
          </p>
        </SectionReveal>

        {/* Controls */}
        <SectionReveal delay={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Service type */}
          <div className="glass-card inline-flex rounded-xl p-1 gap-1">
            {([
              { key: "it", label: "IT Services" },
              { key: "financial", label: "Financial Services" },
            ] as const).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                  tab === t.key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Billing toggle */}
          <div className="glass-card inline-flex rounded-xl p-1 gap-1">
            {([
              { key: "monthly", label: "Monthly" },
              { key: "annual", label: "Annual" },
            ] as const).map((b) => (
              <button
                key={b.key}
                onClick={() => setBilling(b.key)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                  billing === b.key
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {b.label}
                {b.key === "annual" && (
                  <span className="ml-1.5 text-[10px] font-bold text-emerald-400">-20%</span>
                )}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {(tab === "it" ? itPricing : financialPricing).map((tier, i) => (
            <PricingCard key={tier.id} tier={tier} billing={billing} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.3} className="text-center mt-10">
          <p className="text-sm text-slate-600">
            All plans include a free discovery call. No credit card required to start.{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
            >
              Need a custom plan? Talk to us →
            </button>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
