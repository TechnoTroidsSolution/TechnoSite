"use client";

import React from "react";
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
  ArrowUpRight,
} from "lucide-react";
import { ServiceFeatureCard } from "./ServiceFeatureCard";
interface ServiceItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly slug: string;
  readonly imageLarge?: string;
  readonly imageSmall?: string;
}

interface ServicesGridProps {
  readonly services: readonly ServiceItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  education: <GraduationCap />,
  n8n: <Workflow />,
  sap: <Layers />,
  fullstack: <Server />,
  mobile: <Smartphone />,
  blockchain: <Blocks />,
  uiux: <Palette />,
  devops: <Cloud />,
  ai: <Cpu />,
};

/* 🎨 ROW THEMES */
const rowThemes = [
  {
    // 🌸 Warm Peach
    card: "from-[#f7ede8] via-[#f3e4dc] to-[#efe0d6]",
    text: "text-[#3a2b24]",
    sub: "text-[#6b4f43]",
    accent: "text-[#d49b7f]",
    glow: "bg-[#d49b7f]/70",
    divider: "bg-[#d49b7f]",
  },
  {
    // 🌿 Soft Sage
    card: "from-[#eef3ee] via-[#e6ede7] to-[#dde6df]",
    text: "text-[#243028]",
    sub: "text-[#4a5d52]",
    accent: "text-[#8fb7a1]",
    glow: "bg-[#8fb7a1]/70",
    divider: "bg-[#8fb7a1]",
  },
  {
    // 🌊 Powder Blue
    card: "from-[#edf4fb] via-[#e4eff8] to-[#dbe9f4]",
    text: "text-[#1f2a37]",
    sub: "text-[#4b5f73]",
    accent: "text-[#7aa6c2]",
    glow: "bg-[#7aa6c2]/70",
    divider: "bg-[#7aa6c2]",
  },
];

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {services.map((service, index) => (
          <ServiceFeatureCard
            key={service.slug}
            service={service}
           index={index}
          />
        ))}
      </div>
    </section>
  );
}