import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import Script from "next/script";
import { renderHome, REELS } from "@/lib/home";
import CarouselControls from "@/components/CarouselControls";

const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-caslon",
});

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main className={caslon.variable} dangerouslySetInnerHTML={{ __html: renderHome("home-v2.html") }} />
      <CarouselControls />
      {REELS.length > 0 && <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />}
    </>
  );
}
