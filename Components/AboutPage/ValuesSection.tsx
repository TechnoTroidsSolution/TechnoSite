'use client';

import React from 'react';

export default function ValuesSection() {
  const values = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Speed & Agility',
      description: 'We move fast without breaking things. Rapid iteration with rock-solid quality.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Transparency',
      description: 'No hidden agendas. Complete visibility into our process, pricing, and progress.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Security First',
      description: 'Security isn&apos;t an afterthought. It&apos;s baked into everything we build from day one.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'Your team becomes our team. We work together to achieve extraordinary results.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Core Values
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built on Strong Foundations
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our values aren&apos;t just words on a wall—they&apos;re lived every day in every interaction
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[linear-gradient(135deg,rgba(var(--primary),0.1),rgba(var(--accent),0.1),var(--background))] rounded-2xl p-8 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-white/10"
            >
              {/* Icon with solid background */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {value.title}
              </h3>

              <p className="text-foreground/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
