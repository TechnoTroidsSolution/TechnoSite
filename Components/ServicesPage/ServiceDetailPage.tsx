"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ServiceDetail {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly category?: string;
  readonly process?: readonly string[];
  readonly deliverables?: readonly string[];
  readonly tech_stack?: readonly string[];
  readonly ideal_for?: readonly string[];
}

interface ServiceDetailPageProps {
  readonly service: ServiceDetail;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const title = service.title;
  const heroSubtitle = service.subtitle;
  const description = service.description;

  const process = service.process ?? [];
  const deliverables = service.deliverables ?? [];
  const tools = service.tech_stack ?? [];
  const whoIsItFor = service.ideal_for ?? [];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-16 overflow-hidden">
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

        {/* Circle Outline (Left Middle) */}
        <div className="absolute top-1/2 left-12 w-10 h-10 border-4 border-cyan-200 rounded-full opacity-50 animate-float-medium pointer-events-none" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <button onClick={() => router.push("/")} className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li className="text-foreground/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <button onClick={() => router.push("/services")} className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li className="text-foreground/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-foreground font-medium">{title}</li>
            </ol>
          </nav>

          {/* Service Header */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
              <span className="flex items-center gap-1.5 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 backdrop-blur-sm border-2 border-[var(--primary)]/40 rounded-full px-4 py-1.5">
                <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-[var(--primary)] font-medium">{service.category ?? "General"}</span>
              </span>
            </div>

            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-6">
              {heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => router.push("/contact")}
                className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--primary)]/90 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="bg-blue-50 border border-blue-200 text-[var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors inline-flex items-center gap-2 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1 space-y-6 h-fit lg:sticky lg:top-20 order-2 lg:order-1">
          {/* Service Details Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">Service Details</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Category</div>
                <div className="font-medium text-foreground">{service.category ?? "General"}</div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm text-gray-600 mb-1">Ideal For</div>
                <div className="font-medium text-foreground">{whoIsItFor.join(", ") || "Businesses"}</div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm text-gray-600 mb-1">Tech Stack</div>
                <div className="font-medium text-foreground">{tools.slice(0, 3).join(", ")}{tools.length > 3 ? "..." : ""}</div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
            <p className="text-white/90 text-sm mb-4">
              Let&apos;s build a high-performance digital solution tailored to your business.
            </p>
            <button 
              onClick={() => router.push("/contact")}
              className="w-full bg-white text-[var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors mb-3 cursor-pointer">
              Get a Quote
            </button>
            <button className="w-full bg-white/15 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/25 transition-colors cursor-pointer">
              Download Brochure
            </button>
          </div>

          {/* Share Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">Share this service</h3>
            <div className="flex gap-2">
              <button className="flex-1 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="w-5 h-5 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="flex-1 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="w-5 h-5 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="flex-1 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="w-5 h-5 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button className="flex-1 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-8 order-1 lg:order-2">
          {/* Overview Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              How We Proceed
            </h2>
            <ul className="space-y-3.5">
              {process.map((item) => (
                <li key={`process-${item}`} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Deliverables
            </h2>
            <div className="flex flex-wrap gap-2">
              {deliverables.map((item) => (
                <span
                  key={`deliverable-${item}`}
                  className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg font-medium text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={`tool-${tool}`}
                  className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg font-medium text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

