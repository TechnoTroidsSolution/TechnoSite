'use client';

import Image from 'next/image';
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-48 top-16 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Image */}
          <Reveal>
            <div className="relative mx-auto flex w-full max-w-xl justify-center">
              <div className="relative z-10 w-full animate-float bg-white">
                <Image
                  src="/Images/homepage/tc.png"
                  alt="Technology Stack - Modern tools and frameworks we use"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* Right Column - Content */}
          <RevealContainer className="space-y-6">
            <RevealItem>
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Technology Stack
              </span>
            </RevealItem>

            <RevealItem>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0f1b46]">
                Powered by Cutting-Edge Technologies
              </h2>
            </RevealItem>

            <RevealItem>
              <p className="max-w-xl text-base leading-relaxed text-[#475569]">
                We leverage the latest and most robust technologies to build scalable, 
                high-performance solutions. From cloud platforms to AI integration, 
                our diverse tech stack ensures we can tackle any challenge.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f1b46]">Cloud Native</h3>
                    <p className="text-sm text-[#475569]">AWS, Azure, GCP</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f1b46]">Modern Frameworks</h3>
                    <p className="text-sm text-[#475569]">React, Next.js, Node</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f1b46]">AI & ML</h3>
                    <p className="text-sm text-[#475569]">Advanced AI Integration</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f1b46]">Enterprise Solutions</h3>
                    <p className="text-sm text-[#475569]">SAP, ERP Systems</p>
                  </div>
                </div>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="pt-4">
                <p className="text-sm text-[#475569] italic">
                  &ldquo;Choosing the right technology is just as important as building the right solution.&rdquo;
                </p>
              </div>
            </RevealItem>
          </RevealContainer>
        </div>
      </div>
    </section>
  );
}
