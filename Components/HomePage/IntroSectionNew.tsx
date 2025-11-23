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
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 text-[var(--primary)] px-4 py-1.5 rounded-full backdrop-blur border border-[var(--primary)]/30 shadow-lg shadow-[var(--primary)]/10">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] animate-pulse" />
          <span className="font-medium">Experience-led technology partner</span>
        </span>
      </RevealItem>

      <RevealItem>
        <h1 className="text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-bold bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent leading-[1.1] tracking-tight">
          Trusted engineering teams delivering clarity, speed, and outcomes.
        </h1>
      </RevealItem>

      <RevealItem>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
          We blend strategy, design, and engineering to craft human-centred products that
          launch faster, operate smarter, and scale confidently across modern platforms.
        </p>
      </RevealItem>

      <RevealItem>
        <ul className="grid gap-2 text-sm text-muted-foreground sm:text-base sm:grid-cols-2 sm:gap-x-5">
          {bulletPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </RevealItem>

      <RevealItem>
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/40 hover:scale-105"
          >
            Start a project
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--accent)] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent"
          >
            Explore services
          </Link>
        </div>
      </RevealItem>
    </RevealContainer>
  );
}
