import React from "react";

// This simple component renders a star icon
export const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`text-yellow-400 ${className}`}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c.321-.662 1.13-.662 1.451 0l2.43 4.93L19.4 8.71c.732.106 1.02.986.494 1.492l-3.6 3.51.85 4.96c.128.74-.645 1.31-1.313.97l-4.365-2.3-4.365 2.3c-.668.34-1.44-.23-1.313-.97l.85-4.96-3.6-3.51c-.526-.506-.238-1.386.494-1.492l4.98-.72 2.43-4.93z"
      clipRule="evenodd"
    />
  </svg>
);
