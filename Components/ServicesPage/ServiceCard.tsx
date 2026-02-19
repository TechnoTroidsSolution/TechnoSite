"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceIconMap } from "./serviceIcons";

interface ServiceCardProps {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly slug: string;
  readonly featured?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  slug,
  featured = false,
}: ServiceCardProps) {
  const IconComponent = serviceIconMap[icon] || serviceIconMap.education;

  return (
    <div className="group relative rounded-2xl bg-sky-100/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[380px]">
      {/* Card content */}
      <div className={`relative ${featured ? 'p-10 pt-12' : 'p-8 pt-10'} h-full flex flex-col`}>
        {/* Icon area with decorative elements */}
        <div className="relative mb-10">
          {/* Main icon container */}
          <div className={`${featured ? 'w-18 h-18' : 'w-16 h-16'} rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300`}>
            <IconComponent className={`${featured ? 'w-10 h-10' : 'w-9 h-9'} text-gray-500 transition-colors duration-300`} />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-1 top-0 w-2 h-2 rounded-full bg-gray-300" />
          <div className="absolute -right-3 top-3 w-1.5 h-1.5 rounded-full bg-gray-200" />
          <div className="absolute left-0 -bottom-3 w-8 h-[2px] bg-gray-200 rounded-full" />
          <div className="absolute left-10 -bottom-3 w-2 h-2 rounded-full border-2 border-gray-200" />
        </div>

        {/* Title */}
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-4 transition-all duration-300`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`${featured ? 'text-base' : 'text-base'} text-gray-500 leading-relaxed ${featured ? 'mb-10 line-clamp-4' : 'mb-8 line-clamp-3'} flex-grow`}>
          {description}
        </p>

        {/* Circle Arrow Button */}
        <Link
          href={`/services/${slug}`}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </Link>
      </div>
    </div>
  );
}
