"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MonochromeCta() {
  return (
    // Section with deep padding and a subtle background texture or border
    <section className="py-24 bg-gray-40 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center p-10 md:p-16 lg:p-20 rounded-3xl bg-white shadow-xl border border-gray-100"
        >
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Ready to Scale Your Software Vision?
          </h2>

          {/* Subtitle/Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Let's discuss your project goals and build a robust,
            high-performance digital product that drives real business results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-lg font-bold rounded-xl text-white transition duration-300 transform 
                           bg-black shadow-lg shadow-gray-700/30 hover:bg-gray-800 hover:scale-[1.02] w-full sm:w-auto"
              >
                Start a Conversation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/portfolio"
                className="inline-block px-10 py-4 text-lg font-medium rounded-xl text-gray-800 transition duration-300 
                           border-2 border-gray-300 hover:bg-gray-100 hover:border-black w-full sm:w-auto"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
