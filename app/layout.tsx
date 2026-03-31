import './globals.css'
import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from "next/font/google";
import { Providers } from "./providers";
import { SearchProvider } from "@/context/SearchContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "FreshDirect | Fresh Vegetables & Fruits Direct from Farmers",
  description:
    "Farm-to-door freshness without middlemen. 500+ trusted farmers, 24-hour delivery, 100% pesticide-free. Join 10,000+ happy families in Sri Lanka.",
  keywords:
    "fresh vegetables, organic fruits, farm-to-table, Sri Lanka, pesticide-free produce, farmers direct",
  openGraph: {
    title: "FreshDirect | Fresh Vegetables & Fruits Direct from Farmers",
    description: "Harvested today, delivered within 24 hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} font-sans`}
      >
        <SearchProvider>
          <Providers>{children}</Providers>
        </SearchProvider>
      </body>
    </html>
  );
}
