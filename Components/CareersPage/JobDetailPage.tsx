"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Job {
  readonly id: string;
  readonly title: string;
  readonly department: string;
  readonly location: string;
  readonly type: string;
  readonly experience: string;
  readonly salary: string;
  readonly posted_date: string;
  readonly description: string;
  readonly responsibilities: ReadonlyArray<string>;
  readonly requirements: ReadonlyArray<string>;
  readonly nice_to_have: ReadonlyArray<string>;
  readonly key_skills: ReadonlyArray<string>;
}

const JobDetailPage = ({ job }: { readonly job: Job | undefined }) => {
  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Breadcrumb */}
      <section className="relative bg-linear-to-br from-primary via-secondary to-accent text-primary-foreground py-16 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-primary-foreground/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li className="text-primary-foreground/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-primary-foreground font-medium">{job.title}</li>
            </ol>
          </nav>

            {/* Job Header */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
              <span className="flex items-center gap-1.5 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 rounded-full px-4 py-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-primary-foreground/90">{job.department}</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-primary-foreground/90">{job.salary}</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="flex items-center gap-1.5 text-primary-foreground/90">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(job.posted_date).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>

            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2">
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/25 transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save Job
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Responsibilities Section */}
            <div className="bg-card rounded-xl border border-border/60 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={`responsibility-${item}`} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements Section */}
            <div className="bg-card rounded-xl border border-border/60 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item) => (
                  <li key={`requirement-${item}`} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have Section */}
            {job.nice_to_have && job.nice_to_have.length > 0 && (
              <div className="bg-card rounded-xl border border-border/60 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Nice to Have
                </h2>
                <ul className="space-y-3">
                  {job.nice_to_have.map((item) => (
                    <li key={`nice-to-have-${item}`} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Skills */}
            <div className="bg-card rounded-xl border border-border/60 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Key Skills Required
              </h2>
              <div className="flex flex-wrap gap-2">
                {job.key_skills.map((skill) => (
                  <span
                    key={`skill-${skill}`}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              {/* Job Details Card */}
              <div className="bg-card rounded-xl border border-border/60 p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Job Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-foreground/70 mb-1">Job Type</div>
                    <div className="font-medium text-foreground">{job.type}</div>
                  </div>
                  <div className="border-t border-border/40 pt-4">
                    <div className="text-sm text-foreground/70 mb-1">Experience Level</div>
                    <div className="font-medium text-foreground">{job.experience}</div>
                  </div>
                  <div className="border-t border-border/40 pt-4">
                    <div className="text-sm text-foreground/70 mb-1">Salary Range</div>
                    <div className="font-medium text-foreground">{job.salary}</div>
                  </div>
                  <div className="border-t border-border/40 pt-4">
                    <div className="text-sm text-foreground/70 mb-1">Posted Date</div>
                    <div className="font-medium text-foreground">
                      {new Date(job.posted_date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Card */}
              <div className="bg-linear-to-br from-primary to-accent rounded-xl p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">Interested in this role?</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Apply now and join our innovative team.
                </p>
                <button className="w-full bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors mb-3">
                  Apply Now
                </button>
                <button className="w-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/25 transition-colors">
                  Save for Later
                </button>
              </div>

              {/* Share Card */}
              <div className="bg-card rounded-xl border border-border/60 p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Share this job</h3>
                <div className="flex gap-2">
                  <button className="flex-1 p-2 border border-border rounded-lg hover:bg-background/40 transition-colors">
                    <svg className="w-5 h-5 mx-auto text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex-1 p-2 border border-border rounded-lg hover:bg-background/40 transition-colors">
                    <svg className="w-5 h-5 mx-auto text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="flex-1 p-2 border border-border rounded-lg hover:bg-background/40 transition-colors">
                    <svg className="w-5 h-5 mx-auto text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="flex-1 p-2 border border-border rounded-lg hover:bg-background/40 transition-colors">
                    <svg className="w-5 h-5 mx-auto text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
