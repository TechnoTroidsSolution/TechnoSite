'use client';

import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-linear-to-b from-white via-white to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Excellence in Every Solution
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </Reveal>
        
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RevealItem>
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-foreground/70">Quick turnaround without compromising quality</p>
            </div>
          </RevealItem>
          
          <RevealItem>
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Secure & Reliable</h3>
              <p className="text-foreground/70">Enterprise-grade security and 99.9% uptime</p>
            </div>
          </RevealItem>
          
          <RevealItem>
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Expert Team</h3>
              <p className="text-foreground/70">Skilled professionals with years of experience</p>
            </div>
          </RevealItem>
          
          <RevealItem>
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
              <p className="text-foreground/70">Round-the-clock assistance when you need it</p>
            </div>
          </RevealItem>
        </RevealContainer>
      </div>
    </section>
  );
}
