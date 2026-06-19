export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  initials?: string;
  avatarColor?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  skills: string[];
};

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: "Abdullah Shahid",
    role: "Founder & Senior Frontend Engineer",
    bio: "6 years building production web and mobile applications. Worked on high-traffic platforms including Rozee.pk (Pakistan's #1 job board), Finja, and Rizq. Specialises in scalable React architecture, SSR, and cross-platform mobile with React Native. University of the Punjab — BSc Information Technology.",
    avatar: "",
    initials: "AS",
    avatarColor: "#2563EB",
    linkedin: "https://linkedin.com/in/abdullah-shahid-5b2788154",
    skills: ["React.js", "Next.js", "React Native"],
  },
  {
    id: "tm2",
    name: "Haseeb Ahmed",
    role: "Technical Lead & Solution Architect",
    bio: "5+ years leading backend development at Conovo Technologies, now Technical Manager at 1st 4 Connect. Designs scalable system architectures, leads development teams, and owns end-to-end project delivery. Expert in PHP/Laravel, cloud services, and engineering best practices.",
    avatar: "",
    initials: "HA",
    avatarColor: "#7C3AED",
    linkedin: "https://linkedin.com/in/haseebahmed-a9317a1a4",
    skills: ["PHP", "Laravel", "Architecture"],
  },
  {
    id: "tm3",
    name: "Yousaf Butt",
    role: "Lead Mobile Developer",
    bio: "8+ years in mobile development. Specialises in React Native (Expo & CLI) delivering production iOS and Android apps. Built GPS-based applications, e-commerce platforms, and cross-platform tools for clients across multiple industries. Committed to seamless user experiences on every device.",
    avatar: "",
    initials: "YB",
    avatarColor: "#06B6D4",
    linkedin: "https://linkedin.com/in/yousafbutt-64b942b4",
    skills: ["React Native", "iOS", "Android"],
  },
  {
    id: "tm4",
    name: "Yasim Iqbal",
    role: "Full Stack Engineer",
    bio: "5+ years full-stack engineer with a 100% on-time delivery record across multiple product lines. Skilled in PHP/Laravel, React.js, TypeScript, and MySQL. Has directly contributed to 40% conversion improvements and 15% increase in user engagement through engineering-driven product improvements.",
    avatar: "",
    initials: "YI",
    avatarColor: "#F59E0B",
    linkedin: "https://linkedin.com/in/yasim-iqbal",
    skills: ["Laravel", "React.js", "TypeScript"],
  },
  {
    id: "tm5",
    name: "Muhammad Abaid Ullah",
    role: "QA Lead & Project Coordinator",
    bio: "8+ years in software quality and delivery management. Gold Medalist. Led a 12-person QA team at Conovo Technologies across 3 concurrent product lines — achieving 95% on-time milestone delivery and 40% reduction in regression cycle time. Background includes i2c Inc. (global fintech). Owns the full delivery process from sprint planning to production release.",
    avatar: "",
    initials: "MA",
    avatarColor: "#EF4444",
    linkedin: "https://linkedin.com/in/m-abaidullah",
    skills: ["QA Automation", "Playwright", "Project Mgmt"],
  },
  {
    id: "tm6",
    name: "Rania Khan",
    role: "UI/UX Designer",
    bio: "4+ years designing digital products for SaaS and e-commerce. Creates component-driven design systems in Figma, conducts user research, and delivers pixel-perfect prototypes that engineering teams love to build.",
    avatar: "",
    initials: "RK",
    avatarColor: "#EC4899",
    skills: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    id: "tm7",
    name: "Kamran Bashir",
    role: "AI / Python Engineer",
    bio: "5+ years in machine learning and backend development. Builds LLM-powered features, FastAPI microservices, and data automation pipelines. Deploys and monitors production ML models on AWS.",
    avatar: "",
    initials: "KB",
    avatarColor: "#8B5CF6",
    skills: ["Python", "FastAPI", "LLM Integration"],
  },
  {
    id: "tm8",
    name: "Zara Sheikh",
    role: "Digital Marketing Lead",
    bio: "6+ years running paid and organic digital campaigns. Manages Google, Meta, and LinkedIn ad accounts across multiple verticals — driving consistent ROAS improvements through structured A/B testing and data-led creative decisions.",
    avatar: "",
    initials: "ZS",
    avatarColor: "#F97316",
    skills: ["Meta Ads", "Google Ads", "CRO"],
  },
  {
    id: "tm9",
    name: "Hamza Nawaz",
    role: "DevOps Engineer",
    bio: "4+ years managing cloud infrastructure on AWS. Builds CI/CD pipelines, containerises applications with Docker, and implements infrastructure-as-code. Keeps production environments reliable, secure, and cost-efficient.",
    avatar: "",
    initials: "HN",
    avatarColor: "#0EA5E9",
    skills: ["AWS", "Docker", "CI/CD"],
  },
  {
    id: "tm10",
    name: "Ayesha Malik",
    role: "Graphic Designer",
    bio: "5 years creating brand identities, marketing collateral, and social media visuals. Fluent in Adobe Illustrator, Photoshop, and Canva Pro — delivering consistent visual assets that strengthen brand recognition across every touchpoint.",
    avatar: "",
    initials: "AM",
    avatarColor: "#14B8A6",
    skills: ["Illustrator", "Photoshop", "Branding"],
  },
  {
    id: "tm11",
    name: "Bilal Rana",
    role: "Social Media Manager",
    bio: "3+ years managing brand social accounts across Instagram, LinkedIn, and TikTok. Builds content calendars, writes copy, and grows engaged audiences — with a track record of doubling follower counts and increasing engagement rates for clients.",
    avatar: "",
    initials: "BR",
    avatarColor: "#06B6D4",
    skills: ["Content Strategy", "Instagram", "LinkedIn"],
  },
];
