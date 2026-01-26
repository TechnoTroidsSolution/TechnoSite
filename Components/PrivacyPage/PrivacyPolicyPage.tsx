"use client";

import React from "react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 25, 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-12 left-4 md:left-10 opacity-40 animate-spin-slow pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="2" cy="2" r="2" className="fill-cyan-500" />
            <circle cx="22" cy="2" r="2" className="fill-cyan-500" />
            <circle cx="42" cy="2" r="2" className="fill-cyan-500" />
            <circle cx="2" cy="22" r="2" className="fill-cyan-500" />
            <circle cx="22" cy="22" r="2" className="fill-cyan-500" />
            <circle cx="42" cy="22" r="2" className="fill-cyan-500" />
            <circle cx="2" cy="42" r="2" className="fill-cyan-500" />
            <circle cx="22" cy="42" r="2" className="fill-cyan-500" />
            <circle cx="42" cy="42" r="2" className="fill-cyan-500" />
          </svg>
        </div>

        <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float-slow pointer-events-none">
          <svg width="45" height="45" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L40 35H0L20 0Z" className="fill-blue-400" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium text-sm">Your Privacy Matters</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <p className="text-xl text-foreground/80 leading-relaxed mb-4">
              At Techamplers, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>

            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-[var(--primary)] p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how Techamplers collects, uses, and protects your personal information when you visit our website, submit contact inquiries, or apply for jobs with our company.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="mb-12 bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#information-collection" className="block text-[var(--primary)] hover:underline">
                1. Information We Collect
              </a>
              <a href="#how-we-use" className="block text-[var(--primary)] hover:underline">
                2. How We Use Your Information
              </a>
              <a href="#data-security" className="block text-[var(--primary)] hover:underline">
                3. Data Security
              </a>
              <a href="#cookies" className="block text-[var(--primary)] hover:underline">
                4. Cookies and Analytics
              </a>
              <a href="#your-rights" className="block text-[var(--primary)] hover:underline">
                5. Your Rights
              </a>
              <a href="#changes" className="block text-[var(--primary)] hover:underline">
                6. Changes to This Policy
              </a>
              <a href="#contact" className="block text-[var(--primary)] hover:underline">
                7. Contact Us
              </a>
            </nav>
          </section>

          {/* 1. Information We Collect */}
          <section id="information-collection" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">1</span>
              Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Job Applications</h3>
                <p className="text-gray-700 mb-3">When you apply for a position, we collect:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name, email address, and phone number</li>
                  <li>Resume/CV and cover letter</li>
                  <li>Work experience, current company, and notice period</li>
                  <li>LinkedIn profile and portfolio URL (optional)</li>
                  <li>Expected salary</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Contact Forms</h3>
                <p className="text-gray-700 mb-3">When you contact us through our website:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name and email address</li>
                  <li>Message content</li>
                  <li>Any additional information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Website Usage</h3>
                <p className="text-gray-700 mb-3">We automatically collect basic browsing information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages viewed and navigation patterns</li>
                  <li>Referral source and time spent on site</li>
                  <li>Cookies for site functionality and analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section id="how-we-use" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">2</span>
              How We Use Your Information
            </h2>

            <p className="text-gray-700 mb-4">We use your information only for these purposes:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Job Applications</h4>
                    <p className="text-sm text-gray-600">Review qualifications and contact candidates for open positions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Respond to Inquiries</h4>
                    <p className="text-sm text-gray-600">Answer your questions and provide information about our services</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Improve Our Website</h4>
                    <p className="text-sm text-gray-600">Understand how visitors use our site and make improvements</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Legal Compliance</h4>
                    <p className="text-sm text-gray-600">Meet legal obligations and protect our rights</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>We do not:</strong> Sell your data, send marketing emails, or share your information with third parties for advertising purposes.
              </p>
            </div>
          </section>

          {/* 3. Data Security */}
          <section id="data-security" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">3</span>
              Data Security
            </h2>

            <p className="text-gray-700 mb-4">
              We protect your information using industry-standard security measures including encryption and secure data storage. Your application data is stored securely and accessed only by authorized personnel involved in recruitment.
            </p>

            <p className="text-sm text-gray-600 italic">
              While we take security seriously, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          {/* 4. Cookies */}
          <section id="cookies" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">4</span>
              Cookies and Analytics
            </h2>

            <p className="text-gray-700 mb-4">
              We use basic cookies and analytics to understand how visitors use our website and improve their experience.
            </p>

            <div className="space-y-3">
              <div className="bg-white border-l-4 border-[var(--primary)] p-4 rounded-r-lg">
                <h4 className="font-semibold text-foreground mb-1">Essential Cookies</h4>
                <p className="text-sm text-gray-600">Required for the website to function properly</p>
              </div>

              <div className="bg-white border-l-4 border-cyan-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-foreground mb-1">Analytics</h4>
                <p className="text-sm text-gray-600">Help us understand visitor behavior and improve our site</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          {/* 5. Your Rights */}
          <section id="your-rights" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">5</span>
              Your Rights
            </h2>

            <p className="text-gray-700 mb-4">You have the right to:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Request a copy of your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for job applications at any time</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                To exercise these rights, email us at{" "}
                <a href="mailto:privacy@techamplers.com" className="text-[var(--primary)] hover:underline font-medium">
                  privacy@techamplers.com
                </a>
              </p>
            </div>
          </section>

          {/* 6. Changes to Privacy Policy */}
          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">6</span>
              Changes to This Policy
            </h2>

            <p className="text-gray-700">
              We may update this Privacy Policy occasionally. Check the "Last Updated" date at the top to see when changes were made.
            </p>
          </section>

          {/* 7. Contact Us */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">7</span>
              Contact Us
            </h2>

            <p className="text-gray-700 mb-6">
              Questions about this Privacy Policy? Contact us:
            </p>

            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-cyan-500/10 border border-[var(--primary)]/20 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </h4>
                  <a href="mailto:privacy@techamplers.com" className="text-[var(--primary)] hover:underline font-medium text-lg">
                    privacy@techamplers.com
                  </a>
                </div>

                <div className="pt-4 border-t border-[var(--primary)]/20">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary)]/90 transition-colors"
                  >
                    Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
