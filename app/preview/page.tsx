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

export const metadata: Metadata = {
  title: "Preview",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  const html = fs.readFileSync(path.join(process.cwd(), "content", "home-v2.html"), "utf8");
  return <div className={caslon.variable} dangerouslySetInnerHTML={{ __html: html }} />;
}
