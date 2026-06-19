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
  title: "NUROST — Web & Mobile Development Agency | Pakistan",
  description:
    "UK-registered software agency with engineering operations in Pakistan. React, Next.js, Laravel and React Native specialists. Delivering production-grade web and mobile apps for UK, US and global clients at competitive rates.",
  keywords: [
    "UK software agency",
    "UK registered web development company",
    "affordable UK web agency",
    "British tech company Pakistan",
    "web development agency Pakistan",
    "React Next.js developers",
    "mobile app development Lahore",
    "Laravel developers",
    "hire software engineers Pakistan",
    "React Native mobile development",
    "NUROST",
  ],
  authors: [{ name: "NUROST" }],
  creator: "NUROST",
  metadataBase: new URL("https://nurost.dev"),
  openGraph: {
    title: "NUROST — Web & Mobile Development Agency | Pakistan",
    description:
      "UK-registered software agency with engineering operations in Pakistan. React, Next.js, Laravel and React Native specialists. Production-grade software at competitive rates.",
    url: "https://nurost.dev",
    siteName: "NUROST",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NUROST" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NUROST — Web & Mobile Development Agency | Pakistan",
    description:
      "UK-registered software agency with engineering operations in Pakistan. React, Next.js, Laravel and React Native specialists. Production-grade software at competitive rates.",
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
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
