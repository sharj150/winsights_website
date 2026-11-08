import type { Metadata } from "next";
import { StaticPage } from "@/lib/static-page";

export const metadata: Metadata = {
  title: { absolute: "Learn the markets: free guides and glossary | Winsights" },
  description: "Free, plain-English guides to investing and trading for UK investors, plus a 50-term market jargon glossary.",
  alternates: { canonical: "/learn" },
  openGraph: { type: "website", url: "/learn", title: "Learn the markets, free | Winsights", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
};

export default function LearnPage() {
  return <StaticPage html="learn.html" ld="learn-ld.json" />;
}
