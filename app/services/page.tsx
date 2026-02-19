import { Metadata } from "next";
import yaml from "js-yaml";
import fs from "node:fs";
import path from "node:path";

import HeroSection from "@/Components/ServicesPage/HeroSection";
import ServicesIntroSection from "@/Components/ServicesPage/ServicesIntroSection";
import ServicesGrid from "@/Components/ServicesPage/ServicesGrid";
import CTASection from "@/Components/ServicesPage/CTASection";
import IndustriesSection from "@/Components/ServicesPage/IndustriesSection";
// import ProcessSection from "@/Components/ServicesPage/ProcessSection";
import FinalCTA from "@/Components/ServicesPage/FinalCTA";
import AdvancedCapabilitiesSection from "@/Components/ServicesPage/AdvancedCapabilitiesSection";
import RoadmapSection from "@/Components/HomePage/RoadmapSection";


export const metadata: Metadata = {
  title: "Our Services - TechnoTroids",
  description:
    "Discover our comprehensive technology services including web development, mobile apps, cloud solutions, and AI/ML services.",
};

function loadServicesContent() {
  const filePath = path.join(process.cwd(), "content", "services.yaml");
  const raw = fs.readFileSync(filePath, "utf8");
  return yaml.load(raw) as any;
}

export default function ServicesPage() {
  const data = loadServicesContent();
  const services = data.services_grid || [];
  
  // First service is featured in intro section, rest go to grid
  const featuredService = services[0];
  const remainingServices = services.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <HeroSection hero={data.hero_section} />
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/20 to-blue-50/10 pointer-events-none" />
        
        {/* Decorative wavy lines on right side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
          <svg className="absolute right-0 top-1/4 w-[600px] h-[800px] text-gray-200/40" viewBox="0 0 400 600" fill="none">
            <path d="M50 0C150 100 100 200 200 300C300 400 250 500 350 600" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M100 0C200 100 150 200 250 300C350 400 300 500 400 600" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M150 0C250 100 200 200 300 300C400 400 350 500 450 600" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M200 0C300 100 250 200 350 300C450 400 400 500 500 600" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M250 0C350 100 300 200 400 300C500 400 450 500 550 600" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        {/* Bottom left gradient accent - Yellow/Amber - subtle */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-100/40 via-yellow-50/30 to-transparent pointer-events-none rounded-tr-full" />
        
        {/* Blue accent triangle - contained */}
        <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-600 to-blue-500 transform rotate-45 translate-x-16 translate-y-16" />
        </div>
        
        <ServicesIntroSection featuredService={featuredService} />
        <ServicesGrid services={remainingServices} />
      </section>
      <CTASection data={data.cta_section} />
      <IndustriesSection data={data.industries_section} />
      <RoadmapSection/>
      {/* <ProcessSection data={data.process_section} /> */}
      {/* <CollaborativeSection collab={data.collaborative_section} /> */}
      {/* <WhyChooseUsSection data={data.why_choose_us} /> */}
      <AdvancedCapabilitiesSection data={data.advanced_capabilities} />
      <FinalCTA data={data.final_cta_section} />
    </div>
  );
}
