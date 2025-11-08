'use client';

import React from 'react';
import HeroSection from './HeroSection';
import PhilosophySection from './PhilosophySection';
import PrinciplesSection from './PrinciplesSection';
import TeamSection from './TeamSection';
import StatsSection from './StatsSection';
import TimelineSection from './TimelineSection';
import ValuesSection from './ValuesSection';
import CTASection from './CTASection';

interface Principle {
  title: string;
  description: string;
}

interface AboutData {
  about: {
    section_title: string;
    section_subtitle: string;
    core_belief: {
      headline: string;
      text: string;
    };
    principles: Principle[];
    commitment: {
      text: string;
    };
  };
}

interface AboutPageProps {
  readonly data: AboutData;
}

export default function AboutPage({ data }: AboutPageProps) {
  const { about } = data;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection 
        title={about.section_title}
        subtitle={about.section_subtitle}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Philosophy Section */}
      <PhilosophySection 
        headline={about.core_belief.headline}
        text={about.core_belief.text}
      />

      {/* Principles Section */}
      <PrinciplesSection principles={about.principles} />

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection />

      {/* Commitment CTA */}
      <CTASection commitmentText={about.commitment.text} />
    </main>
  );
}
