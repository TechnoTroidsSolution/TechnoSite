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
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        border: 'var(--border)',
        muted: 'var(--muted)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.2), transparent 45%), radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.18), transparent 55%)',
        'accent-glow': 'linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(14, 165, 233, 0.22))',
      },
      boxShadow: {
        glow: '0 25px 60px -25px rgba(37, 99, 235, 0.4)',
        soft: '0 18px 40px -24px rgba(15, 23, 42, 0.35)',
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
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
};

export default config;
