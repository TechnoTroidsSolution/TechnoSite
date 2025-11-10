import { Landmark, Link } from "lucide-react"; // Used as a placeholder for the temple illustration

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div>
    <span className="block text-4xl lg:text-5xl font-bold">{value}</span>
    <span className="block text-lg opacity-90">{label}</span>
  </div>
);

export default function CompanyStatsSection() {
  return (
    <main className="relative min-h-screen w-full bg-white text-gray-800 overflow-hidden">
      {/* Background Illustration (Desktop only)
        This 'Landmark' icon is a placeholder. 
        For the best result, replace it with your own SVG illustration.
      */}
      <div className="absolute bottom-0 right-0 hidden lg:block opacity-10 pointer-events-none">
        <Landmark size={600} strokeWidth={0.5} />
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-8 py-20 lg:py-32 flex flex-col justify-center min-h-screen">
        {/* Constrain the content width */}
        <div className="max-w-2xl">
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
          <a
            href="#"
            className="inline-block px-8 py-3 border border-gray-800 rounded-md text-lg font-semibold
                       hover:bg-gray-800 hover:text-white transition-colors
                       focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            MORE ABOUT US &gt;
          </a>
        </div>
      </div>
    </main>
  );
}
