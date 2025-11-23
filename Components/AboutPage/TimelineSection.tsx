'use client';

import React from 'react';
import { Reveal } from '@/Components/Animations/Reveal';

export default function TimelineSection() {
  const milestones = [
    {
      phase: 'Phase 01',
      title: 'Inception & Core Engine',
      description: 'TechnoTroids was born from a simple idea: Software is too complex. We built our core engine to simplify the stack.',
      status: 'completed',
      icon: '⚡'
    },
    {
      phase: 'Phase 02',
      title: 'MVP & Beta Launch',
      description: 'Shipped the first version to select partners. Achieved 99.9% uptime and validated our engineering-first approach.',
      status: 'completed',
      icon: '🛠️'
    },
    {
      phase: 'Current Focus',
      title: 'Market Expansion',
      description: 'Scaling our service offerings. Integrating autonomous AI agents into client workflows. Onboarding new partners.',
      status: 'current',
      icon: '🚀'
    },
    {
      phase: 'The Horizon',
      title: 'Global Ecosystem',
      description: 'Democratizing enterprise-grade engineering for startups worldwide. Building the operating system for modern business.',
      status: 'upcoming',
      icon: '🔮'
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-100 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Our Trajectory
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Building at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Light Speed</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We aren't weighed down by legacy. We build fast, ship often, and iterate constantly.
            </p>
          </Reveal>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Glowing Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-slate-200">
             <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => (
              <Reveal key={index} width="100%">
                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  
                  {/* CARD SIDE */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className={`group relative bg-white p-6 rounded-2xl border transition-all duration-300
                      ${item.status === 'current' 
                        ? 'border-blue-400 shadow-xl shadow-blue-500/10 scale-105' 
                        : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-300 hover:shadow-blue-500/5'
                      }
                    `}>
                      
                      {/* Phase Label (Replaces Date) */}
                      <div className={`absolute -top-3 left-6 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide
                        ${item.status === 'current' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'}
                      `}>
                        {item.phase}
                      </div>

                      <div className="flex justify-between items-center mb-4 mt-2">
                        <h3 className={`text-xl font-bold transition-colors ${item.status === 'current' ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                          {item.title}
                        </h3>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* CENTER NODE */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center
                     ${item.status === 'current' ? 'bg-white' : 'bg-white'}
                  `}>
                    {item.status === 'completed' ? (
                       <div className="w-full h-full rounded-full bg-blue-600">
                         <svg className="w-4 h-4 text-white mx-auto mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                         </svg>
                       </div>
                    ) : item.status === 'current' ? (
                       <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse ring-4 ring-cyan-100"></div>
                    ) : (
                       <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    )}
                  </div>

                  {/* EMPTY SIDE (For Balance) */}
                  <div className="w-full md:w-1/2"></div>
                  
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}