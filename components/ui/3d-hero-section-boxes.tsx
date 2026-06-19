"use client";

import Spline from "@splinetool/react-spline";

export function HeroSplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <Spline
        style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      {/* Side vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #020617 0%, transparent 22%, transparent 78%, #020617 100%)",
        }}
      />
      {/* Strong bottom fade into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "45%",
          background: "linear-gradient(to bottom, transparent 0%, #020617 100%)",
        }}
      />
      {/* Subtle top fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "15%",
          background: "linear-gradient(to bottom, #020617 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
