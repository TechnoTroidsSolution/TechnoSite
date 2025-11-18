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
    {
      title: "Data Security",
      desc: "Prioritizing your data integrity with robust encryption and best-in-class security protocols.",
      icon: "🔒",
    },
  ];

  return (
    // Section: Clean white background
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Choose Reliability. Choose <span className="text-black">Us.</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We deliver more than just software — we guarantee reliability,
            speed, and an unwavering commitment to your long-term success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              // Updated Card Styling for high-impact monochrome pop
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-2xl shadow-gray-200 transition-all duration-300 ease-in-out 
                         hover:shadow-4xl hover:shadow-gray-300 hover:scale-[1.05] hover:border-gray-300
                         ring-2 ring-transparent hover:ring-8 hover:ring-gray-100 cursor-pointer"
            >
              {/* Icon Container: Sharp Black accent */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-3xl mb-6 shadow-xl shadow-gray-700/20 text-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
