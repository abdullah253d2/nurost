export type PricingTier = {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
};

export const itPricing: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 2500,
    annualPrice: 2000,
    description: "For early-stage startups that need a solid digital foundation without agency overhead.",
    features: [
      "Up to 5 website pages",
      "Mobile-responsive design",
      "SEO fundamentals setup",
      "1 round of revisions",
      "30-day post-launch support",
      "Performance optimization",
    ],
    cta: "Start Project",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 6500,
    annualPrice: 5200,
    description: "For scaling companies that need a full-featured product, design system, and marketing engine.",
    features: [
      "Custom web or mobile app",
      "UI/UX design & prototyping",
      "Design system & component library",
      "SEO & content strategy",
      "API integrations (up to 5)",
      "3 months priority support",
      "CI/CD pipeline setup",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For enterprises that need a dedicated team, SLAs, and complex multi-system architecture.",
    features: [
      "Dedicated engineering squad",
      "AI/ML integration",
      "Cloud architecture & DevOps",
      "99.9% uptime SLA",
      "Unlimited revisions",
      "24/7 on-call support",
      "Quarterly strategy reviews",
      "Custom contracts & NDAs",
    ],
    cta: "Contact Sales",
  },
];

export const financialPricing: PricingTier[] = [
  {
    id: "essentials",
    name: "Essentials",
    monthlyPrice: 499,
    annualPrice: 399,
    description: "For freelancers and small businesses that need clean books and quarterly tax peace of mind.",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Quarterly P&L reports",
      "Annual tax filing",
      "Email support",
    ],
    cta: "Start Today",
  },
  {
    id: "professional",
    name: "Professional",
    monthlyPrice: 1299,
    annualPrice: 999,
    description: "For growing businesses with payroll, multiple accounts, and proactive tax planning.",
    features: [
      "Full bookkeeping & reconciliation",
      "Payroll management (up to 25)",
      "Monthly financial reports",
      "Quarterly tax planning",
      "Sales tax compliance",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Best Value",
  },
  {
    id: "advisory",
    name: "Advisory",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For high-growth companies that need fractional CFO services and M&A readiness.",
    features: [
      "Everything in Professional",
      "Fractional CFO advisory",
      "Cash flow forecasting",
      "M&A due diligence support",
      "Fundraising preparation",
      "Board & investor reporting",
      "Multi-entity & multi-currency",
    ],
    cta: "Schedule a Call",
  },
];
