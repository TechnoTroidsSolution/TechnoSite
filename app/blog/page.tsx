import BlogPage from '@/Components/BlogPage/BlogPage';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

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

async function getBlogData(): Promise<BlogData> {
    const filePath = path.join(process.cwd(), 'content', 'blog.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as BlogData;
    return data;
}

export const metadata = {
    title: 'Blog - TechnoTroids | AI & Technology Insights',
    description:
        'Explore cutting-edge insights on Agentic AI, Model Context Protocol (MCP), and the latest technology trends.',
    openGraph: {
        title: 'TechnoTroids Blog - AI & Technology Insights',
        description:
            'Latest articles on Agentic AI, MCP, and innovative technology solutions',
        type: 'website',
    },
};

export default async function Blog() {
    const data = await getBlogData();

    return <BlogPage data={data} />;
}
