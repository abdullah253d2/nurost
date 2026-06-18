export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  authorAvatar: string;
  coverImage: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Why 80% of SaaS Products Fail to Convert — And How to Fix It",
    excerpt:
      "Most SaaS landing pages are built by engineers, not conversion strategists. We analyzed 200 SaaS sites and found the five UX patterns that separate 3% conversion rates from 12%.",
    category: "Product Design",
    readTime: "7 min read",
    publishedAt: "June 12, 2025",
    author: "Carlos Fuentes",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    slug: "saas-conversion-rate-optimization",
  },
  {
    id: "b2",
    title: "The True Cost of Ignoring Cloud Infrastructure Until Series B",
    excerpt:
      "We've audited 40+ startups' AWS bills. The pattern is always the same — reactive scaling decisions made at seed stage compound into $30K/month waste by the time investors are watching.",
    category: "Cloud & DevOps",
    readTime: "9 min read",
    publishedAt: "May 28, 2025",
    author: "Liam O'Brien",
    authorAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=40&h=40&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    slug: "cloud-infrastructure-cost-optimization",
  },
  {
    id: "b3",
    title: "Practical LLM Integration Patterns for Production Apps in 2025",
    excerpt:
      "Moving LLMs from demo to production requires solving latency, cost, reliability, and hallucination at the same time. Here are the architectural patterns we've battle-tested across 15 deployments.",
    category: "AI / ML",
    readTime: "11 min read",
    publishedAt: "May 14, 2025",
    author: "Yuki Tanaka",
    authorAvatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=40&h=40&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop",
    slug: "llm-integration-patterns-production",
  },
];
