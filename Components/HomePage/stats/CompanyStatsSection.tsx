import Image from "next/image";
import Link from "next/link";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div>
    <span className="block text-4xl lg:text-5xl font-bold">{value}</span>
    <span className="block text-lg opacity-90">{label}</span>
  </div>
);

export default function CompanyStatsSection() {
  return (
    <main className="w-full bg-white text-gray-800">
      <div className="container mx-auto px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-16">
        <div className="max-w-2xl w-full">
          {/* Headings */}
          <h1 className="text-5xl lg:text-7xl font-bold">Made in India.</h1>
          <h2 className="text-5xl lg:text-7xl font-bold mb-16">
            Made for the World.
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-16">
            <StatItem value="130M+" label="Users Globally" />
            <StatItem value="150+" label="Countries Served" />
            <StatItem value="18K+" label="Employees Worldwide" />
            <StatItem value="29+" label="Years in Business" />
            <StatItem value="55+" label="Products" />

            {/* The 6th grid item is empty, allowing the button to appear after */}
          </div>

          {/* Button */}
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-3 border border-gray-800 rounded-md text-lg font-semibold
                       hover:bg-gray-800 hover:text-white transition-colors
                       focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            MORE ABOUT US &gt;
          </Link>
        </div>

          <div className="w-full max-w-xl lg:max-w-2xl animate-float-slow">
            <Image
              src="/Images/homepage/india.png"
              alt="Stylized illustration representing India"
              width={720}
              height={720}
              className="w-full h-auto"
              priority
            />
          </div>
      </div>
    </main>
  );
}
