"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  onClick,
  href,
  type = "button",
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl cursor-pointer select-none transition-shadow duration-200",
    "px-6 py-3.5 text-sm",
    variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40",
    variant === "secondary" && "bg-white/5 text-slate-100 border border-white/12 hover:bg-white/8 hover:border-blue-500/40",
    variant === "ghost" && "text-slate-300 hover:text-white hover:bg-white/5",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={baseClasses}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href} className="inline-block" style={{ textDecoration: "none" }}>{content}</a>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block border-0 bg-transparent p-0 cursor-pointer">
      {content}
    </button>
  );
}
