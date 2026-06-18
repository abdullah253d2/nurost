"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "NUROST rebuilt our entire client portal in 11 weeks. The code quality was exceptional — zero critical bugs in production for six months.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    name: "Sarah Okonkwo",
    role: "CTO, Finterra Capital",
  },
  {
    text: "We launched our SaaS MVP in 8 weeks with NUROST. The React Native app they delivered had a 4.8-star rating on launch day.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Marcus Webb",
    role: "Founder & CEO, TalentHive",
  },
  {
    text: "Our organic traffic grew 340% in six months after NUROST took over SEO and content. They architect information systems that rank.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "VP Marketing, CloudNine Logistics",
  },
  {
    text: "The AI pipeline NUROST built for our document processing cut manual review time by 78%. They understood our edge cases perfectly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    name: "James Holton",
    role: "Director of Engineering, Meridian SaaS",
  },
  {
    text: "NUROST's financial advisory team restructured our holding company and identified $240K in tax savings we were leaving on the table.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    name: "Amina Al-Rashid",
    role: "CFO, UrbanMesh Group",
  },
  {
    text: "The Figma-to-code accuracy was astounding. NUROST's design team delivered a component library our engineers are still using two years later.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    name: "Daniel Reyes",
    role: "Head of Product, Stackline",
  },
  {
    text: "Payroll and bookkeeping across 4 jurisdictions used to consume 3 days a month. NUROST reduced that to a 30-minute review.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    name: "Leila Johansson",
    role: "Operations Director, Nordic Ventures",
  },
  {
    text: "We gave NUROST our cloud chaos — undocumented AWS sprawl costing $18K/month. They cut our infrastructure bill to $6K without any downtime.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    name: "Kwame Asante",
    role: "Co-Founder, Agritech Solutions",
  },
  {
    text: "The implementation exceeded expectations. Their team is genuinely invested in your outcomes — not just checking boxes on a SOW.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    name: "Nadia Kowalski",
    role: "VP Engineering, Stackbridge",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
        >
          <div className="flex justify-center mb-4">
            <span className="tag-pill">Testimonials</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-center text-white"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Trusted by Teams{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-center mt-5 text-slate-400 text-lg">
            Don&apos;t take our word for it — here&apos;s what the companies we&apos;ve
            served have to say.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
