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
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Journey
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            A Decade of Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to global impact here how we have evolved
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-500"></div>

          {/* Milestones */}
          <div className="space-y-08">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    {/* Year badge */}
                    <div className="inline-block bg-teal-500 text-white px-3 py-1 rounded text-sm font-bold mb-3">
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center circle indicator */}
                <div className="hidden md:flex w-2/12 justify-center relative z-10">
                  <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border border-gray-300">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="font-semibold">Continuing our journey of innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
