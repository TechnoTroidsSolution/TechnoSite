'use client';

import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  readonly commitmentText: string;
}

export default function CTASection({ commitmentText }: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 border-t border-gray-100">
      {/* Decorative Elements */}
      <div className="absolute top-12 left-4 md:left-10 opacity-60 animate-pulse">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
           <circle cx="2" cy="2" r="2" className="fill-[var(--accent)]" />
           <circle cx="22" cy="2" r="2" className="fill-[var(--accent)]" />
           <circle cx="42" cy="2" r="2" className="fill-[var(--accent)]" />
           <circle cx="2" cy="22" r="2" className="fill-[var(--accent)]" />
           <circle cx="22" cy="22" r="2" className="fill-[var(--accent)]" />
           <circle cx="42" cy="22" r="2" className="fill-[var(--accent)]" />
           <circle cx="2" cy="42" r="2" className="fill-[var(--accent)]" />
           <circle cx="22" cy="42" r="2" className="fill-[var(--accent)]" />
           <circle cx="42" cy="42" r="2" className="fill-[var(--accent)]" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 opacity-90 hidden md:block">
        <svg width="45" height="45" viewBox="0 0 40 40" fill="none" className="animate-bounce-slow">
          <path d="M20 0L40 35H0L20 0Z" className="fill-[var(--primary)]" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-1/4 opacity-70 transform rotate-12">
        <div className="w-14 h-14 border-4 border-[var(--primary)]/30 rounded-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
          Our Commitment to You
        </h2>

        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          {commitmentText}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--primary)]/50 flex items-center justify-center"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <Link
            href="/services"
            className="bg-white text-slate-700 border-2 border-slate-200 hover:border-[var(--primary)] hover:text-[var(--primary)] font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center"
          >
            Explore Our Services
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-slate-600 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Long-Term Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
