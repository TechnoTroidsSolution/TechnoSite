"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface ServiceDetail {
  readonly title: string;
  readonly subtitle: string;
  readonly overview_image?: string;
  readonly detail_image?: string;
  readonly description: string;

  readonly process_intro?: string;
  readonly category_description?: string;
  readonly ideal_intro?: string;
  readonly tech_intro?: string;
  readonly technologies_intro?: string;
  readonly last_para?: string;

  readonly category?: string;
  readonly process?: readonly string[];
  readonly deliverables?: readonly string[];
  readonly tech_stack?: readonly string[];
readonly technologies?: {
  name: string;
  icon: string;
}[];
  readonly ideal_for?: readonly string[];
}

interface ServiceDetailPageProps {
  readonly service: ServiceDetail;
}

export default function ServiceDetailPage({
  service,
}: ServiceDetailPageProps) {
  const router = useRouter();

  const {
    title,
    subtitle,
    description,
    category = "General",
    process_intro = "",
    category_description = "",
    ideal_intro = "",
    tech_intro = "",
    last_para = "",
    process = [],
    deliverables = [],
    tech_stack = [],
    technologies = [],
    ideal_for = [],
  } = service;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[550px] flex items-center">

      {/* Common Background Image */}
      <img
        src="/Images/serviceDetail/common.webp"   // <-- same image for all services
        alt="Service Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          {title}
        </h1>

        <p className="text-xl font-medium mb-8 max-w-2xl">
          {subtitle}
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Get Started →
        </button>
      </div>
    </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2 space-y-7">
          {/* ========== OVERVIEW ========== */}
          <section id="overview">
            <h2 className="text-3xl xs:text-4xl font-bold mb-4">Overview</h2>

            <p className="text-gray-500 text-md leading-relaxed mb-6">
              {description}
            </p>

            {service.overview_image && (
              <img
                src={service.overview_image}
                alt="Overview"
                className="w-full h-auto object-cover rounded-xl"
              />
            )}
          </section>

          {/* ========== WHAT WE PROCEED / INCLUDE ========== */}
          <section id="process" className="mt-15">
            <h2 className="text-3xl xs:text-4xl font-bold mb-4">
             How We Proceed 
            </h2>

            {process_intro && (
              <p className="text-gray-500 text-md leading-relaxed mb-6">
                {process_intro}
              </p>
            )}

            <ul className="space-y-3.5">
              {process.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600 text-md font-semibold leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* ========== SERVICE DETAIL ========== */}
          <section id="details" className="mt-12">
            <h2 className="text-3xl xs:text-4xl font-bold mb-4">
              Service Detail
            </h2>
            {/* CATEGORY */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Category – {category}
              </h3>

              {category_description && (
                <p className="text-gray-600 text-md leading-relaxed">
                  {category_description}
                </p>
              )}
            </div>

            {service.detail_image && (
              <img
                src={service.detail_image}
                alt="Service Detail"
                className="w-full h-auto rounded-xl mb-8"
              />
            )}


            {/* IDEAL FOR */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Ideal For</h3>

              {ideal_intro && (
                <p className="text-gray-600 text-md leading-relaxed mb-4">
                  {ideal_intro}
                </p>
              )}

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {ideal_for.map((item) => (
                  <li key={item} className="group flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="text-gray-600 text-md font-semibold leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TECH STACK */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>

              {tech_intro && (
                <p className="text-gray-600 text-md leading-relaxed mb-4">
                  {tech_intro}
                </p>
              )}

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {tech_stack.map((tech) => (
                  <li key={tech} className="group flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="text-gray-600 text-md font-semibold leading-relaxed">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
              {last_para && (
                <p className="text-gray-600 text-md leading-relaxed mb-5 mt-6">
                  {last_para}
                </p>
              )}
            </div>
          </section>
          </div>

          

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="space-y-12">
          {/* Deliverables */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Deliverables</h2>

            <div className="flex flex-wrap gap-2">
              {deliverables.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg font-medium text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* ========== TECHNOLOGIES ========== */}
          <section id="technologies" className="mt-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-8">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-10">
                {technologies.map((tech) => (
        <div key={tech.name} className="text-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-14 h-14 object-contain mx-auto"
          />
          <p className="mt-2 text-sm font-medium">
            {tech.name}
          </p>
        </div>
      ))}
              </div>
            </div>
          </section>

        
          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Ready to get started?
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Let&apos;s build a high-performance digital solution tailored
              to your business.
            </p>

            <button
              onClick={() => router.push("/contact")}
              className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}