import React from "react";
import {
  Car,
  Recycle,
  Factory,
  Phone,
  CheckCircle,
  Truck,
  Users,
  Clock,
  Shield,
  Banknote,
  Award,
  Scale,
} from "lucide-react";
import HeroSection from "../components/HeroSection";

const OurServices = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="How It Works" />

      {/* Service 1: Individual Car Scrapping */}
      <section className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 leading-tight">
                      Individual Car
                      <span className="text-[#da3742] block"> Scrapping</span>
                    </h2>
                  </div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
                  Perfect for individual car owners looking to dispose of their
                  old, damaged, or non-running vehicles while getting the best
                  cash value.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Any Condition Accepted",
                    desc: "Running, non-running, accident-damaged, or flood-damaged vehicles",
                  },
                  {
                    icon: <Banknote className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Instant Payment",
                    desc: "Get cash immediately upon vehicle collection with transparent pricing",
                  },
                  {
                    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Complete Documentation",
                    desc: "All legal formalities handled including RC transfer and certificates",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-[#da3742] flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src="/images/about.jpg"
                alt="Individual car scrapping"
                className="w-full object-cover shadow-2xl rounded-lg sm:rounded-xl lg:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Commercial Vehicle Recycling */}
      <section 
        className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md" 
        style={{
          backgroundImage: `url('/images/about.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
              <img
                src="/images/about.jpg"
                alt="Commercial vehicle recycling"
                className="w-full object-cover shadow-2xl rounded-lg sm:rounded-xl lg:rounded-2xl"
              />
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 leading-tight">
                      Commercial Vehicle
                      <span className="text-[#da3742] block"> Recycling</span>
                    </h2>
                  </div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
                  Specialized services for businesses, fleet operators, and
                  commercial vehicle owners requiring professional recycling
                  solutions.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Factory className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "All Commercial Types",
                    desc: "Trucks, buses, tempos, tractors, construction vehicles, and heavy machinery",
                  },
                  {
                    icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Scheduled Services",
                    desc: "Pre-planned collection schedules to minimize business downtime",
                  },
                  {
                    icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Compliance Reporting",
                    desc: "Detailed environmental compliance reports for corporate sustainability goals",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-[#da3742] flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Bulk Recycling Solutions */}
      <section className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 leading-tight">
                      Bulk Recycling
                      <span className="text-[#da3742] block">Solutions</span>
                    </h2>
                  </div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
                  Large-scale recycling operations for dealerships, insurance
                  companies, government agencies, and corporate fleet managers.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Factory className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Industrial Scale Processing",
                    desc: "Handle 100+ vehicles monthly with dedicated processing lines and equipment",
                  },
                  {
                    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Dedicated Account Team",
                    desc: "Assigned relationship managers and technical specialists for seamless operations",
                  },
                  {
                    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                    title: "Volume-Based Pricing",
                    desc: "Special competitive rates and profit-sharing models for high-volume clients",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-[#da3742] flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src="/images/about.jpg"
                alt="Bulk recycling solutions"
                className="w-full object-cover shadow-2xl rounded-lg sm:rounded-xl lg:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
