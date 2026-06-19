export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  authorAvatar: string;
  authorInitials: string;
  authorColor: string;
  coverImage: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Why We Always Choose Next.js for Client Projects in 2025",
    excerpt:
      "After shipping 10+ Next.js projects, here's our honest take on when SSR saves you and when it adds unnecessary complexity — with real examples from fintech and e-commerce builds.",
    category: "React & Next.js",
    readTime: "6 min read",
    publishedAt: "June 2025",
    author: "Abdullah Shahid",
    authorAvatar: "",
    authorInitials: "AS",
    authorColor: "#2563EB",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    slug: "nextjs-client-projects-2025",
  },
  {
    id: "b2",
    title: "React Native vs Flutter in 2025 — From a Team That's Shipped Both",
    excerpt:
      "We've built production apps in both frameworks. Here's what the benchmarks don't tell you about real-world performance, hiring, and long-term maintainability.",
    category: "Mobile Development",
    readTime: "8 min read",
    publishedAt: "May 2025",
    author: "Yousaf Butt",
    authorAvatar: "",
    authorInitials: "YB",
    authorColor: "#06B6D4",
    coverImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    slug: "react-native-vs-flutter-2025",
  },
  {
    id: "b3",
    title: "Why We Started NUROST — And What We're Building",
    excerpt:
      "A senior engineer's honest take on why we left established companies to build our own agency, what we believe about software quality, and what kind of clients we want to work with.",
    category: "Agency Life",
    readTime: "4 min read",
    publishedAt: "April 2025",
    author: "Abdullah Shahid",
    authorAvatar: "",
    authorInitials: "AS",
    authorColor: "#2563EB",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    slug: "why-we-started-nurost",
  },
];
