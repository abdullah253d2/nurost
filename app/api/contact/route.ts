import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
      remoteip: ip,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, message, token } = body;

    // Validate required fields
    if (!name || !email || !message || !token) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Verify Turnstile
    const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for") ?? "";
    const isHuman = await verifyTurnstile(token, ip);
    if (!isHuman) {
      return NextResponse.json({ error: "CAPTCHA verification failed. Please try again." }, { status: 400 });
    }

    // Send notification email to NUROST
    await transporter.sendMail({
      from: `"NUROST Contact Form" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
          <div style="background:#020617;padding:24px 32px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:20px">New Contact Form Submission</h2>
            <p style="color:#94a3b8;margin:6px 0 0;font-size:14px">nurost.dev</p>
          </div>
          <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:130px">Name</td><td style="padding:8px 0;font-weight:600;font-size:14px">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:8px 0;color:#64748b;font-size:13px">Company</td><td style="padding:8px 0;font-size:14px">${company}</td></tr>` : ""}
              ${service ? `<tr><td style="padding:8px 0;color:#64748b;font-size:13px">Service</td><td style="padding:8px 0;font-size:14px">${service}</td></tr>` : ""}
            </table>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0" />
            <p style="color:#64748b;font-size:13px;margin:0 0 8px">Message</p>
            <p style="font-size:14px;line-height:1.7;margin:0;white-space:pre-line">${message}</p>
            <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0">
              <a href="mailto:${email}" style="background:#2563eb;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the enquirer
    await transporter.sendMail({
      from: `"NUROST" <${process.env.ZOHO_USER}>`,
      to: email,
      subject: "We received your message — NUROST",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
          <div style="background:#020617;padding:24px 32px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:20px">Thanks, ${name.split(" ")[0]}.</h2>
            <p style="color:#94a3b8;margin:6px 0 0;font-size:14px">We got your message.</p>
          </div>
          <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
            <p style="font-size:15px;line-height:1.7">Our team will review your enquiry and get back to you within <strong>4 business hours</strong> (Mon–Fri, 9am–6pm PKT).</p>
            <p style="font-size:14px;color:#64748b;line-height:1.7">In the meantime, feel free to reply to this email with any additional details.</p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0" />
            <p style="font-size:13px;color:#94a3b8;margin:0">NUROST LTD · UK Registered · Lahore Operations<br/>support@nurost.com · nurost.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] API error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
