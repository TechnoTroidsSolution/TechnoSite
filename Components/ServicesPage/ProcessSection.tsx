"use client";

import React from "react";
import {
  Search,
  FileSearch,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
} from "lucide-react";

interface ProcessStep {
  number: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

interface ProcessSectionProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
}

const ICON_MAP: Record<string, React.ReactNode> = {
  search: <Search className="w-8 h-8 text-teal-600" />,
  strategy: <FileSearch className="w-8 h-8 text-teal-600" />,
  design: <PenTool className="w-8 h-8 text-teal-600" />,
  development: <Code2 className="w-8 h-8 text-teal-600" />,
  qa: <ShieldCheck className="w-8 h-8 text-teal-600" />,
  launch: <Rocket className="w-8 h-8 text-teal-600" />,
  support: <RefreshCw className="w-8 h-8 text-teal-600" />,
};

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="inline-block bg-teal-100 text-teal-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            {data.badge}
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {data.steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon + Number */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-15 h-15 rounded-2xl bg-teal-100 flex items-center justify-center shadow-md">
                  {ICON_MAP[step.icon]}
                </div>

                <div className="text-5xl font-bold text-teal-600 mt-4">
                  {step.number < 10 ? `0${step.number}` : step.number}
                </div>
              </div>

              {/* Content */}
              <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all lg:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-6">{step.description}</p>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
