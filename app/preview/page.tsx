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
  title: "Preview",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return <main className={caslon.variable} dangerouslySetInnerHTML={{ __html: renderHome("home-v3.html") }} />;
}
