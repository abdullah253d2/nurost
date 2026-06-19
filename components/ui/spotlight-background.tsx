"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SpotlightProps {
  color: string;
  size: number;
  blur: number;
  style?: React.CSSProperties;
  animate: object;
  transition: object;
}

function Spotlight({ color, size, blur, style, animate, transition }: SpotlightProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none will-change-transform"
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        ...style,
      }}
      animate={animate}
      transition={transition}
    />
  );
}

export default function SpotlightBackground({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full">
      {/*
        NO overflow-hidden here — the parent <section> clips at the boundary.
        overflow-hidden on this div would invisibly clip the blurred spotlights.
      */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue — upper left */}
        <Spotlight
          color="rgba(37, 99, 235, 0.45)"
          size={700}
          blur={100}
          style={{ left: "-8%", top: "-25%" }}
          animate={reduced ? {} : {
            x: [0, 140, -80, 0],
            y: [0, -70, 90,  0],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Cyan — centre */}
        <Spotlight
          color="rgba(6, 182, 212, 0.28)"
          size={580}
          blur={90}
          style={{ left: "28%", top: "15%" }}
          animate={reduced ? {} : {
            x: [0, 110, -120, 0],
            y: [0,  90,   40, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 3,
          }}
        />

        {/* Indigo — lower right */}
        <Spotlight
          color="rgba(99, 60, 235, 0.32)"
          size={680}
          blur={110}
          style={{ right: "-12%", bottom: "-20%" }}
          animate={reduced ? {} : {
            x: [0, -130, 70,  0],
            y: [0,  -90, 60,  0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          }}
        />
      </div>

      {/* Top edge */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none z-[1] bg-gradient-to-b from-[#020617] to-transparent" />

      {/* Bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-[1] bg-gradient-to-t from-[#020617] to-transparent" />

      {/* Content sits above spotlights and edge fades */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
