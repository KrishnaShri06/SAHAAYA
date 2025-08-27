import { Users, Globe, Clock } from "lucide-react";

// Custom component for Sahaaya logo
const SahaayaIcon = ({ className }: { className?: string }) => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets%2F6a393caa557c44fb8803dbfe8a08ae5d%2F01c6c08966bc44148df87743f24d3c82?format=webp&width=800"
    alt="Sahaaya Logo"
    className={className}
  />
);

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "Organizations Connected",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries Served",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Emergency Response",
  },
  {
    icon: SahaayaIcon,
    number: "99.9%",
    label: "Uptime Guarantee",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why This Platform?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We aim to support citizens and NGOs during crises with fast,
                reliable, and simple communication tools. Our platform bridges
                the gap between those who need help and those who can provide
                it, ensuring no one is left behind during critical moments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built with security, scalability, and simplicity in mind, our
                platform enables real-time coordination between emergency
                responders, relief organizations, and affected communities.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  Real-time crisis communication and coordination
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  Connecting communities with relief organizations
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  Supporting displaced individuals with opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
