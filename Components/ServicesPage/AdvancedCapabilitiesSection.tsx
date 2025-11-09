import React from "react";
import { Brain, ScanEye, MessageSquare, LineChart } from "lucide-react";

interface CapabilityItem {
  icon: string;
  capability: string;
  value: string;
}

interface AdvancedCapabilitiesProps {
  data: {
    title: string;
    subtitle: string;
    philosophy: string;
    items: CapabilityItem[];
  };
}

const iconMap: Record<string, React.ReactNode> = {
  ai: <Brain className="w-8 h-8 text-teal-600" />,
  vision: <ScanEye className="w-8 h-8 text-teal-600" />,
  nlp: <MessageSquare className="w-8 h-8 text-teal-600" />,
  analytics: <LineChart className="w-8 h-8 text-teal-600" />,
};

export default function AdvancedCapabilitiesSection({
  data,
}: AdvancedCapabilitiesProps) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.capability}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <p className="text-center text-gray-600 mt-16 max-w-3xl mx-auto text-lg leading-relaxed">
          {data.philosophy}
        </p>
      </div>
    </section>
  );
}
