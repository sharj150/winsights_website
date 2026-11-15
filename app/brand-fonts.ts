import localFont from "next/font/local";

// Brand fonts are stored in the repo (app/fonts/) instead of being fetched from
// Google Fonts at build time, so a Google Fonts outage can't break a deploy.

export const leagueSpartan = localFont({
  src: "./fonts/LeagueSpartan-Variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-league-spartan",
});

export const caslon = localFont({
  src: "./fonts/LibreCaslonText-Variable.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-caslon",
});
