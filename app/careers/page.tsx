import React from 'react';
import CareersPage from '@/Components/CareersPage/CareersPage';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata = {
  title: 'Careers | TechnoTroids',
  description: 'Join our team and build the future of technology. Explore career opportunities at TechnoTroids.',
};

// Load careers data from YAML
function loadCareersData() {
  const filePath = path.join(process.cwd(), 'content', 'careers.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: any = yaml.load(fileContents);
  return data.careers;
}

export default function Careers() {
  const careersData = loadCareersData();
  return <CareersPage careersData={careersData} />;
}
