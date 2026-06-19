import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Terms of Service — NUROST",
  description: "Terms and conditions governing your use of NUROST services.",
};

const sections = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    content: `By accessing nurost.dev or engaging NUROST LTD ("NUROST", "we", "us", "our") for services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, you are prohibited from using our website or services.

NUROST LTD is a company registered in England and Wales. These Terms constitute a legally binding agreement between you and NUROST LTD.`,
  },
  {
    id: "services",
    title: "2. Services",
    content: `NUROST provides software engineering, UI/UX design, mobile application development, cloud infrastructure, and financial services including bookkeeping, payroll, and CFO advisory.

The specific scope, deliverables, timelines, and pricing for any engagement are defined in a separate Statement of Work (SOW) or Project Agreement signed by both parties. In the event of a conflict between these Terms and a SOW, the SOW shall take precedence.

We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.`,
  },
  {
    id: "payments",
    title: "3. Payments and Fees",
    content: `**Project-Based Engagements**
Payment terms are defined in the relevant SOW. Standard terms require a deposit (typically 30–50%) before work commences, with the remaining balance due upon delivery or at agreed milestones.

**Retainer / Monthly Services**
Monthly services are invoiced at the start of each billing period. Invoices are due within 14 days of issue.

**Late Payments**
We reserve the right to charge interest on overdue amounts at 8% per annum above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.

**Currency**
All invoices are issued in GBP (£) unless otherwise agreed in writing. VAT is not charged to international clients.`,
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: `**Client Ownership Upon Full Payment**
Upon receipt of full payment for a project, NUROST assigns all intellectual property rights in the custom deliverables to the client. This includes source code, designs, and documentation created specifically for the engagement.

**NUROST Retained Rights**
NUROST retains ownership of: pre-existing tools, frameworks, libraries, and methodologies used in the delivery of services; general knowledge and skills developed during the engagement; and any open-source components, which remain subject to their respective licences.

**Portfolio Rights**
Unless the client requests otherwise in writing, NUROST reserves the right to reference the project in its portfolio and marketing materials without disclosing confidential details.`,
  },
  {
    id: "confidentiality",
    title: "5. Confidentiality",
    content: `Both parties agree to maintain the confidentiality of the other's proprietary information. Where a Non-Disclosure Agreement (NDA) is signed, its terms shall govern. Otherwise, both parties agree not to disclose confidential information to third parties without prior written consent.

This obligation survives the termination of the engagement for a period of three (3) years.`,
  },
  {
    id: "warranties",
    title: "6. Warranties and Representations",
    content: `NUROST warrants that:

• Services will be performed with reasonable skill and care by qualified engineers
• Deliverables will substantially conform to the agreed specifications
• We have the right to provide the services without infringing third-party rights

**Disclaimer**
Except as expressly stated above, all services are provided "as is." We do not warrant that software will be entirely error-free or uninterrupted. We will use reasonable efforts to resolve defects reported within the warranty period defined in the SOW (typically 30 days post-launch).`,
  },
  {
    id: "limitation",
    title: "7. Limitation of Liability",
    content: `To the fullest extent permitted by law:

• NUROST's total liability for any claim arising out of or in connection with an engagement shall not exceed the total fees paid by the client for that specific project in the 12 months preceding the claim.

• NUROST shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business opportunities, even if advised of the possibility of such damages.

• Nothing in these Terms limits liability for: death or personal injury caused by negligence; fraud or fraudulent misrepresentation; or any other liability that cannot be excluded under applicable law.`,
  },
  {
    id: "termination",
    title: "8. Termination",
    content: `Either party may terminate an engagement by providing 30 days' written notice. Upon termination:

• The client shall pay for all work completed to the date of termination
• NUROST will deliver all completed work and associated assets to the client
• Any confidentiality obligations survive termination

NUROST may terminate immediately if the client: fails to make payment after 14 days' notice; engages in unlawful activities; or breaches these Terms in a material way that is not remedied within 14 days of written notice.`,
  },
  {
    id: "acceptable-use",
    title: "9. Acceptable Use",
    content: `You agree not to use our website or services to:

• Violate any applicable law or regulation
• Transmit harmful, offensive, or unlawful content
• Infringe any intellectual property rights
• Attempt to gain unauthorised access to our systems
• Engage in any activity that disrupts or interferes with our services
• Request development of software designed to harm, deceive, or defraud others`,
  },
  {
    id: "third-party",
    title: "10. Third-Party Services",
    content: `Projects may incorporate third-party tools, APIs, frameworks, or cloud services. The client is responsible for reviewing and complying with the terms of such third-party services. NUROST is not responsible for changes in availability, pricing, or terms of third-party services after delivery.`,
  },
  {
    id: "force-majeure",
    title: "11. Force Majeure",
    content: `Neither party shall be in breach of these Terms or liable for delays caused by circumstances beyond their reasonable control, including acts of God, natural disasters, war, civil unrest, government actions, power outages, or internet service disruptions.

The affected party must notify the other as soon as practicable and make reasonable efforts to resume performance.`,
  },
  {
    id: "governing-law",
    title: "12. Governing Law and Disputes",
    content: `These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of England and Wales.

Before initiating formal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation for a period of 30 days.`,
  },
  {
    id: "changes",
    title: "13. Changes to These Terms",
    content: `We reserve the right to update these Terms at any time. Material changes will be communicated via email or a notice on our website at least 14 days before taking effect. Continued use of our services after that date constitutes acceptance of the updated Terms.`,
  },
  {
    id: "contact",
    title: "14. Contact",
    content: `For questions or concerns regarding these Terms of Service:

**NUROST LTD**
Email: legal@nurost.dev
General: support@nurost.com
Website: nurost.dev`,
  },
];

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm">
            Last updated: <span className="text-slate-400">June 2025</span> &nbsp;·&nbsp; Effective: <span className="text-slate-400">June 2025</span>
          </p>
          <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-2xl">
            Please read these Terms carefully before engaging NUROST LTD for services or
            using our website. By proceeding, you agree to be legally bound by these Terms.
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
            Questions about these terms?{" "}
            <a href="mailto:legal@nurost.dev" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              legal@nurost.dev
            </a>
          </p>
        </div>

      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/6 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 NUROST LTD. Registered in England & Wales.</p>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
