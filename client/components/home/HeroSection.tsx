import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unified <span className="text-blue-600">War Crisis</span>{" "}
                Platform
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connecting citizens, NGOs, and volunteers in times of crisis.
                Fast, reliable communication tools when it matters most.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6a393caa557c44fb8803dbfe8a08ae5d%2F01c6c08966bc44148df87743f24d3c82?format=webp&width=800"
                  alt="Sahaaya Logo"
                  className="h-5 w-5"
                />
                <span className="text-sm text-gray-600">Secure & Verified</span>
              </div>
              <div className="text-sm text-gray-600">
                Trusted by <span className="font-semibold">1000+</span>{" "}
                organizations
              </div>
            </div>
          </div>

          {/* Right Content - Illustration/Image Placeholder */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F6a393caa557c44fb8803dbfe8a08ae5d%2Fe58b720072c34de0a4cb92e71d67aa04?format=webp&width=800"
                alt="Crisis Response Scene"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F6a393caa557c44fb8803dbfe8a08ae5d%2F01c6c08966bc44148df87743f24d3c82?format=webp&width=800"
                      alt="Sahaaya Logo"
                      className="h-12 w-12"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                    Crisis Response
                  </h3>
                  <p className="text-white/90 drop-shadow-md">
                    Real-time coordination platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
