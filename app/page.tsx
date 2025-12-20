import IntroSection from "@/Components/HomePage/IntroSectionNew";
import Image from "next/image";
import CompanyStatsSection from "@/Components/HomePage/stats/CompanyStatsSection";
import { TestimonialsSection } from "@/Components/HomePage/Testimonials/TestimonialsSection";
import Services from "@/Components/HomePage/services/Services";
import HighlightsSection from "@/Components/HomePage/HighlightsSection";
import ProcessPreview from "@/Components/HomePage/ProcessPreview";
import InsightsSection from "@/Components/HomePage/InsightsSection";
import CompanyOverviewSection from "@/Components/HomePage/CompanyOverviewSection";
import TechStackSection from "@/Components/HomePage/TechStackSection";
import RoadmapSection from "@/Components/HomePage/RoadmapSection";
import WhyChooseUsSection from "@/Components/HomePage/WhyChooseUsSection";
import CTASection from "@/Components/HomePage/CTASection";
import HeroDecorations from "@/Components/HomePage/HeroDecorations";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section with Vibrant Gradient Background */}
      <section className="relative min-h-[20vh] bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden text-foreground">
        {/* Client-side decorative elements */}
        <HeroDecorations />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center min-h-[60vh] lg:min-h-[70vh]">
            {/* Left Column - Content (Server-rendered for fast LCP) */}
            <IntroSection />

            {/* Right Column - Illustration (Server-rendered) */}
            <div className="relative flex items-center justify-center mt-16 lg:mt-20 group">
              <Image
                src="/Images/homepage/Pc.png"
                alt="Modern workspace illustration showing cloud platforms and analytics dashboard"
                width={700}
                height={540}
                className="w-full h-auto max-w-lg lg:max-w-2lg relative z-10 scale-110 lg:scale-125 transition-all duration-700 ease-in-out group-hover:scale-[1.15] lg:group-hover:scale-[1.35] group-hover:rotate-1 group-hover:drop-shadow-2xl contrast-110"
                priority
                sizes="(min-width: 1024px) 700px, 95vw"
              />

              {/* Floating Tech Bubble Icons Around Illustration - COLORFUL */}
              {/* Rocket Icon - Top Left - BLUE GRADIENT */}
              <div className="absolute top-[-30%] left-[12%] hidden md:flex w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-full flex-col items-center justify-center shadow-2xl shadow-[var(--primary)]/20 animate-float border-2 border-[var(--primary-light)]/30">
                <div className="text-white text-2xl lg:text-3xl">🚀</div>
              </div>

              {/* Charts & Analytics Icon - Top Center - CYAN GRADIENT */}
              <div className="absolute top-[-35%] left-[42%] hidden md:flex w-20 h-16 lg:w-24 lg:h-20 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] rounded-3xl items-center justify-center shadow-2xl shadow-[var(--accent)]/20 animate-float border-2 border-[var(--accent-light)]/30" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center justify-center">
                  <div className="text-lg lg:text-2xl">💰</div>
                  <div className="text-lg lg:text-2xl">📊</div>
                  <div className="text-lg lg:text-2xl">🔥</div>
                </div>
              </div>

              {/* Success/Analytics Icon - Top Right - BLUE TO CYAN GRADIENT */}
              <div className="absolute top-[-30%] right-[8%] hidden md:flex w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--accent-dark)] rounded-full items-center justify-center shadow-2xl shadow-[var(--accent)]/20 animate-float border-2 border-white/20" style={{ animationDelay: '1s' }}>
                <div className="grid grid-cols-2 items-center">
                  <div className="text-sm lg:text-lg">🌐</div>
                  <div className="text-sm lg:text-lg">✓</div>
                  <div className="text-sm lg:text-lg">⚙️</div>
                  <div className="text-sm lg:text-lg">💲</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us - Our differentiators */}
      <WhyChooseUsSection />

      {/* Company Overview - Who we are */}
      <CompanyOverviewSection />
      {/* Services - What we offer */}
      <Services />

      {/* Tech Stack - Technologies we use */}
      <TechStackSection />

      {/* Process - How we work */}
      <ProcessPreview />

      {/* Stats - Our achievements and credibility */}
      <CompanyStatsSection />

      {/* Highlights - Key features and benefits */}
      <HighlightsSection />

      {/* Roadmap - Our vision and future */}
      <RoadmapSection />

      {/* Testimonials - Social proof */}
      <TestimonialsSection />

      {/* Insights - Thought leadership */}
      <InsightsSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
