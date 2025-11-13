"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 bg-primary-blue rounded flex items-center justify-center">
              <span className="text-white text-xl font-bold">w</span>
            </div>
            <span className="text-2xl font-bold text-primary-blue">Winsights</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-dark hover:text-primary-blue transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("who-we-are")}
              className="text-primary-dark hover:text-primary-blue transition-colors font-medium"
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection("success")}
              className="text-primary-dark hover:text-primary-blue transition-colors font-medium"
            >
              Success
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-primary-dark hover:text-primary-blue transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-primary-dark hover:text-primary-blue transition-colors font-medium"
            >
              FAQ
            </button>
          </div>

          {/* Dashboard Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => scrollToSection("dashboard")}
            className="bg-primary-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
          >
            Dashboard
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

