"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites and web applications.",
      color: "bg-teal-100 text-teal-600",
      hover: "group-hover:bg-teal-200",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
    },
    {
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications.",
      color: "bg-blue-100 text-blue-600",
      hover: "group-hover:bg-blue-200",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and migration.",
      color: "bg-purple-100 text-purple-600",
      hover: "group-hover:bg-purple-200",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      ),
    },
    {
      title: "AI & ML",
      desc: "Artificial intelligence and machine learning solutions.",
      color: "bg-orange-100 text-orange-600",
      hover: "group-hover:bg-orange-200",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            We build scalable, modern technology solutions for products and
            businesses.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              viewport={{ once: false, amount: 0.3 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors ${service.color} ${service.hover}`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-black shadow-md transition"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
