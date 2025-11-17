"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { content } from "@/lib/content";
import { useIsMobile } from "@/hooks/useIsMobile";

type PricingPlan = "monthly" | "quarterly" | "annually";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>("monthly");
  const isMobile = useIsMobile();

  const plans = {
    monthly: {
      price: "£30",
      period: "/month",
      description: "Perfect for getting started. Access all features with flexible monthly payments.",
      savings: null,
      subscriptionUrl: content.hero.subscriptionUrl,
      features: [
        "Full access to all signals",
        "24/7 community support",
        "Educational guides",
        "1:1 mentoring sessions",
        "All market coverage",
        "Custom Bloomberg-esque newsfeed right to your phone!"
      ],
    },
    quarterly: {
      price: "£75",
      period: "/quarter",
      description: "Save money with our quarterly plan.",
      savings: "SAVE 20%",
      subscriptionUrl: "https://buy.stripe.com/28E8wO6kafIph2Hd0m9R60d",
      features: [
        "Everything in Monthly",
        "20% discount",
        "Priority support",
        "Quarterly portfolio review",
      ],
    },
    annually: {
      price: "£300",
      period: "/year",
      description: "Best value option! Get 12 months for the price of 10—that's 2 months completely free!",
      savings: "2 MONTHS FREE",
      subscriptionUrl: "https://buy.stripe.com/cNi4gy6kaao5fYD8K69R60b",
      features: [
        "Everything in Quarterly",
        "2 months free",
        "Highest priority support",
        "Monthly portfolio reviews",
      ],
    },
  };

  const currentPlan = plans[selectedPlan];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-primary-dark to-primary-blue"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">WIN WITH </span>
              <span className="text-blue-400">WINSIGHTS</span>
            </h2>
            <p className="text-lg text-neutral-light-grey max-w-2xl mx-auto">
              Select the plan that works best for your trading journey
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">WIN WITH </span>
              <span className="text-blue-400">WINSIGHTS</span>
            </h2>
            <p className="text-lg text-neutral-light-grey max-w-2xl mx-auto">
              Select the plan that works best for your trading journey
            </p>
          </motion.div>
        )}

        {/* Pricing Tier Selector */}
        {isMobile ? (
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
              {(["monthly", "quarterly", "annually"] as PricingPlan[]).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`px-6 py-2 rounded-md font-semibold text-sm md:text-base transition-all duration-300 ${
                    selectedPlan === plan
                      ? "bg-primary-blue text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
              {(["monthly", "quarterly", "annually"] as PricingPlan[]).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`px-6 py-2 rounded-md font-semibold text-sm md:text-base transition-all duration-300 ${
                    selectedPlan === plan
                      ? "bg-primary-blue text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Card */}
        {isMobile ? (
          <div
            key={selectedPlan}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-black text-white">
                  {currentPlan.price}
                </span>
                <span className="text-xl text-neutral-light-grey">
                  {currentPlan.period}
                </span>
              </div>
              {currentPlan.savings && (
                <div className="inline-block mt-2">
                  <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {currentPlan.savings}
                  </span>
                </div>
              )}
              <p className="text-neutral-light-grey mt-6 max-w-2xl mx-auto">
                {currentPlan.description}
              </p>
            </div>

            {/* Features List */}
            <div className="mb-8 space-y-4">
              {currentPlan.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={currentPlan.subscriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${selectedPlan} access to WINSIGHTS`}
              className="block w-full bg-primary-blue text-white text-center px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
            >
              Get {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Access
            </a>
          </div>
        ) : (
          <motion.div
            key={selectedPlan}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-black text-white">
                  {currentPlan.price}
                </span>
                <span className="text-xl text-neutral-light-grey">
                  {currentPlan.period}
                </span>
              </div>
              {currentPlan.savings && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mt-2"
                >
                  <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {currentPlan.savings}
                  </span>
                </motion.div>
              )}
              <p className="text-neutral-light-grey mt-6 max-w-2xl mx-auto">
                {currentPlan.description}
              </p>
            </div>

            {/* Features List */}
            <div className="mb-8 space-y-4">
              {currentPlan.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href={currentPlan.subscriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${selectedPlan} access to WINSIGHTS`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-primary-blue text-white text-center px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
            >
              Get {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Access
            </motion.a>
          </motion.div>
        )}

        {/* Cancel at anytime text */}
        {isMobile ? (
          <div className="text-center mt-8">
            <p className="text-neutral-light-grey text-sm md:text-base flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              CANCEL AT ANYTIME
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-neutral-light-grey text-sm md:text-base flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              CANCEL AT ANYTIME
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

