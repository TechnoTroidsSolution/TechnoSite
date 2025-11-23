'use client';

import React from 'react';
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

export default function ValuesSection() {
  const values = [
    {
      title: 'Efficient & Agile',
      desc: 'We move fast without breaking things. Rapid iteration with rock-solid quality.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Radical Transparency',
      desc: 'No hidden agendas. Complete visibility into our process, pricing, and progress.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Collaborative Spirit',
      desc: 'Your team becomes our team. We work together to achieve extraordinary results.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-semibold mb-6">
              Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built on Strong Foundations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl">
              Our values aren't just words on a wall—they're lived every day in every interaction.
            </p>
          </Reveal>
        </div>

        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, index) => (
            <RevealItem key={index}>
              <div className="flex gap-5 p-8 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:shadow-lg hover:shadow-[var(--primary)]/10 transition-all duration-300 group">
                {/* Icon Box */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-slate-300 text-slate-600 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[var(--primary)] group-hover:to-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealContainer>

      </div>
    </section>
  );
}