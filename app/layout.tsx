import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NUROST — Global IT & Financial Services",
  description:
    "NUROST is a world-class technology and financial services firm. We build software, design experiences, and manage finances for ambitious companies worldwide.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "UI/UX design",
    "SEO",
    "digital marketing",
    "AI solutions",
    "cloud devops",
    "bookkeeping",
    "tax consulting",
    "payroll",
    "financial advisory",
    "NUROST",
  ],
  authors: [{ name: "NUROST" }],
  creator: "NUROST",
  metadataBase: new URL("https://nurost.dev"),
  openGraph: {
    title: "NUROST — Global IT & Financial Services",
    description: "World-class technology and financial services for ambitious companies.",
    url: "https://nurost.dev",
    siteName: "NUROST",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NUROST" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NUROST — Global IT & Financial Services",
    description: "World-class technology and financial services for ambitious companies.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
