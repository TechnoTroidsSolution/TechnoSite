'use client';

import React from 'react';

export default function TimelineSection() {
  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Founded with a vision to revolutionize software development and create meaningful impact.',
      icon: '🚀',
    },
    {
      year: '2013',
      title: 'First Major Client',
      description: 'Landed our first Fortune 500 client, validating our approach to building software.',
      icon: '🎯',
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Opened offices in three continents, bringing our expertise to clients worldwide.',
      icon: '🌍',
    },
    {
      year: '2019',
      title: 'AI Innovation Lab',
      description: 'Launched dedicated AI research division, pioneering machine learning solutions.',
      icon: '🤖',
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Recognized as a leading technology partner by major industry publications.',
      icon: '🏆',
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Committed to carbon-neutral operations and sustainable technology practices.',
      icon: '🌱',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-semibold">
              Our Journey
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            A Decade of Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From humble beginnings to global impact here how we have evolved
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-500 dark:bg-teal-600"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 group">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-400 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                      {milestone.icon}
                    </div>
                    
                    {/* Year badge */}
                    <div className="inline-block bg-teal-500 dark:bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center circle indicator */}
                <div className="hidden md:flex w-2/12 justify-center relative z-10">
                  <div className="w-6 h-6 bg-teal-500 dark:bg-teal-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-150 transition-transform duration-500"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-teal-500 dark:bg-teal-600 text-white px-8 py-4 rounded-full shadow-lg">
            <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-lg">The journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
