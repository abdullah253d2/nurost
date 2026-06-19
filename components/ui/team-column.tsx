"use client";
import React from "react";
import { motion } from "motion/react";
import type { TeamMember } from "@/lib/data/team";

export const TeamColumn = (props: {
  className?: string;
  members: TeamMember[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...new Array(2).fill(0).map((_, idx) => (
          <React.Fragment key={idx}>
            {props.members.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm p-5 max-w-xs w-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black shrink-0 select-none"
                    style={{
                      background: `${member.avatarColor ?? "#2563EB"}20`,
                      color: member.avatarColor ?? "#2563EB",
                      fontFamily: "var(--font-syne, sans-serif)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white text-sm leading-tight truncate">
                      {member.name}
                    </div>
                    <div className="text-xs text-blue-400 leading-tight mt-0.5 truncate">
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                  {member.bio}
                </p>

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
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
