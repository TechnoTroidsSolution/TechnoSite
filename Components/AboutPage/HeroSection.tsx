'use client';

import React from 'react';

interface HeroSectionProps {
  readonly title: string;
  readonly subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative bg-linear-to-br from-teal-500 via-teal-600 to-cyan-600 dark:from-teal-700 dark:via-teal-800 dark:to-cyan-800 text-white py-24 md:py-32 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold">Building the future of technology</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce mt-16">
            <div className="w-10 h-16 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
