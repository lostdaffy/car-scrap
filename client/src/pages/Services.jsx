import React from "react";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/Home/CallToAction";

const Services = () => {
  const mainServices = [
    {
      title: "Vehicle Scrapping",
      subtitle: "Complete End-of-Life Vehicle Processing",
      icon: "ri-car-line",
      description: "Professional dismantling of cars, trucks, buses, and commercial vehicles with complete legal documentation.",
      features: [
        "RTO Deregistration",
        "Certificate of Vehicle Scrapping (CVS)",
        "Certificate of Deposit (CoD)",
        "Environmental Compliance"
      ],
      benefits: "Maximum value guarantee"
    },
    {
      title: "Free Vehicle Pickup",
      subtitle: "Doorstep Collection Service", 
      icon: "ri-truck-line",
      description: "Convenient pickup from your location with specialized equipment for running and non-running vehicles.",
      features: [
        "Same Day Pickup Available",
        "Specialized Towing Equipment",
        "All Vehicle Types Accepted", 
        "No Hidden Charges"
      ],
      benefits: "Zero cost pickup service"
    },
    {
      title: "Legal Documentation",
      subtitle: "Complete Paperwork Handling",
      icon: "ri-file-text-line", 
      description: "We handle all legal formalities including RTO processes, ensuring you're fully protected from future liabilities.",
      features: [
        "RTO Deregistration Process",
        "NOC for Insurance Claims",
        "Legal Liability Transfer",
        "Digital Certificate Delivery"
      ],
      benefits: "Complete legal protection"
    },
    {
      title: "Instant Payment", 
      subtitle: "Immediate Value Realization",
      icon: "ri-money-dollar-circle-line",
      description: "Get paid immediately upon vehicle inspection with multiple payment options for your convenience.",
      features: [
        "Cash Payment Available",
        "Bank Transfer Options",
        "Digital Payment Methods",
        "Transparent Pricing"
      ],
      benefits: "Same day payment guarantee"
    }
  ];

  const specializedServices = [
    {
      title: "Commercial Vehicle Scrapping",
      description: "Specialized handling for trucks, buses, and heavy commercial vehicles",
      icon: "ri-truck-fill",
      capacity: "Up to 40 tons"
    },
    {
      title: "Fleet Scrapping Solutions", 
      description: "Bulk vehicle processing for corporate clients and fleet operators",
      icon: "ri-community-line",
      capacity: "Multiple vehicles"
    },
    {
      title: "Insurance Total Loss",
      description: "Processing of insurance declared total loss vehicles with proper documentation",
      icon: "ri-shield-cross-line", 
      capacity: "All categories"
    },
    {
      title: "Vintage Vehicle Disposal",
      description: "Careful handling of classic and vintage vehicles with heritage consideration",
      icon: "ri-medal-line",
      capacity: "Special handling"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Request Quote",
      description: "Call us or fill our online form with vehicle details",
      icon: "ri-phone-line"
    },
    {
      step: "02", 
      title: "Vehicle Inspection",
      description: "Our expert team inspects and evaluates your vehicle",
      icon: "ri-search-eye-line"
    },
    {
      step: "03",
      title: "Documentation",
      description: "Complete all legal paperwork and RTO formalities", 
      icon: "ri-file-check-line"
    },
    {
      step: "04",
      title: "Payment & Pickup",
      description: "Receive payment and we collect your vehicle",
      icon: "ri-exchange-line"
    }
  ];

  return (
    <>
      <HeroSection title="Our Services" />

      {/* Main Services Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Comprehensive Vehicle Scrapping Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              End-to-end solutions for legal, profitable, and environmentally responsible vehicle disposal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className={`${service.icon} text-lg sm:text-2xl text-white`}></i>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-[#E0A75E] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{service.subtitle}</p>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <i className="ri-check-line text-[#E0A75E] flex-shrink-0 text-sm sm:text-base"></i>
                          <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-[#E0A75E]/10 rounded-lg p-3 sm:p-4 border-l-4 border-[#E0A75E]">
                      <div className="flex items-center gap-2">
                        <i className="ri-gift-line text-[#E0A75E] text-sm sm:text-base"></i>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">{service.benefits}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Specialized Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Tailored solutions for specific vehicle types and unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#E0A75E]/20 transition-colors">
                  <i className={`${service.icon} text-lg sm:text-2xl text-[#E0A75E]`}></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                <div className="inline-flex items-center gap-2 bg-[#E0A75E]/10 px-3 py-1 rounded-full">
                  <i className="ri-settings-3-line text-[#E0A75E] text-xs"></i>
                  <span className="text-[#E0A75E] font-semibold text-xs">{service.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Service Process
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Simple, transparent, and efficient process from quote to completion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 sm:top-16 left-full w-full h-0.5 bg-[#E0A75E]/30 z-0">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#E0A75E] rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E0A75E] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <i className={`${step.icon} text-lg sm:text-2xl text-white`}></i>
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">{step.step}</span>
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#E0A75E]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Service Guarantee
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                We stand behind our services with comprehensive guarantees and commitments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-shield-check-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">100% Legal Compliance</h3>
                <p className="text-gray-600 text-xs sm:text-sm">All processes follow government regulations with proper documentation</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-money-rupee-circle-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Best Price Guarantee</h3>
                <p className="text-gray-600 text-xs sm:text-sm">We ensure you get maximum value for your vehicle with transparent pricing</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-time-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">24-48 Hour Process</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Quick turnaround with same-day pickup and immediate documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Services;
