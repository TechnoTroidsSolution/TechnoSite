"use client";

import React from "react";
import {
  Search,
  FileSearch,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
} from "lucide-react";

interface ProcessStep {
  readonly number: number;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

interface ProcessSectionProps {
  readonly data: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly steps: readonly ProcessStep[];
  };
}

const ICON_MAP: Record<string, React.ReactNode> = {
  search: <Search className="w-8 h-8 text-[var(--primary)]" />,
  strategy: <FileSearch className="w-8 h-8 text-[var(--primary)]" />,
  design: <PenTool className="w-8 h-8 text-[var(--primary)]" />,
  development: <Code2 className="w-8 h-8 text-[var(--primary)]" />,
  qa: <ShieldCheck className="w-8 h-8 text-[var(--primary)]" />,
  launch: <Rocket className="w-8 h-8 text-[var(--primary)]" />,
  support: <RefreshCw className="w-8 h-8 text-[var(--primary)]" />,
};

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="inline-block bg-[var(--primary)]/15 text-[var(--primary)] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-[var(--primary)]/30">
            {data.badge}
          </span>

          <h2 className="text-4xl font-bold text-foreground mb-4">
            {data.title}
          </h2>

          <p className="text-foreground/80 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {data.steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon + Number */}
              <div className="shrink-0 text-center lg:text-left">
                <div className="w-15 h-15 rounded-2xl bg-[var(--primary)]/15 flex items-center justify-center shadow-md">
                  {ICON_MAP[step.icon]}
                </div>

                <div className="text-5xl font-bold text-[var(--primary)] mt-4">
                  {step.number < 10 ? `0${step.number}` : step.number}
                </div>
              </div>

              {/* Content */}
              <div className="bg-card border-2 border-[var(--primary)]/30 rounded-3xl p-10 shadow-lg hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all lg:w-2/3">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-foreground/80 mb-6">{step.description}</p>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={`${step.title}-${tag}`}
                      className="bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
