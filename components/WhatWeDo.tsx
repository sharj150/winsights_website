"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";

export default function WhatWeDo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "chat":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case "devices":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "guides":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "support":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="what-we-do"
      className="py-24 bg-gradient-to-br from-neutral-light-grey via-blue-50 to-neutral-light-grey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            {content.whatWeDo.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch"
        >
          {content.whatWeDo.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-full flex flex-col"
            >
              {/* Vertical divider line - only show between columns */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-primary-blue opacity-20" />
              )}
              
              <div className="px-4 lg:px-6 h-full flex flex-col text-center items-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white mb-6">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-dark mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-primary-dark leading-relaxed mb-6 text-sm flex-grow">
                  {service.description}
                </p>

                {/* Button - Always at bottom */}
                <motion.a
                  href={content.hero.subscriptionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 w-full text-center uppercase mt-auto"
                >
                  JOIN NOW
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

