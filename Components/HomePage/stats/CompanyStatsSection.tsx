"use client";

import { ArrowRight, Users2, Globe, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: "130M+",
    label: "Users Globally",
    icon: <Users2 className="w-6 h-6" />,
  },
  {
    value: "150+",
    label: "Countries Served",
    icon: <Globe className="w-6 h-6" />,
  },
  { value: "18K+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
  {
    value: "55+",
    label: "SaaS Products",
    icon: <Briefcase className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function CompanyStatsSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Trusted by teams worldwide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Built in India. Powered globally.
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              We deliver enterprise-grade SaaS platforms built with scalability,
              cloud-native architecture, and rapid delivery cycles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition"
              >
                Get a Demo <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-700 mb-3">
                  {s.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
