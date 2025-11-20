'use client';

import { BrainCircuit, GaugeCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

const highlights = [
  {
    title: 'Strategy to launch, faster',
    description:
      'Outcome-led product strategy aligned with weekly increments so you see validated progress without waiting on long release cycles.',
    icon: GaugeCircle,
    metric: 'Launch in 90 days',
  },
  {
    title: 'Secure, enterprise ready builds',
    description:
      'Security, observability, and compliance baked in from day one. Infrastructure you can trust when scale and reliability matter.',
    icon: ShieldCheck,
    metric: '99.95% uptime targets',
  },
  {
    title: 'AI-native product intelligence',
    description:
      'Operationalize AI responsibly across customer journeys with explainable models, guardrails, and measurable business KPIs.',
    icon: BrainCircuit,
    metric: '45% faster insights',
  },
  {
    title: 'Design that sparks adoption',
    description:
      'Human-centred design systems that make complex workflows effortless, turning first-time users into dedicated advocates.',
    icon: Sparkles,
    metric: 'NPS +38 in pilots',
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            What makes us different
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6">
            Full-spectrum teams delivering precision across strategy, design, and engineering.
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Our cross-functional pods keep velocity high while protecting quality, stability, and customer trust.
          </p>
        </Reveal>

        <RevealContainer className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, description, icon: Icon, metric }) => (
            <RevealItem key={title}>
              <article className="glass-panel rounded-2xl p-8 h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/70 bg-foreground/5 px-3 py-1 rounded-full">
                    {metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-foreground/70 leading-relaxed">{description}</p>
              </article>
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}
