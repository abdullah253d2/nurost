export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Okonkwo",
    role: "CTO",
    company: "Finterra Capital",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    text: "NUROST rebuilt our entire client portal in 11 weeks. The code quality was exceptional — zero critical bugs in production for six months. Their team genuinely understands fintech compliance constraints.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Webb",
    role: "Founder & CEO",
    company: "TalentHive",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    text: "We launched our SaaS MVP in 8 weeks with NUROST. The React Native app they delivered had a 4.8-star rating on launch day. Absolutely nailed the UX without any hand-holding.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Sharma",
    role: "VP of Marketing",
    company: "CloudNine Logistics",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    text: "Our organic traffic grew 340% in six months after NUROST took over SEO and content. They don't just write articles — they architect information systems that rank.",
    rating: 5,
  },
  {
    id: "t4",
    name: "James Holton",
    role: "Director of Engineering",
    company: "Meridian SaaS",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    text: "The AI pipeline NUROST built for our document processing cut manual review time by 78%. They understood our edge cases better than vendors with 10x the headcount.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Amina Al-Rashid",
    role: "CFO",
    company: "UrbanMesh Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
    text: "NUROST's financial advisory team restructured our holding company and identified $240K in tax savings we were leaving on the table. The ROI was evident within the first quarter.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Daniel Reyes",
    role: "Head of Product",
    company: "Stackline",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    text: "The Figma-to-code accuracy was astounding. NUROST's design team delivered a component library that our in-house engineers are still using two years later. Zero rework.",
    rating: 5,
  },
  {
    id: "t7",
    name: "Leila Johansson",
    role: "Operations Director",
    company: "Nordic Ventures",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop",
    text: "Payroll and bookkeeping across 4 jurisdictions used to consume 3 days a month. NUROST reduced that to a 30-minute review. Professional, accurate, and always available.",
    rating: 5,
  },
  {
    id: "t8",
    name: "Kwame Asante",
    role: "Co-Founder",
    company: "Agritech Solutions",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
    text: "We gave NUROST our cloud chaos — undocumented AWS sprawl costing $18K/month. They audited, refactored, and cut our infrastructure bill to $6K without any downtime.",
    rating: 5,
  },
];
