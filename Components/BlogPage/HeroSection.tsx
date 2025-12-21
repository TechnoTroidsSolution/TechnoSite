'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
    readonly title?: string;
    readonly subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = 'TechnoTroids Blog',
    subtitle = 'Insights on AI, Technology, and Innovation',
}) => {
    return (
        <section
            className="relative
        bg-gradient-to-b
        from-[var(--background)]
        via-[var(--background)]
        to-[var(--card)]
        overflow-hidden
        border-b border-[var(--border)]
        before:absolute before:inset-0
        before:bg-gradient-to-r
        before:from-[var(--primary)]/5
        before:to-[var(--accent)]/5
        before:pointer-events-none"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 left-10 w-72 h-72
            bg-[var(--primary)]/10
            rounded-full blur-3xl animate-float-slow"
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96
            bg-[var(--accent)]/10
            rounded-full blur-3xl animate-float"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[600px]
            bg-gradient-to-r
            from-[var(--primary)]/5
            to-[var(--accent)]/5
            rounded-full blur-3xl"
                />
            </div>

            {/* Grid */}
            <div className="absolute inset-0 bg-grid-black opacity-5" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-[var(--secondary)]
              border border-[var(--border)]
              mb-8 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                        <span className="text-sm font-semibold text-[var(--foreground)]">
                            Latest Tech Insights & AI Innovations
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6
              text-[var(--foreground)]
              leading-tight"
                    >
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="text-xl sm:text-2xl
              text-[var(--muted-foreground)]
              mb-12 leading-relaxed max-w-3xl mx-auto"
                    >
                        {subtitle}
                    </p>

                    {/* Popular Tags */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <span className="text-sm text-[var(--foreground)]">
                            Popular Topics:
                        </span>

                        {['Agentic AI', 'MCP', 'LLM', 'Machine Learning', 'AI Infrastructure'].map(
                            (tag) => (
                                <button
                                    key={tag}
                                    className="px-4 py-1.5 rounded-full text-sm font-medium
                    bg-[var(--secondary)]
                    text-[var(--foreground)]
                    border border-[var(--border)]
                    hover:bg-[var(--primary)]/10
                    hover:border-[var(--primary)]/40
                    hover:text-[var(--primary)]
                    transition-all duration-300"
                                >
                                    {tag}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32
          bg-gradient-to-t
          from-[var(--background)]
          to-transparent"
            />
        </section>
    );
};

export default HeroSection;
