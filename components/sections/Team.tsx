"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// Social icons as inline SVGs — lucide-react v1+ removed brand icons
import { team } from "@/lib/data/team";
import SectionReveal from "@/components/shared/SectionReveal";

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-8%" }}
      className="group relative glass-card rounded-2xl overflow-hidden"
    >
      {/* Avatar */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={member.avatar}
          alt={`${member.name}, ${member.role} at NUROST`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

        {/* Social links — appear on hover */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {member.linkedin && (
            <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-150">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} aria-label={`${member.name} on X/Twitter`}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-150">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          )}
          {member.github && (
            <a href={member.github} aria-label={`${member.name} on GitHub`}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-150">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-base font-bold text-white mb-0.5"
          style={{ fontFamily: "var(--font-syne, sans-serif)" }}
        >
          {member.name}
        </h3>
        <p className="text-xs font-semibold text-blue-400 mb-3">{member.role}</p>
        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">{member.bio}</p>

        <div className="flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded bg-blue-950/50 border border-blue-900/40 text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-pad relative">
      <div className="section-container">
        <SectionReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block">The Team</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            World-Class People,{" "}
            <span className="gradient-text">Singular Mission</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our leadership team brings together deep technical expertise and business acumen
            from Google, MIT, Big Four, and high-growth startups.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
