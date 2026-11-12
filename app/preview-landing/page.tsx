import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import { renderHome } from "@/lib/home";
import CarouselControls from "@/components/CarouselControls";
import HeroFx from "@/components/HeroFx";

const caslon = Libre_Caslon_Text({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--font-caslon" });

export const metadata: Metadata = {
  title: "Landing preview",
  robots: { index: false, follow: false },
};

// Preview of the full-screen interactive hero, swapped in above the current homepage.
export default function LandingPreview() {
  const home = renderHome("home-v2.html");
  const start = home.indexOf("<header");
  const end = home.indexOf("</header>") + "</header>".length;
  const hero = fs.readFileSync(path.join(process.cwd(), "content", "hero-v3.html"), "utf8");
  const html = home.slice(0, start) + hero + home.slice(end);
  return (
    <>
      <main className={caslon.variable} dangerouslySetInnerHTML={{ __html: html }} />
      <CarouselControls />
      <HeroFx />
    </>
  );
}
