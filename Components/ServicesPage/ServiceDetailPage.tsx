"use client";
import { useRouter } from "next/navigation";

import React from "react";

export default function ServiceDetailPage({ service }: any) {
  const title = service.title;
  const heroSubtitle = service.subtitle;
  const description = service.description;

  const process = service.process ?? [];
  const deliverables = service.deliverables ?? [];
  const tools = service.tech_stack ?? [];
  const whoIsItFor = service.ideal_for ?? [];

  const router = useRouter();


  return (
    <div className="min-h-screen bg-gray-50">

      {/* ✅ HERO SECTION */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-1/2 -right-1/4 w-[400px] h-[400px] bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-white/80 mb-3 tracking-wide text-sm uppercase">
            Our Service
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">{heroSubtitle}</p>
        </div>
      </section>

      {/* ✅ MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ✅ LEFT SIDEBAR (Quick Summary) */}
        <aside className="lg:col-span-1 space-y-6 h-fit sticky top-28">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">

            <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              Service Summary
            </h3>

            <div className="space-y-6">

              {/* Category */}
              <div className="flex items-start gap-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</p>
                  <p className="text-gray-800 font-semibold">{service.category ?? "General"}</p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Ideal For */}
              <div className="flex items-start gap-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Ideal For</p>
                  <p className="text-gray-800 font-semibold">{whoIsItFor.join(", ") || "Businesses"}</p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Tech Stack */}
              <div className="flex items-start gap-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tech Stack</p>
                  <p className="text-gray-800 font-semibold">{tools.join(", ")}</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-cyan-500 p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-3">Start Your Project</h3>
            <p className="text-white/90 text-sm mb-5">
              Let's build a high-performance digital solution tailored to your business.
            </p>
            <button onClick={() => router.push("/contact")}
                className="w-full bg-white text-teal-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </aside>

        {/* ✅ RIGHT MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-12">

          {/* ✅ Overview */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </section>

          {/* ✅ Two-column split — Process + Deliverables */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ✅ Process */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Proceed
              </h2>
              <ul className="space-y-3">
                {process.map((item: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-teal-600 mt-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ Deliverables */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deliverables</h2>
              <div className="flex flex-wrap gap-3">
                {deliverables.map((item: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-teal-50 text-teal-700 border border-teal-200 rounded-lg text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </section>

          {/* ✅ Technologies */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* ✅ Who Is It For */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who Is This Service For?
            </h2>
            <ul className="space-y-3">
              {whoIsItFor.map((item: string, index: number) => (
                <li key={index} className="flex items-center text-gray-700 gap-3">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}

