'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';

const insights = [
  {
    title: 'Designing resilient cloud-native architectures for regulated industries',
    summary:
      'How we partner with compliance teams early, automate evidence collection, and keep delivery velocity high in demanding environments.',
    href: '/services',
    image: '/Images/homepage/hero-section.webp',
    category: 'Architecture',
    readingTime: '8 min read',
  },
  {
    title: 'Operationalising AI assistants safely in enterprise workflows',
    summary:
      'A practical lens on aligning guardrails, prompt evaluation, and human oversight so assistants stay trustworthy and productive.',
    href: '/services',
    image: '/Images/homepage/stats-img.jpg',
    category: 'AI & ML',
    readingTime: '6 min read',
  },
];

export default function InsightsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <Reveal className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              Latest thinking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Insight for leaders building the next generation of digital products.
            </h2>
            <p className="text-lg text-foreground/70">
              Playbooks, architecture patterns, and operating models distilled from delivering modern software in complex environments.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors"
            >
              Meet the strategists behind our work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <RevealContainer className="mt-14 grid gap-8 lg:grid-cols-2">
          {insights.map(({ title, summary, href, image, category, readingTime }) => (
            <RevealItem key={title}>
              <article className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft flex flex-col">
                <div className="relative h-60 w-full bg-grid-light">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-sm font-medium text-foreground/80 backdrop-blur">
                    {category}
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
                    {readingTime}
                  </span>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-foreground leading-tight">{title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{summary}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                  >
                    Read how we approach it
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}
