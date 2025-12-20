import BlogPostPage from '@/Components/BlogPage/BlogPostPage';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { notFound } from 'next/navigation';

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
    image: string;
    content: string;
}

interface BlogData {
    blog: {
        meta: {
            title: string;
            subtitle: string;
            description: string;
        };
        posts: BlogPost[];
    };
}

async function getBlogData(): Promise<BlogData> {
    const filePath = path.join(process.cwd(), 'content', 'blog.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as BlogData;
    return data;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const data = await getBlogData();

    return data.blog.posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getBlogData();
    const post = data.blog.posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found - TechnoTroids Blog',
        };
    }

    return {
        title: `${post.title} - TechnoTroids Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getBlogData();

    // Find the current post
    const post = data.blog.posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = data.blog.posts
        .filter((p) => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    return <BlogPostPage post={post} relatedPosts={relatedPosts} />;
}
