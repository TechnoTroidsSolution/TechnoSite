import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineCloud,
  HiOutlineCog,
} from "react-icons/hi";
import ServiceItem from "./ServiceItem"; // Assumes the updated ServiceItem above
import Link from "next/link";

export default function ServicesContent() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-sm font-bold tracking-widest text-gray-800 uppercase mb-8">
        Core Competencies
      </h2>

      <div className="space-y-8">
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
        className="mt-10 font-medium text-gray-800 hover:text-black transition flex items-center space-x-2"
      >
        <span>Explore all services</span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
