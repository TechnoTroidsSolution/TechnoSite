"use client";

import React from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[var(--primary)] to-cyan-500 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6 pb-8 bg-white">
          <p className="text-sm text-gray-500 mb-6">Last Updated: January 26, 2026</p>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-[var(--primary)] p-4 rounded-r-lg mb-6">
            <p className="text-gray-700 text-sm">
              This Privacy Policy explains how Techamplers collects, uses, and protects your personal information when you visit our website, submit contact inquiries, or apply for jobs with our company.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">1</span>
              Information We Collect
            </h3>

            <div className="space-y-4 ml-10">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Job Applications</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Name, email address, and phone number</li>
                  <li>Resume/CV link (we collect a link to your resume, not the file itself)</li>
                  <li>Cover letter</li>
                  <li>Work experience, current company, and notice period</li>
                  <li>LinkedIn profile and portfolio URL (optional)</li>
                  <li>Expected salary</li>
                  <li>How you heard about the position (referral source)</li>
                  <li>Confirmation that your resume link is publicly accessible</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Forms</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Name and email address</li>
                  <li>Message content</li>
                  <li>Any additional information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Website Usage</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages viewed and navigation patterns</li>
                  <li>Referral source and time spent on site</li>
                  <li>Cookies for site functionality and analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">2</span>
              How We Use Your Information
            </h3>

            <div className="ml-10 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Job Applications</h4>
                  <p className="text-xs text-gray-600">Review qualifications and contact candidates</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Respond to Inquiries</h4>
                  <p className="text-xs text-gray-600">Answer questions about our services</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Improve Website</h4>
                  <p className="text-xs text-gray-600">Understand usage and make improvements</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Legal Compliance</h4>
                  <p className="text-xs text-gray-600">Meet legal obligations</p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  <strong>We do not:</strong> Sell your data, send marketing emails, send automated confirmation emails, or share your information with third parties for advertising.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
                <p className="text-xs text-gray-700">
                  <strong>Note:</strong> We check for duplicate applications to prevent multiple submissions for the same position. If you've already applied, we'll let you know.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Data Security */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">3</span>
              Data Security
            </h3>
            <div className="ml-10 space-y-3">
              <p className="text-sm text-gray-700">
                We protect your information using industry-standard security measures including encryption and secure data storage. Your application data is stored securely in Google Workspace (Google Sheets) with restricted access and is only accessible by authorized personnel involved in recruitment.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  <strong>Resume Links:</strong> We only collect links to your resume (e.g., Google Drive, Dropbox) rather than storing resume files directly on our servers. You maintain control over your resume file and can revoke access at any time.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Cookies */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">4</span>
              Cookies and Analytics
            </h3>
            <div className="ml-10 space-y-2">
              <div className="bg-white border-l-4 border-[var(--primary)] p-3 rounded-r-lg">
                <h4 className="font-semibold text-sm text-gray-900">Essential Cookies</h4>
                <p className="text-xs text-gray-600">Required for website functionality</p>
              </div>
              <div className="bg-white border-l-4 border-cyan-500 p-3 rounded-r-lg">
                <h4 className="font-semibold text-sm text-gray-900">Analytics</h4>
                <p className="text-xs text-gray-600">Help us understand visitor behavior</p>
              </div>
            </div>
          </section>

          {/* 5. Your Rights */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">5</span>
              Your Rights
            </h3>
            <div className="ml-10">
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-3">
                <li>Request a copy of your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for job applications at any time</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  To exercise these rights, email us at{" "}
                  <a href="mailto:privacy@techamplers.com" className="text-[var(--primary)] hover:underline font-medium">
                    privacy@techamplers.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* 6. Changes */}
          <section className="mb-6 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">6</span>
              Changes to This Policy
            </h3>
            <p className="text-sm text-gray-900 ml-10">
              We may update this Privacy Policy occasionally. Check the "Last Updated" date at the top to see when changes were made.
            </p>
          </section>

          {/* 7. Contact */}
          <section className="mb-8 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">7</span>
              Contact Us
            </h3>
            <div className="ml-10">
              <div className="bg-white border border-gray-300 rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h4>
                <a href="mailto:privacy@techamplers.com" className="text-[var(--primary)] hover:underline font-medium text-base">
                  privacy@techamplers.com
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t">
          <button
            onClick={onClose}
            className="w-full bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary)]/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
