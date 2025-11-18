"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Using the updated ServiceItem and ServicesContent components

// Assuming this path is correct for your image
import bg from "../../public/Images/homepage/hero-section.webp";
import ServicesContent from "./ServicesSection"; // Assuming ServicesContent is imported from ServicesSection

export default function HeroSection() {
  return (
    // Section: Pure white background
    <section className="bg-white pt-28 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT SIDE: Intro/Title Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // FIX APPLIED: Changed 'once: true' to 'once: false'
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6 lg:space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-snug tracking-tight text-gray-900">
            Build Powerful Software That <br />
            {/* Accent Text: Plain Black */}
            <span className="text-black">Scales With You</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            We engineer robust, scalable, and high-performance digital products.
            From idea to deployment — we turn your software vision into reality.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
            <Link
              href="/contact"
              className="px-8 py-3 w-fit text-lg font-bold rounded-xl text-white transition duration-300 transform 
                                   bg-black shadow-lg shadow-gray-700/30 hover:bg-gray-800 hover:scale-[1.02]"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="px-8 py-3 w-fit text-lg font-medium rounded-xl text-gray-800 transition duration-300 
                                   border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-800"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Services and Image */}
        <div className="relative mt-16 lg:mt-0">
          {/* Image Container with standard shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            // FIX APPLIED: Changed 'once: true' to 'once: false'
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full h-auto mb-16"
          >
            <Image
              src={bg}
              alt="Software development illustration"
              width={600}
              height={450}
              priority
              className="w-full h-auto rounded-xl shadow-2xl shadow-gray-400/20"
            />
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            // FIX APPLIED: Changed 'once: true' to 'once: false'
            viewport={{ once: false, amount: 0.3 }}
          >
            <ServicesContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
