interface HeroProps {
  readonly hero: {
    readonly badgeText: string;
    readonly title: string;
    readonly subtitle: string;
  };
}

export default function HeroSection({ hero }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-[var(--primary)]/5 text-foreground py-16 md:py-20 overflow-hidden">
      {/* Decorative Animated Icons */}
      {/* Dotted Grid (Top Left) */}
      <div className="absolute top-12 left-4 md:left-10 opacity-40 animate-spin-slow pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="2" cy="2" r="2" className="fill-cyan-500" />
          <circle cx="22" cy="2" r="2" className="fill-cyan-500" />
          <circle cx="42" cy="2" r="2" className="fill-cyan-500" />
          <circle cx="2" cy="22" r="2" className="fill-cyan-500" />
          <circle cx="22" cy="22" r="2" className="fill-cyan-500" />
          <circle cx="42" cy="22" r="2" className="fill-cyan-500" />
          <circle cx="2" cy="42" r="2" className="fill-cyan-500" />
          <circle cx="22" cy="42" r="2" className="fill-cyan-500" />
          <circle cx="42" cy="42" r="2" className="fill-cyan-500" />
        </svg>
      </div>

      {/* Blue Triangle (Top Right) */}
      <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float-slow pointer-events-none">
        <svg width="45" height="45" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L40 35H0L20 0Z" className="fill-blue-400" />
        </svg>
      </div>

      {/* Small Cross (Top Center) */}
      <div className="absolute top-12 left-2/3 transform -translate-x-1/2 opacity-50 animate-wiggle-slow pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-cyan-400">
          <path d="M12 0V24M0 12H24" />
        </svg>
      </div>

      {/* Circle Outline (Left Middle) */}
      <div className="absolute top-1/2 left-12 w-10 h-10 border-4 border-cyan-200 rounded-full opacity-50 animate-float-medium pointer-events-none" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 backdrop-blur-sm border-2 border-[var(--primary)]/40 rounded-full px-5 py-2 mb-8 shadow-lg shadow-[var(--primary)]/10">
            <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-semibold text-[var(--primary)]">{hero.badgeText}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-clip-text text-transparent">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}