// You can use next/image for better performance
import Image from "next/image";
import bg from "../../public/Images/homepage/hero-section.webp";
import Link from "next/link";
export default function IntroSection() {
  return (
    <div className="flex flex-col justify-center space-y-8">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-gray-900 tracking-tight">
        Build Powerful Software That Scales With Your Business
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
        We engineer robust, scalable, and high-performance digital products.
        From idea to deployment — we turn your software vision into reality.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <Link
          href="/contact"
          className="px-6 py-3 w-fit bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>

        <Link
          href="/services"
          className="px-6 py-3 w-fit border border-gray-400 text-gray-800 rounded-lg hover:bg-gray-100 transition"
        >
          View Services
        </Link>
      </div>

      {/* Hero Image */}
      <div className="mt-8">
        <Image
          src={bg}
          alt="Software development illustration"
          width={600}
          height={450}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
