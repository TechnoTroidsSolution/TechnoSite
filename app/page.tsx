"use client";
import IntroSection from "@/Components/HomePage/IntroSection";
import ServicesSection from "@/Components/HomePage/ServicesSection";

import Link from "next/link";

import CompanyStatsSection from "@/Components/HomePage/stats/CompanyStatsSection";
import { TestimonialsSection } from "@/Components/HomePage/Testimonials/TestimonialsSection";
import Services from "@/Components/HomePage/services/Services";
import WhyChooseUs from "@/Components/HomePage/WhyChooseUs";
import { motion } from "framer-motion";
import Faqs from "@/Components/HomePage/Faq/Faqs";

import AiAutomationSection from "@/Components/HomePage/AiAutomationSection";
import MonochromeCta from "@/Components/HomePage/CTA/MonochromeCta";
import FeatureHighlightSection from "@/Components/HomePage/FeatureHighlightSection";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <IntroSection />

      <AiAutomationSection />

      {/* <section className="bg-linear-to-br bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="block text-black">Innovative Technology</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            We build cutting-edge solutions that drive growth, enhance
            efficiency, and create exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-black text-black hover:bg-white hover:text-teal-600 font-semibold py-3 px-8 rounded-lg transition duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section> */}
      <Services />

      <WhyChooseUs />
      {/* <FeatureHighlightSection /> */}

      <CompanyStatsSection />

      <TestimonialsSection />
      <Faqs />
      <MonochromeCta />

      {/* Hero Section */}

      {/* Services Overview */}
    </div>
  );
}
