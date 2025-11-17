"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function WhoWeAre() {
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
        duration: isMobile ? 0 : 0.6, // Instant on mobile
      },
    },
  };

  return (
    <section
      id="who-we-are"
      className="py-24 bg-gradient-to-br from-neutral-light-grey via-blue-50 to-neutral-light-grey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
              {content.whoWeAre.title}
            </h2>
            <p className="text-lg text-primary-dark max-w-4xl mx-auto leading-relaxed mb-8">
              {content.whoWeAre.mainContent}
            </p>
            <a
              href={content.hero.subscriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-blue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              Join Now
            </a>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
              {content.whoWeAre.title}
            </h2>
            <p className="text-lg text-primary-dark max-w-4xl mx-auto leading-relaxed mb-8">
              {content.whoWeAre.mainContent}
            </p>
            <a
              href={content.hero.subscriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-blue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              Join Now
            </a>
          </motion.div>
        )}

        {isMobile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoWeAre.features.map((feature, index) => {
              // Get icon based on feature title
              const getIcon = () => {
                if (feature.title.toLowerCase().includes("newsfeed") || feature.title.toLowerCase().includes("custom")) {
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  );
                }
                if (feature.title.toLowerCase().includes("24/7") || feature.title.toLowerCase().includes("help")) {
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  );
                }
                if (feature.title.toLowerCase().includes("win rate") || feature.title.toLowerCase().includes("96")) {
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  );
                }
                if (feature.title.toLowerCase().includes("community")) {
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  );
                }
                return (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                );
              };

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-primary-blue/20 hover:border-primary-blue/40 text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-white">
                      {getIcon()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-primary-dark leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
          {content.whoWeAre.features.map((feature, index) => {
            // Get icon based on feature title
            const getIcon = () => {
              if (feature.title.toLowerCase().includes("newsfeed") || feature.title.toLowerCase().includes("custom")) {
                return (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                );
              }
              if (feature.title.toLowerCase().includes("24/7") || feature.title.toLowerCase().includes("help")) {
                return (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                );
              }
              if (feature.title.toLowerCase().includes("win rate") || feature.title.toLowerCase().includes("96")) {
                return (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                );
              }
              if (feature.title.toLowerCase().includes("community")) {
                return (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                );
              }
              return (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              );
            };

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={isMobile ? undefined : { y: -8, scale: 1.03 }}
                className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-primary-blue/20 hover:border-primary-blue/40 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <div className="text-white">
                    {getIcon()}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-primary-dark leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
          </motion.div>
        )}
      </div>
    </section>
  );
}

