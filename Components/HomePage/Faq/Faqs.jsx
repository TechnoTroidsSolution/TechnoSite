import React from "react";

export default function Faqs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Quick answers to common questions about contacting us
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Items */}
          {[
            {
              question: "What's the typical response time for inquiries?",
              answer:
                "We aim to respond to all inquiries within 24 hours during business days. For urgent technical support, our 24/7 live chat provides immediate assistance.",
            },
            {
              question: "Do you offer on-site consultations?",
              answer:
                "Yes, we offer both virtual and on-site consultations depending on your project requirements and location. Contact our sales team to discuss the best option for your needs.",
            },
            {
              question: "Can I schedule a demo of your solutions?",
              answer:
                'Absolutely! You can schedule a personalized demo by contacting sales@techno.com or using our "Book a Free Consultation" option above. We\'ll customize the demo to your specific use case.',
            },
            {
              question:
                "What information should I include in my project inquiry?",
              answer:
                "Please provide details about your business needs, project scope, timeline, and any specific technical requirements. The more information you share, the better we can tailor our proposal to your needs.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
