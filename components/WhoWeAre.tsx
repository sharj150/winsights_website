"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";

export default function WhoWeAre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      id="who-we-are"
      className="py-24 bg-white"
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
            {content.whoWeAre.title}
          </h2>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto leading-relaxed">
            {content.whoWeAre.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {content.whoWeAre.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-neutral-light-grey p-8 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-primary-dark leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

