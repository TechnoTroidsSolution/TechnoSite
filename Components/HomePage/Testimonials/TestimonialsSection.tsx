"use client"; // 1. Convert to a Client Component

import React, { useState, useEffect } from "react"; // 2. Import hooks
import { testimonials } from "../../../data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

// Simple Arrow SVG component
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`h-6 w-6 text-gray-800 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const TestimonialsSection = () => {
  // 3. Add state for the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  // 4. Navigation functions
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // 5. Auto-slide effect
  useEffect(() => {
    // Set up the interval
    const slideInterval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentIndex]); // Re-run effect if index changes (to reset timer)

  return (
    <section className="flex w-full flex-col items-center justify-center bg-brand-faint py-20 md:py-32">
      {/* ... (Chip, Heading, Subheading remain the same) ... */}
      <div className="rounded-full bg-blue-100 px-4 py-1.5">
        <span className="font-medium text-blue-700">
          Client Success Stories
        </span>
      </div>
      <h2 className="mt-6 text-center text-4xl font-bold text-gray-900 md:text-5xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 max-w-xl text-center text-lg text-gray-600">
        Don&apos;t just take our word for it. Here&apos;s what industry leaders
        say about working with DevStudio.
      </p>

      {/* 6. Slider implementation */}
      <div className="mt-16 w-full px-4 flex justify-center">
        {/* Relative container for arrows and slider viewport */}
        <div className="relative w-full max-w-4xl">
          {/* Slider Viewport: Hides the non-active slides */}
          <div className="overflow-hidden">
            {/* Slider Track: This moves left/right */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {/* Map all testimonials. Each one is a full-width slide */}
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* 7. Navigation Arrows (Only show if more than 1 slide) */}
          {totalSlides > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-lg transition hover:bg-white/80 md:left-0 md:-translate-x-full"
                aria-label="Previous testimonial"
              >
                <ArrowIcon className="rotate-180" />
              </button>
              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-lg transition hover:bg-white/80 md:right-0 md:translate-x-full"
                aria-label="Next testimonial"
              >
                <ArrowIcon />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
