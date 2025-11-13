"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import { content } from "@/lib/content";
import Image from "next/image";

export default function TradePnL() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
  };

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-light-grey to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            Trade Performance
          </h2>
          <p className="text-lg text-primary-dark max-w-2xl mx-auto">
            Real results from our trading community
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {content.tradePnL.map((item) => (
              <div key={item.id} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                  <div className="relative w-full h-96 bg-neutral-light-grey flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📈</div>
                      <p className="text-primary-dark text-lg">
                        {item.alt}
                      </p>
                      <p className="text-primary-dark text-sm mt-2 opacity-70">
                        Placeholder for trade PnL chart
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

