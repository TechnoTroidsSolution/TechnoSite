import IntroSection from "@/Components/HomePage/IntroSectionNew";
import Image from "next/image";
import Link from "next/link";
import CompanyStatsSection from "@/Components/HomePage/stats/CompanyStatsSection";
import { TestimonialsSection } from "@/Components/HomePage/Testimonials/TestimonialsSection";
import Services from "@/Components/HomePage/services/Services";
import HighlightsSection from "@/Components/HomePage/HighlightsSection";
import ProcessPreview from "@/Components/HomePage/ProcessPreview";
import InsightsSection from "@/Components/HomePage/InsightsSection";
import TrustedBySection from "@/Components/HomePage/TrustedBySection";
import CompanyOverviewSection from "@/Components/HomePage/CompanyOverviewSection";
import TechStackSection from "@/Components/HomePage/TechStackSection";

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
      <HighlightsSection />
      <CompanyOverviewSection />
      <Services />



      <section className="py-20 bg-linear-to-b from-white via-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Excellence in Every Solution
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-foreground/70">Quick turnaround without compromising quality</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Secure & Reliable</h3>
              <p className="text-foreground/70">Enterprise-grade security and 99.9% uptime</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Expert Team</h3>
              <p className="text-foreground/70">Skilled professionals with years of experience</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
              <p className="text-foreground/70">Round-the-clock assistance when you need it</p>
            </div>
          </div>
        </div>
      </section>

      <TechStackSection />
      <ProcessPreview />


      <CompanyStatsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />

      <InsightsSection />

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you achieve your digital transformation goals
            with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-10 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
