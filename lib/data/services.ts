export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
};

export const itServices: Service[] = [
  {
    id: "web-dev",
    icon: "Monitor",
    title: "Web Development",
    description:
      "React, Next.js, and Laravel applications built for performance. We've shipped high-traffic platforms in fintech, e-commerce, recruitment, and healthcare. SSR, code splitting, REST API integration — production-ready from day one.",
    features: ["Next.js & React", "Laravel & PHP", "REST APIs", "E-commerce & SaaS"],
    color: "#2563EB",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Cross-platform iOS and Android apps built with React Native (Expo & CLI). We deliver polished, App Store-ready experiences — from MVP to full product. GPS, payments, real-time features — we've built them all.",
    features: ["React Native", "iOS & Android", "Expo & CLI", "App Store Deployment"],
    color: "#7C3AED",
  },
  {
    id: "ui-ux",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Interfaces that convert, not just impress. We design with your users in mind — clean component systems, Figma prototypes, and pixel-perfect handoffs that engineers actually enjoy building.",
    features: ["Figma Prototypes", "Design Systems", "User Research", "Usability Testing"],
    color: "#06B6D4",
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO",
    description:
      "Technical SEO that compounds over time. We audit, optimise, and build content strategies that move you up rankings and keep you there — no black-hat shortcuts.",
    features: ["Technical SEO Audits", "On-Page Optimisation", "Link Building", "Core Web Vitals"],
    color: "#10B981",
  },
  {
    id: "digital-marketing",
    icon: "Megaphone",
    title: "Digital Marketing",
    description:
      "Performance marketing across Google, Meta, and LinkedIn. We run campaigns built around your CAC targets, not vanity metrics — and we track every pound back to revenue.",
    features: ["Google & Meta Ads", "LinkedIn Campaigns", "Email Marketing", "CRO & Analytics"],
    color: "#F97316",
  },
  {
    id: "graphic-design",
    icon: "Paintbrush",
    title: "Graphic Design",
    description:
      "Brand identity, marketing collateral, and visual assets that make your business look credible and consistent. From logo to full brand kit — everything your team needs to show up professionally.",
    features: ["Logo & Brand Identity", "Social Media Graphics", "Marketing Collateral", "Print & Digital"],
    color: "#EC4899",
  },
  {
    id: "social-media-management",
    icon: "Share2",
    title: "Social Media Management",
    description:
      "Full-service social media handling — content calendar, copywriting, design, posting, and community management. We keep your channels active, on-brand, and growing consistently.",
    features: ["Content Calendar", "Post Design & Copy", "Community Management", "Growth Strategy"],
    color: "#14B8A6",
  },
  {
    id: "social-media-marketing",
    icon: "BarChart2",
    title: "Social Media Marketing",
    description:
      "Paid social campaigns on Meta (Facebook & Instagram), TikTok, and LinkedIn. We handle creative, targeting, A/B testing, and reporting — built to drive real conversions, not just impressions.",
    features: ["Meta Ads (FB & IG)", "TikTok Ads", "LinkedIn Ads", "Retargeting & Lookalikes"],
    color: "#6366F1",
  },
  {
    id: "content",
    icon: "PenTool",
    title: "Content Writing",
    description:
      "Clear, professional copy written for international audiences. Website copy, blog articles, email sequences, and technical documentation — all crafted for your target market.",
    features: ["Website Copy", "Blog & Articles", "Email Sequences", "Technical Docs"],
    color: "#F59E0B",
  },
  {
    id: "video",
    icon: "Video",
    title: "Video & Animation",
    description:
      "Product demos, explainer videos, and social content that communicate your value clearly. We translate complex tech into compelling visuals that your clients actually watch.",
    features: ["Product Demos", "Explainer Videos", "Social Content", "Brand Films"],
    color: "#EF4444",
  },
  {
    id: "ai-ml",
    icon: "Brain",
    title: "AI / ML Solutions",
    description:
      "Practical AI integration — not demos. LLM-powered features, automation pipelines, and intelligent workflows that save your team real hours. Built with Python and deployed on AWS.",
    features: ["LLM Integration", "Python & FastAPI", "Automation Pipelines", "AWS"],
    color: "#8B5CF6",
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud & DevOps",
    description:
      "AWS infrastructure, CI/CD pipelines, Docker and deployment automation. We set up cloud environments that scale with your growth and don't surprise you with downtime or bills.",
    features: ["AWS", "Docker", "CI/CD Pipelines", "Infrastructure as Code"],
    color: "#0EA5E9",
  },
];

export const financialServices: Service[] = [
  {
    id: "bookkeeping",
    icon: "BookOpen",
    title: "Bookkeeping",
    description:
      "Accurate, real-time bookkeeping so you always know where your business stands. We reconcile accounts, categorize transactions, and deliver clean monthly reports you can act on.",
    features: ["Monthly Reconciliation", "Transaction Categorization", "P&L Reports", "Cloud-Based"],
    color: "#2563EB",
  },
  {
    id: "tax",
    icon: "FileText",
    title: "Tax Consulting",
    description:
      "Proactive tax strategy — not just compliance. Our consultants identify deductions, structure entities for efficiency, and navigate multi-jurisdiction obligations for global businesses.",
    features: ["Corporate Tax Filing", "Multi-Jurisdiction", "Tax Planning", "Compliance"],
    color: "#06B6D4",
  },
  {
    id: "payroll",
    icon: "Users",
    title: "Payroll Management",
    description:
      "End-to-end payroll processing for teams of 2 to 2,000. Direct deposits, tax withholding, contractor payments, and statutory filings handled on time, every time.",
    features: ["Direct Deposit", "Tax Withholding", "Contractor Payments", "HR Integration"],
    color: "#10B981",
  },
  {
    id: "advisory",
    icon: "BarChart3",
    title: "Financial Advisory",
    description:
      "Strategic CFO-level guidance without the full-time cost. Cash flow forecasting, fundraising preparation, and board-ready financial modeling.",
    features: ["Cash Flow Forecasting", "Fundraising Prep", "Board Reporting", "Multi-entity"],
    color: "#F59E0B",
  },
];
