"use client";

import React from "react";
import { Reveal, RevealItem } from '@/Components/Animations/Reveal';

interface PhilosophySectionProps {
  readonly headline: string;
  readonly text: string;
}

export default function PhilosophySection({
  headline,
  text,
}: PhilosophySectionProps) {
  const innovations = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      desc: 'Leveraging cutting-edge AI models to build intelligent, adaptive solutions that learn and evolve.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'cloud-native',
      title: 'Cloud Native Architecture',
      desc: 'Building scalable, resilient microservices with Kubernetes, serverless, and modern DevOps practices.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50'
    },
    {
      id: 'real-time',
      title: 'Real-Time Systems',
      desc: 'Developing high-performance, low-latency applications with WebSocket, GraphQL subscriptions, and event-driven architecture.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-teal-500',
      bgGradient: 'from-cyan-50 to-teal-50'
    },
    {
      id: 'security',
      title: 'Zero Trust Security',
      desc: 'Implementing advanced security protocols with end-to-end encryption, multi-factor authentication, and threat detection.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <Reveal>
              <div className="inline-block mb-6">
                <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-2 rounded-full text-sm font-semibold">
                  Our Core Belief
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {headline}
              </h2>
            </Reveal>

            <Reveal>
              <div className="max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </Reveal>

            {/* Key pillars */}
            <Reveal>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {["Quality", "Speed", "Value"].map((pillar) => (
                  <div key={pillar} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg shadow-[var(--primary)]/30">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="font-semibold text-foreground text-sm">
                      {pillar}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          
          {/* Right side - Innovation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovations.map((innovation) => (
              <RevealItem key={innovation.id}>
                <div className="group relative h-full">
                  <div className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${innovation.bgGradient} border-2 border-transparent hover:border-[var(--primary)]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1`}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${innovation.gradient} text-white mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                      {innovation.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {innovation.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {innovation.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}