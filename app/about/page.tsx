import AboutPage from '@/Components/AboutPage/AboutPage';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

interface AboutData {
  about: {
    section_title: string;
    section_subtitle: string;
    core_belief: {
      headline: string;
      text: string;
    };
    principles: Array<{
      title: string;
      description: string;
    }>;
    commitment: {
      text: string;
    };
  };
}

async function getAboutData(): Promise<AboutData> {
  const filePath = path.join(process.cwd(), 'content', 'about.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as AboutData;
  return data;
}

export const metadata = {
  title: 'About Us - TechnoTroids',
  description: 'Learn about our philosophy, values, and the team behind TechnoTroids. Discover how we think about software and our commitment to excellence.',
};

export default async function About() {
  const data = await getAboutData();
  
  return <AboutPage data={data} />;
}
