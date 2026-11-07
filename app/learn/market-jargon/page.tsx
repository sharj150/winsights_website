import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Market jargon decoded: 50 trading and investing terms explained" },
  description:
    "Plain-English definitions of the trading and investing terms you'll hear most, from ISAs and gilts to pips, leverage and CPI. Written for UK investors.",
  alternates: { canonical: "/learn/market-jargon" },
  openGraph: {
    type: "article",
    url: "/learn/market-jargon",
    title: "Market jargon, decoded | Winsights",
    description: "50 trading and investing terms explained in plain English, written for UK investors.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const read = (file: string) => fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");

export default function MarketJargonPage() {
  const ld = JSON.parse(read("glossary-ld.json")) as object[];
  return (
    <>
      {ld.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
      <main dangerouslySetInnerHTML={{ __html: read("glossary.html") }} />
    </>
  );
}
