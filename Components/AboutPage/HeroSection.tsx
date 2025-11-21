"use client";

import React from "react";

interface HeroSectionProps {
  readonly title: string;
  readonly subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-24 md:py-32 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

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
