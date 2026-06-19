"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
};

const heights = { sm: 28, md: 36, lg: 44 };
const LOGO_RATIO = 544 / 120;

export default function Logo({ className, iconOnly = false, size = "md" }: LogoProps) {
  const uid = useId();
  const gradId = `nurost-grad-${uid}`;
  const h = heights[size];

  if (iconOnly) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        width={h}
        height={h}
        aria-label="NUROST"
        className={cn("select-none shrink-0", className)}
      >
        <defs>
          <linearGradient id={gradId} x1="20" y1="22" x2="100" y2="98" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F6BFF" />
            <stop offset="1" stopColor="#5AD2FF" />
          </linearGradient>
        </defs>
        <rect x="20" y="22" width="18" height="76" rx="5" fill="#FFFFFF" />
        <rect x="82" y="22" width="18" height="76" rx="5" fill="#FFFFFF" />
        <line x1="29" y1="29" x2="91" y2="91" stroke={`url(#${gradId})`} strokeWidth="20" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 544 120"
      width={Math.round(h * LOGO_RATIO)}
      height={h}
      aria-label="NUROST"
      className={cn("select-none shrink-0", className)}
    >
      <defs>
        <linearGradient id={gradId} x1="20" y1="22" x2="100" y2="98" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F6BFF" />
          <stop offset="1" stopColor="#5AD2FF" />
        </linearGradient>
      </defs>
      <rect x="20" y="22" width="18" height="76" rx="5" fill="#FFFFFF" />
      <rect x="82" y="22" width="18" height="76" rx="5" fill="#FFFFFF" />
      <line x1="29" y1="29" x2="91" y2="91" stroke={`url(#${gradId})`} strokeWidth="20" strokeLinecap="round" />
      <g fill="none" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
        <path d="M133 31 V67 A22 22 0 0 0 177 67 V31" />
        <path d="M219 31 V89" />
        <path d="M219 31 H246 A15 15 0 0 1 246 61 H219" />
        <path d="M233 61 L258 89" />
        <path d="M325 31 A22 29 0 0 1 325 89 A22 29 0 0 1 325 31 Z" />
        <path d="M426 43 C426 28 392 28 392 46 C392 61 426 60 426 77 C426 95 391 93 390 78" />
        <path d="M471 31 H515" />
        <path d="M493 31 V89" />
      </g>
    </svg>
  );
}
