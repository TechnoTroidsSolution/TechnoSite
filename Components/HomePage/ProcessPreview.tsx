'use client';

import { ArrowRight, CalendarCheck, Target, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

const steps = [
  {
    number: '01',
    title: 'Immersive discovery',
    description:
      'Deep collaborative sessions that align stakeholders, unpack constraints, and frame opportunity areas with measurable outcomes.',
    icon: UsersRound,
    highlight: 'Shared clarity in week one',
  },
  {
    number: '02',
    title: 'Evidence-led strategy',
    description:
      'Experience maps, service blueprints, and technical roadmaps designed to keep teams focused on the highest-value work.',
    icon: Target,
    highlight: 'Roadmap with ROI guardrails',
  },
  {
    number: '03',
    title: 'Sprints that compound',
    description:
      'Disciplined delivery cadences, automated QA, and demo-driven feedback loops sustain reliable momentum to production.',
    icon: CalendarCheck,
    highlight: 'Shippable increments weekly',
  },
];

export default function ProcessPreview() {
  return (
    <section className="py-24 bg-linear-to-b from-white via-white to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr,1fr] gap-12 items-center">
          <Reveal className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
              Our playbook
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A process tuned for strategic alignment, rapid delivery, and ongoing optimisation.
            </h2>
            <p className="text-lg text-foreground/70">
              Every engagement is shaped around outcomes. Transparent metrics, collaborative workshops, and resilient automation keep teams focused on what matters most.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Explore the full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <RevealContainer className="space-y-4">
            {steps.map(({ number, title, description, icon: Icon, highlight }) => (
              <RevealItem key={title}>
                <article className="rounded-2xl border border-border/50 bg-card/80 p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary font-semibold text-lg shrink-0">
                      {number}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                      </div>
                      <p className="text-foreground/70 leading-relaxed">{description}</p>
                      <span className="inline-flex items-center text-sm font-medium text-foreground/80 bg-foreground/5 px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealContainer>
        </div>
      </div>
    </section>
  );
}
