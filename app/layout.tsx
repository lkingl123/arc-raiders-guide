import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arc Raiders Item Guide - Should You Sell or Recycle? | 275+ Items Database",
  description: "Instant Arc Raiders item lookup for 275+ items. Search any item to see if you should sell, recycle, or save it. Get sell prices, recycle materials, and quest info.",
  keywords: ["Arc Raiders", "Arc Raiders guide", "Arc Raiders items", "Arc Raiders recycle", "Arc Raiders sell", "Arc Raiders loot", "Arc Raiders database", "Arc Raiders wiki"],
  authors: [{ name: "Arc Raiders Guide" }],
  creator: "Arc Raiders Guide",
  publisher: "Arc Raiders Guide",
  metadataBase: new URL("https://arc-raiders-guide.vercel.app"),
  alternates: {
    canonical: "https://arc-raiders-guide.vercel.app",
  },
  openGraph: {
    title: "Arc Raiders Item Guide - 275+ Items Database",
    description: "Search any Arc Raiders item instantly. Know what to sell, recycle, or save with our complete item database.",
    url: "https://arc-raiders-guide.vercel.app",
    siteName: "Arc Raiders Item Guide",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc Raiders Item Guide - 275+ Items Database",
    description: "Search any Arc Raiders item instantly. Know what to sell, recycle, or save.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4290113640153842"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
