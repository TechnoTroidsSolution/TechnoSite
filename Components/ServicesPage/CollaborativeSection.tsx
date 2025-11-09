import React from "react";

interface CollaborativeSectionProps {
  collab: {
    title: string;
    subtitle: string;
  };
}

export default function CollaborativeSection({ collab }: CollaborativeSectionProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {collab.title}
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          {collab.subtitle}
        </p>
      </div>
    </section>
  );
}
