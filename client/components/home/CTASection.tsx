import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of organizations and volunteers who are making a
              real impact in crisis response and community support worldwide.
            </p>
          </div>

          <div className="space-y-8">
            {/* Main CTA Button */}
            <div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/signup">
                  Join Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>

            {/* Supporting Actions */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8">
              <div className="flex items-center space-x-3 text-blue-100">
                <Users className="h-5 w-5" />
                <span>Join as an Organization</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-blue-400"></div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Heart className="h-5 w-5" />
                <span>Volunteer Your Skills</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-blue-500">
              <p className="text-blue-100 text-sm">
                Trusted by leading humanitarian organizations worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
