"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="py-24 bg-gradient-to-br from-primary-blue via-primary-dark to-primary-blue min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dashboard
          </h2>
          <p className="text-lg text-neutral-light-grey max-w-2xl mx-auto mb-10">
            Access your personalized trading dashboard with real-time insights and analytics
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-light-grey transition-all duration-300 shadow-xl"
          >
            Access Dashboard
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { title: "Portfolio Overview", icon: "📊" },
            { title: "Market Analysis", icon: "📈" },
            { title: "Trade History", icon: "💼" },
            { title: "Performance Metrics", icon: "🎯" },
            { title: "Risk Management", icon: "🛡️" },
            { title: "Real-time Alerts", icon: "🔔" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl border border-white border-opacity-20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-light-grey">
                Comprehensive tools and insights for better trading decisions
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

