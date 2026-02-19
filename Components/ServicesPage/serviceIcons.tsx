import React from "react";

// Custom outline SVG icons matching the design aesthetic
// Each icon is a React component that accepts className for styling

export const GlobeGridIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer circle */}
    <circle cx="24" cy="24" r="18" />
    {/* Horizontal lines */}
    <ellipse cx="24" cy="24" rx="18" ry="7" />
    <line x1="6" y1="24" x2="42" y2="24" />
    {/* Vertical ellipse */}
    <ellipse cx="24" cy="24" rx="7" ry="18" />
    {/* Crosshairs */}
    <line x1="24" y1="6" x2="24" y2="42" />
  </svg>
);

export const GearsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Large gear */}
    <circle cx="18" cy="20" r="6" />
    <circle cx="18" cy="20" r="2" />
    {/* Gear teeth - large */}
    <line x1="18" y1="10" x2="18" y2="14" />
    <line x1="18" y1="26" x2="18" y2="30" />
    <line x1="8" y1="20" x2="12" y2="20" />
    <line x1="24" y1="20" x2="28" y2="20" />
    <line x1="11" y1="13" x2="14" y2="16" />
    <line x1="22" y1="24" x2="25" y2="27" />
    <line x1="11" y1="27" x2="14" y2="24" />
    <line x1="22" y1="16" x2="25" y2="13" />
    {/* Small gear */}
    <circle cx="32" cy="30" r="4" />
    <circle cx="32" cy="30" r="1.5" />
    {/* Gear teeth - small */}
    <line x1="32" y1="23" x2="32" y2="26" />
    <line x1="32" y1="34" x2="32" y2="37" />
    <line x1="25" y1="30" x2="28" y2="30" />
    <line x1="36" y1="30" x2="39" y2="30" />
    {/* Dots decoration */}
    <circle cx="38" cy="14" r="1" fill="currentColor" />
    <circle cx="42" cy="14" r="1" fill="currentColor" />
    <circle cx="38" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const WorkflowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Central node */}
    <circle cx="24" cy="24" r="5" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
    {/* Connected nodes */}
    <circle cx="10" cy="24" r="4" />
    <circle cx="38" cy="24" r="4" />
    <circle cx="24" cy="10" r="4" />
    <circle cx="24" cy="38" r="4" />
    {/* Connection lines */}
    <line x1="14" y1="24" x2="19" y2="24" />
    <line x1="29" y1="24" x2="34" y2="24" />
    <line x1="24" y1="14" x2="24" y2="19" />
    <line x1="24" y1="29" x2="24" y2="34" />
  </svg>
);

export const LayersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bottom layer */}
    <polygon points="24,38 6,28 24,18 42,28" />
    {/* Middle layer */}
    <polygon points="24,30 6,20 24,10 42,20" />
    {/* Decorative elements */}
    <line x1="6" y1="24" x2="6" y2="28" />
    <line x1="42" y1="24" x2="42" y2="28" />
  </svg>
);

export const ServerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Top server */}
    <rect x="8" y="8" width="32" height="10" rx="2" />
    <circle cx="14" cy="13" r="2" fill="currentColor" />
    <line x1="20" y1="13" x2="34" y2="13" />
    {/* Bottom server */}
    <rect x="8" y="22" width="32" height="10" rx="2" />
    <circle cx="14" cy="27" r="2" fill="currentColor" />
    <line x1="20" y1="27" x2="34" y2="27" />
    {/* Connection */}
    <line x1="24" y1="32" x2="24" y2="38" />
    <line x1="18" y1="38" x2="30" y2="38" />
  </svg>
);

export const SmartphoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Phone body */}
    <rect x="12" y="6" width="24" height="36" rx="3" />
    {/* Screen */}
    <rect x="15" y="10" width="18" height="24" rx="1" />
    {/* Home button */}
    <circle cx="24" cy="38" r="2" />
    {/* Speaker */}
    <line x1="20" y1="8" x2="28" y2="8" />
  </svg>
);

export const BlockchainIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Center cube */}
    <rect x="18" y="18" width="12" height="12" rx="1" />
    {/* Top left cube */}
    <rect x="6" y="6" width="10" height="10" rx="1" />
    {/* Top right cube */}
    <rect x="32" y="6" width="10" height="10" rx="1" />
    {/* Bottom left cube */}
    <rect x="6" y="32" width="10" height="10" rx="1" />
    {/* Bottom right cube */}
    <rect x="32" y="32" width="10" height="10" rx="1" />
    {/* Connections */}
    <line x1="16" y1="11" x2="18" y2="18" />
    <line x1="32" y1="11" x2="30" y2="18" />
    <line x1="16" y1="37" x2="18" y2="30" />
    <line x1="32" y1="37" x2="30" y2="30" />
  </svg>
);

export const PaletteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Palette shape */}
    <path d="M24 6C13 6 6 14 6 24c0 10 7 18 18 18 2 0 4-2 4-4 0-1-0.5-2-1-2.5-0.5-0.5-1-1.5-1-2.5 0-2 2-4 4-4h5c6 0 10-4 10-10 0-8-8-13-21-13z" />
    {/* Color dots */}
    <circle cx="16" cy="18" r="3" />
    <circle cx="26" cy="14" r="3" />
    <circle cx="34" cy="20" r="3" />
    <circle cx="18" cy="28" r="3" />
  </svg>
);

export const CloudIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Cloud shape */}
    <path d="M36 34H14a8 8 0 01-1-16 10 10 0 0119-3 6 6 0 014 11v8z" />
    {/* Upload arrow */}
    <line x1="24" y1="26" x2="24" y2="38" />
    <polyline points="18,32 24,26 30,32" />
  </svg>
);

export const CpuIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main chip */}
    <rect x="12" y="12" width="24" height="24" rx="2" />
    {/* Inner core */}
    <rect x="18" y="18" width="12" height="12" rx="1" />
    {/* Top pins */}
    <line x1="18" y1="6" x2="18" y2="12" />
    <line x1="24" y1="6" x2="24" y2="12" />
    <line x1="30" y1="6" x2="30" y2="12" />
    {/* Bottom pins */}
    <line x1="18" y1="36" x2="18" y2="42" />
    <line x1="24" y1="36" x2="24" y2="42" />
    <line x1="30" y1="36" x2="30" y2="42" />
    {/* Left pins */}
    <line x1="6" y1="18" x2="12" y2="18" />
    <line x1="6" y1="24" x2="12" y2="24" />
    <line x1="6" y1="30" x2="12" y2="30" />
    {/* Right pins */}
    <line x1="36" y1="18" x2="42" y2="18" />
    <line x1="36" y1="24" x2="42" y2="24" />
    <line x1="36" y1="30" x2="42" y2="30" />
  </svg>
);

export const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bulb */}
    <path d="M24 6a12 12 0 00-8 21v5a2 2 0 002 2h12a2 2 0 002-2v-5A12 12 0 0024 6z" />
    {/* Base lines */}
    <line x1="18" y1="38" x2="30" y2="38" />
    <line x1="20" y1="42" x2="28" y2="42" />
    {/* Filament */}
    <path d="M20 27c0-2 2-4 4-4s4 2 4 4" />
  </svg>
);

export const AnalyticsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Chart bars */}
    <rect x="8" y="26" width="8" height="14" rx="1" />
    <rect x="20" y="18" width="8" height="22" rx="1" />
    <rect x="32" y="10" width="8" height="30" rx="1" />
    {/* Trend line */}
    <polyline points="8,20 20,14 32,8" />
    <circle cx="8" cy="20" r="2" fill="currentColor" />
    <circle cx="20" cy="14" r="2" fill="currentColor" />
    <circle cx="32" cy="8" r="2" fill="currentColor" />
  </svg>
);

export const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Shield shape */}
    <path d="M24 6L8 12v12c0 10 8 16 16 20 8-4 16-10 16-20V12L24 6z" />
    {/* Checkmark */}
    <polyline points="16,24 22,30 32,18" />
  </svg>
);

export const MegaphoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Megaphone body */}
    <path d="M12 20v8a2 2 0 002 2h4l12 8V12l-12 8h-4a2 2 0 00-2 2z" />
    {/* Sound waves */}
    <path d="M34 18c2 2 2 6 0 8" />
    <path d="M38 14c4 4 4 12 0 16" />
  </svg>
);

// Icon map to lookup icons by service key
export const serviceIconMap: Record<string, React.FC<{ className?: string }>> = {
  education: GlobeGridIcon,
  n8n: WorkflowIcon,
  sap: LayersIcon,
  fullstack: ServerIcon,
  mobile: SmartphoneIcon,
  blockchain: BlockchainIcon,
  uiux: PaletteIcon,
  devops: CloudIcon,
  ai: CpuIcon,
  itdesign: GlobeGridIcon,
  analytics: AnalyticsIcon,
  risk: ShieldIcon,
  firewall: LightbulbIcon,
  marketing: MegaphoneIcon,
};
