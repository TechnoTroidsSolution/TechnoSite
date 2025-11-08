'use client';

import React from 'react';

export default function TeamSection() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: '15+ years leading tech innovation. Former VP at Google.',
      image: '👩‍💼',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Architecture expert. Built systems for 10M+ users.',
      image: '👨‍💻',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Product',
      bio: 'Product visionary. Created award-winning solutions.',
      image: '👩‍🎨',
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Performance wizard. Obsessed with code quality.',
      image: '👨‍🔬',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              Leadership Team
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Minds Behind the Magic
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A diverse team of experts passionate about building exceptional technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-400 overflow-hidden hover:-translate-y-4">
                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {member.image}
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                    {member.name}
                  </h3>
                  
                  <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4 transition-colors duration-500">
                    {member.role}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-6">
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-teal-500 dark:bg-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
            View Open Positions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
