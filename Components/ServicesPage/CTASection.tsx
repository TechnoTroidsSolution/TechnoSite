"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CTASectionProps {
  data: {
    title: string;
    subtitle: string;
    button_text: string;
    button_link: string;
  };
}

export default function CTASection({ data }: CTASectionProps) {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800">
      <div className="max-w-4xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {data.title}
        </h2>

        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          {data.subtitle}
        </p>

        <button
          onClick={() => router.push(data.button_link)}
          className="bg-white text-teal-700 font-semibold px-10 py-4 text-lg rounded-full shadow-lg
                     hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          {data.button_text}
        </button>

      </div>
    </section>
  );
}
