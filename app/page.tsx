import IntroSection from "@/Components/HomePage/IntroSection";
import ServicesSection from "@/Components/HomePage/ServicesSection";

import Link from "next/link";

import CompanyStatsSection from "@/Components/HomePage/stats/CompanyStatsSection";
import { TestimonialsSection } from "@/Components/HomePage/Testimonials/TestimonialsSection";
import Services from "@/Components/HomePage/services/Services";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="min-h-screen bg-white text-gray-800 p-8 lg:p-16">
        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <IntroSection />
          {/* Right Column */}
          {/* <ServicesSection />
           */}
          <ServicesSection />
        </main>
      </div>
      <section className="bg-linear-to-br from-teal-400 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="block text-yellow-300">Innovative Technology</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            We build cutting-edge solutions that drive growth, enhance
            efficiency, and create exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-3 px-8 rounded-lg transition duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
      <CompanyStatsSection />

      <Services />
      <TestimonialsSection />

      {/* Hero Section */}

      {/* Services Overview */}

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with the
            right technology solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
