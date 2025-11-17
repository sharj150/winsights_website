import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import HowItWorks from "@/components/HowItWorks";
import WhatWeDo from "@/components/WhatWeDo";
import TradingSignals from "@/components/TradingSignals";
import Success from "@/components/Success";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" role="main">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <TradingSignals />
      <HowItWorks />
      <WhatWeDo />
      <Success />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}

