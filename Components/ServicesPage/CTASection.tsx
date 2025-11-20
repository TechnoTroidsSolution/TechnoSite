"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CTASectionProps {
  readonly data: {
    readonly title: string;
    readonly subtitle: string;
    readonly button_text: string;
    readonly button_link: string;
  };
}

export default function CTASection({ data }: CTASectionProps) {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent),var(--color-background))] text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-10 -left-16 w-64 h-64 bg-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {data.title}
        </h2>

        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          {data.subtitle}
        </p>

        <button
          onClick={() => router.push(data.button_link)}
          className="bg-primary-foreground text-background font-semibold px-10 py-4 text-lg rounded-full shadow-lg
                     hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
        >
          {data.button_text}
        </button>

      </div>
    </section>
  );
}
