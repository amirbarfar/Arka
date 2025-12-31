import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arka Engine | Visual Infrastructure for Teams",
  description: "Arka is an open-source visual engine for Next.js 15. Build production-grade apps with zero installation, optimized SEO, and professional React components.",
  keywords: ["Next.js 15", "React Components", "Tailwind CSS", "Design Engineering", "Arka"],
  openGraph: {
    title: "Arka Engine - Build at the speed of thought",
    description: "The fastest way to ship high-performance Next.js apps.",
    url: "https://arka-engine.dev",
    siteName: "Arka Engine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arka Engine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arka Engine | Visual Infrastructure",
    description: "Production-ready Next.js 15 components with 100/100 Lighthouse scores.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
