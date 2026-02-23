'use client';

import Link from "next/link";
import { Reveal } from '@/Components/Animations/Reveal';

export default function CTASection() {
  return (
    // UPDATED: Gradient is now stronger (White -> Blue-100) to bridge the gap to the footer
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 border-t border-gray-100">
      
      {/* --- Decorative Elements (Made darker/more opaque to fix "dullness") --- */}
      
      {/* 1. Dotted Grid (Top Left) - Cyan */}
      <div className="absolute top-12 left-4 md:left-10 opacity-60 animate-pulse">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
           <circle cx="2" cy="2" r="2" className="fill-cyan-500" />
           <circle cx="22" cy="2" r="2" className="fill-cyan-500" />
           <circle cx="42" cy="2" r="2" className="fill-cyan-500" />
           <circle cx="2" cy="22" r="2" className="fill-cyan-500" />
           <circle cx="22" cy="22" r="2" className="fill-cyan-500" />
           <circle cx="42" cy="22" r="2" className="fill-cyan-500" />
           <circle cx="2" cy="42" r="2" className="fill-cyan-500" />
           <circle cx="22" cy="42" r="2" className="fill-cyan-500" />
           <circle cx="42" cy="42" r="2" className="fill-cyan-500" />
        </svg>
      </div>

      {/* 2. Blue Triangle (Top Right) - Darker Blue */}
      <div className="absolute top-10 right-10 opacity-90 hidden md:block">
        <svg width="45" height="45" viewBox="0 0 40 40" fill="none" className="animate-bounce-slow">
          <path d="M20 0L40 35H0L20 0Z" className="fill-blue-400" />
        </svg>
      </div>

      {/* 3. Square Outline (Bottom Right) - Visible Blue Border */}
      <div className="absolute bottom-10 right-1/4 opacity-70 transform rotate-12">
        <div className="w-14 h-14 border-4 border-blue-300 rounded-lg"></div>
      </div>

      {/* 4. Small Cross (Top Center) - Cyan */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-cyan-400">
          <path d="M12 0V24M0 12H24" />
        </svg>
      </div>

      {/* 5. Circle Outline (Left Middle) */}
      <div className="absolute top-1/2 left-10 w-10 h-10 border-4 border-cyan-200 rounded-full opacity-60"></div>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Ready to Transform Your Business?
          </h2>
        </Reveal>
        
        <Reveal>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help you achieve your digital transformation goals
            with cutting-edge technology solutions.
          </p>
        </Reveal>
        
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/50 flex items-center justify-center"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/services"
              className="bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}