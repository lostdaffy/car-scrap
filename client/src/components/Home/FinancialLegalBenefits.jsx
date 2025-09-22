import React from "react";

const FinancialLegalBenefits = () => {
  const monetaryBenefits = [
    {
      title: "Get upto 4% of vehicle value*",
      description: "for your vehicle's scrap value",
    },
    {
      title: "Certificate of Deposit (CoD)",
      description: "for discounts on new vehicle purchases",
    },
    {
      title: "3-4% discount",
      description: "through Road tax rebate",
    },
    {
      title: "Up to 25% off",
      description: "on Road tax rebates",
    },
  ];

  const legalProtectionBenefits = [
    {
      title: "Complete liability discharge",
      description: "once your vehicle is handed over",
    },
    {
      title: "Protection from illegal scrapping penalties",
      description: "which can reach ₹50,000",
    },
    {
      title: "Avoid future legal complications",
      description: "if your vehicle is misused",
    },
    {
      title: "Official Certificate",
      description: "of Vehicle Scrapping and deregistration from RTO records",
    },
    {
      title: "Digitally regulated process",
      description: "via Vahan and government portals",
    },
  ];

  const environmentalBenefits = [
    {
      title: "Eco-friendly disposal",
      description: "of hazardous materials and fluids",
    },
    {
      title: "Recycling of up to 90%",
      description: "of your vehicle's materials",
    },
    {
      title: "Reduction in carbon footprint",
      description: "by removing polluting vehicles",
    },
    {
      title: "Contribution to circular economy",
      description: "through material recovery",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Financial & Legal Benefits
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            Scrapping your vehicle with a Government-Authorized Facility offers
            significant advantages
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Monetary Benefits */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E0A75E20" }}
              >
                <i
                  className="ri-money-dollar-circle-line text-xl sm:text-2xl"
                  style={{ color: "#E0A75E" }}
                ></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Monetary Benefits
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {monetaryBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <i className="ri-check-line text-[#E0A75E] text-base sm:text-lg font-bold"></i>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-[17px]">
                      {benefit.title}{" "}
                      <span className="font-normal text-gray-700">
                        {benefit.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Note */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg border-l-4 border-[#E0A75E] bg-[#E0A75E10]">
              <div className="flex items-start gap-3">
                <i
                  className="ri-information-line mt-0.5 flex-shrink-0"
                  style={{ color: "#E0A75E" }}
                ></i>
                <div>
                  <p
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "#B8873F" }}
                  >
                    You can trade your CoD with any vehicle manufacturer for
                    additional discounts!
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    *Scrap value is based on condition, weight & metal rates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Protection */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#E0A75E20] flex-shrink-0">
                <i className="ri-shield-check-line text-xl sm:text-2xl text-[#E0A75E]"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Legal Protection
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {legalProtectionBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <i className="ri-check-line text-[#E0A75E] text-base sm:text-lg font-bold"></i>
                  </div>
                  <div>
                    <p className="font-bold text-gray-950 text-sm sm:text-[17px]">
                      {benefit.title}{" "}
                      <span className="font-normal text-gray-700">
                        {benefit.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning Note */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <div className="flex items-start gap-3">
                <i className="ri-alert-line text-red-500 mt-0.5 flex-shrink-0"></i>
                <p className="text-red-700 text-xs sm:text-sm font-medium">
                  <span className="font-bold">Beware:</span> Illegal scrappers
                  and aggregators don't have proper licenses to scrap vehicles!
                </p>
              </div>
            </div>
          </div>

          {/* Environmental Benefits */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 md:col-span-2 xl:col-span-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E0A75E20" }}
              >
                <i
                  className="ri-leaf-line text-xl sm:text-2xl"
                  style={{ color: "#E0A75E" }}
                ></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Environmental Benefits
              </h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {environmentalBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <i className="ri-check-line text-[#E0A75E] text-base sm:text-lg font-bold"></i>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-[17px]">
                      {benefit.title}{" "}
                      <span className="font-normal text-gray-700">
                        {benefit.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Environmental Note */}
            <div
              className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg border-l-4"
              style={{ backgroundColor: "#E0A75E10", borderColor: "#E0A75E" }}
            >
              <div className="flex items-start gap-3">
                <i
                  className="ri-recycle-line mt-0.5 flex-shrink-0"
                  style={{ color: "#E0A75E" }}
                ></i>
                <p className="text-xs sm:text-sm font-medium" style={{ color: "#B8873F" }}>
                  Our facility follows all environmental guidelines for
                  sustainable scrapping!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialLegalBenefits;
