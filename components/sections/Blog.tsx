"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import SectionReveal from "@/components/shared/SectionReveal";

const categoryColors: Record<string, string> = {
  "React & Next.js": "#2563EB",
  "Mobile Development": "#7C3AED",
  "Agency Life": "#10B981",
};

export default function Blog() {
  return (
    <section id="blog" className="section-pad relative">
      <div className="section-container">
        <SectionReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="tag-pill mb-3 inline-block">Insights</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-syne, sans-serif)" }}
            >
              Thinking Out{" "}
              <span className="gradient-text">Loud</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs sm:text-right leading-relaxed">
            Practical insights from our team on software, AI, cloud, and financial strategy.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <SectionReveal key={post.id} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
              <article className="group glass-card rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                {/* Cover */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${categoryColors[post.category] ?? "#2563EB"}20`,
                      color: categoryColors[post.category] ?? "#60A5FA",
                      border: `1px solid ${categoryColors[post.category] ?? "#2563EB"}30`,
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white"
                      style={{ background: post.authorColor }}
                    >
                      {post.authorInitials}
                    </div>
                    <span className="text-xs text-slate-500">{post.author}</span>
                    <span className="text-slate-700">·</span>
                    <span className="flex items-center gap-1 text-xs text-slate-600">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors flex-1"
                    style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-600">{post.publishedAt}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      Read More <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
