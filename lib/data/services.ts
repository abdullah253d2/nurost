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
      "From high-performance marketing sites to complex enterprise portals, we engineer web solutions that scale. React, Next.js, and headless CMS architectures built for speed and conversion.",
    features: ["Next.js & React", "Headless CMS", "E-commerce & SaaS", "API Development"],
    color: "#2563EB",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Native iOS, Android, and cross-platform apps built with React Native and Flutter. We ship polished experiences users love — from MVP to App Store in weeks, not months.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
    color: "#7C3AED",
  },
  {
    id: "ui-ux",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Research-driven design that converts. We map user journeys, wire up prototypes, and deliver pixel-perfect Figma handoffs that engineering teams actually enjoy implementing.",
    features: ["User Research", "Figma Prototypes", "Design Systems", "Usability Testing"],
    color: "#06B6D4",
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO & Digital Marketing",
    description:
      "Data-led SEO and performance marketing that compounds over time. Technical audits, content strategy, paid media, and conversion rate optimization under one roof.",
    features: ["Technical SEO", "Content Strategy", "Google & Meta Ads", "CRO"],
    color: "#10B981",
  },
  {
    id: "content",
    icon: "PenTool",
    title: "Content Writing",
    description:
      "Expert copywriters who understand your industry. Website copy, long-form thought leadership, email sequences, and documentation — all on-brand and optimized for your audience.",
    features: ["Website Copy", "Blog & Articles", "Email Sequences", "Technical Docs"],
    color: "#F59E0B",
  },
  {
    id: "video",
    icon: "Video",
    title: "Video & Animation",
    description:
      "Compelling motion content from product demos to brand films. 2D/3D animation, explainer videos, and social content that stops the scroll and drives action.",
    features: ["Product Demos", "2D/3D Animation", "Brand Films", "Social Content"],
    color: "#EF4444",
  },
  {
    id: "ai-ml",
    icon: "Brain",
    title: "AI / ML Solutions",
    description:
      "Custom AI integrations and machine learning pipelines that automate the tedious and surface insights from your data. LLM wrappers, computer vision, and predictive analytics.",
    features: ["LLM Integration", "Computer Vision", "Predictive Analytics", "AI Automation"],
    color: "#8B5CF6",
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud & DevOps",
    description:
      "AWS, GCP, and Azure architectures engineered for reliability and cost-efficiency. CI/CD pipelines, container orchestration, and infrastructure-as-code that teams trust.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "IaC (Terraform)"],
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
      "Strategic CFO-level guidance without the full-time cost. Cash flow forecasting, fundraising preparation, M&A due diligence, and board-ready financial modeling.",
    features: ["Cash Flow Forecasting", "Fundraising Prep", "M&A Due Diligence", "Board Reporting"],
    color: "#F59E0B",
  },
];
