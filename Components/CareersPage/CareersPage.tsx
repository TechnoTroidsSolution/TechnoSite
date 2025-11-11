'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  posted_date: string;
}

interface CareersPageProps {
  careersData: {
    hero: {
      title: string;
      subtitle: string;
      cta_text: string;
    };
    stats: Array<{
      label: string;
      value: string;
    }>;
    benefits: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    jobs: JobOpening[];
    departments: string[];
    cta: {
      title: string;
      description: string;
      email: string;
    };
  };
}

export default function CareersPage({ careersData }: CareersPageProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredJobs = careersData.jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const locations = ['All', ...Array.from(new Set(careersData.jobs.map(job => job.location)))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="relative bg-linear-to-br from-teal-600 via-teal-500 to-cyan-500 text-white py-16 md:py-20 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm font-semibold">Join our growing team</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {careersData.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
              {careersData.hero.subtitle}
            </p>

            {/* Search Bar */}
            <div className="flex gap-0 max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden">
              <input
                type="text"
                placeholder="Search job title or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none bg-white"
              />
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 font-semibold text-base transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-4 space-y-6">
              {/* Refine Search Box */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-base font-bold text-gray-900 mb-6">Refine your Search</h3>
                
                {/* Category Filter */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <button className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-900 mb-3">
                    <span>Category</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="space-y-3">                    
                    {careersData.departments.map((dept) => (
                      <label key={dept} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedDepartment === dept}
                          onChange={() => setSelectedDepartment(dept)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{dept}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <button className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-900 mb-3">
                    <span>Location</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <div className="space-y-3">
                    {locations.map((location) => (
                      <label key={location} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedLocation === location}
                          onChange={() => setSelectedLocation(location)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Job Alert Box - Separate */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h4 className="text-base font-bold text-gray-900 mb-3">Create Job Alert</h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Use refined search filters above to get better job alerts
                </p>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent mb-3"
                />
                <button className="w-full bg-teal-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                  Create Alert
                </button>
              </div>
            </div>

            {/* Job Cards */}
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">1 - {filteredJobs.length}</span> of{' '}
                  <span className="font-semibold">{filteredJobs.length} jobs</span>
                </p>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Most relevant</option>
                  <option>Newest first</option>
                  <option>Salary: High to Low</option>
                </select>
              </div>

              {selectedDepartment !== 'All' && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-2">
                    {selectedDepartment}
                    <button
                      onClick={() => setSelectedDepartment('All')}
                      className="hover:text-gray-900"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                  <button
                    onClick={() => {
                      setSelectedDepartment('All');
                      setSelectedLocation('All');
                    }}
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Clear all
                  </button>
                </div>
              )}

              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
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
                            {new Date(job.posted_date).toLocaleDateString('en-US', { 
                              month: '2-digit', 
                              day: '2-digit', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {job.description}
                        </p>
                        <Link
                          href={`/careers/${job.id}`}
                          className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                        >
                          See Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      <button className="ml-6 p-2 hover:bg-gray-50 rounded-lg transition-colors shrink-0">
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
                  <button className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    View more
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Talent Community Section */}
      <section className="py-20 bg-gray-50">
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
              <h2 className="text-4xl font-bold text-teal-600 mb-4">
                Join our Talent Community
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Join our Talent Community to get job alerts from {careersData.hero.title.split(' ')[0]} delivered to your inbox.
              </p>
              <button className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center gap-2">
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
