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
    <section className="relative py-24 bg-slate-50 overflow-hidden">

      {/* Decorative grid (same as services) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.25,
        }}
      />

      {/* Soft blur blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            What makes us different
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-6 tracking-tight">
            Full-spectrum teams delivering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              precision & speed
            </span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Cross-functional delivery pods that move fast without compromising quality, security, or trust.
          </p>
        </Reveal>

        {/* Cards */}
        <RevealContainer className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, description, icon: Icon, metric }) => (
            <RevealItem key={title}>
              <article className="group h-full bg-white rounded-3xl p-8 border border-slate-200 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">

                {/* Icon + Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center transition-all duration-300 shadow-sm
                               group-hover:bg-gradient-to-r from-blue-600 to-cyan-400
                               group-hover:shadow-md group-hover:scale-110 group-hover:rotate-3"
                  >
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {metric}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                  {description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}