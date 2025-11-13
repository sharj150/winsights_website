import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import "./slick-custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Win Insights - Trading Success Platform",
  description: "Your Gateway to Trading Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

