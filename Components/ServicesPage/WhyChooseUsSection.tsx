"use client";

import React from "react";
import { Rocket, Target, BadgeCheck, Headset } from "lucide-react";

interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  data: {
    title: string;
    subtitle: string;
    items: WhyItem[];
  };
}

const ICONS: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-8 h-8 text-teal-600" />,
  target: <Target className="w-8 h-8 text-teal-600" />,
  check: <BadgeCheck className="w-8 h-8 text-teal-600" />,
  support: <Headset className="w-8 h-8 text-teal-600" />,
};

export default function WhyChooseUsSection({ data }: WhyChooseUsProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                {ICONS[item.icon]}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
