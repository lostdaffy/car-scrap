import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const HowItWorks = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="How It Works" />
      
      {/* Section 1: Get Started & Request Quote */}
      <section className="min-h-screen bg-gray-900/95 backdrop-blur-md py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-[#da3742] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">1</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Get Started & Request Quote
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Begin your vehicle recycling journey with our simple quote
                request process. We make it easy to get started and provide
                transparent pricing.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-phone-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Call or Contact Us
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Reach out via phone, WhatsApp, or our online form to
                      initiate the process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-questionnaire-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Vehicle Information
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Provide basic details about your vehicle - make, model,
                      year, and condition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-money-rupee-circle-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Instant Quote
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Receive a competitive quote within minutes based on
                      current market rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="/images/worker.jpg"
                alt="Quote process"
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vehicle Pickup & Evaluation */}
      <section
        className="min-h-screen relative flex items-center"
        style={{
          backgroundImage: `url('/images/bg-1.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
              <img
                src="/images/about.jpg"
                alt="Vehicle pickup process"
                className="w-full shadow-2xl "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl"></div>
            </div>
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-[#da3742] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">2</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Vehicle Pickup & Evaluation
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Our professional team will come to your location for vehicle
                pickup and conduct a thorough evaluation to ensure fair pricing.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-truck-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Free Towing Service
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Our equipped towing vehicles will pick up your car from
                      anywhere within the city limits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-search-eye-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Professional Inspection
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Certified experts evaluate your vehicle's condition,
                      parts, and scrap value accurately.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-shield-check-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Safe & Secure
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Fully insured transportation with proper safety measures
                      throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Payment & Documentation */}
      <section className="min-h-screen bg-gray-900/95 backdrop-blur-md py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-[#da3742] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">3</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Payment & Documentation
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Complete the process with instant payment and proper
                documentation. We handle all legal requirements for vehicle
                disposal.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-file-text-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Complete Paperwork
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      We handle all documentation including NOC, transfer
                      papers, and disposal certificates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-government-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Legal Compliance
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Ensure complete legal compliance with government
                      regulations for vehicle scrapping.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <i className="ri-award-line text-xl sm:text-2xl text-[#da3742] mt-1 flex-shrink-0"></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Certificate of Disposal
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Receive official certificate confirming environmentally
                      responsible vehicle disposal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="/images/invoice.jpg"
                alt="Payment and documentation process"
                className="w-full shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
