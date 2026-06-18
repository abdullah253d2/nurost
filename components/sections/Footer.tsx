"use client";

import { ArrowRight } from "lucide-react";
import Logo from "@/components/logo";

const SocialLinkedin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const SocialX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const SocialGithub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
const SocialYoutube = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#020617"/></svg>
);

const footerLinks = {
  "IT Services": [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "SEO & Marketing",
    "Content Writing",
    "AI / ML Solutions",
    "Cloud & DevOps",
  ],
  "Financial Services": [
    "Bookkeeping",
    "Tax Consulting",
    "Payroll Management",
    "Financial Advisory",
    "CFO Services",
    "M&A Support",
  ],
  Company: [
    "About NUROST",
    "Our Process",
    "Case Studies",
    "Careers",
    "Blog",
    "Contact",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Security",
  ],
};

const socials = [
  { icon: SocialLinkedin, label: "LinkedIn", href: "#" },
  { icon: SocialX, label: "X / Twitter", href: "#" },
  { icon: SocialGithub, label: "GitHub", href: "#" },
  { icon: SocialYoutube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-5" />
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              A global technology and financial services firm helping ambitious companies
              build, scale, and thrive — since 2017.
            </p>

            {/* Newsletter */}
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Stay Informed
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter sign-up"
            >
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 min-w-0 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 bg-white/4 border border-white/8 focus:border-blue-500/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer flex-shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Socials */}
            <div className="flex gap-2 mt-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 transition-all duration-150"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-1">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider my-10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} NUROST Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-600">All systems operational</span>
          </div>
          <p>
            Registered in Dubai, UAE · NYSE: <span className="text-slate-500">NRST</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
