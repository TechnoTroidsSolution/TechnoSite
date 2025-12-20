'use client';

import React from 'react';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';

interface BlogCardProps {
    readonly slug: string;
    readonly title: string;
    readonly excerpt: string;
    readonly date: string;
    readonly author: string;
    readonly category: string;
    readonly readingTime: number;
    readonly featured?: boolean;
    readonly tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
    slug,
    title,
    excerpt,
    date,
    author,
    category,
    readingTime,
    featured = false,
    tags,
}) => {
    /* Category → Brand gradient mapping */
    const getCategoryColor = (cat: string) => {
        const colors: Record<string, string> = {
            'Artificial Intelligence': 'from-[var(--primary)] to-[var(--accent)]',
            'AI Infrastructure': 'from-[var(--accent)] to-[var(--primary)]',
            'Machine Learning': 'from-[var(--primary-light)] to-[var(--accent-light)]',
            'AI Ethics': 'from-orange-500 to-red-500',
            'AI Development': 'from-[var(--primary-dark)] to-[var(--primary)]',
        };

        return colors[cat] || 'from-[var(--primary)] to-[var(--accent)]';
    };

    return (
        <Link href={`/blog/${slug}`} className="block h-full">
            <article
                className={`group relative h-full
          bg-[var(--card)]
          rounded-2xl overflow-hidden
          border border-[var(--border)]
          transition-all duration-500
          hover:border-[var(--primary)]/50
          hover:shadow-2xl hover:shadow-[var(--primary)]/20
          hover:scale-[1.02]
          ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
                {/* Hover Gradient Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none
            bg-gradient-to-br
            from-[var(--primary)]/0 to-[var(--accent)]/0
            group-hover:from-[var(--primary)]/5
            group-hover:to-[var(--accent)]/5
            transition-all duration-500"
                />

                {/* Content */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                    {/* Category */}
                    <div className="flex items-center gap-3 mb-4">
                        <span
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold
                text-white bg-gradient-to-r ${getCategoryColor(category)}
                shadow-lg`}
                        >
                            {category}
                        </span>

                        {featured && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold
                bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                ⭐ Featured
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3
                        className="text-2xl sm:text-3xl font-bold mb-4
              text-[var(--foreground)]
              group-hover:text-transparent
              group-hover:bg-clip-text
              group-hover:bg-gradient-to-r
              group-hover:from-[var(--primary-light)]
              group-hover:to-[var(--accent-light)]
              transition-all duration-300"
                    >
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed flex-grow line-clamp-3">
                        {excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted-foreground)] mb-4">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-[var(--primary-light)]" />
                            <span>
                                {new Date(date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-[var(--accent-light)]" />
                            <span>{readingTime} min read</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <User className="w-4 h-4 text-[var(--primary)]" />
                            <span>{author}</span>
                        </div>
                    </div>

                    {/* Tags */}
                    {tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.slice(0, 3).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-1 px-3 py-1
                    rounded-full text-xs
                    bg-[var(--secondary)]
                    text-[var(--foreground)]
                    border border-[var(--border)]"
                                >
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Read More */}
                    <div
                        className="flex items-center gap-2
              text-[var(--primary-light)] font-semibold
              group-hover:gap-4 transition-all duration-300"
                    >
                        <span>Read Article</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
