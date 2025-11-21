'use client';

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

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section with Navy Blue Background */}
      <section className="relative min-h-[20vh] bg-[#0a1e42] bg-hero-radial overflow-hidden text-white">
        {/* Animated Decorative Elements - Left Side */}
        <div className="absolute top-[15%] left-[5%] w-20 h-20 opacity-30">
          <div className="grid grid-cols-4 gap-1.5">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Red X mark - Top Center */}
        <div className="absolute top-[12%] left-[35%] text-red-500 text-3xl font-bold animate-pulse">×</div>
        
        {/* Blue Triangle - Top Right */}
        <div className="absolute top-[10%] right-[20%] w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-b-35 border-b-blue-400 opacity-40 animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Red Circle - Left Side */}
        <div className="absolute top-[50%] left-[8%] w-12 h-12 border-3 border-red-500 rounded-full opacity-40 animate-pulse"></div>
        
        {/* Blue Square - Bottom Center */}
        <div className="absolute bottom-[15%] left-[42%] w-10 h-10 border-2 border-blue-400 rotate-45 opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
        
        {/* Cyan Circle - Bottom Right */}
        <div className="absolute bottom-[20%] right-[25%] w-16 h-16 border-3 border-cyan-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center min-h-[60vh] lg:min-h-[70vh]">
            {/* Left Column - Content */}
            <IntroSection />
            
            {/* Right Column - Illustration */}
            <div className="relative flex items-center justify-center mt-16 lg:mt-20 group">
              <Image
                src="/Images/homepage/Pc.png"
                alt="Modern workspace illustration showing cloud platforms and analytics dashboard"
                width={700}
                height={540}
                className="w-full h-auto max-w-lg lg:max-w-2lg relative z-10 scale-110 lg:scale-125 transition-all duration-700 ease-in-out group-hover:scale-[1.15] lg:group-hover:scale-[1.35] group-hover:rotate-1 group-hover:drop-shadow-2xl"
                priority
                sizes="(min-width: 1024px) 700px, 95vw"
              />
              
              {/* Floating Tech Bubble Icons Around Illustration */}
              {/* Rocket Icon - Top Left */}
              <div className="absolute top-[-30%] left-[12%] hidden md:flex w-16 h-16 lg:w-20 lg:h-20 bg-[#1e3a8a] rounded-full flex-col items-center justify-center shadow-2xl animate-float border-4 border-[#2563eb]">
                <div className="text-white text-2xl lg:text-3xl">🚀</div>
              </div>
              
              {/* Charts & Analytics Icon - Top Center */}
              <div className="absolute top-[-35%] left-[42%] hidden md:flex w-20 h-16 lg:w-24 lg:h-20 bg-[#1e3a8a] rounded-3xl items-center justify-center shadow-2xl animate-float border-4 border-[#2563eb]" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center justify-center">
                  <div className="text-lg lg:text-2xl">💰</div>
                  <div className="text-lg lg:text-2xl">📊</div>
                  <div className="text-lg lg:text-2xl">🔥</div>
                </div>
              </div>
              
              {/* Success/Analytics Icon - Top Right */}
              <div className="absolute top-[-30%] right-[8%] hidden md:flex w-16 h-16 lg:w-20 lg:h-20 bg-[#4338ca] rounded-full items-center justify-center shadow-2xl animate-float border-4 border-[#6366f1]" style={{ animationDelay: '1s' }}>
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
