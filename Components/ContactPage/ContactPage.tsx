"use client";

import React from "react";
import {
  Reveal,
  RevealContainer,
  RevealItem,
} from "@/Components/Animations/Reveal";

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
  heroSubtitle = "Our team is ready to help you.",
}: ContactPageProps) {
  const { contact, project_inquiry } = data;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      {showHero && (
        <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-16 md:py-20 overflow-hidden">
          {/* Decorative Animated Icons */}
          {/* Dotted Grid (Top Left) */}
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

          {/* Blue Triangle (Top Right) */}
          <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float-slow pointer-events-none">
            <svg width="45" height="45" viewBox="0 0 40 40" fill="none">
              <path d="M20 0L40 35H0L20 0Z" className="fill-blue-400" />
            </svg>
          </div>

          {/* Square Outline (Bottom Right) */}
          <div className="absolute bottom-20 right-1/4 opacity-50 animate-spin-reverse-slow pointer-events-none">
            <div className="w-14 h-14 border-4 border-blue-300 rounded-lg animate-float-medium"></div>
          </div>

          {/* Small Cross (Top Center) */}
          <div className="absolute top-12 left-2/3 transform -translate-x-1/2 opacity-50 animate-wiggle-slow pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-cyan-400">
              <path d="M12 0V24M0 12H24" />
            </svg>
          </div>

          {/* Circle Outline (Left Middle) */}
          <div className="absolute top-1/2 left-12 w-10 h-10 border-4 border-cyan-200 rounded-full opacity-50 animate-float-medium pointer-events-none" style={{ animationDelay: '1s' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 backdrop-blur-sm border-2 border-[var(--primary)]/40 rounded-full px-5 py-2 mb-8 shadow-lg shadow-[var(--primary)]/10">
                <svg
                  className="w-6 h-6 text-[var(--accent)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8V14M23 11H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-semibold text-[var(--primary)]">
                  Let&apos;s Connect
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent">
                {heroTitle}
              </h1>

              <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
                {heroSubtitle}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form + Alt Methods Column Layout */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 items-stretch">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col gap-4 flex-1 min-w-0 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-300 border-2 border-[var(--primary)]/30"
            >
              <div className="mb-4">
                <div className="inline-block mb-3">
                  <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-2 rounded-full text-sm font-semibold">
                    Get In Touch
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Contact Our Team
                </h2>
              </div>

              {/* Name and Email in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contact.form_fields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold mb-1.5 text-muted-foreground"
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 border-2 border-[var(--primary)]/20 rounded-lg bg-background focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/50 text-sm transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              {/* Phone and Company in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contact.form_fields.slice(2, 4).map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold mb-1.5 text-muted-foreground"
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 border-2 border-[var(--primary)]/20 rounded-lg bg-background focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/50 text-sm transition-all duration-200"
                    />
                    {field.helper && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {field.helper}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Select fields - full width */}
              {contact.form_fields
                .filter((f) => f.type === "select")
                .map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold mb-1.5 text-muted-foreground"
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="w-full px-4 py-2.5 border-2 border-[var(--primary)]/20 rounded-lg bg-background focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/50 text-sm transition-all duration-200"
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}

              {/* Referral field - full width */}
              {contact.form_fields.find((f) => f.name === "referral") && (
                <div>
                  <label
                    htmlFor="referral"
                    className="block text-sm font-semibold mb-1.5 text-muted-foreground"
                  >
                    {
                      contact.form_fields.find((f) => f.name === "referral")
                        ?.label
                    }{" "}
                    {contact.form_fields.find((f) => f.name === "referral")
                      ?.required && "*"}
                  </label>
                  <input
                    type="text"
                    id="referral"
                    name="referral"
                    required={
                      contact.form_fields.find((f) => f.name === "referral")
                        ?.required
                    }
                    placeholder={
                      contact.form_fields.find((f) => f.name === "referral")
                        ?.placeholder
                    }
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>
              )}

              {/* Textarea field */}
              {contact.form_fields.find((f) => f.type === "textarea") && (
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-1.5 text-muted-foreground"
                  >
                    {
                      contact.form_fields.find((f) => f.type === "textarea")
                        ?.label
                    }{" "}
                    *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 border-2 border-[var(--primary)]/20 rounded-lg bg-background focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/50 resize-none text-sm transition-all duration-200"
                    placeholder={
                      contact.form_fields.find((f) => f.type === "textarea")
                        ?.placeholder
                    }
                  ></textarea>
                </div>
              )}

              <button
                type="submit"
                className="w-full font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </Reveal>
          <Reveal>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-6 flex-1 min-w-0 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-300 border-2 border-[var(--primary)]/30">
              <div className="mb-2">
                <div className="inline-block mb-3">
                  <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-2 rounded-full text-sm font-semibold">
                    Alternative Contact
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Other Ways to Connect
                </h2>
              </div>
              {contact.alternative_contact.methods &&
                contact.alternative_contact.methods.length > 0 && (
                  <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
                    {contact.alternative_contact.methods.map((method) => (
                      <li
                        key={method.type}
                        className="flex flex-col items-center md:items-start gap-3 flex-1"
                      >
                        {/* Ideally, icon would be dynamic by type; else leave as before */}
                        <span className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-[var(--primary)]/30">
                          <span className="sr-only">{method.type}</span>
                          {/* Future: could add svg icons by type */}
                        </span>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                          <a
                            href={
                              method.type === "email"
                                ? `mailto:${method.value}`
                                : method.value
                            }
                            className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80 mb-1"
                          >
                            {method.value}
                          </a>
                          <p className="text-sm text-muted-foreground">
                            {method.note}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              {/* Response Commitment */}
              <div className="mt-8 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-[var(--primary)]/10 dark:to-[var(--accent)]/10 border border-blue-100 dark:border-primary/20 text-sm text-muted-foreground shadow-sm">
                <span className="block font-semibold text-foreground mb-1">
                  {contact.response_commitment.promise}
                </span>
                <span>{contact.response_commitment.note}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Concierge Section */}
      <section className="py-16 bg-secondary animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex justify-center items-start">
            <div className="relative animate-float">
              <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#3B82F6" />
                    <stop offset="100%" stop-color="#06B6D4" />
                  </linearGradient>
                </defs>

                <circle cx="110" cy="60" r="10" fill="url(#nodeGrad)" />
                <circle cx="60" cy="120" r="10" fill="url(#nodeGrad)" />
                <circle cx="160" cy="120" r="10" fill="url(#nodeGrad)" />
                <circle cx="110" cy="160" r="10" fill="url(#nodeGrad)" />


                <line x1="110" y1="60" x2="60" y2="120" stroke="#94A3B8" stroke-width="2" />
                <line x1="110" y1="60" x2="160" y2="120" stroke="#94A3B8" stroke-width="2" />
                <line x1="110" y1="60" x2="110" y2="160" stroke="#94A3B8" stroke-width="2" />


                <circle cx="110" cy="110" r="16" fill="#0EA5E9" />
              </svg>


            </div>
          </div>

          <div className="h-full flex flex-col justify-start animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find your way around TechnoTroids with Concierge
            </h2>
            <p className="text-muted-foreground mb-6">
              Not sure where to start? Our Concierge team is here to help you
              explore everything TechnoTroids has to offer and find the perfect
              solution tailored to your business need.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto mt-2 mb-8">
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      {/* Let's Build Section - COMMENTED OUT FOR NOW */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            {project_inquiry.section_title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {project_inquiry.section_subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {/* Contact Form */}
      {/* <div className="bg-background h-full flex-1 min-w-0 w-full md:w-auto">
              <div className="flex items-start mb-8">
                <div className="shrink-0 mr-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Send us a message</h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contact.form_fields.slice(0, 2).map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-1">
                        {field.label} {field.required && '*'}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                      <p className="text-xs text-muted-foreground mt-1">{field.helper}</p>
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
      {/* <Reveal>
              <div className="bg-gradient-to-br from-primary via-accent to-blue-50 dark:to-blue-900 rounded-lg p-8 text-white relative overflow-hidden h-full z-10 flex-1 min-w-0 w-full md:w-auto">
                {/* Decorative Icons */}
      {/* <div className="absolute top-4 right-4 opacity-10">
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

                  <button className="bg-white text-primary hover:bg-slate-100 font-semibold py-3 px-6 rounded-lg transition duration-200 w-full md:w-auto animate-hover-bounce">
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
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* Support & Technical Assistance Section */}

      {/* Emergency Support Banner */}
      <section className="py-12 bg-red-50 border-y-2 border-red-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-1">
                  Critical System Issue?
                </h3>
                <p className="text-red-700 text-sm">
                  For urgent production issues or system downtime, contact our
                  emergency support line immediately
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <a
                href="tel:+15551234567"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 inline-flex items-center shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Emergency Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels Comparison */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your Preferred Channel
            </h2>
            <p className="text-muted-foreground">
              Compare response times and best use cases
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary)] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Channel</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Response Time
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Best For
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-foreground">
                        Phone
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Immediate
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Urgent issues, complex problems
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">24/7</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-foreground">
                        Live Chat
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      1-2 minutes
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Quick questions, general inquiries
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">24/7</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-foreground">
                        Email
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      2-4 hours
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Detailed inquiries, documentation
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">24/7</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-foreground">
                        Contact Form
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      4-6 hours
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Project inquiries, partnerships
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Social Media & Connect Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Connect With Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow us on social media for the latest updates, tech insights,
                and industry news
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-card border-2 border-border hover:border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-semibold text-foreground group-hover:text-white transition-colors">
                  LinkedIn
                </span>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-card border-2 border-border hover:border-sky-500 hover:bg-sky-500 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span className="font-semibold text-foreground group-hover:text-white transition-colors">
                  Twitter
                </span>
              </a>




            </div>
          </Reveal>


        </div>
      </section>

      {/* Privacy & Security Notice */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/20 rounded-xl p-8 border border-[var(--primary)]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    Your Privacy Matters
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We take data privacy seriously. All information you share
                    with us is encrypted and stored securely. We never share
                    your personal data with third parties without your explicit
                    consent.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">
                    256-bit SSL encryption on all communications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">
                    GDPR & CCPA compliant data handling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">
                    Regular security audits and updates
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-xl p-8 border border-blue-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our infrastructure is built with security at its core. We
                    follow industry best practices and maintain the highest
                    standards of data protection.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">
                    ISO 27001 certified security practices
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">
                    Multi-factor authentication available
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">
                    24/7 security monitoring and threat detection
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
