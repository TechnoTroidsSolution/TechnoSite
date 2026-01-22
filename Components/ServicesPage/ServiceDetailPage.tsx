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
      <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-10 overflow-hidden">
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

            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1 space-y-6 h-fit lg:sticky lg:top-20 order-2 lg:order-1">
          {/* Service Details Card */}
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">Service Details</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Category</div>
                <div className="font-medium text-foreground">{service.category ?? "General"}</div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="text-sm text-muted-foreground mb-1">Ideal For</div>
                <div className="font-medium text-foreground">{whoIsItFor.join(", ") || "Businesses"}</div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="text-sm text-muted-foreground mb-1">Tech Stack</div>
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
              className="w-full bg-card text-[var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors mb-3 cursor-pointer">
              Get a Quote
            </button>

          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-8 order-1 lg:order-2">
          {/* Overview Section */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Process Section */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              How We Proceed
            </h2>
            <ul className="space-y-3.5">
              {process.map((item) => (
                <li key={`process-${item}`} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables Section */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Deliverables
            </h2>
            <div className="flex flex-wrap gap-2">
              {deliverables.map((item) => (
                <span
                  key={`deliverable-${item}`}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={`tool-${tool}`}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium text-sm"
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

