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
const TRIAL_ENABLED = true;

// beehiiv subscribe link for The Weekly Open Desk. The newsletter section shows once this is set.
const NEWSLETTER_URL = "https://winsights.beehiiv.com/subscribe?utm_source=website&utm_medium=homepage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const page = fs.readFileSync(path.join(process.cwd(), "content", "home-v2.html"), "utf8");
  const trial = TRIAL_ENABLED
    ? fs.readFileSync(path.join(process.cwd(), "content", "trial-section.html"), "utf8")
    : "";
  const newsletter = NEWSLETTER_URL
    ? fs
        .readFileSync(path.join(process.cwd(), "content", "newsletter-section.html"), "utf8")
        .replace("__NEWSLETTER_URL__", NEWSLETTER_URL)
    : "";
  let html = page
    .replace("<!--TRIAL_SECTION-->", trial)
    .replace("<!--NEWSLETTER_SECTION-->", newsletter);
  if (TRIAL_ENABLED) {
    html = html.replace(">See what’s inside</a>", ">Try it free for 7 days</a>").replace('<a href="#inside" style="color: #FFFFFF; text-decoration: none; font-weight: 500; font-size: 18px; padding: 16px 26px', '<a href="#trial" style="color: #FFFFFF; text-decoration: none; font-weight: 500; font-size: 18px; padding: 16px 26px');
  }
  return <main className={caslon.variable} dangerouslySetInnerHTML={{ __html: html }} />;
}
