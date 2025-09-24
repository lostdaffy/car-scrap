import React from "react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Request Quote",
      description:
        "Submit vehicle details through our secure form or call our experts for instant valuation.",
      icon: "ri-file-list-3-line",
      highlight: "Instant Response",
    },
    {
      number: "02",
      title: "Schedule Pickup",
      description:
        "Our certified team arranges convenient pickup at your location with all necessary equipment.",
      icon: "ri-truck-line",
      highlight: "Zero Cost Pickup",
    },
    {
      number: "03",
      title: "Legal Processing",
      description:
        "Complete RTO deregistration and environmentally compliant dismantling at authorized facility.",
      icon: "ri-shield-check-line",
      highlight: "Government Certified",
    },
    {
      number: "04",
      title: "Secure Payment",
      description:
        "Immediate digital payment with official certificates for tax benefits and compliance.",
      icon: "ri-secure-payment-line",
      highlight: "Same Day Payment",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#E0A75E]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E0A75E]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0A75E] mb-6 leading-tight">
            Scrapping Process
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            India's most professional vehicle scrapping service with full
            transparency, compliance & hassle-free process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0">
            <div className="flex justify-between items-center max-w-5xl mx-auto px-20">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="flex-1 h-0.5 bg-gradient-to-r from-[#E0A75E] to-[#E0A75E]/30 mx-8"
                ></div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
            {steps.map((step, index) => (
              <div key={index} className="group relative h-full">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col h-full min-h-[380px]">
                  {/* Step Icon */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E0A75E] to-[#e59d43] rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                      <i className={`${step.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="text-center space-y-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm flex-1">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 bg-[#E0A75E]/10 px-3 py-2 rounded-full mt-auto">
                      <div className="w-2 h-2 bg-[#E0A75E] rounded-full"></div>
                      <span className="text-[#E0A75E] font-semibold text-xs uppercase tracking-wider">
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-4">
                    <div className="w-12 h-12 bg-[#E0A75E]/10 rounded-full flex items-center justify-center border-2 border-[#E0A75E]/20">
                      <i className="ri-arrow-down-line text-[#E0A75E] text-lg"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-gray-600">
            <i className="ri-government-line text-xl"></i>
            <span className="font-medium text-sm">MoRTH Approved</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-600">
            <i className="ri-leaf-line text-xl"></i>
            <span className="font-medium text-sm">Eco-Friendly Process</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-600">
            <i className="ri-secure-payment-line text-xl"></i>
            <span className="font-medium text-sm">Secure Transactions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
