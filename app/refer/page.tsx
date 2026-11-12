import type { Metadata } from "next";
import { StaticPage } from "@/lib/static-page";

export const metadata: Metadata = {
  title: { absolute: "Refer a friend to Winsights and get a month free" },
  description: "Share Winsights with a friend. When they become a paying member, your next month is free. They can try it free for 7 days.",
  alternates: { canonical: "/refer" },
  openGraph: { type: "website", url: "/refer", title: "Refer a friend, get a month free | Winsights", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
};

export default function ReferPage() {
  return <StaticPage html="refer.html" ld="refer-ld.json" />;
}
