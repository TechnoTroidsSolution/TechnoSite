# About Page Components

This directory contains all the components for the About Us page, following a modular and professional structure inspired by leading startups.

## Component Structure

### Main Component
- **AboutPage.tsx**: Main container component that orchestrates all sub-components

### Sub-Components
1. **HeroSection.tsx**: Eye-catching hero section with animated background
2. **StatsSection.tsx**: Key metrics and achievements display
3. **PhilosophySection.tsx**: Core belief and philosophy explanation
4. **PrinciplesSection.tsx**: Guiding principles in a grid layout
5. **ValuesSection.tsx**: Core company values with visual appeal
6. **TimelineSection.tsx**: Company journey and milestones
7. **TeamSection.tsx**: Leadership team showcase
8. **CTASection.tsx**: Call-to-action with commitment statement

## Usage

```tsx
import AboutPage from '@/Components/AboutPage/AboutPage';
import aboutData from '@/content/about.yaml';

export default function About() {
  return <AboutPage data={aboutData} />;
}
```

## Design Philosophy

- **Modular**: Each section is a separate component for easy maintenance
- **Responsive**: Mobile-first design that scales beautifully
- **Dark Mode**: Full dark mode support with smooth transitions
- **Animations**: Subtle hover effects and transitions for engagement
- **Professional**: Clean, modern design inspired by Stripe, Vercel, and Linear

## Features

- ✅ Fully responsive grid layouts
- ✅ Animated hover effects
- ✅ Gradient backgrounds and accents
- ✅ Dark mode support
- ✅ TypeScript type safety
- ✅ Accessible markup
- ✅ Optimized performance

## Customization

All components accept props from the `about.yaml` file, making content updates easy without touching the code.

To modify styling, update the Tailwind classes in individual component files.
