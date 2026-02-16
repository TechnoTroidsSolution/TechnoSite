"use client";

import React from "react";

interface TermsServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsServiceModal: React.FC<TermsServiceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[var(--primary)] to-cyan-500 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M9 16h.01M13 12h.01M13 16h.01M17 12h.01M17 16h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl font-bold">Terms of Service</h2>
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
          <p className="text-sm text-gray-500 mb-6">Last Updated: January 25, 2026</p>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-[var(--primary)] p-4 rounded-r-lg mb-6">
            <p className="text-gray-700 text-sm">
              These Terms of Service govern your use of the Techamplers website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>

          {/* 1. Acceptance */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">1</span>
              Acceptance of Terms
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              By accessing our website, you accept these terms in full. If you disagree with any part of these terms, you must not use our website.
            </p>
          </section>

          {/* 2. Use License */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">2</span>
              Use License
            </h3>
            <div className="ml-10 text-sm text-gray-700">
              <p className="mb-2">Permission is granted to temporarily access our website for personal, non-commercial use. You may not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Modify or copy website materials</li>
                <li>Use materials for commercial purposes</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove copyright or proprietary notations</li>
              </ul>
            </div>
          </section>

          {/* 3. User Accounts */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">3</span>
              User Accounts
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              When creating an account or submitting applications, you are responsible for maintaining confidentiality of your information and for all activities that occur under your account.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">4</span>
              Intellectual Property
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              All content on this website, including text, graphics, logos, and software, is the property of Techamplers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          {/* 5. Prohibited Uses */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">5</span>
              Prohibited Uses
            </h3>
            <div className="ml-10 text-sm text-gray-700">
              <p className="mb-2">You may not use our website:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>In any unlawful manner or for any illegal purpose</li>
                <li>To transmit harmful code or malware</li>
                <li>To harass, abuse, or harm another person</li>
                <li>To impersonate or misrepresent your affiliation with any person or entity</li>
                <li>To collect or track personal information of others</li>
              </ul>
            </div>
          </section>

          {/* 6. User Content */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">6</span>
              User Content
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              When you submit content (resumes, applications, messages), you grant us a license to use, display, and process that content solely for the purposes of providing our services.
            </p>
          </section>

          {/* 7. Termination */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">7</span>
              Termination
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms.
            </p>
          </section>

          {/* 8. Disclaimer */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">8</span>
              Disclaimer
            </h3>
            <div className="ml-10">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-gray-700 uppercase font-semibold mb-2">
                  THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-xs text-gray-600">
                  We do not warrant that the services will be uninterrupted, secure, or error-free.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Limitation of Liability */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">9</span>
              Limitation of Liability
            </h3>
            <div className="ml-10">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TECHAMPLERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE SERVICES.
                </p>
              </div>
            </div>
          </section>

          {/* 10. Changes to Terms */}
          <section className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">10</span>
              Changes to Terms
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          {/* 11. Contact */}
          <section className="mb-8 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[var(--primary)] text-white rounded-lg text-sm">11</span>
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
                <a href="mailto:legal@techamplers.com" className="text-[var(--primary)] hover:underline font-medium text-base">
                  legal@techamplers.com
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

export default TermsServiceModal;
