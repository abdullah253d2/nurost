"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import SectionReveal from "@/components/shared/SectionReveal";

const contactInfo = [
  { icon: Mail,   label: "Email",         value: "support@nurost.com", href: "mailto:support@nurost.com" },
  { icon: MapPin, label: "Headquarters",  value: "London, UK (Registered) · Lahore, Pakistan (Operations)", href: null },
  { icon: Clock,  label: "Response time", value: "Within 4 business hours (PKT / GMT+5) · Mon–Fri, 9am–6pm PKT", href: null },
];

const services = [
  "Web Development", "Mobile App", "UI/UX Design", "AI/ML Solution",
  "SEO & Marketing", "Cloud & DevOps", "Bookkeeping", "Tax Consulting",
  "Payroll", "Financial Advisory", "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [token, setToken]     = useState<string | null>(null);
  const [status, setStatus]   = useState<Status>("idle");
  const [errMsg, setErrMsg]   = useState("");
  const turnstileRef          = useRef<TurnstileInstance>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) { setErrMsg("Please complete the CAPTCHA."); return; }

    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        turnstileRef.current?.reset();
        setToken(null);
      } else {
        setStatus("success");
      }
    } catch {
      setErrMsg("Network error. Please check your connection and try again.");
      setStatus("error");
      turnstileRef.current?.reset();
      setToken(null);
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="section-container">
        <SectionReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block">Get in Touch</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
          >
            Let&apos;s Talk About{" "}
            <span className="gradient-text">Your Project.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll respond within 4 business hours with
            an honest assessment — no hard sell.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Sidebar */}
          <SectionReveal direction="left" className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-600/25 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium uppercase tracking-wider mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-slate-300 hover:text-blue-400 transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm text-slate-300">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white mb-3">Why companies choose NUROST</h3>
              <ul className="flex flex-col gap-2">
                {[
                  "UK registered company — invoice in GBP, EUR or USD",
                  "You talk directly to the engineers — no account managers",
                  "Weekly demos so you see progress every sprint",
                  "Fixed-scope pricing — no surprise invoices",
                  "Full source code and IP ownership transferred to you",
                  "Post-launch support included in every project",
                  "NDA signed before any discussion begins",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle size={12} className="text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal direction="right" className="lg:col-span-3">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-96"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mb-5">
                  <CheckCircle size={28} className="text-emerald-400" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                >
                  Message Received!
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  We&apos;ll review your request and follow up within 4 business hours. Check your inbox for a confirmation.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-7 flex flex-col gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Full Name *</label>
                    <input
                      id="name" type="text" required
                      value={form.name} onChange={set("name")}
                      placeholder="Jane Smith"
                      className="rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 bg-white/4 border border-white/8 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Work Email *</label>
                    <input
                      id="email" type="email" required
                      value={form.email} onChange={set("email")}
                      placeholder="jane@company.com"
                      className="rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 bg-white/4 border border-white/8 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Company</label>
                  <input
                    id="company" type="text"
                    value={form.company} onChange={set("company")}
                    placeholder="Acme Corp"
                    className="rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 bg-white/4 border border-white/8 focus:border-blue-500/50 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Service Interested In</label>
                  <select
                    id="service"
                    value={form.service} onChange={set("service")}
                    className="rounded-xl px-4 py-3 text-sm text-slate-200 bg-white/4 border border-white/8 focus:border-blue-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-900">Select a service</option>
                    {services.map((s) => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tell Us About Your Project *</label>
                  <textarea
                    id="message" required rows={4}
                    value={form.message} onChange={set("message")}
                    placeholder="Briefly describe what you're building, your timeline, and any specific requirements..."
                    className="rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 bg-white/4 border border-white/8 focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Turnstile CAPTCHA */}
                <div className="flex flex-col gap-1.5">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={setToken}
                    onExpire={() => setToken(null)}
                    onError={() => { setToken(null); setErrMsg("CAPTCHA failed to load. Please refresh the page."); }}
                    options={{ theme: "dark", size: "normal" }}
                  />
                </div>

                {/* Error message */}
                {errMsg && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle size={15} className="flex-shrink-0" />
                    {errMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || !token}
                  className="btn-primary justify-center py-4 text-base mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>

                <p className="text-xs text-slate-600 text-center">
                  By submitting you agree to our{" "}
                  <a href="/privacy-policy" className="text-slate-500 hover:text-slate-400 transition-colors underline underline-offset-2">privacy policy</a>.
                  We never share your data.
                </p>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
