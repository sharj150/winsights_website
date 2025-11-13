import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Success from "@/components/Success";
import Testimonials from "@/components/Testimonials";
import TradePnL from "@/components/TradePnL";
import FAQ from "@/components/FAQ";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <Success />
      <TradePnL />
      <Testimonials />
      <FAQ />
      <Dashboard />
    </main>
  );
}

