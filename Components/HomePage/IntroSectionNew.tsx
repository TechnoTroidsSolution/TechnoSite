'use client';

import Link from 'next/link';
import { RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

const bulletPoints = [
  'Product teams that need measurable impact',
  'Leaders shipping resilient, intelligent platforms',
  'Startups scaling securely without losing speed',
];

export default function IntroSection() {
  return (
    <RevealContainer
      className="relative flex flex-col justify-center gap-6 md:gap-7 z-10"
      amount={0.4}
    >
      <RevealItem>
        <span className="inline-flex items-center gap-2 bg-white/10 text-blue-100 px-4 py-1.5 rounded-full backdrop-blur">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue-300" />
          <span>Experience-led technology partner</span>
        </span>
      </RevealItem>

      <RevealItem>
        <h1 className="text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-snug">
          Trusted engineering teams delivering clarity, speed, and outcomes.
        </h1>
      </RevealItem>

      <RevealItem>
        <p className="text-base lg:text-lg text-blue-100/90 leading-relaxed max-w-xl">
          We blend strategy, design, and engineering to craft human-centred products that
          launch faster, operate smarter, and scale confidently across modern platforms.
        </p>
      </RevealItem>

      <RevealItem>
        <ul className="grid gap-2 text-sm text-blue-100/90 sm:text-base sm:grid-cols-2 sm:gap-x-5">
          {bulletPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </RevealItem>

      <RevealItem>
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white/95 text-blue-900 font-semibold px-8 py-3.5 rounded-lg shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a project
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border border-white/70 text-white hover:bg-white/90 hover:text-blue-900 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
          >
            Explore services
          </Link>
        </div>
      </RevealItem>
    </RevealContainer>
  );
}
