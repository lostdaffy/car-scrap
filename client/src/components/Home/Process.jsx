import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Request a Quote",
      description: "Call us or fill out our form with your vehicle details. We'll provide an instant estimate based on your vehicle's make, model, and condition.",
      icon: "ri-file-list-3-line"
    },
    {
      number: "02", 
      title: "Free Vehicle Pickup",
      description: "We'll schedule a convenient time to collect your vehicle from your location at no extra cost. Our team handles all the logistics, even for non-running vehicles.",
      icon: "ri-truck-line"
    },
    {
      number: "03",
      title: "Documentation & Scrapping", 
      description: "We handle all paperwork including RTO deregistration. Your vehicle is scrapped following environmentally friendly processes at our government-certified facility.",
      note: "All processes digitally tracked via Vahan portal",
      icon: "ri-file-text-line"
    },
    {
      number: "04",
      title: "Payment & Certificates",
      description: "Receive immediate payment for your vehicle along with official Certificate of Vehicle Scrapping (CVS) and Certificate of Deposit (CoD) for additional benefits.",
      note: "Only authorized RVSFs can legally issue these certificates.",
      icon: "ri-money-dollar-circle-line"
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Simple 4-Step Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We handle everything from pickup to paperwork with complete transparency and professionalism
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`group relative p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'
                }`}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-base sm:text-lg">{step.number}</span>
                </div>

                {/* Remix Icon */}
                <div className="text-[#E0A75E] mb-4 sm:mb-6 ml-4 sm:ml-6">
                  <i className={`${step.icon} text-3xl sm:text-4xl`}></i>
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#E0A75E] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {step.description}
                  </p>

                  {/* Special Notes */}
                  {step.note && (
                    <div className="bg-gradient-to-r from-[#E0A75E]/10 to-transparent p-3 sm:p-4 rounded-lg border-l-4 border-[#E0A75E]">
                      <p className="text-gray-800 font-medium text-sm">
                        <i className="ri-check-line text-[#E0A75E] mr-2"></i>
                        {step.note}
                      </p>
                    </div>
                  )}
                </div>

                {/* Connecting Arrow (Desktop only) */}
                {index < steps.length - 2 && (
                  <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-[#E0A75E]/20 rounded-full flex items-center justify-center">
                      <i className="ri-arrow-down-line text-[#E0A75E]"></i>
                    </div>
                  </div>
                )}

                {/* Mobile Connector Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#E0A75E] to-[#E0A75E]/30 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
