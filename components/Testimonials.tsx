"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import { content } from "@/lib/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Testimonials() {
  const isMobile = useIsMobile();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-neutral-light-grey via-blue-50 to-neutral-light-grey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
              Testimonials
            </h2>
            <p className="text-lg text-primary-dark max-w-2xl mx-auto">
              See what our community of traders has to say about WINSIGHTS
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
              Testimonials
            </h2>
            <p className="text-lg text-primary-dark max-w-2xl mx-auto">
              See what our community of traders has to say about WINSIGHTS
            </p>
          </motion.div>
        )}

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                {isMobile ? (
                  <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl h-[500px] flex flex-col border border-primary-blue/10 shadow-lg">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-primary-dark mb-6 leading-relaxed italic flex-grow overflow-y-auto">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-primary-blue text-lg">
                        {testimonial.name}
                        {testimonial.age && `, ${testimonial.age}`}
                      </p>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl h-[500px] flex flex-col border border-primary-blue/10 shadow-lg"
                  >
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-primary-dark mb-6 leading-relaxed italic flex-grow overflow-y-auto">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-primary-blue text-lg">
                        {testimonial.name}
                        {testimonial.age && `, ${testimonial.age}`}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </Slider>
        </div>

        {/* Join Now Button */}
        {isMobile ? (
          <div className="text-center mt-12">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href={content.hero.subscriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-blue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              Join Now
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

