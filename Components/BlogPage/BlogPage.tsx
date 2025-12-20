'use client';

import React from 'react';
import HeroSection from './HeroSection';
import BlogCard from './BlogCard';
import { Lightbulb } from 'lucide-react';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    reading_time: number;
    featured: boolean;
    excerpt: string;
}

interface SuggestedTopic {
    title: string;
    description: string;
    category: string;
}

interface BlogData {
    blog: {
        meta: {
            title: string;
            subtitle: string;
            description: string;
        };
        posts: BlogPost[];
        suggested_topics: SuggestedTopic[];
    };
}

interface BlogPageProps {
    readonly data: BlogData;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
    const { blog } = data;
    const { posts, suggested_topics } = blog;

    // Separate featured and regular posts
    const featuredPosts = posts.filter(post => post.featured);
    const regularPosts = posts.filter(post => !post.featured);

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <HeroSection
                title={blog.meta.title}
                subtitle={blog.meta.subtitle}
            />

            {/* Blog Posts Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                Featured Articles
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {featuredPosts.map((post) => (
                                <BlogCard
                                    key={post.slug}
                                    slug={post.slug}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.date}
                                    author={post.author}
                                    category={post.category}
                                    readingTime={post.reading_time}
                                    featured={post.featured}
                                    tags={post.tags}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* All Articles */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            All Articles
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {posts.map((post) => (
                            <BlogCard
                                key={post.slug}
                                slug={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                date={post.date}
                                author={post.author}
                                category={post.category}
                                readingTime={post.reading_time}
                                featured={false}
                                tags={post.tags}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Suggested Topics Section */}
            {suggested_topics && suggested_topics.length > 0 && (
                <section
                    className="border-t border-[var(--border)]
      bg-gradient-to-b
      from-[var(--background)]
      to-[var(--card)]"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-[var(--secondary)]
            border border-[var(--border)]
            mb-6"
                            >
                                <Lightbulb className="w-4 h-4 text-[var(--accent)]" />
                                <span className="text-sm font-semibold text-[var(--foreground)]">
                                    Coming Soon
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
                                Upcoming Blog Topics
                            </h2>

                            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
                                We&apos;re constantly exploring new frontiers in AI and technology.
                                Here&apos;s what we&apos;re writing about next.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {suggested_topics.map((topic, idx) => (
                                <div
                                    key={idx}
                                    className="group p-6 rounded-2xl
              bg-[var(--background)]
              border border-[var(--border)]
              transition-all duration-300
              hover:border-[var(--accent)]/40
              hover:shadow-xl hover:shadow-[var(--accent)]/10"
                                >
                                    {/* Category */}
                                    <div className="flex items-start gap-3 mb-3">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-semibold
                  text-white
                  bg-gradient-to-r
                  from-[var(--primary)]
                  to-[var(--accent)]"
                                        >
                                            {topic.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold mb-3
                text-[var(--foreground)]
                group-hover:text-transparent
                group-hover:bg-clip-text
                group-hover:bg-gradient-to-r
                group-hover:from-[var(--primary)]
                group-hover:to-[var(--accent)]
                transition-all duration-300"
                                    >
                                        {topic.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                        {topic.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}



        </main>
    );
};

export default BlogPage;
