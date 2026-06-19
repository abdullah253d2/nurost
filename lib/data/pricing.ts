export type PricingTier = {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  unit?: string;
  highlighted?: boolean;
  badge?: string;
};

export const itPricing: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 1500,
    annualPrice: 1500,
    description: "For small businesses needing a professional web presence.",
    features: [
      "Up to 5 pages (Next.js or Laravel)",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "30-day post-launch support",
      "Source code delivered to you",
    ],
    cta: "Start Project",
    unit: "/ project",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 4500,
    annualPrice: 4500,
    description: "For startups building their core product.",
    features: [
      "Custom web or mobile app",
      "UI/UX design & Figma prototype",
      "REST API development & integration",
      "Up to 5 third-party integrations",
      "AWS deployment & CI/CD setup",
      "QA testing & bug-free delivery guarantee",
      "60-day post-launch support",
      "Full IP ownership transfer",
    ],
    cta: "Get Started",
    unit: "/ project",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Dedicated team for complex, ongoing projects.",
    features: [
      "Dedicated frontend + backend + mobile team",
      "Project Manager included",
      "Weekly sprint reviews & demos",
      "AI/ML integration available",
      "Multi-platform (web + mobile + cloud)",
      "99.9% uptime SLA",
      "Unlimited revisions during development",
      "24/7 support during critical phases",
      "Custom NDA & contracts",
    ],
    cta: "Contact Us",
    unit: "/ project",
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
    description: "For high-growth companies that need fractional CFO services and strategic financial guidance.",
    features: [
      "Everything in Professional",
      "Fractional CFO advisory",
      "Cash flow forecasting",
      "Fundraising preparation",
      "Board & investor reporting",
      "Multi-entity & multi-currency",
    ],
    cta: "Schedule a Call",
  },
];
