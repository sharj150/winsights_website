"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function TradingSignals() {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, ...(isMobile ? {} : { y: 30 }) },
    visible: {
      opacity: 1,
      ...(isMobile ? {} : { y: 0 }),
      transition: {
        duration: isMobile ? 0 : 0.6,
      },
    },
  };

  return (
    <section
      id="trading-signals"
      className="py-24 bg-primary-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.tradingSignals.title}
            </h2>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.tradingSignals.title}
            </h2>
          </motion.div>
        )}

        {isMobile ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.tradingSignals.cards.map((card, index) => (
              <div
                key={index}
                className="bg-primary-dark border border-neutral-light-grey border-opacity-20 p-8 rounded-xl flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {card.title}
                </h3>
                <p className="text-white leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>
                <a
                  href={card.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 text-center uppercase"
                >
                  {card.buttonText}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {content.tradingSignals.cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-primary-dark border border-neutral-light-grey border-opacity-20 p-8 rounded-xl flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {card.title}
                </h3>
                <p className="text-white leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>
                <motion.a
                  href={card.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 text-center uppercase"
                >
                  {card.buttonText}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

