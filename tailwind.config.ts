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
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
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
        'hero-radial': 'radial-gradient(circle at top left, rgba(99, 102, 241, 0.15), transparent 45%), radial-gradient(circle at bottom right, rgba(79, 70, 229, 0.1), transparent 55%)',
        'accent-glow': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.05))',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(99, 102, 241, 0.3)',
        soft: '0 18px 40px -24px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
      },
    },
  },
};

export default config;
