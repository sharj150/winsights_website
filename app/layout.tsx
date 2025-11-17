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
  metadataBase: new URL("https://winsights.info"),
  title: {
    default: "WINSIGHTS - The number 1 UK trading group",
    template: "%s | WINSIGHTS",
  },
  description: "The number 1 UK trading group. Join our flourishing community making thousands daily. £30/month for 24/7 support, 96% win rate signals, and comprehensive trading education.",
  keywords: [
    "UK trading group",
    "trading signals",
    "crypto trading",
    "forex trading",
    "stock trading",
    "trading education",
    "trading community",
    "UK traders",
    "trading signals UK",
    "crypto signals",
    "forex signals",
  ],
  authors: [{ name: "WINSIGHTS" }],
  creator: "WINSIGHTS",
  publisher: "WINSIGHTS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://winsights.info",
    siteName: "WINSIGHTS",
    title: "WINSIGHTS - The number 1 UK trading group",
    description: "The number 1 UK trading group. Join our flourishing community making thousands daily. £30/month for 24/7 support, 96% win rate signals, and comprehensive trading education.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WINSIGHTS - The number 1 UK trading group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WINSIGHTS - The number 1 UK trading group",
    description: "The number 1 UK trading group. Join our flourishing community making thousands daily.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#001470" />
        <link rel="canonical" href="https://winsights.info" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WINSIGHTS",
              description: "The number 1 UK trading group",
              url: "https://winsights.info",
              logo: "https://winsights.info/favicon.svg",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
              },
              offers: {
                "@type": "Offer",
                price: "30",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                description: "Monthly subscription to WINSIGHTS trading group",
              },
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

