import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineCloud,
  HiOutlineCog,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import ServiceItem from "./ServiceItem";
import Link from "next/link";
export default function ServicesSection() {
  return (
    <div className="flex flex-col justify-center mt-10 lg:mt-0">
      <h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-6">
        What We Offer
      </h2>

      <div className="space-y-10">
        <ServiceItem
          icon={HiOutlineDesktopComputer}
          title="Web Application Development"
          description="High-performance and scalable web apps built with modern frameworks."
        />

        <ServiceItem
          icon={HiOutlineDeviceMobile}
          title="Mobile App Development"
          description="Cross-platform Android & iOS apps designed for growth and usability."
        />

        <ServiceItem
          icon={HiOutlineCloud}
          title="SaaS & Cloud Engineering"
          description="Cloud-native SaaS products engineered for performance and reliability."
        />

        <ServiceItem
          icon={HiOutlineCog}
          title="System Integration & Automation"
          description="API integrations and workflow automation for smarter operations."
        />
      </div>

      <Link
        href="/services"
        className="mt-10 font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 transition"
      >
        Explore all services →
      </Link>
    </div>
  );
}
