'use client';

import React from 'react';

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
  rows?: number;
  helper?: string;
}

interface ContactMethod {
  type: string;
  value: string;
  icon: string;
  note: string;
}

interface ContactData {
  contact: {
    section_title: string;
    section_subtitle: string;
    form_intro: string;
    form_fields: FormField[];
    alternative_contact: {
      title: string;
      subtitle: string;
      methods: ContactMethod[];
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

interface ContactPageProps {
  readonly data: ContactData;
  readonly showHero?: boolean;
  readonly heroTitle?: string;
  readonly heroSubtitle?: string;
}

export default function ContactPage({ 
  data, 
  showHero = true,
  heroTitle = "Need assistance?",
  heroSubtitle = "Our team is ready to help you."
}: ContactPageProps) {
  const { contact, project_inquiry } = data;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      {showHero && (
        <section className="bg-linear-to-br from-primary via-teal-500 to-accent text-white py-32 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-8">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 8V14M23 11H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-semibold">Let&apos;s Connect</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>

            {/* Mouse Scroll Indicator */}
            <div className="mt-16 flex justify-center">
              <div className="relative animate-bounce">
                <svg 
                  className="w-10 h-16" 
                  viewBox="0 0 32 48" 
                  fill="none" 
                  stroke="white"
                  strokeOpacity="0.8"
                >
                  <rect x="4" y="4" width="24" height="40" rx="12" strokeWidth="2.5" />
                  <circle 
                    cx="16" 
                    cy="14" 
                    r="2" 
                    fill="white"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Methods Section */}
      <section className={`bg-white py-12 ${showHero ? '-mt-10' : ''} relative z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">
              We&apos;re here to help.
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Section - I'm New Here */}
              <div className="lg:w-2/5 bg-linear-to-br from-blue-50 to-white border-2 border-blue-300 rounded-xl p-6 relative shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-md uppercase">
                  I&apos;m New Here
                </span>
                <div className="flex flex-col items-start text-left space-y-3 mt-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 6.75v3.75m9 0a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-6.75a2.25 2.25 0 012.25-2.25m9 0h-9" />
                    </svg>
                  </div>
                  <p className="text-sm leading-snug text-slate-700">
                    Looking for a demo, or have questions about our products and pricing?
                  </p>
                  <a href="mailto:sales@techno.com" className="text-primary hover:text-primary-700 font-semibold text-sm hover:underline transition-colors duration-200">
                    sales@techno.com
                  </a>
                </div>
              </div>

              {/* Right Section - Existing Customer */}
              <div className="lg:w-3/5 bg-white border-2 border-gray-300 rounded-xl p-6 relative shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="absolute -top-3 left-6 bg-orange-500 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-md uppercase">
                  Existing Customer
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
                  {/* Card 1 */}
                  <div className="flex flex-col p-4 bg-slate-50 rounded-lg border border-gray-200 hover:border-primary transition-colors duration-200">
                    <div className="w-10 h-10 mb-3 flex items-center justify-center bg-amber-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <p className="text-xs leading-snug mb-2 text-slate-700 grow">
                      Need help with adding licenses, changing plans, or additional services?
                    </p>
                    <a href="mailto:upgrade@techno.com" className="text-primary hover:text-primary-700 font-semibold text-xs hover:underline transition-colors duration-200">
                      upgrade@techno.com
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-col p-4 bg-slate-50 rounded-lg border border-gray-200 hover:border-primary transition-colors duration-200">
                    <div className="w-10 h-10 mb-3 flex items-center justify-center bg-green-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </div>
                    <p className="text-xs leading-snug mb-2 text-slate-700 grow">
                      Want to renew your subscription or need details about your current plan?
                    </p>
                    <a href="mailto:renewal@techno.com" className="text-primary hover:text-primary-700 font-semibold text-xs hover:underline transition-colors duration-200">
                      renewal@techno.com
                    </a>
                  </div>

                  {/* Card 3 */}
                  <div className="flex flex-col p-4 bg-slate-50 rounded-lg border border-gray-200 hover:border-primary transition-colors duration-200">
                    <div className="w-10 h-10 mb-3 flex items-center justify-center bg-red-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs leading-snug mb-2 text-slate-700 grow">
                      Need to cancel or downgrade your subscription? We&apos;re sad to see you go, but ready to help.
                    </p>
                    <a href="mailto:cancellation@techno.com" className="text-primary hover:text-primary-700 font-semibold text-xs hover:underline transition-colors duration-200">
                      cancellation@techno.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <svg className="w-80 h-80 md:w-96 md:h-96" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background circle */}
                  <circle cx="100" cy="100" r="85" fill="#5ECCC3" opacity="0.2"/>
                  
                  {/* Center person (Leader) */}
                  <circle cx="100" cy="75" r="18" fill="#5ECCC3"/>
                  <path d="M75 130C75 115 86 103 100 103C114 103 125 115 125 130V145H75V130Z" fill="#5ECCC3"/>
                  
                  {/* Left person */}
                  <circle cx="60" cy="85" r="15" fill="#5ECCC3" opacity="0.7"/>
                  <path d="M40 130C40 118 48 108 60 108C72 108 80 118 80 130V142H40V130Z" fill="#5ECCC3" opacity="0.7"/>
                  
                  {/* Right person */}
                  <circle cx="140" cy="85" r="15" fill="#5ECCC3" opacity="0.7"/>
                  <path d="M120 130C120 118 128 108 140 108C152 108 160 118 160 130V142H120V130Z" fill="#5ECCC3" opacity="0.7"/>
                  
                  {/* Connection lines representing teamwork */}
                  <line x1="100" y1="93" x2="75" y2="100" stroke="#2C3E50" strokeWidth="2" opacity="0.3"/>
                  <line x1="100" y1="93" x2="125" y2="100" stroke="#2C3E50" strokeWidth="2" opacity="0.3"/>
                  
                  {/* Decorative dots */}
                  <circle cx="35" cy="55" r="3" fill="#5ECCC3" opacity="0.6"/>
                  <circle cx="165" cy="55" r="3" fill="#5ECCC3" opacity="0.6"/>
                  <circle cx="25" cy="100" r="4" fill="#5ECCC3" opacity="0.4"/>
                  <circle cx="175" cy="100" r="4" fill="#5ECCC3" opacity="0.4"/>
                  <circle cx="50" cy="155" r="3" fill="#5ECCC3" opacity="0.5"/>
                  <circle cx="150" cy="155" r="3" fill="#5ECCC3" opacity="0.5"/>
                  
                  {/* Collaboration symbol - hands shaking or connecting */}
                  <circle cx="100" cy="50" r="5" fill="#2C3E50" opacity="0.3"/>
                </svg>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Find your way around TechnoTroids with Concierge
              </h2>
              <p className="text-slate-600 mb-6">
                Not sure where to start? Our Concierge team is here to help you explore everything TechnoTroids has to offer and find the perfect solution tailored to your business need.
              </p>
              <button className="bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 inline-flex items-center">
                GET STARTED
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            {project_inquiry.section_title}
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            {project_inquiry.section_subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white">
              <div className="flex items-start mb-8">
                <div className="shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Send us a message</h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contact.form_fields.slice(0, 2).map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1">
                        {field.label} {field.required && '*'}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>

                {contact.form_fields.slice(2, 3).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1">
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    {field.helper && (
                      <p className="text-xs text-slate-500 mt-1">{field.helper}</p>
                    )}
                  </div>
                ))}

                {contact.form_fields.find(f => f.type === 'textarea') && (
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                      {contact.form_fields.find(f => f.type === 'textarea')?.label} *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      placeholder={contact.form_fields.find(f => f.type === 'textarea')?.placeholder}
                    ></textarea>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 inline-flex items-center justify-center"
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Book a Consultation */}
            <div className="bg-linear-to-br from-primary to-secondary rounded-lg p-8 text-white relative overflow-hidden">
              {/* Decorative Icons */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="absolute top-1/2 right-8 opacity-10">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className="shrink-0 mr-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Book a Free Consultation</h3>
                    <p className="text-white text-opacity-90">
                      {project_inquiry.approach.description}
                    </p>
                  </div>
                </div>

                <button className="bg-white text-primary hover:bg-slate-100 font-semibold py-3 px-6 rounded-lg transition duration-200 w-full md:w-auto">
                  {project_inquiry.cta}
                </button>

                <div className="mt-12">
                  <h4 className="text-xl font-bold mb-6">What happens next?</h4>
                  <div className="space-y-4">
                    {project_inquiry.what_you_receive.items.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-white text-opacity-90 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Technical Assistance Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technical Support & Resources
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get instant help through our support channels or explore our comprehensive resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 24/7 Support */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">24/7 Live Support</h3>
              <p className="text-slate-600 text-center mb-4 text-sm">
                Round-the-clock technical assistance from our expert team via chat, phone, or email
              </p>
              <div className="text-center">
                <button className="text-primary hover:text-primary-700 font-semibold text-sm hover:underline">
                  Start Live Chat →
                </button>
              </div>
            </div>

            {/* Knowledge Base */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Knowledge Base</h3>
              <p className="text-slate-600 text-center mb-4 text-sm">
                Access hundreds of articles, tutorials, and guides to solve common issues quickly
              </p>
              <div className="text-center">
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline">
                  Browse Articles →
                </button>
              </div>
            </div>

            {/* Community Forum */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Community Forum</h3>
              <p className="text-slate-600 text-center mb-4 text-sm">
                Connect with other users, share experiences, and get peer-to-peer support
              </p>
              <div className="text-center">
                <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm hover:underline">
                  Join Community →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Quick answers to common questions about contacting us
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Items */}
            {[
              {
                question: "What's the typical response time for inquiries?",
                answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent technical support, our 24/7 live chat provides immediate assistance."
              },
              {
                question: "Do you offer on-site consultations?",
                answer: "Yes, we offer both virtual and on-site consultations depending on your project requirements and location. Contact our sales team to discuss the best option for your needs."
              },
              {
                question: "Can I schedule a demo of your solutions?",
                answer: "Absolutely! You can schedule a personalized demo by contacting sales@techno.com or using our \"Book a Free Consultation\" option above. We'll customize the demo to your specific use case."
              },
              {
                question: "What information should I include in my project inquiry?",
                answer: "Please provide details about your business needs, project scope, timeline, and any specific technical requirements. The more information you share, the better we can tailor our proposal to your needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                    <svg className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Banner */}
      <section className="py-12 bg-red-50 border-y-2 border-red-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-1">Critical System Issue?</h3>
                <p className="text-red-700 text-sm">
                  For urgent production issues or system downtime, contact our emergency support line immediately
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <a 
                href="tel:+15551234567" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 inline-flex items-center shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Emergency Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Choose Your Preferred Channel</h2>
            <p className="text-slate-600">Compare response times and best use cases</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-linear-to-r from-primary to-secondary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Channel</th>
                  <th className="px-6 py-4 text-left font-semibold">Response Time</th>
                  <th className="px-6 py-4 text-left font-semibold">Best For</th>
                  <th className="px-6 py-4 text-left font-semibold">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900">Phone</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Immediate</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">Urgent issues, complex problems</td>
                  <td className="px-6 py-4 text-slate-600">24/7</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900">Live Chat</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">1-2 minutes</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">Quick questions, general inquiries</td>
                  <td className="px-6 py-4 text-slate-600">24/7</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900">Email</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">2-4 hours</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">Detailed inquiries, documentation</td>
                  <td className="px-6 py-4 text-slate-600">24/7</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900">Contact Form</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">4-6 hours</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">Project inquiries, partnerships</td>
                  <td className="px-6 py-4 text-slate-600">24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Social Media & Connect Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, tech insights, and industry news
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-semibold text-slate-700 group-hover:text-white transition-colors">LinkedIn</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-sky-500 hover:bg-sky-500 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="font-semibold text-slate-700 group-hover:text-white transition-colors">Twitter</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-900 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-semibold text-slate-700 group-hover:text-white transition-colors">GitHub</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-red-600 hover:bg-red-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="font-semibold text-slate-700 group-hover:text-white transition-colors">YouTube</span>
            </a>
          </div>

          <div className="bg-linear-to-r from-primary to-accent rounded-2xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-8 text-white text-lg">Get the latest tech insights, product updates, and exclusive offers delivered to your inbox</p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="grow px-5 py-4 rounded-xl text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg bg-white/95"
              />
              <button 
                type="submit"
                className="shrink-0 bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Privacy & Security Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">Your Privacy Matters</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We take data privacy seriously. All information you share with us is encrypted and stored securely. We never share your personal data with third parties without your explicit consent.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">256-bit SSL encryption on all communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">GDPR & CCPA compliant data handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Regular security audits and updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Enterprise-Grade Security</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our infrastructure is built with security at its core. We follow industry best practices and maintain the highest standards of data protection.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">ISO 27001 certified security practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Multi-factor authentication available</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">24/7 security monitoring and threat detection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
