'use client';

import Link from "next/link";
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

const services = [
  {
    title: "Web Development",
    description: "Building scalable, high-performance web applications using modern frameworks like React, Next.js, and Node.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences tailored for iOS and Android using Flutter and React Native.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud architecture design, migration services, and DevOps automation on AWS and Azure.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
    ),
  },
  {
    title: "AI & ML",
    description: "Leveraging Artificial Intelligence to automate processes, analyze data, and create intelligent predictive models.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">

      {/* --- Decorative Background Grid --- */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>
      
      {/* Background Blur Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <Reveal className="text-center mb-20" amount={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            What We Do
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Tech Solutions
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We transform businesses through cutting-edge technology. From robust web architectures to intelligent AI systems.
          </p>
        </Reveal>

        {/* Services Grid */}
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" amount={0.1}>
          {services.map((service, index) => (
            <RevealItem key={index}>
              {/* CARD CONTAINER 
                 - Default: White bg, gray border
                 - Hover: Blue border (border-blue-500), Blue Shadow (shadow-blue-500/10)
              */}
              <div className="group relative h-full bg-white rounded-3xl p-8 border border-slate-200 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm 
                                group-hover:bg-gradient-to-r from-blue-600 to-cyan-400
                                group-hover:shadow-md group-hover:scale-110 group-hover:rotate-3">
                    
                    {/* Icon SVG: Turns white on hover */}
                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {service.icon}
                    </svg>
                  </div>

                  {/* Title: Turns Blue on Hover */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700">
                    {service.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealContainer>

        {/* Bottom Action */}
        <Reveal className="text-center mt-16" amount={0.1}>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 hover:-translate-y-1"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Reveal>

      </div>
    </section>
  );
}