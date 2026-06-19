"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Phone, ArrowRight } from "lucide-react";
import { itPricing, financialPricing, type PricingTier } from "@/lib/data/pricing";
import SectionReveal from "@/components/shared/SectionReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

const tierColors: Record<string, { accent: string; glow: string }> = {
  starter:      { accent: "#06B6D4", glow: "rgba(6,182,212,0.10)" },
  growth:       { accent: "#2563EB", glow: "rgba(37,99,235,0.18)" },
  enterprise:   { accent: "#7C3AED", glow: "rgba(124,58,237,0.12)" },
  essentials:   { accent: "#10B981", glow: "rgba(16,185,129,0.10)" },
  professional: { accent: "#2563EB", glow: "rgba(37,99,235,0.18)" },
  advisory:     { accent: "#F59E0B", glow: "rgba(245,158,11,0.10)" },
};

function PricingCard({ tier, billing, index }: { tier: PricingTier; billing: "monthly" | "annual"; index: number }) {
  const price    = billing === "monthly" ? tier.monthlyPrice : tier.annualPrice;
  const isCustom = price === 0;
  const savings  = billing === "annual" && !isCustom
    ? Math.round(((tier.monthlyPrice - tier.annualPrice) / tier.monthlyPrice) * 100)
    : 0;

  const { accent, glow } = tierColors[tier.id] ?? { accent: "#2563EB", glow: "rgba(37,99,235,0.15)" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative flex flex-col rounded-3xl overflow-hidden", tier.highlighted ? "z-10" : "")}
      style={
        tier.highlighted
          ? {
              background: "linear-gradient(160deg, #0F1E40 0%, #0A0E1A 60%, #0D1530 100%)",
              border: `1px solid ${accent}50`,
              boxShadow: `0 0 60px ${glow}, 0 0 0 1px ${accent}20, 0 24px 48px rgba(0,0,0,0.5)`,
              transform: "scale(1.02)",
            }
          : {
              background: "rgba(11,14,20,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }
      }
    >
      {/* Highlighted card — ambient glow blob */}
      {tier.highlighted && (
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}25 0%, transparent 70%)`, filter: "blur(40px)" }}
        />
      )}

      {/* Colored top bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${accent}80, ${accent}20)` }} />

      {/* Badge */}
      {tier.badge && (
        <div className="absolute top-5 right-5">
          <span
            className="flex items-center gap-1.5 text-white text-[11px] font-bold px-3 py-1 rounded-full"
            style={{ background: accent, boxShadow: `0 4px 16px ${accent}60` }}
          >
            <Sparkles size={9} />
            {tier.badge}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-7">
        {/* Name + description */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
            <h3
              className="text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-syne, sans-serif)" }}
            >
              {tier.name}
            </h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{tier.description}</p>
        </div>

        {/* Price */}
        <div className="mb-7 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {isCustom ? (
            <div>
              <span
                className="text-4xl font-black text-white block"
                style={{ fontFamily: "var(--font-syne, sans-serif)" }}
              >
                Custom
              </span>
              <span className="text-slate-500 text-sm mt-1 block">Tailored to your scope</span>
            </div>
          ) : (
            <div className="flex items-end gap-2 flex-wrap">
              <span
                className="text-5xl font-black text-white"
                style={{ fontFamily: "var(--font-syne, sans-serif)" }}
              >
                ${price.toLocaleString()}
              </span>
              <div className="flex flex-col pb-1.5">
                <span className="text-slate-500 text-sm">{tier.unit ?? "/ month"}</span>
                {savings > 0 && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-md mt-0.5"
                    style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}
                  >
                    Save {savings}%
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
              >
                <Check size={10} style={{ color: accent }} />
              </div>
              <span className="text-sm text-slate-400 leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <MagneticButton
          variant={tier.highlighted ? "primary" : "secondary"}
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full justify-center text-sm"
        >
          {isCustom ? <Phone size={14} /> : <ArrowRight size={14} />}
          {tier.cta}
        </MagneticButton>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [tab, setBilling] = useState<"it" | "financial">("it");
  const [billing, setBillingMode] = useState<"monthly" | "annual">("monthly");

  const switchTab = (key: "it" | "financial") => {
    setBilling(key);
    if (key === "it") setBillingMode("monthly");
  };

  return (
    <section id="pricing" className="section-pad relative overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container relative">

        {/* Header */}
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
            No hidden fees. No lock-in. Choose the plan that matches your stage.
          </p>
        </SectionReveal>

        {/* Controls */}
        <SectionReveal delay={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          {/* Service tab */}
          <div
            className="inline-flex rounded-2xl p-1.5 gap-1"
            style={{
              background: "rgba(11,14,20,0.85)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            {([
              { key: "it",        label: "IT Services" },
              { key: "financial", label: "Financial Services" },
            ] as const).map((t) => (
              <button
                key={t.key}
                onClick={() => switchTab(t.key)}
                className={cn(
                  "relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer",
                  tab === t.key ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {tab === t.key && (
                  <motion.div
                    layoutId="pricing-tab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 4px 20px rgba(37,99,235,0.4)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Billing toggle — Financial only */}
          <AnimatePresence>
            {tab === "financial" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.18 }}
                className="inline-flex rounded-2xl p-1.5 gap-1"
                style={{
                  background: "rgba(11,14,20,0.85)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {([
                  { key: "monthly", label: "Monthly" },
                  { key: "annual",  label: "Annual" },
                ] as const).map((b) => (
                  <button
                    key={b.key}
                    onClick={() => setBillingMode(b.key)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer",
                      billing === b.key ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {b.label}
                    {b.key === "annual" && (
                      <span className="ml-1.5 text-[10px] font-bold text-emerald-400">−20%</span>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </SectionReveal>

        {/* Cards */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start"
          >
            {(tab === "it" ? itPricing : financialPricing).map((tier, i) => (
              <PricingCard key={tier.id} tier={tier} billing={billing} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer notes */}
        <SectionReveal delay={0.2} className="text-center mt-10 space-y-2">
          <p className="text-xs text-slate-600">
            Invoiced by NUROST LTD, UK · VAT not applicable for international clients
          </p>
          <p className="text-sm text-slate-600">
            All plans include a free discovery call. No credit card required.{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 cursor-pointer"
            >
              Need something custom? →
            </button>
          </p>
        </SectionReveal>

      </div>
    </section>
  );
}
