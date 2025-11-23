'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface JobOpening {
  readonly id: string;
  readonly title: string;
  readonly department: string;
  readonly location: string;
  readonly type: string;
  readonly experience: string;
  readonly salary: string;
  readonly description: string;
  readonly posted_date: string;
}

interface CareersPageProps {
  readonly careersData: {
    readonly hero: {
      readonly title: string;
      readonly subtitle: string;
      readonly cta_text: string;
    };
    readonly stats: ReadonlyArray<{
      readonly label: string;
      readonly value: string;
    }>;
    readonly benefits: ReadonlyArray<{
      readonly title: string;
      readonly description: string;
      readonly icon: string;
    }>;
    readonly jobs: ReadonlyArray<JobOpening>;
    readonly departments: ReadonlyArray<string>;
    readonly cta: {
      readonly title: string;
      readonly description: string;
      readonly email: string;
    };
  };
}

export default function CareersPage({ careersData }: CareersPageProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  const filteredJobs = careersData.jobs.filter((job) => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const locations = [
    "All",
    ...Array.from(new Set(careersData.jobs.map((job) => job.location))),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Search */}
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
        <div className="absolute top-1/2 left-12 w-10 h-10 border-4 border-cyan-200 rounded-full opacity-50 animate-float-medium pointer-events-none" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 backdrop-blur-sm border-2 border-[var(--primary)]/40 rounded-full px-5 py-2 mb-8 shadow-lg shadow-[var(--primary)]/10">
              <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm font-semibold text-[var(--primary)]">Join our growing team</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent">
              {careersData.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
              {careersData.hero.subtitle}
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search job title or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 text-base text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white border border-gray-200 rounded-xl shadow-md transition-all"
              />
              <button className="px-10 py-4 bg-[var(--primary)] text-white font-semibold text-base rounded-xl shadow-md transition-all hover:bg-[var(--primary)]/90 hover:shadow-lg cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-3 space-y-6">
              {/* Refine Search Box */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-6">Refine your Search</h3>
                
                {/* Category Filter */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <button className="w-full flex items-center justify-between text-left text-sm font-bold text-foreground mb-4 cursor-pointer">
                    <span>Category</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="space-y-2.5">                    
                    {careersData.departments.map((dept) => (
                      <label key={dept} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedDepartment === dept}
                          onChange={() => setSelectedDepartment(dept)}
                          className="w-4 h-4 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)] focus:ring-2"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-foreground">{dept}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <button className="w-full flex items-center justify-between text-left text-sm font-bold text-foreground mb-4 cursor-pointer">
                    <span>Location</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <div className="space-y-2.5">
                    {locations.map((location) => (
                      <label key={location} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedLocation === location}
                          onChange={() => setSelectedLocation(location)}
                          className="w-4 h-4 text-[var(--primary)] border-gray-300 rounded focus:ring-[var(--primary)] focus:ring-2"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-foreground">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Job Alert Box - Separate */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-foreground mb-3">Create Job Alert</h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Use refined search filters above to get better job alerts
                </p>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent mb-3 bg-white text-foreground placeholder:text-gray-400"
                />
                <button className="w-full bg-[var(--primary)] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--primary)]/90 transition-colors cursor-pointer">
                  Create Alert
                </button>
              </div>
            </div>

            {/* Job Cards */}
            <div className="lg:col-span-9">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-700 text-sm">
                  Showing <span className="font-semibold text-foreground">1 - {filteredJobs.length}</span> of <span className="font-semibold text-foreground">{filteredJobs.length} jobs</span>
                </p>
                <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] cursor-pointer">
                  <option>Most relevant</option>
                  <option>Newest first</option>
                  <option>Salary: High to Low</option>
                </select>
              </div>

              {selectedDepartment !== "All" && (
                <div className="mb-5 flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-md text-sm flex items-center gap-2 font-medium">
                    {selectedDepartment}
                    <button
                      onClick={() => setSelectedDepartment("All")}
                      className="hover:text-foreground cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                  <button
                    onClick={() => {
                      setSelectedDepartment("All");
                      setSelectedLocation("All");
                    }}
                    className="text-sm text-[var(--primary)] hover:text-[var(--primary)]/80 font-medium underline cursor-pointer"
                  >
                    Clear all
                  </button>
                </div>
              )}

              <div className="space-y-5">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2.5">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span>{job.department}</span>
                          <span className="text-gray-400">•</span>
                          <span>{job.salary}</span>
                          <span className="text-gray-400">•</span>
                          <span className="flex items-center gap-1.5">
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
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {job.description}
                        </p>
                        <Link
                          href={`/careers/${job.id}`}
                          className="inline-flex items-center gap-1.5 text-[var(--primary)] hover:text-[var(--primary)]/80 font-medium text-sm transition-colors"
                        >
                          See Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      <button className="ml-6 p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0 cursor-pointer">
                        <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredJobs.length > 10 && (
                <div className="mt-8 text-center">
                  <button className="px-8 py-3 bg-[var(--primary)] text-white rounded-lg font-semibold hover:bg-[var(--primary)]/90 transition-colors shadow-md cursor-pointer">
                    View more
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Talent Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/careers/team.png"
                alt="Team"
                fill
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">
                Join our Talent Community
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Join our Talent Community to get job alerts from {careersData.hero.title.split(" ")[0]} delivered to your inbox.
              </p>
              <button className="px-8 py-4 bg-[var(--primary)] text-primary-foreground rounded-lg font-semibold hover:bg-[var(--primary)]/90 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
