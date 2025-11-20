'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

export default function CompanyOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef4ff] py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-48 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <RevealContainer className="space-y-6">
            <RevealItem>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Company
              </span>
            </RevealItem>

            <RevealItem>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0f1b46]">
                Innovative IT helping service all over the world
              </h2>
            </RevealItem>

            <RevealItem>
              <p className="max-w-xl text-base leading-relaxed text-[#475569]">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using purposeful
                discovery is to anchor every solution in measurable business value.
              </p>
            </RevealItem>

            <RevealItem>
              <p className="max-w-xl text-base leading-relaxed text-[#475569]">
                There are many variations of passages of customer journeys available, but we make
                sure the narrative always supports clarity, velocity, and dependable delivery
                outcomes.
              </p>
            </RevealItem>

            <RevealItem>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-[#0f1b46] transition-colors hover:text-primary"
              >
                <span>Know More</span>
                <span aria-hidden="true" className="block h-px w-8 bg-current" />
              </Link>
            </RevealItem>
          </RevealContainer>

          <Reveal>
            <div className="relative mx-auto flex w-full max-w-xl justify-center animate-[float_0s_ease-in-out_infinite]">
              <div className="absolute -top-12 -left-14 hidden sm:block h-20 w-44 rounded-3xl bg-[#f31260]" />
              <div className="absolute -bottom-12 right-0 hidden sm:block h-16 w-48 rounded-3xl bg-[#0f1a45]" />

              <div className="relative z-10 w-full overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_30px_70px_-40px_rgba(15,27,70,0.6)]">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/Images/homepage/team.png"
                    alt="Consulting team collaborating"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 520px, (min-width: 768px) 60vw, 90vw"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -bottom-10 -left-6 block h-16 w-44 rounded-3xl bg-[#f31260] sm:hidden" />
              <div className="absolute -bottom-14 right-4 block h-14 w-40 rounded-3xl bg-[#0f1a45]/90 sm:hidden" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
