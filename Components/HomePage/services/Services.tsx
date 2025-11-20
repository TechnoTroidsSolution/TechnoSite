import Link from "next/link";

export default function Services() {
  return (
    <div>
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              From web development to AI solutions, we provide comprehensive
              technology services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <svg
                  className="w-8 h-8 text-primary group-hover:text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Web Development
              </h3>
              <p className="text-foreground/80">
                Modern, responsive websites and web applications
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                <svg
                  className="w-8 h-8 text-secondary group-hover:text-secondary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Mobile Apps
              </h3>
              <p className="text-foreground/80">
                Native and cross-platform mobile applications
              </p>
            </div>

            {/* Cloud Solutions */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <svg
                  className="w-8 h-8 text-primary group-hover:text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Cloud Solutions
              </h3>
              <p className="text-foreground/80">
                Scalable cloud infrastructure and migration
              </p>
            </div>

            {/* AI & ML */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <svg
                  className="w-8 h-8 text-accent group-hover:text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                AI & ML
              </h3>
              <p className="text-foreground/80">
                Artificial intelligence and machine learning solutions
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
