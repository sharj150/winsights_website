import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import { StaticPage } from "@/lib/static-page";

const caslon = Libre_Caslon_Text({ subsets: ["latin"], weight: ["400"], variable: "--font-caslon" });

export const metadata: Metadata = {
  title: { absolute: "About Winsights: UK market research and education desk" },
  description:
    "Winsights is a UK research and education desk for investors and traders, run by Winsights Group Limited (company number 16813424). Founded by Sharjeel Khatri.",
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: "About Winsights", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
};

export default function AboutPage() {
  return <StaticPage html="about.html" ld="about-ld.json" className={caslon.variable} />;
}
