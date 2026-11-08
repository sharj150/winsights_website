import type { Metadata } from "next";
import { StaticPage } from "@/lib/static-page";

export const metadata: Metadata = {
  title: { absolute: "How to choose a trading community in the UK: 10 red flags" },
  description:
    "The 10 red flags to check before you pay for a trading or investing group in the UK, what a good one looks like, and a quick checklist.",
  alternates: { canonical: "/learn/choosing-a-trading-community" },
  openGraph: {
    type: "article",
    url: "/learn/choosing-a-trading-community",
    title: "How to choose a trading community in the UK: 10 red flags",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ChoosingCommunityPage() {
  return <StaticPage html="guide-choosing-community.html" ld="guide-choosing-community-ld.json" />;
}
