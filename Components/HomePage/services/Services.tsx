'use client';

import Link from "next/link";
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

export default function Services() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Ambience (Subtle gradient blob for depth on white) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-100/40 blur-[100px] rounded-full opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <Reveal className="text-center mb-20" amount={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            What We Do
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Tech Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We transform businesses through cutting-edge technology. From robust web architectures to intelligent AI systems.
          </p>
        </Reveal>

        {/* Services Grid */}
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" amount={0.1}>
          
          {/* Service 1: Web Development */}
          <RevealItem>
            <div className="group relative h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Web Development</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Building scalable, high-performance web applications using modern frameworks like React, Next.js, and Node.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* Service 2: Mobile Apps */}
          <RevealItem>
            <div className="group relative h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-teal-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-teal-600 transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">Mobile Apps</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Native and cross-platform mobile experiences tailored for iOS and Android using Flutter and React Native.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* Service 3: Cloud Solutions */}
          <RevealItem>
            <div className="group relative h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Cloud Solutions</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Secure and scalable cloud architecture design, migration services, and DevOps automation on AWS and Azure.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* Service 4: AI & ML */}
          <RevealItem>
            <div className="group relative h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">AI & ML</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Leveraging Artificial Intelligence to automate processes, analyze data, and create intelligent predictive models.
                </p>
              </div>
            </div>
          </RevealItem>

        </RevealContainer>

        {/* Bottom Action */}
        <Reveal className="text-center mt-16" amount={0.1}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-0.5"
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