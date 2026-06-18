export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: "Web" | "Mobile" | "Branding" | "Finance" | "AI";
  description: string;
  image: string;
  tags: string[];
  result: string;
  featured?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Vaultline Banking Platform",
    client: "Finterra Capital",
    category: "Web",
    description: "A full-featured digital banking portal with real-time transaction feeds, multi-currency wallets, and role-based compliance dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    result: "Onboarded 12,000 users in 60 days post-launch",
    featured: true,
  },
  {
    id: "p2",
    title: "TalentHive — Hiring OS",
    client: "TalentHive Inc.",
    category: "Mobile",
    description: "Cross-platform mobile app for talent matching, AI-powered interview scheduling, and collaborative hiring pipelines.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["React Native", "Node.js", "GraphQL", "OpenAI"],
    result: "4.8★ App Store rating on day one",
    featured: true,
  },
  {
    id: "p3",
    title: "CloudNine Brand Identity",
    client: "CloudNine Logistics",
    category: "Branding",
    description: "Full visual identity system — logo, brand guidelines, motion design, and a Figma component library for a 500-person logistics company.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    tags: ["Brand Strategy", "Figma", "Motion Design", "Design System"],
    result: "NPS increased from 32 to 68 after rebrand",
    featured: true,
  },
  {
    id: "p4",
    title: "Meridian Document AI",
    client: "Meridian SaaS",
    category: "AI",
    description: "Intelligent document processing pipeline — OCR, classification, entity extraction, and human-in-the-loop review for contract management.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop",
    tags: ["Python", "LangChain", "AWS Textract", "FastAPI"],
    result: "78% reduction in manual document review",
  },
  {
    id: "p5",
    title: "UrbanMesh Tax Restructure",
    client: "UrbanMesh Group",
    category: "Finance",
    description: "Multi-entity tax restructuring for a holding company operating across 4 jurisdictions, including transfer pricing documentation and R&D credit claims.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    tags: ["Tax Strategy", "Multi-Jurisdiction", "R&D Credits", "Compliance"],
    result: "$240K in identified tax savings",
  },
  {
    id: "p6",
    title: "Agritech IoT Dashboard",
    client: "Agritech Solutions",
    category: "Web",
    description: "Real-time sensor data dashboard for precision agriculture — weather correlation, yield forecasting, and automated irrigation triggers across 200+ farms.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop",
    tags: ["React", "WebSockets", "InfluxDB", "AWS IoT"],
    result: "Deployed across 200+ farms in 3 countries",
  },
];

export const portfolioCategories = ["All", "Web", "Mobile", "Branding", "Finance", "AI"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];
