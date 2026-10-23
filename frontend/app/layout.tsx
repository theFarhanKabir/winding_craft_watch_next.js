import type { Metadata, Viewport } from "next";
import { Crimson_Pro, DM_Sans, Oswald } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/components/Site";

const oswald = Oswald({ weight: "700", subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const crimson = Crimson_Pro({ weight: "600", subsets: ["latin"], variable: "--font-crimson", display: "swap" });
const dmSans = DM_Sans({ weight: "400", subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Winding Craft — Pre-owned watches, clearly presented", template: "%s | Winding Craft" },
  description: "100% verified & authentic pre-owned watch shop based in Bangladesh.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Browser extensions (the screenshot shows Grammarly) inject attributes on <body>
  // before React hydrates. Suppress only that root-element mismatch.
  return <html lang="en" className={`${oswald.variable} ${crimson.variable} ${dmSans.variable}`}><body suppressHydrationWarning><SiteProvider>{children}</SiteProvider></body></html>;
}
