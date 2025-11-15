"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/Images/homepage/ai-automation.jpg";

export default function AiAutomationSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1F] py-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            AI-Powered Automation
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Integrate intelligent workflows...
          </p>

          {/* ...rest of your content */}
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src={bg}
            alt="AI Automation Graphic"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
