import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";

const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-caslon",
});

// Set to true once the portal handles trial subscriptions (free-funnel plan, Phase 1).
const TRIAL_ENABLED = false;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const page = fs.readFileSync(path.join(process.cwd(), "content", "home-v2.html"), "utf8");
  const trial = TRIAL_ENABLED
    ? fs.readFileSync(path.join(process.cwd(), "content", "trial-section.html"), "utf8")
    : "";
  const html = page.replace("<!--TRIAL_SECTION-->", trial);
  return <main className={caslon.variable} dangerouslySetInnerHTML={{ __html: html }} />;
}
