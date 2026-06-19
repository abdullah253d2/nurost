"use client";

import { motion } from "framer-motion";
import { Code2, Clock, GitBranch, FileKey, Headphones, ShieldCheck } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

const commitments = [
  {
    icon: Code2,
    label: "Senior Engineers Only",
    desc: "No juniors on your project. Every line is written by engineers with real production experience.",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
  },
  {
    icon: Clock,
    label: "Weekly Progress Updates",
    desc: "You always know exactly where things stand. No black boxes, no radio silence.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: GitBranch,
    label: "Fixed Price or T&M",
    desc: "Choose the engagement model that fits your stage. Predictable or flexible — your call.",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    icon: FileKey,
    label: "Full Code Ownership",
    desc: "All source code, repos, and assets transferred to you on delivery. No lock-in.",
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: Headphones,
    label: "30-Day Post-Launch Support",
    desc: "We stay available after go-live. Bug fixes, tweaks, and peace of mind — included.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    icon: ShieldCheck,
    label: "NDA Before Day One",
    desc: "Your ideas are protected from the first conversation. We sign before any discussion.",
    color: "#EC4899",
    glow: "rgba(236,72,153,0.15)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">

      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="section-container relative">

        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">Client Feedback</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            We&apos;re New.{" "}
            <span className="gradient-text">We&apos;re Honest About It.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            NUROST launched in 2025. No manufactured reviews — just senior engineers
            committed to doing right by every client. Here&apos;s exactly what you get.
          </p>
        </SectionReveal>

        {/* Featured banner card */}
        <SectionReveal delay={0.1} className="mb-8">
          <div
            className="relative rounded-3xl px-8 py-10 md:px-14 md:py-12 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.10) 50%, rgba(124,58,237,0.14) 100%)",
              border: "1px solid rgba(37,99,235,0.25)",
              boxShadow: "0 0 80px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Grid lines decoration */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Large quote mark */}
            <div
              className="absolute top-6 right-10 text-[120px] font-black leading-none select-none pointer-events-none"
              style={{
                color: "rgba(37,99,235,0.12)",
                fontFamily: "var(--font-syne, sans-serif)",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p
                  className="text-xl md:text-2xl font-semibold text-white leading-snug mb-5"
                  style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                >
                  Every client gets the same senior attention
                  as if it were our most important project —
                  because to us, it always is.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    N
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">NUROST Team</p>
                    <p className="text-slate-500 text-xs">Lahore · UK Registered</p>
                  </div>
                </div>
              </div>

              {/* Trust stats */}
              <div className="flex flex-row md:flex-col gap-6 md:gap-4 md:border-l md:border-white/8 md:pl-10">
                {[
                  { value: "10+", label: "Yrs Combined Exp." },
                  { value: "100%", label: "Code Ownership" },
                  { value: "48h", label: "First Deliverable" },
                ].map((s) => (
                  <div key={s.label} className="text-center md:text-left">
                    <div
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Commitment cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {commitments.map(({ icon: Icon, label, desc, color, glow }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-default overflow-hidden"
              style={{
                background: "rgba(11,14,20,0.7)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse 80% 70% at 10% 10%, ${glow} 0%, transparent 70%)` }}
              />
              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${color}35` }}
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `linear-gradient(to right, transparent, ${color}80, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 relative"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: `${color}40` }}
                />
                <Icon size={19} className="relative z-10" style={{ color }} />
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-[14px] font-bold text-slate-100 mb-1.5 group-hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                >
                  {label}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
