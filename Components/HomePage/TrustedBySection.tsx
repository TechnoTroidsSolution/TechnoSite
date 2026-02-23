'use client';

import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

const partners = [
  'Acme Health',
  'Northwind Markets',
  'Velocity Finance',
  'Evergreen Logistics',
  'Orion Retail',
  'Beacon Insurance',
];

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-linear-to-b from-background via-background to-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <span className="text-sm uppercase tracking-wider text-foreground/60">Trusted by forward-thinking teams</span>
        </Reveal>

        <RevealContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <RevealItem key={partner}>
              <div className="rounded-2xl border border-border/40 bg-card/70 py-6 px-6 text-center font-semibold text-foreground/70 uppercase tracking-wide shadow-soft">
                {partner}
              </div>
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}
