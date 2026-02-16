import { Metadata } from 'next';
import PrivacyPolicyPage from '@/Components/PrivacyPage/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | TechnoSite - Your Privacy Matters',
  description: 'Read our comprehensive privacy policy to understand how we collect, use, and protect your personal information. Learn about your rights and our commitment to data security.',
  keywords: 'privacy policy, data protection, GDPR, personal information, data security, user rights',
  openGraph: {
    title: 'Privacy Policy | TechnoSite',
    description: 'Comprehensive privacy policy explaining how we handle your data with care and transparency.',
    type: 'website',
    url: 'https://technosite.com/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | TechnoSite',
    description: 'Learn how we protect your privacy and handle your personal information.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://technosite.com/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyPage />;
}