"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { content } from "@/lib/content";
import { useIsMobile } from "@/hooks/useIsMobile";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      const suffix = value.replace(/[0-9.]/g, "");
      
      // On mobile, set value instantly to reduce memory usage
      if (isMobile) {
        setCount(numericValue);
        return;
      }

      // On desktop, animate the counter
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
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, isMobile]);

  const displayValue = value.includes("%")
    ? value.includes(".")
    ? `${count.toFixed(1)}%`
    : `${count}%`
    : value.includes("£") && value.includes("M")
    ? `£${count.toLocaleString()}M+`
    : value.includes("£") && value.includes("+")
    ? `£${count.toLocaleString()}+`
    : value.includes("£")
    ? `£${count.toLocaleString()}`
    : value.includes("$")
    ? `$${count.toLocaleString()}${value.includes("M") ? "M" : ""}${value.includes("K") ? "K" : ""}+`
    : value.includes("K")
    ? `${count}K+`
    : value.includes("/")
    ? value
    : `${count.toLocaleString()}+`;

  // On mobile, use simple div without animations
  if (isMobile) {
    return (
      <div ref={ref} className="text-center">
        <div className="text-5xl md:text-6xl font-bold text-white mb-4">
          {isInView ? displayValue : "0"}
        </div>
        <div className="text-lg text-neutral-light-grey font-medium">{label}</div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-4">
        {isInView ? displayValue : "0"}
      </div>
      <div className="text-lg text-neutral-light-grey font-medium">{label}</div>
    </motion.div>
  );
}

export default function Success() {
  const isMobile = useIsMobile();
  
  const carouselSettings = {
    dots: false,
    infinite: !isMobile, // Disable infinite loop on mobile
    speed: isMobile ? 300 : 500, // Faster transitions on mobile
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isMobile, // Disable autoplay on mobile to save memory
    autoplaySpeed: 1500,
    pauseOnHover: true,
    arrows: !isMobile, // Hide arrows on mobile
    fade: !isMobile, // Disable fade on mobile (uses less memory)
  };

  return (
    <section
      id="success"
      className="py-24 bg-gradient-to-br from-primary-dark to-primary-blue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.success.title}
            </h2>
            <p className="text-lg text-neutral-light-grey max-w-2xl mx-auto mb-12">
              Real results from our trading community
            </p>
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
              {content.success.title}
            </h2>
            <p className="text-lg text-neutral-light-grey max-w-2xl mx-auto mb-12">
              Real results from our trading community
            </p>
          </motion.div>
        )}

        {/* Trade PnL Carousel */}
        {isMobile ? (
          <div className="max-w-5xl mx-auto mb-16">
            <Slider {...carouselSettings}>
              {content.tradePnL.map((item) => (
                <div key={item.id} className="px-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white border-opacity-20">
                    <div className="relative w-full h-[400px] md:h-[600px] bg-white bg-opacity-5">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <Slider {...carouselSettings}>
              {content.tradePnL.map((item) => (
                <div key={item.id} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white border-opacity-20"
                  >
                    <div className="relative w-full h-[600px] bg-white bg-opacity-5">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        unoptimized
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        )}

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {content.success.metrics.map((metric, index) => (
            <AnimatedCounter
              key={index}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>

        {/* Join Now Button */}
        {isMobile ? (
          <div className="text-center">
            <a
              href={content.hero.subscriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-blue px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-light-grey transition-all duration-300 shadow-xl"
            >
              Join Now
            </a>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href={content.hero.subscriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-blue px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-light-grey transition-all duration-300 shadow-xl"
            >
              Join Now
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

