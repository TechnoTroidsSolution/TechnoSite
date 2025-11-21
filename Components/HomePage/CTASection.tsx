'use client';

import Link from "next/link";
import { Reveal } from '@/Components/Animations/Reveal';

export default function CTASection() {
  return (
    <section className="py-20 bg-background bg-hero-radial text-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you achieve your digital transformation goals
            with cutting-edge technology solutions.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white/95 text-blue-900 font-semibold py-4 px-10 rounded-lg shadow-glow transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="border border-white/70 text-white hover:bg-white/90 hover:text-blue-900 font-semibold py-4 px-10 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
