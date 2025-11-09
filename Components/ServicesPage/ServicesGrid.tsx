"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Workflow,
  Layers,
  Smartphone,
  Server,
  Blocks,
  Palette,
  Cloud,
  Cpu,
} from "lucide-react";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

interface ServicesGridProps {
  services: ServiceItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  education: <GraduationCap className="w-8 h-8 text-teal-600" />,
  n8n: <Workflow className="w-8 h-8 text-teal-600" />,
  sap: <Layers className="w-8 h-8 text-teal-600" />,
  fullstack: <Server className="w-8 h-8 text-teal-600" />,
  mobile: <Smartphone className="w-8 h-8 text-teal-600" />,
  blockchain: <Blocks className="w-8 h-8 text-teal-600" />,
  uiux: <Palette className="w-8 h-8 text-teal-600" />,
  devops: <Cloud className="w-8 h-8 text-teal-600" />,
  ai: <Cpu className="w-8 h-8 text-teal-600" />,
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-teal-50/50 to-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl shadow-lg p-10 border border-gray-100 
              hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-50 text-teal-700 px-4 py-1 rounded-full text-xs border border-teal-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => router.push(`/services/${service.slug}`)}
                className="flex items-center gap-2 text-teal-700 font-semibold hover:underline hover:gap-3 transition-all"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
