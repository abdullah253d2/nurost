export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  skills: string[];
};

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: "Aiden Ross",
    role: "CEO & Co-Founder",
    bio: "Ex-Google engineer turned entrepreneur. Built 3 venture-backed companies before founding NUROST. Obsessed with product velocity and engineering culture.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    linkedin: "#",
    twitter: "#",
    skills: ["Strategy", "Product", "Fundraising"],
  },
  {
    id: "tm2",
    name: "Nadia Kowalski",
    role: "CTO & Co-Founder",
    bio: "Full-stack architect with 12 years shipping mission-critical systems. Led engineering at two Series B startups. Speaker at React Summit and NodeConf.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    linkedin: "#",
    github: "#",
    skills: ["Architecture", "React", "Cloud"],
  },
  {
    id: "tm3",
    name: "Carlos Fuentes",
    role: "Head of Design",
    bio: "Crafts interfaces that win design awards and drive conversions. Previously led design at Figma's design partner network and Shopify's Plus agency team.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    linkedin: "#",
    twitter: "#",
    skills: ["Figma", "Motion", "Brand"],
  },
  {
    id: "tm4",
    name: "Yuki Tanaka",
    role: "Head of AI/ML",
    bio: "PhD in Machine Learning from MIT. Built LLM-powered products used by 2M+ users. Specializes in practical AI — not demos, but deployable, measurable solutions.",
    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop",
    linkedin: "#",
    github: "#",
    skills: ["LLMs", "Python", "MLOps"],
  },
  {
    id: "tm5",
    name: "Fatima Al-Hassan",
    role: "Head of Financial Services",
    bio: "CPA with Big Four background. 15 years of cross-border tax strategy and CFO advisory for high-growth companies scaling from $1M to $100M ARR.",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop",
    linkedin: "#",
    skills: ["Tax Strategy", "CFO Advisory", "Compliance"],
  },
  {
    id: "tm6",
    name: "Liam O'Brien",
    role: "Head of Cloud & DevOps",
    bio: "AWS Certified Solutions Architect (Professional). Designed cloud infrastructure for companies serving 50M+ requests per day. Zero-downtime deployments are non-negotiable.",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop",
    linkedin: "#",
    github: "#",
    skills: ["AWS", "Kubernetes", "Terraform"],
  },
];
