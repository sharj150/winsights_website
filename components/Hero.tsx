"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/lib/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Hero() {
  const isMobile = useIsMobile();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue via-primary-dark to-primary-blue relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-32 lg:pt-40 pb-6 md:pb-8">
        <div className="text-center relative w-full overflow-x-hidden">
          {/* £30 Badge - Creative floating badge - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 1, scale: 1, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0 }}
            className="absolute top-4 md:top-6 lg:top-8 right-2 md:right-4 lg:right-8 xl:right-16"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -5, 0],
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              }}
              className="relative"
            >
              <div className="bg-primary-dark/80 backdrop-blur-sm border border-neutral-light-grey/30 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg shadow-lg">
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                    £30
                  </span>
                  <span className="text-white/80 text-xs md:text-sm lg:text-base font-medium">
                    /month
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Only: JUST £30 A MONTH! */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block sm:hidden mb-4"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue/90 to-primary-dark/90 backdrop-blur-sm border-2 border-white/30 rounded-full px-4 py-2.5 shadow-lg"
            >
              {/* Verified Checkmark */}
              <motion.svg
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                className="w-5 h-5 text-green-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </motion.svg>
              <span className="text-base font-bold text-white uppercase tracking-wide">
                £30 A MONTH
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight relative break-words px-2 sm:px-0"
          >
            {content.hero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-3 md:mb-4 font-semibold break-words px-3 sm:px-2 md:px-0"
          >
            {content.hero.subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="text-sm sm:text-base md:text-lg text-neutral-light-grey mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed px-6 sm:px-4 break-words"
            style={{ 
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
          >
            Join our flourishing community which is making thousands daily,
            <br className="block sm:hidden" />
            and catered for all skill levels!
          </motion.p>
          
          <a
            href={content.hero.subscriptionUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join WINSIGHTS trading group"
            className="inline-flex bg-white text-primary-blue px-8 py-3 md:px-10 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-neutral-light-grey transition-all duration-300 shadow-xl min-h-[48px] md:min-h-[52px] items-center justify-center mx-auto whitespace-nowrap"
          >
            {content.hero.cta}
          </a>
          </div>

        {/* Scrolling Success Images Banner */}
        <motion.div
          initial={{ opacity: 0.65 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: 0, duration: 0 }}
          className="mt-6 md:mt-8 lg:mt-10 w-full overflow-hidden"
        >
          <motion.div
            className="flex gap-2 md:gap-4"
            drag={!isMobile ? "x" : false}
            dragConstraints={!isMobile ? { left: -Infinity, right: 0 } : undefined}
            dragElastic={!isMobile ? 0.2 : undefined}
            animate={{
              x: [0, -(content.tradePnL.length * 280)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 78 * (content.tradePnL.length / content.testimonials.length),
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {[...content.tradePnL, ...content.tradePnL, ...content.tradePnL].map((item, index) => (
              <div
                key={`image-${item.id}-${index}`}
                className="flex-shrink-0 w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-72 lg:h-48 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg pointer-events-none flex items-center justify-center"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={288}
                  height={192}
                  className="w-full h-full object-contain p-1"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scrolling Testimonials Banner */}
        <motion.div
          initial={{ opacity: 0.65 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: 0, duration: 0 }}
          className="mt-4 md:mt-6 mb-20 md:mb-30 lg:mb-40 w-full overflow-hidden"
        >
          <motion.div
            className="flex gap-4"
            drag={!isMobile ? "x" : false}
            dragConstraints={!isMobile ? { left: -Infinity, right: 0 } : undefined}
            dragElastic={!isMobile ? 0.2 : undefined}
            animate={{
              x: [0, -(content.testimonials.length * 280)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 78,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {[...content.testimonials, ...content.testimonials, ...content.testimonials].map((item, index) => (
              <div
                key={`testimonial-${index}`}
                className="flex-shrink-0 w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-36 lg:w-72 lg:h-48 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg pointer-events-none"
              >
                <div className="p-3 sm:p-4 h-full flex flex-col justify-between bg-white/5">
                  <p className="text-white text-[10px] sm:text-xs md:text-sm line-clamp-3 sm:line-clamp-4 italic mb-2">
                    &quot;{item.content.substring(0, 80)}...&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/80 text-xs font-semibold">
                      {item.name}
                      {item.age && `, ${item.age}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

