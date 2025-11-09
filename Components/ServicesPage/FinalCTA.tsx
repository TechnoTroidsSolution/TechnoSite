"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface FinalCTAProps {
  data: {
    title: string;
    subtitle: string;
    button1_text: string;
    button1_link: string;
    button2_text: string;
    button2_link: string;
  };
}

export default function FinalCTA({ data }: FinalCTAProps) {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800">
      <div className="max-w-4xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {data.title}
        </h2>

        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          {data.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => router.push(data.button1_link)}
            className="bg-white text-teal-700 font-semibold px-10 py-4 text-lg rounded-full shadow-lg
                       hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            {data.button1_text}
          </button>

          <button
            onClick={() => router.push(data.button2_link)}
            className="border-2 border-white text-white font-semibold px-10 py-4 text-lg rounded-full
                       hover:bg-white hover:text-teal-700 hover:scale-105 transition-all duration-300"
          >
            {data.button2_text}
          </button>

        </div>

      </div>
    </section>
  );
}
