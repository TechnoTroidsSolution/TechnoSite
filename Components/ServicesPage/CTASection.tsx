"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CTASectionProps {
  readonly data: {
    readonly title: string;
    readonly subtitle: string;
    readonly button_text: string;
    readonly button_link: string;
  };
}

export default function CTASection({ data }: CTASectionProps) {
  const router = useRouter();

  return (
    <section className="py-20 px-6 bg-gray-50 text-foreground relative overflow-hidden">
      {/* Decorative Animated Icons */}
      {/* Dotted Grid (Top Left) */}
      <div className="absolute top-12 left-4 md:left-10 opacity-40 pointer-events-none">
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

      {/* Blue Triangle (Top Right) */}
      <div className="absolute top-10 right-10 opacity-60 hidden md:block pointer-events-none">
        <svg width="45" height="45" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L40 35H0L20 0Z" className="fill-blue-400" />
        </svg>
      </div>

      {/* Square Outline (Bottom Right) */}
      <div className="absolute bottom-20 right-1/4 opacity-50 pointer-events-none">
        <div className="w-14 h-14 border-4 border-blue-300 rounded-lg"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {data.title}
        </h2>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
          {data.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => router.push(data.button_link)}
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold px-8 py-3 text-base rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            {data.button_text}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => router.push("/services")}
            className="bg-white border-2 border-[var(--primary)] text-[var(--primary)] font-semibold px-8 py-3 text-base rounded-lg hover:bg-[var(--primary)]/5 transition-all duration-300 cursor-pointer"
          >
            Explore Our Services
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-foreground/70">
            <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Long-Term Contracts</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
