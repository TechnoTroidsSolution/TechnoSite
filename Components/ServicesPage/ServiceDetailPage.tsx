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
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-br from-primary via-secondary to-accent text-primary-foreground py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary-foreground rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-1/2 -right-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary-foreground rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
          <p className="text-primary-foreground/80 mb-2 tracking-wide text-xs md:text-sm uppercase">Our Service</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">{title}</h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl md:max-w-3xl mx-auto md:mx-0">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1 space-y-6 h-fit lg:sticky lg:top-28 order-2 lg:order-1">
          <div className="bg-card border border-border/60 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 flex items-center gap-2">Service Summary</h3>

            <div className="space-y-5">
              {/* Category */}
              <div>
                <p className="text-xs font-medium text-foreground/70 uppercase tracking-wide">Category</p>
                <p className="text-foreground font-semibold text-sm md:text-base">{service.category ?? "General"}</p>
              </div>

              <hr className="border-border/40" />

              {/* Ideal For */}
              <div>
                <p className="text-xs font-medium text-foreground/70 uppercase tracking-wide">Ideal For</p>
                <p className="text-foreground font-semibold text-sm md:text-base">{whoIsItFor.join(", ") || "Businesses"}</p>
              </div>

              <hr className="border-border/40" />

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-medium text-foreground/70 uppercase tracking-wide">Tech Stack</p>
                <p className="text-foreground font-semibold text-sm md:text-base">{tools.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-primary to-accent p-5 md:p-6 rounded-xl text-primary-foreground">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Start Your Project</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base mb-4 md:mb-5">
              Let&apos;s build a high-performance digital solution tailored to your business.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="w-full bg-primary text-primary-foreground py-2.5 md:py-3 rounded-lg font-semibold hover:bg-primary/85 transition text-sm md:text-base"
            >
              Contact Us
            </button>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-10 md:space-y-12 order-1 lg:order-2">
          {/* Overview */}
          <section className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Overview</h2>
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{description}</p>
          </section>

          {/* Process + Deliverables */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Process */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">How We Proceed</h2>
              <ul className="space-y-3 md:space-y-4">
                {process.map((item) => (
                  <li key={`process-${item}`} className="flex gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Deliverables</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {deliverables.map((item) => (
                  <span
                    key={`deliverable-${item}`}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs md:text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Technologies We Use</h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {tools.map((tool) => (
                <span
                  key={`tool-${tool}`}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-lg text-xs md:text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Who Is This For */}
          <section className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Who Is This Service For?</h2>
            <ul className="space-y-2 md:space-y-3">
              {whoIsItFor.map((item) => (
                <li key={`audience-${item}`} className="flex items-center text-foreground/80 gap-2 md:gap-3 text-sm md:text-base">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

