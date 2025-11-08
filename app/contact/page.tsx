import React from 'react';
import { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import ContactPage from '@/Components/ContactPage/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us - TechnoTroids',
  description: "Get in touch with TechnoTroids. Let's build something extraordinary together.",
};

interface ContactData {
  contact: {
    section_title: string;
    section_subtitle: string;
    form_intro: string;
    form_fields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
      placeholder?: string;
      options?: string[];
      rows?: number;
      helper?: string;
    }>;
    alternative_contact: {
      title: string;
      subtitle: string;
      methods: Array<{
        type: string;
        value: string;
        icon: string;
        note: string;
      }>;
    };
    response_commitment: {
      promise: string;
      note: string;
    };
  };
  project_inquiry: {
    section_title: string;
    section_subtitle: string;
    approach: {
      headline: string;
      description: string;
    };
    what_we_explore: {
      title: string;
      items: Array<{
        point: string;
        why: string;
      }>;
    };
    what_you_receive: {
      title: string;
      items: string[];
    };
    commitment: {
      text: string;
      note: string;
    };
    cta: string;
  };
}

function getContactData(): ContactData {
  const filePath = path.join(process.cwd(), 'content', 'contact.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as ContactData;
}

export default function Contact() {
  const data = getContactData();

  return (
    <ContactPage 
      data={data}
      showHero={true}
      heroTitle="Need assistance?"
      heroSubtitle="Our team is ready to help you."
    />
  );
}
