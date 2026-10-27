import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import { renderHome } from "@/lib/home";

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
  return <main className={caslon.variable} dangerouslySetInnerHTML={{ __html: renderHome("home-v2.html") }} />;
}
