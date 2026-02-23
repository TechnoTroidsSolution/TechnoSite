import React from "react";
import Image from "next/image";
import { type Testimonial } from "@/data/testimonials"; // Import the type
import { StarIcon } from "./StarIcon";
import bg from "../../../public/Images/homepage/stats-img.jpg";
import test from "node:test";
type TestimonialCardProps = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    // Card container
    <div className="relative w-full max-w-4xl rounded-2xl bg-card p-8 shadow-xl md:p-12">
      {/* Quotation Mark Icon */}
      <div className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-accent md:left-12 md:top-12">
        “
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        {/* Left Side: Profile & Project Details */}
        <div className="flex flex-col items-center text-center md:w-1/3 md:items-start md:text-left">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.name}
            width={80}
            height={80}
            className="h-20 w-20 rounded-full object-cover"
          />
          <p className="mt-4 text-lg font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
          <p className="text-sm font-medium text-blue-600">
            {testimonial.company}
          </p>

          {/* Star Rating */}
          <div className="mt-4 flex">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          {/* Project/Results Boxes */}
          <div className="mt-6 w-full space-y-3">
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Project
              </p>
              <p className="text-sm font-semibold text-foreground">
                {testimonial.project}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Results
              </p>
              <p className="text-sm font-semibold text-primary">
                {testimonial.results}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Quote */}
        <div className="flex items-center md:w-2/3">
          <blockquote className="text-2xl font-medium leading-relaxed text-muted-foreground md:text-3xl md:leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );
};
