'use client';

import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    reading_time: number;
    content: string;
    excerpt: string;
}

interface BlogPostPageProps {
    readonly post: BlogPost;
    readonly relatedPosts?: BlogPost[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, relatedPosts = [] }) => {
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

    /* Content formatter */
    const formatContent = (content: string) => {
        const lines = content.split('\n');

        return lines.map((line, idx) => {
            if (line.startsWith('## ')) {
                return (
                    <h2
                        key={idx}
                        className="text-3xl font-bold mt-12 mb-6
              text-[var(--foreground)]
              bg-clip-text text-transparent
              bg-gradient-to-r
              from-[var(--primary)]
              to-[var(--accent)]"
                    >
                        {line.replace('## ', '')}
                    </h2>
                );
            }

            if (line.startsWith('### ')) {
                return (
                    <h3
                        key={idx}
                        className="text-2xl font-semibold mt-8 mb-4
              text-[var(--foreground)]"
                    >
                        {line.replace('### ', '')}
                    </h3>
                );
            }

            if (line.startsWith('**') && line.endsWith('**')) {
                return (
                    <h4
                        key={idx}
                        className="text-lg font-semibold mt-6 mb-3
              text-[var(--primary)]"
                    >
                        {line.replace(/\*\*/g, '')}
                    </h4>
                );
            }

            if (line.startsWith('- ')) {
                return (
                    <li
                        key={idx}
                        className="ml-6 mb-2 list-disc
              text-[var(--muted-foreground)]"
                    >
                        {line.replace('- ', '')}
                    </li>
                );
            }

            if (line.trim() && !line.startsWith('#') && !line.startsWith('---')) {
                return (
                    <p
                        key={idx}
                        className="text-lg mb-6 leading-relaxed
              text-[var(--muted-foreground)]"
                    >
                        {line}
                    </p>
                );
            }

            if (line.trim() === '---') {
                return (
                    <hr
                        key={idx}
                        className="my-12 border-[var(--border)]"
                    />
                );
            }

            return null;
        });
    };

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">


            {/* Hero */}
            <section
                className="relative
          bg-gradient-to-b
          from-[var(--background)]
          to-[var(--card)]
          border-b border-[var(--border)]"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96
            bg-[var(--primary)]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96
            bg-[var(--accent)]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 py-20">
                    <span
                        className={`inline-block px-5 py-2 rounded-full text-sm font-semibold
              text-white bg-gradient-to-r ${getCategoryColor(post.category)} mb-6`}
                    >
                        {post.category}
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6
            text-[var(--muted-foreground)] mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[var(--primary)]" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[var(--accent)]" />
                            <span>{post.reading_time} min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-[var(--primary)]" />
                            <span>{post.author}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-1.5 rounded-full text-sm
                  bg-[var(--secondary)]
                  text-[var(--foreground)]
                  border border-[var(--border)]"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* <button
                        className="inline-flex items-center gap-2 px-6 py-3
              bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]
              text-white rounded-xl font-semibold
              transition-all hover:scale-[1.03]"
                    >
                        <Share2 className="w-4 h-4" />
                        Share Article
                    </button> */}
                </div>
            </section>

            {/* Article */}
            <article className="max-w-4xl mx-auto px-4 py-16">
                {formatContent(post.content)}
            </article>

            {/* Related */}
            {relatedPosts.length > 0 && (
                <section className="border-t border-[var(--border)] bg-[var(--card)]">
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedPosts.slice(0, 3).map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/blog/${r.slug}`}
                                    className="group p-6 rounded-xl
                    bg-[var(--background)]
                    border border-[var(--border)]
                    hover:border-[var(--primary)]/40
                    transition-all"
                                >
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                      text-white bg-gradient-to-r ${getCategoryColor(r.category)} mb-3`}
                                    >
                                        {r.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2
                    group-hover:text-[var(--primary)]">
                                        {r.title}
                                    </h3>
                                    <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">
                                        {r.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default BlogPostPage;
