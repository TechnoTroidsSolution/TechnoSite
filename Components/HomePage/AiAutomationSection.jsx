import Image from "next/image";

export default function AiAutomationSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1F] py-20">
      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — TEXT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            AI-Powered Automation
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Built for Modern SaaS Systems
            </span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Integrate intelligent workflows into your product with seamless AI
            and automation capabilities. Reduce operational load, deliver faster
            responses, and enhance product intelligence effortlessly.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Automated decision workflows powered by AI
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              Self-improving systems using real-time data
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Scalable architecture for enterprise SaaS platforms
            </li>
          </ul>

          <div className="pt-4">
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/PHOTO-2025-11-15-00-14-42.jpg"
            alt="AI Automation Graphic"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
