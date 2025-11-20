"use client";

import React from "react";
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
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly slug: string;
}

interface ServicesGridProps {
  readonly services: readonly ServiceItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  education: <GraduationCap className="w-8 h-8 text-primary" />,
  n8n: <Workflow className="w-8 h-8 text-primary" />,
  sap: <Layers className="w-8 h-8 text-primary" />,
  fullstack: <Server className="w-8 h-8 text-primary" />,
  mobile: <Smartphone className="w-8 h-8 text-primary" />,
  blockchain: <Blocks className="w-8 h-8 text-primary" />,
  uiux: <Palette className="w-8 h-8 text-primary" />,
  devops: <Cloud className="w-8 h-8 text-primary" />,
  ai: <Cpu className="w-8 h-8 text-primary" />,
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group bg-card rounded-3xl shadow-lg p-10 border border-border/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-primary/15 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={`${service.slug}-${tag}`}
                    className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => router.push(`/services/${service.slug}`)}
                className="flex items-center gap-2 text-primary font-semibold hover:underline hover:gap-3 transition-all"
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
