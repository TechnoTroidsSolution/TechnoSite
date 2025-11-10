import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineCloud,
  HiOutlineCog,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import ServiceItem from "./ServiceItem";
import Link from "next/link";

// The main component for this file
export default function ServicesSection() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="border-t border-gray-300 pt-4 ">
        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">
          Services
        </h2>

        <div className="space-y-8">
          <ServiceItem
            icon={HiOutlineDesktopComputer}
            title="Custom Web Application Development"
            description="Full-stack web applications built with modern frameworks and best practices"
          />
          <ServiceItem
            icon={HiOutlineDeviceMobile}
            title="Mobile Apps (iOS & Android)"
            description="Native and cross-platform mobile applications for all devices"
          />
          <ServiceItem
            icon={HiOutlineCloud}
            title="SaaS Platforms & Cloud Solutions"
            description="Scalable cloud-based software-as-a-service platforms"
          />
          <ServiceItem
            icon={HiOutlineCog}
            title="API Integration & Automation"
            description="Seamless integrations and workflow automation solutions"
          />
        </div>

        <div className="border-b border-gray-300 mt-12 mb-6"></div>

        <Link
          href="/services"
          className="font-semibold text-gray-900 underline underline-offset-4 decoration-2 decoration-gray-400 hover:decoration-gray-900 transition flex items-center group"
        >
          Explore all products
          <FaArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
