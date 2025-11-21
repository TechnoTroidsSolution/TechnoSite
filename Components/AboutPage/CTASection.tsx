'use client';

import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  readonly commitmentText: string;
}

export default function CTASection({ commitmentText }: CTASectionProps) {
  return (
    <section className="py-20 md:py-24 bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-12 -left-12 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Our Commitment to You
        </h2>

        {/* Description */}
        <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
          {commitmentText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/contact"
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-7 rounded-lg transition-colors duration-200 inline-flex items-center gap-2 shadow-lg shadow-black/10"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <Link
            href="/services"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-7 rounded-lg transition-colors duration-200 inline-flex items-center gap-2 shadow-lg shadow-black/5"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Long-Term Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 text-white/40">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
