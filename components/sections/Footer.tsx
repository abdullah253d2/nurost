"use client";

import Link from "next/link";
import Logo from "@/components/logo";

const SocialLinkedin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const SocialInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const SocialFacebook = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const footerLinks: Record<string, { label: string; href: string }[]> = {
  "IT Services": [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "SEO & Marketing", href: "#services" },
    { label: "AI / ML Solutions", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
  ],
  "Financial Services": [
    { label: "Bookkeeping", href: "#services" },
    { label: "Tax Consulting", href: "#services" },
    { label: "Payroll Management", href: "#services" },
    { label: "Financial Advisory", href: "#services" },
    { label: "CFO Services", href: "#services" },
  ],
  Company: [
    { label: "Our Process", href: "#process" },
    { label: "Our Team", href: "#team" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socials = [
  { icon: SocialLinkedin,  label: "LinkedIn",  href: "#" },
  { icon: SocialInstagram, label: "Instagram", href: "#" },
  { icon: SocialFacebook,  label: "Facebook",  href: "#" },
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
              NUROST LTD is a UK-registered software agency with engineering operations in
              Pakistan. We build web, mobile, and AI-powered products for clients in the
              UK, US, and globally.
            </p>

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
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider my-10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2026 NUROST LTD. Registered in England &amp; Wales.</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-600">All systems operational</span>
          </div>
          <p>United Kingdom · Pakistan · Remote Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
