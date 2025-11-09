'use client';

import React from 'react';

export default function StatsSection() {
  const stats = [
    { id: 'projects', value: '10+', label: 'Projects Delivered', icon: '🚀' },
    { id: 'satisfaction', value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { id: 'team', value: '20+', label: 'Team Members', icon: '👥' },
    { id: 'experience', value: '10+', label: 'Years Experience', icon: '🏆' },
  ];

  return (
    <section className="py-12 bg-white -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
