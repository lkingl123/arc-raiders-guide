import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arc Raiders Item Guide",
  description: "Search and filter Arc Raiders items - Know what to keep, upgrade, or recycle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
