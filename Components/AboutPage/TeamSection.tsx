'use client';

import React from 'react';
import { Reveal } from '@/Components/Animations/Reveal';

export default function TeamSection() {
  return (
    <section aria-labelledby="mission-vision-heading" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-linear-to-r from-(--primary)/15 to-(--accent)/15 border border-(--primary)/25 text-(--primary) text-xs font-semibold tracking-wide uppercase">
            Mission & Vision
          </span>
          <h2 id="mission-vision-heading" className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Driving Digital Transformation
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl mx-auto">
            We build fast, reliable platforms that help teams launch sooner and scale smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Reveal>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[var(--primary)]/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver cutting-edge technology solutions that transform businesses, enhance user experiences, and create lasting value for our clients and their customers.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-10 border-2 border-violet-300/30 hover:border-violet-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the most trusted technology partner for businesses worldwide, known for innovation, reliability, and delivering solutions that exceed expectations.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
        <div className="bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--primary-dark)] rounded-2xl p-10 text-center text-white shadow-2xl shadow-[var(--primary)]/30 border border-white/10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Build the Software of Tomorrow
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            From AI integration to cloud-native architectures, we build systems that don&apos;t just work for today—they dominate the future.
          </p>
          <button className="bg-white text-[var(--primary)] hover:bg-white/90 hover:scale-105 font-bold py-4 px-8 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-xl">
            Let&apos;s Talk Code
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </button>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
