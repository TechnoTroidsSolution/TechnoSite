"use client";

import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly tags?: readonly string[];
  readonly slug: string;
  readonly imageLarge?: string;
  readonly imageSmall?: string;
}

interface ServicesGridProps {
  readonly services: readonly ServiceItem[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div id="services-grid" className="relative z-10 pt-8 md:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}