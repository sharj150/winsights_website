"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    // Close menu first and restore body scroll
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    
    // Small delay to ensure menu closes and DOM updates
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Calculate offset for fixed navbar
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="cursor-pointer p-2 rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            style={{ backgroundColor: '#001570' }}
            onClick={() => scrollToSection("home")}
            aria-label="Navigate to home"
          >
            <img 
              src="/winsights_logo.svg" 
              alt="Winsights Logo" 
              className="h-12 w-auto"
              width="48"
              height="48"
            />
          </motion.button>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection("who-we-are")}
              aria-label="Navigate to Who We Are section"
              className={`transition-colors font-medium py-2 px-1 min-h-[44px] min-w-[44px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Who We Are
            </button>
            <span className={`${scrolled ? "text-primary-dark" : "text-white"} opacity-30`}>•</span>
            <button
              onClick={() => scrollToSection("how-it-works")}
              aria-label="Navigate to How It Works section"
              className={`transition-colors font-medium py-2 px-1 min-h-[44px] min-w-[44px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              How It Works
            </button>
            <span className={`${scrolled ? "text-primary-dark" : "text-white"} opacity-30`}>•</span>
            <button
              onClick={() => scrollToSection("success")}
              aria-label="Navigate to Success section"
              className={`transition-colors font-medium py-2 px-1 min-h-[44px] min-w-[44px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Success
            </button>
            <span className={`${scrolled ? "text-primary-dark" : "text-white"} opacity-30`}>•</span>
            <button
              onClick={() => scrollToSection("testimonials")}
              aria-label="Navigate to Testimonials section"
              className={`transition-colors font-medium py-2 px-1 min-h-[44px] min-w-[44px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Testimonials
            </button>
            <span className={`${scrolled ? "text-primary-dark" : "text-white"} opacity-30`}>•</span>
            <button
              onClick={() => scrollToSection("faq")}
              aria-label="Navigate to FAQ section"
              className={`transition-colors font-medium py-2 px-1 min-h-[44px] min-w-[44px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:text-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              FAQ
            </button>
          </div>

          {/* Right side - Dashboard Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4">
            {/* Dashboard Button - Desktop Only */}
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.3 },
                x: { duration: 0.8, delay: 0.3 },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://billing.stripe.com/p/login/28o3dh510dpOaiI7ss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Access Dashboard"
              className="hidden md:flex bg-primary-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden min-h-[44px] min-w-[100px] items-center justify-center"
            >
              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
                className="relative z-10"
              >
                Dashboard
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  transform: "skewX(-20deg)",
                }}
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
              />
            </motion.a>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              style={{
                backgroundColor: scrolled ? 'transparent' : 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`block h-0.5 w-6 rounded-full ${
                    scrolled ? 'bg-primary-dark' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`block h-0.5 w-6 rounded-full ${
                    scrolled ? 'bg-primary-dark' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`block h-0.5 w-6 rounded-full ${
                    scrolled ? 'bg-primary-dark' : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden mobile-menu-container ${
            scrolled ? 'bg-white shadow-lg' : 'bg-primary-dark/98 backdrop-blur-md'
          }`}
        >
          <div className={`py-4 space-y-1 border-t ${
            scrolled ? 'border-neutral-light-grey' : 'border-white/20'
          }`}>
            <button
              onClick={() => scrollToSection("who-we-are")}
              aria-label="Navigate to Who We Are section"
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 min-h-[48px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:bg-neutral-light-grey active:bg-neutral-light-grey/80"
                  : "text-white hover:bg-white/15 active:bg-white/20"
              }`}
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              aria-label="Navigate to How It Works section"
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 min-h-[48px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:bg-neutral-light-grey active:bg-neutral-light-grey/80"
                  : "text-white hover:bg-white/15 active:bg-white/20"
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("success")}
              aria-label="Navigate to Success section"
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 min-h-[48px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:bg-neutral-light-grey active:bg-neutral-light-grey/80"
                  : "text-white hover:bg-white/15 active:bg-white/20"
              }`}
            >
              Success
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              aria-label="Navigate to Testimonials section"
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 min-h-[48px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:bg-neutral-light-grey active:bg-neutral-light-grey/80"
                  : "text-white hover:bg-white/15 active:bg-white/20"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              aria-label="Navigate to FAQ section"
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 min-h-[48px] flex items-center ${
                scrolled
                  ? "text-primary-dark hover:bg-neutral-light-grey active:bg-neutral-light-grey/80"
                  : "text-white hover:bg-white/15 active:bg-white/20"
              }`}
            >
              FAQ
            </button>
            <div className="pt-2 mt-2 border-t border-white/10">
              <a
                href="https://billing.stripe.com/p/login/28o3dh510dpOaiI7ss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Access Dashboard"
                className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-all duration-200 min-h-[48px] flex items-center justify-center ${
                  scrolled
                    ? "bg-primary-blue text-white hover:bg-primary-blue/90 active:bg-primary-blue/80 shadow-md"
                    : "bg-white/25 text-white hover:bg-white/35 active:bg-white/40 backdrop-blur-sm"
                }`}
              >
                Dashboard
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

