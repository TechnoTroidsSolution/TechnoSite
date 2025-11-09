"use client";

import {
  Stethoscope,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Truck,
  Cloud,
} from "lucide-react";

interface IndustryItem {
  name: string;
  icon: string;
}

interface IndustriesSectionProps {
  data: {
    title: string;
    subtitle: string;
    industries: IndustryItem[];
  };
}

const iconMap: Record<string, React.ReactNode> = {
  healthcare: <Stethoscope className="w-8 h-8 text-teal-600" />,
  finance: <Landmark className="w-8 h-8 text-teal-600" />,
  education: <GraduationCap className="w-8 h-8 text-teal-600" />,
  ecommerce: <ShoppingCart className="w-8 h-8 text-teal-600" />,
  logistics: <Truck className="w-8 h-8 text-teal-600" />,
  saas: <Cloud className="w-8 h-8 text-teal-600" />,
};

export default function IndustriesSection({ data }: IndustriesSectionProps) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          {data.subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {data.industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                {iconMap[industry.icon]}
              </div>

              <div className="text-sm font-semibold text-gray-800">
                {industry.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
