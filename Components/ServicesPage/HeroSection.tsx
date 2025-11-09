interface HeroProps {
  hero: {
    badgeText: string;
    title: string;
    subtitle: string;
  };
}

export default function HeroSection({ hero }: HeroProps) {
  return (
    <section className="bg-linear-to-br from-teal-600 via-teal-500 to-cyan-500 text-white py-24 relative overflow-hidden">

      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-8">
          <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
            <path
              d="M5 13l4 4L19 7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold">{hero.badgeText}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>

      </div>
    </section>
  );
}