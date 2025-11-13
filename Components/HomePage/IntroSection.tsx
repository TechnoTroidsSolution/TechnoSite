// You can use next/image for better performance
import Image from "next/image";
import bg from "../../public/Images/homepage/hero-section.webp";
import Link from "next/link";
export default function IntroSection() {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <h1 className="text-4xl lg:text-5xl  font-serif font-mono text-gray-900 leading-tight">
        Your vision deserves software that works as hard as you do
      </h1>
      <p className="text-lg text-gray-700 font-serif">
        We don’t just write code—we build digital solutions that transform how
        you do business. Every line purposeful. Every feature intentional. Every
        outcome measurable.
      </p>
      <Link
        href="/contact"
        className="text-lg font-bold text-blue-600 tracking-wider uppercase transition-transform hover:translate-x-1 w-fit" // Added w-fit
      >
        GET STARTED
      </Link>

      <div className="mt-8">
        {/* Using <Image> from next/image is recommended.
          Place your image in /public/hero-illustration.png
        */}
        <Image
          src={bg} // Path relative to /public
          alt="Team working on digital solutions"
          width={600} // Specify width
          height={400} // Specify height
          className="w-full h-auto"
        />

        {/* Fallback placeholder if you don't have the image */}
        {/* <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Illustration Placeholder</span>
        </div> 
        */}
      </div>
    </div>
  );
}
