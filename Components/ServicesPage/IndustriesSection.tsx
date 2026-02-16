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
  readonly name: string;
  readonly icon: string;
}

interface IndustriesSectionProps {
  readonly data: {
    readonly title: string;
    readonly subtitle: string;
    readonly industries: IndustryItem[];
  };
}

const iconMap: Record<string, React.ReactNode> = {
  healthcare: <Stethoscope className="w-8 h-8 text-[var(--primary)]" />,
  finance: <Landmark className="w-8 h-8 text-[var(--primary)]" />,
  education: <GraduationCap className="w-8 h-8 text-[var(--primary)]" />,
  ecommerce: <ShoppingCart className="w-8 h-8 text-[var(--primary)]" />,
  logistics: <Truck className="w-8 h-8 text-[var(--primary)]" />,
  saas: <Cloud className="w-8 h-8 text-[var(--primary)]" />,
};

export default function IndustriesSection({ data }: IndustriesSectionProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-foreground mb-4">
          {data.title}
        </h2>

        <p className="text-foreground/80 max-w-2xl mx-auto mb-14">
          {data.subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {data.industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center gap-3 p-6 bg-card border-2 border-[var(--primary)]/30 rounded-xl hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[var(--primary)]/15 rounded-xl flex items-center justify-center">
                {iconMap[industry.icon]}
              </div>

              <div className="text-sm font-semibold text-foreground">
                {industry.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
