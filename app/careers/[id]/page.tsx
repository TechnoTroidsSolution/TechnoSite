import { Metadata } from 'next';
import JobDetailPage from '@/Components/CareersPage/JobDetailPage';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'Job Details - Technotroids',
  description: 'View detailed job description and requirements',
};

// Load careers data from YAML
function loadCareersData() {
  const filePath = path.join(process.cwd(), 'content', 'careers.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: any = yaml.load(fileContents);
  return data.careers;
}

export async function generateStaticParams() {
  const careersData = loadCareersData();
  return careersData.jobs.map((job: any) => ({
    id: job.id,
  }));
}

export default async function JobDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const careersData = loadCareersData();
  const job = careersData.jobs.find((j: any) => j.id === id);
  
  return <JobDetailPage job={job} />;
}
