import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KPL Plastering Services | Bespoke Media Walls Rotherham",
  description:
    "Bespoke media walls, floating bulkheads, Venetian plaster, wall panelling and feature lighting from KPL Plastering Services in Rotherham.",

  openGraph: {
    title: "KPL Plastering Services",
    description:
      "Bespoke media walls, floating bulkheads and high-end feature finishes across Rotherham and South Yorkshire.",
    siteName: "KPL Plastering Services",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KPL Plastering Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KPL Plastering Services",
    description:
      "Bespoke media walls, floating bulkheads and high-end feature finishes across Rotherham and South Yorkshire.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
