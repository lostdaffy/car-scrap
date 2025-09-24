import React from "react";
import HeroSection from "../components/HeroSection";
import FinancialLegalBenefits from "../components/Home/FinancialLegalBenefits";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import CallToAction from "../components/Home/CallToAction";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Vehicles Scrapped", icon: "ri-car-line" },
    { number: "15+", label: "Years Experience", icon: "ri-time-line" },
    { number: "50+", label: "Cities Covered", icon: "ri-map-pin-line" },
    { number: "99%", label: "Customer Satisfaction", icon: "ri-star-line" },
  ];

  const missionVisionValues = [
    {
      title: "Our Mission",
      icon: "ri-target-line",
      content:
        "To provide India's most professional, transparent, and environmentally responsible vehicle scrapping services while maximizing value for our customers and contributing to a sustainable future.",
    },
    {
      title: "Our Vision",
      icon: "ri-eye-line",
      content:
        "To become India's most trusted and technologically advanced vehicle scrapping network, setting the gold standard for legal compliance, environmental protection, and customer satisfaction.",
    },
    {
      title: "Our Values",
      icon: "ri-heart-line",
      content:
        "Integrity, transparency, environmental responsibility, customer-centricity, innovation, and legal compliance form the foundation of everything we do at GSPL.",
    },
  ];

  const coreValues = [
    {
      title: "Transparency",
      description:
        "Complete openness in our processes, pricing, and documentation. No hidden charges or unclear procedures.",
      icon: "ri-eye-line",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Committed to eco-friendly disposal methods with 90% material recovery and zero environmental damage.",
      icon: "ri-leaf-line",
    },
    {
      title: "Legal Compliance",
      description:
        "100% adherence to government regulations with proper RTO deregistration and certified documentation.",
      icon: "ri-shield-check-line",
    },
    {
      title: "Customer First",
      description:
        "Prioritizing customer convenience with doorstep pickup, instant payment, and 24/7 support.",
      icon: "ri-customer-service-line",
    },
    {
      title: "Innovation",
      description:
        "Leveraging technology for efficient processes, digital tracking, and seamless customer experience.",
      icon: "ri-lightbulb-line",
    },
    {
      title: "Integrity",
      description:
        "Honest dealings, fair pricing, and ethical business practices in all our interactions.",
      icon: "ri-hand-heart-line",
    },
  ];

  return (
    <>
      <HeroSection title="About Us" />

      {/* Company Stats */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E0A75E] mb-3 sm:mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Our track record speaks for itself - delivering excellence in
              vehicle scrapping services across India
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className={`${stat.icon} text-lg sm:text-2xl text-[#E0A75E]`}></i>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#E0A75E]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                <i className="ri-history-line text-[#E0A75E] text-sm sm:text-base"></i>
                <span className="text-[#E0A75E] font-semibold text-xs sm:text-sm">
                  Our Journey
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg font-medium text-gray-800">
                  Founded in 2009, GSPL began with a simple vision: to transform
                  India's vehicle scrapping industry through professional,
                  legal, and environmentally responsible practices.
                </p>
                <p className="text-sm sm:text-base">
                  What started as a small facility in Delhi NCR has grown into
                  India's most trusted vehicle scrapping network, serving over
                  50 cities and processing more than 10,000 vehicles annually.
                </p>
                <p className="text-sm sm:text-base">
                  Our journey from a local scrap dealer to a
                  government-authorized RVSF reflects our commitment to
                  innovation, compliance, and customer satisfaction.
                </p>
                <p className="text-sm sm:text-base">
                  Today, GSPL stands as a testament to what's possible when you
                  combine industry expertise with regulatory compliance and
                  environmental consciousness.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about.jpg"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  alt="GSPL Facility"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Mission, Vision & Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Our guiding principles that drive every decision and action we
              take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {missionVisionValues.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${item.icon} text-lg sm:text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              The fundamental principles that guide our operations and define
              our character
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#E0A75E]/20"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E0A75E] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className={`${value.icon} text-lg sm:text-xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#E0A75E] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default About;
