"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Assuming "@/public/Images/homepage/ai-automation.jpg" is a valid path
import bg from "@/public/Images/homepage/ai-automation.jpg";

export default function AiAutomationSection() {
  const benefits = [
    {
      title: "Smart Process Optimization",
      desc: "Identify bottlenecks and automate repetitive tasks across all departments.",
    },
    {
      title: "Predictive Analytics",
      desc: "Leverage machine learning to forecast trends and make data-driven decisions.",
    },
    {
      title: "Hyper-Personalization",
      desc: "Deliver custom experiences by analyzing user behavior in real-time.",
    },
  ];

  // Animation variants for staggered list items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    // Enhanced Dark Background with Radial Gradient
    <section className="relative overflow-hidden bg-gray-950 py-24">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0 bg-radial-gradient"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-lg font-semibold text-indigo-400 uppercase tracking-widest">
            The Future is Autonomous
          </p>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            AI-Powered <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
              Automation Systems
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Integrate intelligent workflows that learn, adapt, and scale your
            operations without manual oversight.
          </p>

          {/* List of Benefits */}
          <div className="mt-8 space-y-6">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Call-to-Action Button */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-10 inline-block px-8 py-3 text-lg font-semibold rounded-full 
                       bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg 
                       shadow-indigo-500/50 transition duration-300 transform hover:scale-105"
          >
            Start Your AI Transformation
          </motion.a>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center lg:justify-end relative group"
        >
          {/* Image Container with Glow Effect on Hover/Focus */}
          <div
            className="relative p-1 bg-gradient-to-br from-indigo-500/50 to-cyan-500/50 rounded-2xl 
                       transition duration-500 group-hover:p-0 group-focus:p-0 group-hover:scale-105 group-focus:scale-105"
          >
            <Image
              src={bg}
              alt="AI Automation Graphic, abstract brain connected to data streams"
              width={650}
              height={450}
              quality={90}
              className="rounded-xl shadow-2xl relative z-10 opacity-90 group-hover:opacity-100 transition duration-500"
            />
          </div>
          {/* Subtle Glow beneath the image for depth */}
          <div className="absolute inset-0 m-4 rounded-full bg-cyan-400 blur-3xl opacity-10 group-hover:opacity-30 transition duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
}
