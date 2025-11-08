'use client';

import React from 'react';

export default function StatsSection() {
  const stats = [
    { id: 'projects', value: '50+', label: 'Projects Delivered', icon: '🚀' },
    { id: 'satisfaction', value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { id: 'team', value: '50+', label: 'Team Members', icon: '👥' },
    { id: 'experience', value: '15+', label: 'Years Experience', icon: '🏆' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
