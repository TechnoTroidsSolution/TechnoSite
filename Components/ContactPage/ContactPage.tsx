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
        <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-24 md:py-32 overflow-hidden">
          {/* Animated Decorative Elements - Left Side - COLORFUL */}
          <div className="absolute top-[15%] left-[5%] w-20 h-20 opacity-40">
            <div className="grid grid-cols-4 gap-1.5">
              <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
                style={{ animationDelay: "0.7s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "0.9s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "1.1s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "1.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
                style={{ animationDelay: "1.3s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"
                style={{ animationDelay: "1.4s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>

          {/* X mark - Top Center - CYAN */}
          <div className="absolute top-[12%] left-[35%] text-[var(--accent)] text-3xl font-bold animate-pulse opacity-30">
            ×
          </div>

          {/* Triangle - Top Right - PRIMARY BLUE */}
          <div
            className="absolute top-[10%] right-[20%] w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-b-35 border-b-[var(--primary)] opacity-30 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>

          {/* Circle - Left Side - ACCENT */}
          <div className="absolute top-[50%] left-[8%] w-12 h-12 border-3 border-[var(--accent)] rounded-full opacity-40 animate-pulse"></div>

          {/* Square - Bottom Center - PRIMARY */}
          <div
            className="absolute bottom-[15%] left-[42%] w-10 h-10 border-2 border-[var(--primary)] rotate-45 opacity-30 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>

          {/* Circle - Bottom Right - GRADIENT RING */}
          <div
            className="absolute bottom-[20%] right-[25%] w-16 h-16 rounded-full opacity-40 animate-pulse border-3 border-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-border"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
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

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              {heroSubtitle}
            </p>

            {/* Mouse Scroll Indicator */}
            <div className="mt-16 flex justify-center">
              <div className="relative animate-bounce">
                <svg
                  className="w-10 h-16 text-[var(--primary)]"
                  viewBox="0 0 32 48"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.8"
                >
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="40"
                    rx="12"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="16"
                    cy="14"
                    r="2"
                    fill="currentColor"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
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
              <svg
                className="w-80 h-80 md:w-96 md:h-96"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle */}
                <circle cx="100" cy="100" r="85" fill="#5ECCC3" opacity="0.2" />

                {/* Center person (Leader) */}
                <circle cx="100" cy="75" r="18" fill="#5ECCC3" />
                <path
                  d="M75 130C75 115 86 103 100 103C114 103 125 115 125 130V145H75V130Z"
                  fill="#5ECCC3"
                />

                {/* Left person */}
                <circle cx="60" cy="85" r="15" fill="#5ECCC3" opacity="0.7" />
                <path
                  d="M40 130C40 118 48 108 60 108C72 108 80 118 80 130V142H40V130Z"
                  fill="#5ECCC3"
                  opacity="0.7"
                />

                {/* Right person */}
                <circle cx="140" cy="85" r="15" fill="#5ECCC3" opacity="0.7" />
                <path
                  d="M120 130C120 118 128 108 140 108C152 108 160 118 160 130V142H120V130Z"
                  fill="#5ECCC3"
                  opacity="0.7"
                />

                {/* Connection lines representing teamwork */}
                <line
                  x1="100"
                  y1="93"
                  x2="75"
                  y2="100"
                  stroke="#2C3E50"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <line
                  x1="100"
                  y1="93"
                  x2="125"
                  y2="100"
                  stroke="#2C3E50"
                  strokeWidth="2"
                  opacity="0.3"
                />

                {/* Decorative dots */}
                <circle cx="35" cy="55" r="3" fill="#5ECCC3" opacity="0.6" />
                <circle cx="165" cy="55" r="3" fill="#5ECCC3" opacity="0.6" />
                <circle cx="25" cy="100" r="4" fill="#5ECCC3" opacity="0.4" />
                <circle cx="175" cy="100" r="4" fill="#5ECCC3" opacity="0.4" />
                <circle cx="50" cy="155" r="3" fill="#5ECCC3" opacity="0.5" />
                <circle cx="150" cy="155" r="3" fill="#5ECCC3" opacity="0.5" />

                {/* Collaboration symbol - hands shaking or connecting */}
                <circle cx="100" cy="50" r="5" fill="#2C3E50" opacity="0.3" />
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
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-2 rounded-full text-sm font-semibold">
                  Technical Support & Resources
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get the Help You Need
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Get instant help through our support channels or explore our
                comprehensive resources
              </p>
            </div>
          </Reveal>

          <RevealContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 24/7 Support */}
            <RevealItem>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/20 hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--primary)]/30 hover:border-[var(--accent)]/50">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mb-5 text-white shadow-lg shadow-[var(--primary)]/30 mx-auto">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  24/7 Live Support
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm text-center mb-4">
                  Round-the-clock technical assistance from our expert team via
                  chat, phone, or email
                </p>
                <div className="text-center">
                  <button className="text-[var(--primary)] hover:text-[var(--accent)] font-semibold text-sm hover:underline transition-colors">
                    Start Live Chat →
                  </button>
                </div>
              </div>
            </RevealItem>

            {/* Knowledge Base */}
            <RevealItem>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/20 hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--primary)]/30 hover:border-[var(--accent)]/50">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mb-5 text-white shadow-lg shadow-[var(--primary)]/30 mx-auto">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  Knowledge Base
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm text-center mb-4">
                  Access hundreds of articles, tutorials, and guides to solve
                  common issues quickly
                </p>
                <div className="text-center">
                  <button className="text-[var(--primary)] hover:text-[var(--accent)] font-semibold text-sm hover:underline transition-colors">
                    Browse Articles →
                  </button>
                </div>
              </div>
            </RevealItem>

            {/* Community Forum */}
            <RevealItem>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/20 hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--primary)]/30 hover:border-[var(--accent)]/50">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mb-5 text-white shadow-lg shadow-[var(--primary)]/30 mx-auto">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  Community Forum
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm text-center mb-4">
                  Connect with other users, share experiences, and get
                  peer-to-peer support
                </p>
                <div className="text-center">
                  <button className="text-[var(--primary)] hover:text-[var(--accent)] font-semibold text-sm hover:underline transition-colors">
                    Join Community →
                  </button>
                </div>
              </div>
            </RevealItem>
          </RevealContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-2 rounded-full text-sm font-semibold">
                  Frequently Asked Questions
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Quick Answers
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Quick answers to common questions about contacting us
              </p>
            </div>
          </Reveal>

          <RevealContainer className="space-y-4">
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
              <RevealItem key={index}>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/20 hover:-translate-y-1 transition-all duration-300 border-2 border-[var(--primary)]/30 hover:border-[var(--accent)]/50 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[var(--primary)]/5 transition-colors">
                      <h3 className="text-lg font-bold text-foreground">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-5 h-5 text-[var(--primary)] transition-transform group-open:rotate-180"
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
                    <div className="px-6 pb-6 text-foreground/80">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              </RevealItem>
            ))}
          </RevealContainer>
        </div>
      </section>

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
              <thead className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
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

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-card border-2 border-border hover:border-gray-900 hover:bg-gray-900 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-semibold text-foreground group-hover:text-white transition-colors">
                  GitHub
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-card border-2 border-border hover:border-red-600 hover:bg-red-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-red-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-semibold text-foreground group-hover:text-white transition-colors">
                  YouTube
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-primary dark:via-accent dark:to-primary rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden">
              {/* Ensure visibility with explicit background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-primary dark:via-accent dark:to-primary"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="mb-8 text-white text-lg">
                  Get the latest tech insights, product updates, and exclusive
                  offers delivered to your inbox
                </p>
                <form
                  className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="grow px-5 py-4 rounded-xl text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg bg-white"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-white text-blue-600 dark:text-primary hover:bg-gray-100 dark:hover:bg-white/90 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
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
