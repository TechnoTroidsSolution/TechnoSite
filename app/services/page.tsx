import { Metadata } from "next";
import yaml from "js-yaml";
import fs from "node:fs";
import path from "node:path";

import HeroSection from "@/Components/ServicesPage/HeroSection";
import ServicesGrid from "@/Components/ServicesPage/ServicesGrid";
import CTASection from "@/Components/ServicesPage/CTASection";
import IndustriesSection from "@/Components/ServicesPage/IndustriesSection";
import ProcessSection from "@/Components/ServicesPage/ProcessSection";
import FinalCTA from "@/Components/ServicesPage/FinalCTA";
import AdvancedCapabilitiesSection from "@/Components/ServicesPage/AdvancedCapabilitiesSection";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <HeroSection hero={data.hero_section} />
      <ServicesGrid services={data.services_grid} />
      <CTASection data={data.cta_section} />
      <IndustriesSection data={data.industries_section} />
      <ProcessSection data={data.process_section} />
      {/* <CollaborativeSection collab={data.collaborative_section} /> */}
      {/* <WhyChooseUsSection data={data.why_choose_us} /> */}
      <AdvancedCapabilitiesSection data={data.advanced_capabilities} />
      <FinalCTA data={data.final_cta_section} />
    </div>
  );
}
