"use client";

import ServiceCard from "./ServiceCard";

interface ServiceItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly slug: string;
}

interface ServicesIntroSectionProps {
  readonly featuredService: ServiceItem;
}

export default function ServicesIntroSection({ featuredService }: ServicesIntroSectionProps) {
  return (
    <div className="relative z-10 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side: Intro Text */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Our Services
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Technical solutions that </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
                revolutionize your business.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              We deliver cutting-edge technology solutions tailored to transform your digital presence.
            </p>

            
          </div>

          {/* Right Side: Featured Service Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <ServiceCard
                icon={featuredService.icon}
                title={featuredService.title}
                description={featuredService.description}
                slug={featuredService.slug}
                featured
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
