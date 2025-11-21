'use client';

import React from 'react';
import { Reveal, RevealContainer, RevealItem } from '@/Components/Animations/Reveal';
import { motion } from 'framer-motion';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  position: 'top' | 'bottom'; 
  coordinates: { left: string; top: string };
}

const roadmapSteps: RoadmapStep[] = [
  {
    id: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your business requirements and create a comprehensive roadmap.',
    position: 'top', // Text floats above
    coordinates: { left: '12%', top: '82%' } // Base of left hill
  },
  {
    id: '02',
    title: 'Design & Architecture',
    description: 'Our experts design scalable solutions with cutting-edge technology.',
    position: 'top', // Text floats above
    coordinates: { left: '30%', top: '52%' } // Climbing the slope
  },
  {
    id: '03',
    title: 'Development & Testing',
    description: 'Agile development with continuous integration and rigorous testing.',
    position: 'bottom', // Text sits INSIDE the hill to avoid hitting the header
    coordinates: { left: '50%', top: '40%' } // Peak of the hill
  },
  {
    id: '04',
    title: 'Deployment & Launch',
    description: 'Seamless deployment to production with monitoring and optimization.',
    position: 'top', 
    coordinates: { left: '70%', top: '52%' } // Going down the slope
  },
  {
    id: '05',
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and enhancements to ensure stability.',
    position: 'top', 
    coordinates: { left: '88%', top: '82%' } // Base of right hill
  }
];

export default function RoadmapSection() {
  const stepVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 1, 
        ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="relative z-20 py-12 bg-white overflow-hidden font-sans">
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="text-center mb-10" amount={0.1}>
          <span className="inline-block px-4 py-2 bg-blue-600/10 text-blue-400 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-blue-600/20">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1b46] mb-4 tracking-tight">
            Our Journey Together
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results at every stage
          </p>
        </Reveal>

        {/* Roadmap Container */}
        {/* Fixed height ensures the aspect ratio stays consistent for alignment */}
        <div className="relative w-full h-[500px]">
          
          {/* 1. The Road SVG */}
          <svg
            className="absolute inset-0 w-full h-full hidden md:block pointer-events-none"
            viewBox="0 0 1440 500"
            fill="none"
            preserveAspectRatio="none" // Crucial: stretches SVG to match container exact size
            // xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1f2937" stopOpacity="0" />
                <stop offset="20%" stopColor="#374151" stopOpacity="1" />
                <stop offset="80%" stopColor="#374151" stopOpacity="1" />
                <stop offset="100%" stopColor="#1f2937" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* PATH EXPLANATION:
               M 0 500        -> Start bottom left (Y=500)
               C 300 500      -> Control Point 1 (Flat start)
               500 250        -> Control Point 2 (Pulling up to peak)
               720 250        -> PEAK (Center X=720, Y=250)
               ... mirrored for the right side
            */}
            <path
              d="M 0 500 C 300 500, 450 250, 720 250 C 990 250, 1140 500, 1440 500"
              stroke="url(#roadGradient)"
              strokeWidth="80"
              strokeLinecap="round"
            />

            {/* Dashed Center Line */}
            <path
              d="M 0 500 C 300 500, 450 250, 720 250 C 990 250, 1140 500, 1440 500"
              stroke="#6B7280"
              strokeWidth="2"
              strokeDasharray="12 12"
              strokeLinecap="round"
              className="opacity-60"
            />
          </svg>

          {/* 2. The Steps (Desktop) */}
          <RevealContainer className="relative hidden md:block w-full h-full" amount={0.1} stagger={0.3}>
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="absolute flex flex-col items-center justify-center"
                style={{ 
                  left: step.coordinates.left, 
                  top: step.coordinates.top,
                  transform: 'translate(-50%, -50%)' // Centers the bubble exactly on the coordinate
                }}
                variants={stepVariants}
              >
                
                {/* The Bubble */}
                <div 
                  className={`
                    relative z-20 w-14 h-14 rounded-full flex items-center justify-center 
                    text-lg font-bold shadow-[0_0_15px_rgba(0,0,0,0.15)] border-4 
                    transition-transform duration-300 hover:scale-110 bg-white
                    ${index % 2 === 0 
                      ? 'border-orange-500 text-orange-500' 
                      : 'border-blue-500 text-blue-500'
                    }
                  `}
                >
                  {step.id}
                  
                  {/* Inner Glow Dot */}
                  <div className={`absolute w-full h-full rounded-full opacity-20 animate-pulse
                    ${index % 2 === 0 ? 'bg-orange-500' : 'bg-blue-500'}`} 
                  />
                </div>

                {/* The Connector Line */}
                <div 
                  className={`
                    absolute w-px border-l-2 border-dashed border-gray-300 h-8 -z-10
                    ${step.position === 'top' ? 'bottom-[50%] mb-6' : 'top-[50%] mt-6'}
                  `}
                />

                {/* The Text Card */}
                <div 
                  className={`
                    absolute w-64 p-5 rounded-xl border bg-white/95 backdrop-blur-md z-10 shadow-lg
                    transition-all duration-300 hover:border-gray-400 hover:shadow-xl
                    ${step.position === 'top' 
                      ? 'bottom-[150%] border-gray-200' 
                      : 'top-[150%] border-gray-200'
                    }
                  `}
                >
                  <h3 className="text-lg font-bold text-[#0f1b46] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{step.description}</p>
                </div>

              </motion.div>
            ))}
          </RevealContainer>

          {/* 3. Mobile View (Vertical) */}
          <RevealContainer className="md:hidden relative pl-8 border-l-2 border-gray-300 ml-6 space-y-6 pb-6" amount={0.1} stagger={0.3}>
            {roadmapSteps.map((step, index) => (
              <RevealItem key={step.id} className="relative">
                <div 
                  className={`
                    absolute -left-[41px] top-0 w-10 h-10 rounded-full flex items-center justify-center 
                    text-sm font-bold border-4 border-white bg-white shadow-md
                    ${index % 2 === 0 ? 'border-orange-500 text-orange-500' : 'border-blue-500 text-blue-500'}
                  `}
                >
                  {step.id}
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md">
                  <h3 className="text-lg font-bold text-[#0f1b46] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#475569]">{step.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealContainer>

        </div>
      </div>
    </section>
  );
}