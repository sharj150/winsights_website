import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { caslon } from "./brand-fonts";
import Script from "next/script";
import { renderHome, REELS } from "@/lib/home";
import CarouselControls from "@/components/CarouselControls";
import HeroFx from "@/components/HeroFx";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// The homepage is content/home-v2.html with its header swapped for the full-screen
// interactive hero in content/hero-v3.html (live TradingView data, split-flap headline).
function homeHtml(): string {
  const home = renderHome("home-v2.html");
  const start = home.indexOf("<header");
  const end = home.indexOf("</header>") + "</header>".length;
  const hero = fs.readFileSync(path.join(process.cwd(), "content", "hero-v3.html"), "utf8");
  return home.slice(0, start) + hero + home.slice(end);
}

export default function Home() {
  return (
    <>
      <main className={caslon.variable} dangerouslySetInnerHTML={{ __html: homeHtml() }} />
      <CarouselControls />
      <HeroFx />
      {REELS.length > 0 && <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />}
    </>
  );
}
