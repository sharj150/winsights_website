"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { content } from "@/lib/content";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const suffix = value.replace(/[0-9]/g, "");
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const displayValue = value.includes("%")
    ? `${count}%`
    : value.includes("$")
    ? `$${count.toLocaleString()}${value.includes("M") ? "M" : ""}${value.includes("K") ? "K" : ""}+`
    : value.includes("K")
    ? `${count}K+`
    : value.includes("/")
    ? value
    : `${count.toLocaleString()}+`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-primary-blue mb-4">
        {isInView ? displayValue : "0"}
      </div>
      <div className="text-lg text-primary-dark font-medium">{label}</div>
    </motion.div>
  );
}

export default function Success() {
  return (
    <section
      id="success"
      className="py-24 bg-gradient-to-br from-primary-dark to-primary-blue"
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
            {content.success.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.success.metrics.map((metric, index) => (
            <AnimatedCounter
              key={index}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

