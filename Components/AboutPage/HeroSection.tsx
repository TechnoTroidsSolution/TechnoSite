"use client";

import React from "react";

interface HeroSectionProps {
  readonly title: string;
  readonly subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-24 md:py-32 overflow-hidden">
      
      {/* --- Decorative Animated Icons (From Home Banner) --- */}

      {/* 1. Dotted Grid (Top Left) - Slowly Spinning */}
      <div className="absolute top-12 left-4 md:left-10 opacity-40 animate-spin-slow pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
           <circle cx="2" cy="2" r="2" className="fill-cyan-500" />
           <circle cx="22" cy="2" r="2" className="fill-cyan-500" />
           <circle cx="42" cy="2" r="2" className="fill-cyan-500" />
           <circle cx="2" cy="22" r="2" className="fill-cyan-500" />
           <circle cx="22" cy="22" r="2" className="fill-cyan-500" />
           <circle cx="42" cy="22" r="2" className="fill-cyan-500" />
           <circle cx="2" cy="42" r="2" className="fill-cyan-500" />
           <circle cx="22" cy="42" r="2" className="fill-cyan-500" />
           <circle cx="42" cy="42" r="2" className="fill-cyan-500" />
        </svg>
      </div>

      {/* 2. Blue Triangle (Top Right) - Gentle Floating */}
      <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float-slow pointer-events-none">
        <svg width="45" height="45" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L40 35H0L20 0Z" className="fill-blue-400" />
        </svg>
      </div>

      {/* 3. Square Outline (Bottom Right) - Reverse Slow Spin + Float */}
      <div className="absolute bottom-20 right-1/4 opacity-50 animate-spin-reverse-slow pointer-events-none">
        <div className="w-14 h-14 border-4 border-blue-300 rounded-lg animate-float-medium"></div>
      </div>

      {/* 4. Small Cross (Top Center) - Slow Wiggle */}
      <div className="absolute top-12 left-2/3 transform -translate-x-1/2 opacity-50 animate-wiggle-slow pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-cyan-400">
          <path d="M12 0V24M0 12H24" />
        </svg>
      </div>

      {/* 5. Circle Outline (Left Middle) - Medium Float */}
      <div className="absolute top-1/2 left-12 w-10 h-10 border-4 border-cyan-200 rounded-full opacity-50 animate-float-medium pointer-events-none" style={{animationDelay: '1s'}}></div>


      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 backdrop-blur-sm border-2 border-[var(--primary)]/40 rounded-full px-5 py-2 mb-8 shadow-lg shadow-[var(--primary)]/10">
            <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-[var(--primary)]">
              Building the future of technology
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent">
            {title}
          </h1>

          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}