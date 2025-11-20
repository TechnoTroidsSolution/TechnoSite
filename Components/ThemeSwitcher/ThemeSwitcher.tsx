import React from 'react';

export default function ThemeSwitcher() {
  return (
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 hover:bg-gray-200 transition-colors duration-200">
      {/* Moon Icon */}
      <svg
        className="w-6 h-6 text-slate-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </div>
  );
}
