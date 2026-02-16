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
  ai: <Brain className="w-8 h-8 text-[var(--primary)]" />,
  vision: <ScanEye className="w-8 h-8 text-[var(--primary)]" />,
  nlp: <MessageSquare className="w-8 h-8 text-[var(--primary)]" />,
  analytics: <LineChart className="w-8 h-8 text-[var(--primary)]" />,
};

export default function AdvancedCapabilitiesSection({
  data,
}: AdvancedCapabilitiesProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item) => (
            <div
              key={item.capability}
              className="bg-card p-8 rounded-2xl border-2 border-[var(--primary)]/30 shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all"
            >
              <div className="w-16 h-16 bg-[var(--primary)]/15 rounded-xl flex items-center justify-center mb-6">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.capability}
              </h3>

              <p className="text-foreground/80 text-sm leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <p className="text-center text-foreground/80 mt-16 max-w-3xl mx-auto text-lg leading-relaxed">
          {data.philosophy}
        </p>
      </div>
    </section>
  );
}
