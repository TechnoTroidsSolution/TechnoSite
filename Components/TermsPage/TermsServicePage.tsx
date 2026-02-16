"use client";

import React from "react";
import Link from "next/link";

const TermsServicePage = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium text-sm">Legal Agreement</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent">
              Terms of Service
            </h1>

            <p className="text-xl text-foreground/80 leading-relaxed mb-4">
              Please read these terms and conditions carefully before using our services.
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
                These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at technosite.com 
                (together or individually "Service") operated by Techamplers Inc. ("us", "we", or "our"). 
                By accessing or using the Service, you agree to be bound by these Terms.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="mb-12 bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#acceptance" className="block text-[var(--primary)] hover:underline">
                1. Acceptance of Terms
              </a>
              <a href="#use-license" className="block text-[var(--primary)] hover:underline">
                2. Use License
              </a>
              <a href="#user-accounts" className="block text-[var(--primary)] hover:underline">
                3. User Accounts
              </a>
              <a href="#intellectual-property" className="block text-[var(--primary)] hover:underline">
                4. Intellectual Property Rights
              </a>
              <a href="#prohibited-uses" className="block text-[var(--primary)] hover:underline">
                5. Prohibited Uses
              </a>
              <a href="#content" className="block text-[var(--primary)] hover:underline">
                6. User-Generated Content
              </a>
              <a href="#termination" className="block text-[var(--primary)] hover:underline">
                7. Termination
              </a>
              <a href="#disclaimer" className="block text-[var(--primary)] hover:underline">
                8. Disclaimer of Warranties
              </a>
              <a href="#limitation" className="block text-[var(--primary)] hover:underline">
                9. Limitation of Liability
              </a>
              <a href="#indemnification" className="block text-[var(--primary)] hover:underline">
                10. Indemnification
              </a>
              <a href="#governing-law" className="block text-[var(--primary)] hover:underline">
                11. Governing Law
              </a>
              <a href="#changes" className="block text-[var(--primary)] hover:underline">
                12. Changes to Terms
              </a>
              <a href="#contact" className="block text-[var(--primary)] hover:underline">
                13. Contact Information
              </a>
            </nav>
          </section>

          {/* 1. Acceptance of Terms */}
          <section id="acceptance" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">1</span>
              Acceptance of Terms
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                By accessing and using this Service, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by these Terms, please do not use this Service.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to refuse 
                service to anyone for any reason at any time.
              </p>
            </div>
          </section>

          {/* 2. Use License */}
          <section id="use-license" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">2</span>
              Use License
            </h2>

            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access the materials (information or software) on Techamplers' website for 
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
              this license you may not:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on Techamplers website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
                Techamplers at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>
          </section>

          {/* 3. User Accounts */}
          <section id="user-accounts" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">3</span>
              User Accounts
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>

              <div className="bg-gradient-to-r from-[var(--primary)]/5 to-cyan-500/5 border border-[var(--primary)]/20 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">Account Responsibilities:</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>You are responsible for safeguarding the password that you use to access the Service</li>
                  <li>You must not disclose your password to any third party</li>
                  <li>You are responsible for any activities or actions under your password</li>
                  <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account</li>
                  <li>You may not use another user's account without permission</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Intellectual Property Rights */}
          <section id="intellectual-property" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">4</span>
              Intellectual Property Rights
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                The Service and its original content (excluding Content provided by users), features, and functionality are and will 
                remain the exclusive property of Techamplers and its licensors.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Protected Content</h4>
                      <p className="text-sm text-gray-600">Trademarks, logos, service marks, and trade names are protected by copyright, trademark, and other laws</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">No Unauthorized Use</h4>
                      <p className="text-sm text-gray-600">You may not reproduce, distribute, modify, create derivative works without express written permission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Prohibited Uses */}
          <section id="prohibited-uses" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">5</span>
              Prohibited Uses
            </h2>

            <p className="text-gray-700 mb-4">You may not use our Service:</p>

            <div className="space-y-3">
              <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Illegal Activities:</strong> For any unlawful purpose or to solicit others to perform or participate in any unlawful acts
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Violations:</strong> To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Infringement:</strong> To infringe upon or violate our intellectual property rights or the intellectual property rights of others
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Harmful Content:</strong> To upload or transmit viruses or any other type of malicious code that will or may be used to affect functionality or operation
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Spam & Harassment:</strong> To collect or track personal information of others, spam, phish, pharm, pretext, spider, crawl, or scrape
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>System Interference:</strong> To interfere with or circumvent the security features of the Service or any related website
                </p>
              </div>
            </div>
          </section>

          {/* 6. User-Generated Content */}
          <section id="content" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">6</span>
              User-Generated Content
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Our Service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, 
                videos, or other material ("Content"). You are responsible for the Content that you post to the Service.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-3">Content Guidelines:</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>You retain all rights to any Content you submit, post, or display</li>
                  <li>By posting Content, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such Content</li>
                  <li>You represent and warrant that you own or control all rights to the Content and that public posting will not infringe or violate the rights of any third party</li>
                  <li>We have the right to remove any Content that violates these Terms or that we find objectionable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. Termination */}
          <section id="termination" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">7</span>
              Termination
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, 
                including without limitation if you breach the Terms.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without 
                limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may 
                simply discontinue using the Service or contact us.
              </p>
            </div>
          </section>

          {/* 8. Disclaimer of Warranties */}
          <section id="disclaimer" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">8</span>
              Disclaimer of Warranties
            </h2>

            <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6">
              <p className="text-gray-700 font-semibold mb-3 uppercase text-sm">IMPORTANT LEGAL NOTICE:</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, 
                WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
                PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                TECHAMPLERS, ITS SUBSIDIARIES, AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mt-2">
                <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
                <li>Any errors or defects will be corrected</li>
                <li>The Service is free of viruses or other harmful components</li>
                <li>The results of using the Service will meet your requirements</li>
              </ul>
            </div>
          </section>

          {/* 9. Limitation of Liability */}
          <section id="limitation" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">9</span>
              Limitation of Liability
            </h2>

            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
              <p className="text-gray-700 font-semibold mb-3 uppercase text-sm">LIABILITY LIMITATIONS:</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                IN NO EVENT SHALL TECHAMPLERS, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR 
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, 
                DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mt-3">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE 
                HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
            </div>
          </section>

          {/* 10. Indemnification */}
          <section id="indemnification" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">10</span>
              Indemnification
            </h2>

            <p className="text-gray-700">
              You agree to defend, indemnify, and hold harmless Techamplers and its licensees and licensors, and their employees, 
              contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, 
              liabilities, costs, or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Your use and access of the Service</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your Content caused damage to a third party</li>
            </ul>
          </section>

          {/* 11. Governing Law */}
          <section id="governing-law" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">11</span>
              Governing Law
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of California, United States, 
                without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any 
                provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms 
                will remain in effect.
              </p>
              <p>
                These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior 
                agreements we might have between us regarding the Service.
              </p>
            </div>
          </section>

          {/* 12. Changes to Terms */}
          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">12</span>
              Changes to Terms
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service 
                after those revisions become effective, you agree to be bound by the revised terms.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Recommendation:</strong> We advise you to review these Terms periodically for any changes. Changes to these 
                  Terms are effective when they are posted on this page.
                </p>
              </div>
            </div>
          </section>

          {/* 13. Contact Information */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg">13</span>
              Contact Information
            </h2>

            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms, please contact us:
            </p>

            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-cyan-500/10 border border-[var(--primary)]/20 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </h4>
                  <a href="mailto:legal@techamplers.com" className="text-[var(--primary)] hover:underline font-medium">
                    legal@techamplers.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Legal Department</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Mailing Address
                  </h4>
                  <address className="not-italic text-gray-700 text-sm">
                    Techamplers Inc.<br />
                    123 Innovation Drive<br />
                    Tech Valley, CA 94000<br />
                    United States
                  </address>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--primary)]/20">
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/privacy" 
                    className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Acceptance Notice */}
          <section className="bg-gradient-to-r from-[var(--primary)]/10 to-cyan-500/10 border-2 border-[var(--primary)]/30 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Acknowledgment
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              BY USING OUR SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND 
              AGREE TO BE BOUND BY THEM. If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsServicePage;
