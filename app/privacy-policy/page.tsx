import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Privacy Policy — NUROST",
  description: "How NUROST collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `NUROST LTD ("NUROST", "we", "us", or "our") is a company registered in England and Wales (Company No. 00000000), with registered offices in the United Kingdom. We operate software engineering and financial services with delivery operations in Lahore, Pakistan.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nurost.dev or engage our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: `We may collect information about you in a variety of ways:

**Personal Data You Provide**
When you contact us, request a quote, or engage our services, we collect: your name, email address, phone number, company name, project description, and any other information you voluntarily provide.

**Automatically Collected Data**
When you visit our website, our servers may log standard data including your IP address, browser type, operating system, referring URLs, pages visited, and time spent on pages. This data does not identify you personally.

**Communications**
If you correspond with us by email or through contact forms, we retain the content of your messages and our responses.`,
  },
  {
    id: "use-of-information",
    title: "3. How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your enquiries and provide requested services
• Send project updates, invoices, and contractual communications
• Improve our website and service offerings
• Comply with legal obligations under UK and international law
• Prevent fraud and ensure the security of our systems
• Send occasional marketing communications (only with your explicit consent)

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing (UK GDPR)",
    content: `As a UK-registered company, we process your personal data under the following lawful bases as defined by the UK General Data Protection Regulation (UK GDPR):

• **Contract**: Processing necessary to fulfil or prepare a contract with you
• **Legitimate Interests**: Improving our services, maintaining security, and business communications
• **Consent**: Where you have explicitly opted in to marketing communications
• **Legal Obligation**: Where we are required to process data by law

You have the right to withdraw consent at any time without affecting the lawfulness of processing before withdrawal.`,
  },
  {
    id: "data-sharing",
    title: "5. Sharing Your Information",
    content: `We may share your information with:

• **Service Providers**: Third-party vendors who assist in operating our website and delivering services (e.g., cloud hosting, payment processors, email platforms). These parties are contractually bound to keep your data confidential.
• **Professional Advisors**: Lawyers, accountants, and insurers where necessary.
• **Law Enforcement**: When required by applicable law, court order, or governmental authority.
• **Business Transfers**: In the event of a merger, acquisition, or sale of company assets.

We do not transfer your personal data outside the UK/EEA without ensuring appropriate safeguards are in place (e.g., Standard Contractual Clauses).`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law.

• Client project data: retained for 7 years following project completion (UK tax and legal requirements)
• Marketing enquiries: retained for 2 years if no engagement follows
• Website analytics: retained for 26 months

You may request deletion of your data at any time (subject to legal retention obligations) by contacting us at privacy@nurost.dev.`,
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: `Under UK GDPR, you have the following rights:

• **Right of Access**: Request a copy of the personal data we hold about you
• **Right to Rectification**: Request correction of inaccurate or incomplete data
• **Right to Erasure**: Request deletion of your data ("right to be forgotten")
• **Right to Restrict Processing**: Request that we limit how we use your data
• **Right to Data Portability**: Receive your data in a structured, machine-readable format
• **Right to Object**: Object to processing based on legitimate interests or for direct marketing

To exercise any of these rights, contact us at privacy@nurost.dev. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
  {
    id: "security",
    title: "8. Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include:

• Encrypted data transmission (TLS/HTTPS)
• Access controls and authentication protocols
• Regular security assessments
• Staff training on data protection

No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    id: "cookies",
    title: "9. Cookies",
    content: `Our website uses only essential cookies required for basic site functionality. We do not use tracking or advertising cookies. A detailed Cookie Policy will be published separately.

You can control cookies through your browser settings. Disabling cookies may affect certain features of the site.`,
  },
  {
    id: "third-party-links",
    title: "10. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of every website you visit.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:

**NUROST LTD**
Email: privacy@nurost.dev
General: support@nurost.com
Website: nurost.dev

We aim to respond to all privacy-related enquiries within 5 business days.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">

      {/* Nav bar */}
      <header className="sticky top-0 z-50 border-b border-white/6 bg-[#020617]/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="NUROST home">
            <Logo size="md" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* Page header */}
        <div className="mb-14">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)" }}
          >
            Legal
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last updated: <span className="text-slate-400">June 2025</span> &nbsp;·&nbsp; Effective: <span className="text-slate-400">June 2025</span>
          </p>
          <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-2xl">
            This policy describes how NUROST LTD collects, uses, and protects your personal
            data in compliance with the UK General Data Protection Regulation (UK GDPR) and
            the Data Protection Act 2018.
          </p>
        </div>

        {/* Table of contents */}
        <nav
          className="mb-14 rounded-2xl p-6"
          style={{
            background: "rgba(11,14,20,0.7)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
          aria-label="Table of contents"
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Contents</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-150"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-syne, sans-serif)" }}
              >
                {s.title}
              </h2>
              <div className="text-slate-400 text-[15px] leading-[1.8] space-y-3 whitespace-pre-line">
                {s.content.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: para.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-200 font-semibold">$1</strong>'),
                    }}
                  />
                ))}
              </div>
              <div className="mt-8 h-px bg-white/5" />
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 rounded-2xl p-6 text-center" style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.18)" }}>
          <p className="text-slate-400 text-sm">
            Questions about this policy?{" "}
            <a href="mailto:privacy@nurost.dev" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              privacy@nurost.dev
            </a>
          </p>
        </div>

      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/6 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 NUROST LTD. Registered in England &amp; Wales.</p>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
