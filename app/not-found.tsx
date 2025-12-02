'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground flex items-center justify-center px-4 relative overflow-hidden">
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

      {/* Circle Outline (Bottom Left) */}
      <div className="absolute bottom-20 left-12 w-16 h-16 border-4 border-cyan-200 rounded-full opacity-50 animate-float-medium pointer-events-none"></div>

      {/* Square Outline (Bottom Right) */}
      <div className="absolute bottom-20 right-1/4 opacity-50 pointer-events-none">
        <div className="w-14 h-14 border-4 border-blue-300 rounded-lg animate-spin-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Broken Robot SVG Illustration */}
        <div className="flex justify-center mb-12">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="animate-float"
          >
            {/* Robot Head */}
            <rect
              x="100"
              y="40"
              width="100"
              height="80"
              rx="15"
              className="fill-gray-400 dark:fill-gray-600 stroke-gray-500 dark:stroke-gray-700"
              strokeWidth="3"
            />
            
            {/* Antenna */}
            <line x1="150" y1="40" x2="150" y2="15" className="stroke-gray-500 dark:stroke-gray-600" strokeWidth="3" />
            <circle cx="150" cy="15" r="6" className="fill-red-500 animate-pulse" />
            
            {/* Eyes - X marks (broken) */}
            <g className="animate-pulse">
              <line x1="120" y1="60" x2="135" y2="75" className="stroke-red-500" strokeWidth="4" strokeLinecap="round" />
              <line x1="135" y1="60" x2="120" y2="75" className="stroke-red-500" strokeWidth="4" strokeLinecap="round" />
            </g>
            <g className="animate-pulse" style={{animationDelay: '0.2s'}}>
              <line x1="165" y1="60" x2="180" y2="75" className="stroke-red-500" strokeWidth="4" strokeLinecap="round" />
              <line x1="180" y1="60" x2="165" y2="75" className="stroke-red-500" strokeWidth="4" strokeLinecap="round" />
            </g>
            
            {/* Sad mouth */}
            <path
              d="M 125 100 Q 150 90 175 100"
              className="stroke-gray-600 dark:stroke-gray-300 fill-none"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Robot Body */}
            <rect
              x="80"
              y="130"
              width="140"
              height="100"
              rx="20"
              className="fill-gray-300 dark:fill-gray-700 stroke-gray-400 dark:stroke-gray-800"
              strokeWidth="3"
            />
            
            {/* 404 Display Screen */}
            <rect
              x="110"
              y="150"
              width="80"
              height="40"
              rx="8"
              className="fill-gradient-to-br from-[var(--primary)] to-[var(--accent)]"
            />
            <text
              x="150"
              y="177"
              className="fill-white font-bold text-2xl"
              textAnchor="middle"
            >
              404
            </text>
            
            {/* Control Panel Buttons */}
            <circle cx="115" cy="210" r="5" className="fill-red-500 animate-pulse" />
            <circle cx="135" cy="210" r="5" className="fill-yellow-500 animate-pulse" style={{animationDelay: '0.3s'}} />
            <circle cx="155" cy="210" r="5" className="fill-green-500 animate-pulse" style={{animationDelay: '0.6s'}} />
            <circle cx="175" cy="210" r="5" className="fill-blue-500 animate-pulse" style={{animationDelay: '0.9s'}} />
            
            {/* Left Arm - Broken/Detached */}
            <g className="animate-float">
              <rect
                x="40"
                y="145"
                width="35"
                height="60"
                rx="17.5"
                className="fill-gray-400 dark:fill-gray-600 stroke-gray-500 dark:stroke-gray-700"
                strokeWidth="2"
                transform="rotate(-30 57.5 175)"
              />
            </g>
            
            {/* Right Arm - Broken/Detached */}
            <g className="animate-float" style={{animationDelay: '0.5s'}}>
              <rect
                x="225"
                y="145"
                width="35"
                height="60"
                rx="17.5"
                className="fill-gray-400 dark:fill-gray-600 stroke-gray-500 dark:stroke-gray-700"
                strokeWidth="2"
                transform="rotate(30 242.5 175)"
              />
            </g>
            
            {/* Spark Effects */}
            <g className="animate-ping">
              <circle cx="75" cy="140" r="3" className="fill-yellow-400" />
              <circle cx="70" cy="145" r="2" className="fill-yellow-300" />
            </g>
            <g className="animate-ping" style={{animationDelay: '0.4s'}}>
              <circle cx="225" cy="140" r="3" className="fill-yellow-400" />
              <circle cx="230" cy="145" r="2" className="fill-yellow-300" />
            </g>
            
            {/* Screws/Bolts */}
            <circle cx="95" cy="145" r="3" className="fill-gray-600 dark:fill-gray-500" />
            <circle cx="205" cy="145" r="3" className="fill-gray-600 dark:fill-gray-500" />
            <circle cx="95" cy="215" r="3" className="fill-gray-600 dark:fill-gray-500" />
            <circle cx="205" cy="215" r="3" className="fill-gray-600 dark:fill-gray-500" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted, or you may have mistyped the URL.
        </p>

        

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Homepage
          </button>

          <button
            onClick={() => router.back()}
            className="bg-white border-2 border-[var(--primary)] text-[var(--primary)] font-semibold px-8 py-4 text-base rounded-lg hover:bg-[var(--primary)]/5 transition-all duration-300 cursor-pointer"
          >
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
          <p className="text-sm text-foreground/70 mb-4">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/services" 
              className="text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors hover:underline"
            >
              Services
            </Link>
            <span className="text-foreground/30">•</span>
            <Link 
              href="/about" 
              className="text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors hover:underline"
            >
              About Us
            </Link>
            <span className="text-foreground/30">•</span>
            <Link 
              href="/careers" 
              className="text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors hover:underline"
            >
              Careers
            </Link>
            <span className="text-foreground/30">•</span>
            <Link 
              href="/contact" 
              className="text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12 text-sm text-foreground/60">
          <p>Need help? <Link href="/contact" className="text-[var(--primary)] hover:underline font-medium">Contact our support team</Link></p>
        </div>
      </div>
    </div>
  );
}
