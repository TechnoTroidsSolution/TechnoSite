'use client';

import React from 'react';

interface PhilosophySectionProps {
  readonly headline: string;
  readonly text: string;
}

export default function PhilosophySection({ headline, text }: PhilosophySectionProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Decorative element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Large quote mark */}
              <div className="absolute top-0 left-0 text-[200px] font-serif text-primary/10 leading-none select-none">
                &ldquo;
              </div>
              
              {/* Floating cards */}
              <div className="absolute top-16 left-12 w-64 h-32 bg-[linear-gradient(135deg,var(--primary),var(--accent))] rounded-2xl shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="p-6 text-primary-foreground">
                  <div className="text-3xl font-bold mb-2">Innovation</div>
                  <div className="text-sm opacity-90">First & Foremost</div>
                </div>
              </div>
              
              <div className="absolute top-48 right-12 w-64 h-32 bg-[linear-gradient(135deg,var(--primary),var(--secondary))] rounded-2xl shadow-xl transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                <div className="p-6 text-primary-foreground">
                  <div className="text-3xl font-bold mb-2">Excellence</div>
                  <div className="text-sm opacity-90">In Every Detail</div>
                </div>
              </div>
              
              <div className="absolute bottom-12 left-24 w-64 h-32 bg-[linear-gradient(135deg,var(--secondary),var(--accent))] rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="p-6 text-primary-foreground">
                  <div className="text-3xl font-bold mb-2">Impact</div>
                  <div className="text-sm opacity-90">That Matters</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-block mb-6">
              <div className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                Our Core Belief
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {headline}
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {text}
              </p>
            </div>

            {/* Key pillars */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {['Quality', 'Speed', 'Value'].map((pillar) => (
                <div key={pillar} className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="font-semibold text-foreground text-sm">
                    {pillar}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
