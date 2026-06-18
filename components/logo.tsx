import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { icon: 28, text: "text-lg" },
  md: { icon: 36, text: "text-xl" },
  lg: { icon: 44, text: "text-2xl" },
};

export default function Logo({ className, iconOnly = false, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {/* Geometric N+R mark */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NUROST logo mark"
      >
        {/* Background hex */}
        <rect width="44" height="44" rx="10" fill="#0F172A" />
        <rect width="44" height="44" rx="10" fill="url(#logo-bg-grad)" />

        {/* N letterform — left strokes */}
        <path
          d="M7 34V10H11.5L20 24V10H24V34H19.5L11 20V34H7Z"
          fill="url(#logo-n-grad)"
        />

        {/* R letterform — right side, interlocked */}
        <path
          d="M26 34V10H34C37.3137 10 40 12.6863 40 16V17C40 19.5 38.5 21.5 36.5 22.5L40 34H35.5L32.5 24H30.5V34H26ZM30.5 20H33.5C35.1569 20 36.5 18.6569 36.5 17V16C36.5 14.3431 35.1569 13 33.5 13H30.5V20Z"
          fill="url(#logo-r-grad)"
        />

        {/* Connector accent line */}
        <path
          d="M22 17L26 17"
          stroke="#06B6D4"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 22L24 22"
          stroke="rgba(6,182,212,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <defs>
          <linearGradient id="logo-bg-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="logo-n-grad" x1="7" y1="10" x2="24" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="logo-r-grad" x1="26" y1="10" x2="40" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
      </svg>

      {!iconOnly && (
        <span
          className={cn(
            "font-bold tracking-tight",
            s.text,
            "bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent"
          )}
          style={{ fontFamily: "var(--font-syne, sans-serif)" }}
        >
          NUROST
        </span>
      )}
    </div>
  );
}
