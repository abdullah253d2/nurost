"use client";

import { ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/shared/MagneticButton";
import SectionReveal from "@/components/shared/SectionReveal";
import SpotlightBackground from "@/components/ui/spotlight-background";

const perks = [
  { icon: Zap,    text: "First draft delivered in 48 hours" },
  { icon: Globe,  text: "Available across all timezones" },
  { icon: Shield, text: "NDA-protected from day one" },
];

export default function CTA() {
  return (
    /*
      overflow-hidden on <section> clips the spotlight blurs at the section boundary.
      bg-[#020617] ensures the dark base color shows through before spotlights render.
    */
    <section className="relative overflow-hidden bg-[#020617]">
      <SpotlightBackground>
        {/* Pulsing rings layered on top of spotlights */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-blue-500/15"
              animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 4, delay: i * 1.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="section-container py-24 md:py-32">
          <SectionReveal className="text-center max-w-3xl mx-auto">
            <span className="tag-pill mb-6 inline-block">Ready to Build?</span>

            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-syne, sans-serif)" }}
            >
              Your Next Breakthrough{" "}
              <span className="gradient-text">Starts Here.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Book a free 30-minute discovery call. We&apos;ll map out your project, identify
              risks, and give you an honest assessment — no obligation, no sales pitch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <MagneticButton
                variant="primary"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-base px-8 py-4"
              >
                Book a Discovery Call <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="text-base px-8 py-4"
              >
                View Our Work
              </MagneticButton>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                  <Icon size={15} className="text-blue-400" />
                  {text}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </SpotlightBackground>
    </section>
  );
}
