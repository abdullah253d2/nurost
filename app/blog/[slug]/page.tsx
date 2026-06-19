import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { blogContent } from "@/lib/blog-content";
import Logo from "@/components/logo";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — NUROST`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const ContentComponent = blogContent[slug];
  if (!ContentComponent) notFound();

  const categoryColors: Record<string, string> = {
    "React & Next.js": "#2563EB",
    "Mobile Development": "#7C3AED",
    "Agency Life": "#10B981",
  };
  const catColor = categoryColors[post.category] ?? "#2563EB";

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* ── Top nav ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-white/6 bg-[#020617]/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="NUROST home">
            <Logo size="sm" />
          </Link>
          <Link
            href="/#blog"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={15} />
            Back to site
          </Link>
        </div>
      </nav>

      {/* ── Cover image ─────────────────────────────────────── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-[#020617]/20" />
      </div>

      {/* ── Article header ──────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 -mt-16 relative z-10">
        {/* Category */}
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5"
          style={{
            background: `${catColor}20`,
            color: catColor,
            border: `1px solid ${catColor}35`,
          }}
        >
          {post.category}
        </span>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-white leading-tight mb-7"
          style={{ fontFamily: "var(--font-syne, sans-serif)" }}
        >
          {post.title}
        </h1>

        {/* Author + meta row */}
        <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
              style={{ background: post.authorColor }}
            >
              {post.authorInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">{post.author}</p>
              <p className="text-xs text-slate-500">NUROST Engineering</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── Article body ────────────────────────────────────── */}
      <article className="max-w-2xl mx-auto px-6 pt-10 pb-20">
        <ContentComponent />
      </article>

      {/* ── CTA banner ──────────────────────────────────────── */}
      <div className="border-t border-white/6">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Working on something?
          </p>
          <p className="text-slate-400 mb-7 leading-relaxed">
            We're a small team of senior engineers. Tell us what you're building and we'll
            respond within 4 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Start a conversation →
          </Link>
        </div>
      </div>

      {/* ── Minimal footer ──────────────────────────────────── */}
      <div className="border-t border-white/6 py-8">
        <div className="max-w-2xl mx-auto px-6 flex items-center justify-between text-xs text-slate-600">
          <span>© 2025 NUROST LTD. Registered in England &amp; Wales.</span>
          <Link href="/" className="hover:text-slate-400 transition-colors">
            nurost.dev
          </Link>
        </div>
      </div>
    </div>
  );
}
