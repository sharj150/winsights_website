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
  metadataBase: new URL("https://www.winsightsmarkets.com"),
  title: {
    default: "Markets made easy | Winsights",
    template: "%s | Winsights",
  },
  description: "Jargon-free market research and education for UK investors and traders. Daily briefings, a live newsfeed to your WhatsApp, a transparent portfolio and 1:1 support. Education only, not financial advice.",
  applicationName: "Winsights",
  authors: [{ name: "Winsights" }],
  creator: "Winsights",
  publisher: "Winsights Group Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Winsights",
    title: "Markets made easy | Winsights",
    description: "Jargon-free market research and education for UK investors and traders. Daily briefings, a live newsfeed to your WhatsApp, a transparent portfolio and 1:1 support. Education only, not financial advice.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Winsights: understand the market before you invest in it",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@joinwinsights",
    title: "Markets made easy | Winsights",
    description: "Jargon-free market research and education for UK investors and traders. Daily briefings, a live newsfeed to your WhatsApp, a transparent portfolio and 1:1 support. Education only, not financial advice.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ? {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#001470" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Winsights",
              legalName: "Winsights Group Limited",
              description: "Market research and education for UK investors and traders.",
              url: "https://www.winsightsmarkets.com",
              logo: "https://www.winsightsmarkets.com/icon-512.png",
              email: "winsights@winsightsmarkets.com",
              sameAs: [
                "https://instagram.com/joinwinsights/",
                "https://x.com/joinwinsights",
                "https://www.tiktok.com/@joinwinsights",
              ],
            }),
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

