"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Using a placeholder image path. Replace with your actual infrastructure image.
import infraBg from "../../public/Images/homepage/hero-section.webp";

export default function FeatureHighlightSection() {
  const highlights = [
    {
      title: "Zero-Downtime Deployments",
      desc: "Implement advanced DevOps practices for seamless and continuous delivery.",
    },
    {
      title: "Scalable Cloud Native",
      desc: "Engineered on modern cloud platforms (AWS, Azure, GCP) for limitless scalability.",
    },
    {
      title: "Real-time Monitoring",
      desc: "24/7 observability into performance metrics, security, and utilization.",
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
    // Replicating the Dark Background and Structure
    <section className="relative overflow-hidden bg-gray-950 py-24">
      {/* Background Gradient Effect - Adjusted slightly for variety */}
      <div className="absolute inset-0 z-0 bg-radial-gradient-bottom-right opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* RIGHT — IMAGE (Swapped side for variety) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }} // Animation adjusted for left side
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center lg:justify-start relative group order-last lg:order-first" // Swapped order
        >
          {/* Image Container with Glow Effect using the same Indigo/Cyan gradient */}
          <div
            className="relative p-1 bg-gradient-to-br from-indigo-500/50 to-cyan-500/50 rounded-2xl 
                       transition duration-500 group-hover:p-0 group-focus:p-0 group-hover:scale-105 group-focus:scale-105"
          >
            <Image
              src={infraBg}
              alt="High Performance Server Rack Infrastructure"
              width={650}
              height={450}
              quality={90}
              className="rounded-xl shadow-2xl relative z-10 opacity-90 group-hover:opacity-100 transition duration-500"
            />
          </div>
          {/* Subtle Glow beneath the image for depth */}
          <div className="absolute inset-0 m-4 rounded-full bg-indigo-400 blur-3xl opacity-10 group-hover:opacity-30 transition duration-500"></div>
        </motion.div>

        {/* LEFT — TEXT CONTENT (Now on the right) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 order-first lg:order-last" // Swapped order
        >
          <p className="text-lg font-semibold text-cyan-400 uppercase tracking-widest">
            Engineering Reliability
          </p>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            High-Performance <br />
            {/* Using the same Gradient Text style */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
              Infrastructure
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Build your foundation on rock-solid, continuously optimized
            infrastructure engineered for speed and uptime.
          </p>

          {/* List of Highlights */}
          <div className="mt-8 space-y-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex items-start space-x-4"
              >
                {/* Icon style replicated */}
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z" // Icon for lightning/speed
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

          {/* Gradient Call-to-Action Button replicated */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-10 inline-block px-8 py-3 text-lg font-semibold rounded-full 
                       bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg 
                       shadow-indigo-500/50 transition duration-300 transform hover:scale-105"
          >
            Review Our Architecture
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
