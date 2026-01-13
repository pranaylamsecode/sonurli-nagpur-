import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { HERO_DATA } from "../constants";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-emerald-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        {/* Decorative village illustration */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-100/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-600 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          नागपूर जिल्हा, महाराष्ट्र
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-brand-500 mb-6"
        >
          {HERO_DATA.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto group bg-brand-500 hover:bg-brand-600"
            >
              <Phone className="mr-2 w-5 h-5" />
              {HERO_DATA.ctaPrimary}
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-brand-500 text-brand-500 hover:bg-brand-50">
              {HERO_DATA.ctaSecondary}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Quick Stats Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "2,500+", label: "लोकसंख्या" },
            { value: "425", label: "कुटुंबे" },
            { value: "75%", label: "साक्षरता" },
            { value: "47 km", label: "नागपूर पासून" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-500">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};
