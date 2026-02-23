import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // UPDATED: Mapped to the new Blue/Cyan/Slate theme
        primary: {
          DEFAULT: '#2563EB', // blue-600 (Main Brand Color)
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#0F172A', // slate-900 (Dark Footer/Sections)
          foreground: '#F8FAFC',
        },
        accent: {
          DEFAULT: '#06B6D4', // cyan-500 (Gradients/Highlights)
          foreground: '#FFFFFF',
        },
        // Keeping these as variables allows existing Shadcn components to work, 
        // but you can replace them with hex codes if you want total overrides.
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        pop: {
          DEFAULT: 'var(--pop)',
          foreground: 'var(--pop-foreground)',
        },
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.15), transparent 45%), radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.1), transparent 55%)',
        'accent-glow': 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.05))',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(37, 99, 235, 0.3)', // Updated to match primary blue
        soft: '0 18px 40px -24px rgba(15, 23, 42, 0.3)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      // UPDATED: Added all the custom animations for the CTA section
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' },
        },
        // New Keyframes
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        // New Animations
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin-reverse 15s linear infinite',
        'wiggle-slow': 'wiggle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;