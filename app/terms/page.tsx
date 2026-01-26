import { Metadata } from 'next';
import TermsServicePage from '@/Components/TermsPage/TermsServicePage';

export const metadata: Metadata = {
  title: 'Terms of Service | TechnoSite - Legal Terms',
  description: 'Read our terms of service to understand the rules and regulations governing the use of our website and services.',
  keywords: 'terms of service, terms and conditions, legal terms, user agreement, service terms',
  openGraph: {
    title: 'Terms of Service | TechnoSite',
    description: 'Comprehensive terms of service outlining the legal agreement between you and TechnoSite.',
    type: 'website',
    url: 'https://technosite.com/terms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | TechnoSite',
    description: 'Learn about our terms of service and user agreement.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://technosite.com/terms',
  },
};

export default function TermsPage() {
  return <TermsServicePage />;
}
