"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "We build and ship faster with efficient workflows, ensuring your product reaches users on time.",
      icon: "⚡",
    },
    {
      title: "Scalable Architecture",
      desc: "Our solutions are engineered to grow with your business — no performance drop as users scale.",
      icon: "📈",
    },
    {
      title: "Quality Code",
      desc: "We follow industry best practices, clean architecture, and maintainable code standards.",
      icon: "💻",
    },
    {
      title: "Transparent Communication",
      desc: "Regular updates, weekly demos, and complete visibility throughout the development cycle.",
      icon: "🗣️",
    },
    {
      title: "Dedicated Support",
      desc: "We offer continuous post-launch support and long-term technical partnership.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold  text-black">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We deliver more than just software — we deliver reliability, speed,
            and engineering excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-3xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
