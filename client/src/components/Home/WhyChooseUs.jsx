import React from "react";

const WhyChooseUs = () => {
  const oldWayFeatures = [
    {
      icon: "ri-alert-line",
      text: "Multiple middlemen reduce your vehicle's value",
      impact: "Up to 30% value loss",
    },
    {
      icon: "ri-file-damage-line",
      text: "Invalid or delayed documentation",
      impact: "Legal compliance risk",
    },
    {
      icon: "ri-time-line",
      text: "Lengthy processing through agents",
      impact: "2-4 weeks delay",
    },
    {
      icon: "ri-leaf-line",
      text: "Improper disposal methods",
      impact: "Environmental damage",
    },
  ];

  const smartWayFeatures = [
    {
      icon: "ri-money-rupee-circle-line",
      text: "Direct pricing with zero middlemen",
      impact: "Maximum value guarantee",
    },
    {
      icon: "ri-shield-check-line",
      text: "Government-certified documentation",
      impact: "100% legal compliance",
    },
    {
      icon: "ri-timer-line",
      text: "24-48 hour complete process",
      impact: "Instant certificates",
    },
    {
      icon: "ri-recycle-line",
      text: "Eco-friendly recycling process",
      impact: "90% material recovery",
    },
  ];

  const stats = [
    {
      number: "₹50L+",
      label: "Total Payouts",
      icon: "ri-money-rupee-circle-fill",
    },
    { number: "10,000+", label: "Vehicles Processed", icon: "ri-car-fill" },
    { number: "100%", label: "Legal Compliance", icon: "ri-shield-check-fill" },
    { number: "24hrs", label: "Process Time", icon: "ri-time-fill" },
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0A75E] mb-2 leading-tight">
            Direct RVSF Advantage
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Know the difference between authorized scrapping and aggregators.
          </p>
        </div>

        {/* Main Comparison Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Third-Party Route */}
          <div className="relative group">
            <div className="absolute inset-0  rounded-3xl "></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <i className="ri-close-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Third-Party Route
                    </h3>
                    <p className="text-red-600 font-medium">Not Recommended</p>
                  </div>
                </div>
                <div className="bg-red-100 px-4 py-2 rounded-full">
                  <span className="text-red-700 font-bold text-sm">
                    High Risk
                  </span>
                </div>
              </div>

              {/* Process Flow */}
              <div className="bg-red-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between text-center">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <i className="ri-car-line text-white"></i>
                    </div>
                    <p className="text-xs text-gray-600">Your Vehicle</p>
                  </div>

                  <div className="flex-1 px-4">
                    <div className="h-2 bg-red-300 rounded-full relative">
                      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-red-500 rounded-full transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-red-500 rounded-full transform -translate-y-1/2"></div>
                    </div>
                    <p className="text-xs text-red-600 mt-2">Multiple Agents</p>
                  </div>

                  <div className="flex-1">
                    <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <i className="ri-question-line text-white"></i>
                    </div>
                    <p className="text-xs text-gray-600">Unknown Yard</p>
                  </div>
                </div>
              </div>

              {/* Issues List */}
              <div className="space-y-4">
                {oldWayFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-red-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className={`${feature.icon} text-white text-sm`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium text-sm mb-1">
                        {feature.text}
                      </p>
                      <p className="text-red-600 text-xs font-semibold">
                        {feature.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GSPL Direct Route */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E0A75E] rounded-xl flex items-center justify-center">
                    <i className="ri-check-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      GSPL Direct
                    </h3>
                    <p className="text-[#E0A75E] font-medium">Recommended</p>
                  </div>
                </div>
                <div className="bg-[#E0A75E]/10 px-4 py-2 rounded-full">
                  <span className="text-[#E0A75E] font-bold text-sm">
                    Certified
                  </span>
                </div>
              </div>

              {/* Process Flow */}
              <div className="bg-[#E0A75E]/10 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between text-center">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <i className="ri-car-line text-white"></i>
                    </div>
                    <p className="text-xs text-gray-600">Your Vehicle</p>
                  </div>

                  <div className="flex-1 px-4">
                    <div className="h-2 bg-[#E0A75E] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#E0A75E] rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                    </div>
                    <p className="text-xs text-[#E0A75E] mt-2 font-medium">
                      Direct Route
                    </p>
                  </div>

                  <div className="flex-1">
                    <div className="w-12 h-12 bg-[#E0A75E] rounded-xl flex items-center justify-center mx-auto mb-2">
                      <i className="ri-shield-check-line text-white"></i>
                    </div>
                    <p className="text-xs text-gray-600">GSPL RVSF</p>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {smartWayFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-[#E0A75E] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className={`${feature.icon} text-white text-sm`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium text-sm mb-1">
                        {feature.text}
                      </p>
                      <p className="text-[#E0A75E] text-xs font-semibold">
                        {feature.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
