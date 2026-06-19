"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Globe, Zap, ShieldCheck, Smartphone, Building2 } from "lucide-react";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/shared/MagneticButton";

const PixelCanvas = dynamic(() => import("@/components/shared/PixelCanvas"), { ssr: false });

const containerVariants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const floatingBadges = [
  { icon: Building2, label: "UK Registered Company", color: "#DC2626" },
  { icon: Globe, label: "Pakistan · Remote Worldwide", color: "#06B6D4" },
  { icon: Zap, label: "WEB · Mobile · Cloud", color: "#2563EB" },
  { icon: ShieldCheck, label: "QA-Certified Delivery", color: "#10B981" },
];

const techStack = ["Next.js", "React", "TypeScript", "Laravel", "React Native", "AWS", "Figma"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Pixel canvas background */}
      <div className="absolute inset-0 z-0">
        <PixelCanvas className="absolute inset-0" />
        {/* left + right vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #020617 0%, transparent 25%, transparent 75%, #020617 100%)" }} />
        {/* top + bottom fade */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #020617 0%, transparent 20%, transparent 65%, #020617 100%)" }} />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-400/8 rounded-full blur-3xl pointer-events-none animate-float-delayed" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 section-container w-full pt-24 pb-16 flex justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="w-full text-center"
        >
          {/* Badge */}
          {/* <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="tag-pill">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              UK Registered · Pakistan Operations · Global Delivery
            </span>
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-[1.04] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            <span className="block text-slate-100">We Build Digital Products</span>
            <span className="block gradient-text">That Work in the Real World.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            From web apps to mobile platforms NUROST is a Lahore-based agency delivering
            production-grade software for clients across the UK, US, and Europe. Honest
            pricing. Real engineers. Zero fluff.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <MagneticButton variant="primary" onClick={() => scrollTo("#contact")}>
              Start a Project <ArrowRight size={17} />
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={() => scrollTo("#portfolio")}>
              See Our Work
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          >
            {[
              { value: "10+", label: "Years Avg Experience" },
              { value: "15+", label: "Products Shipped" },
              { value: "5", label: "Domains Served" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
                <div
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}

          {/* Floating badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2.5 mb-10">
            {floatingBadges.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="glass flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300"
              >
                <Icon size={14} style={{ color }} />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Tech stack */}
          {/* <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-xs text-slate-600 font-medium uppercase tracking-widest mr-1">
              Built with
            </span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-white/3 border border-white/6 text-slate-500"
              >
                {tech}
              </span>
            ))}
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
        />
        <span className="text-[9px] text-slate-600 tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
