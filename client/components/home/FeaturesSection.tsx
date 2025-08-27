import { AlertCircle, Building2, Briefcase, FileText } from "lucide-react";

const features = [
  {
    icon: AlertCircle,
    title: "Emergency Check-in",
    description:
      "Mark yourself safe or request help during crisis situations. Quick status updates for family and authorities.",
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    icon: Building2,
    title: "NGO Coordination",
    description:
      "Aid requests and volunteer support coordination. Connect relief organizations with communities in need.",
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    icon: Briefcase,
    title: "Job & Skill-Match",
    description:
      "Connect refugees and displaced persons with job opportunities and skill-based volunteering.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: FileText,
    title: "Citizen Reporting",
    description:
      "Report and verify local incidents. Real-time information sharing for better crisis response.",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Essential Crisis Response Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive platform designed to support communities,
            organizations, and individuals during emergency situations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg border ${feature.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
