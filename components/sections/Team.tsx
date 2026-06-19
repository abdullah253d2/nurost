"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/data/team";
import SectionReveal from "@/components/shared/SectionReveal";
import { TeamColumn } from "@/components/ui/team-column";

const col1 = team.slice(0, 4);
const col2 = team.slice(4, 8);
const col3 = team.slice(8);

export default function Team() {
  return (
    <section id="team" className="section-pad relative overflow-hidden">
      <div className="section-container">
        <SectionReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block">The Team</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Senior Engineers.{" "}
            <span className="gradient-text">Real Experience.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every person on the NUROST team has worked on production systems used by real
            people. No juniors, no outsourcing.
          </p>
        </SectionReveal>

        <div className="flex justify-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TeamColumn members={col1} duration={18} />
          <TeamColumn members={col2} duration={22} className="hidden md:block" />
          <TeamColumn members={col3} duration={16} className="hidden lg:block" />
        </div>

        <SectionReveal delay={0.3} className="text-center mt-10">
          <p className="text-sm text-slate-500">
            More team members joining soon — growing to 15+ by Q3 2025.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
