import React from "react";

const OfficialCertificates = () => {
  const codBenefits = [
    {
      title: "Provides 3-4% discount",
      description: "through Road tax rebate",
    },
    {
      title: "Tradable document",
      description: "that can be used with any vehicle manufacturer",
    },
    {
      title: "Can be transferred",
      description: "to family members or friends",
    },
    {
      title: "Up to 25% off",
      description: "on Road tax rebates",
    },
  ];

  const cvsBenefits = [
    {
      title: "Legal proof",
      description: "that your vehicle is permanently removed from use",
    },
    {
      title: "Protects you from future liability",
      description: "if your vehicle number is misused",
    },
    {
      title: "Required for official deregistration",
      description: "from RTO records",
    },
    {
      title: "Confirms environmentally responsible disposal",
      description: "",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Official Certificates You'll Receive
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            Legal Documentation that protects you and provides benefits
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Certificate of Deposit (CoD) */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E0A75E" }}
              >
                <i className="ri-file-text-line text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Certificate of Deposit (CoD)
              </h3>
            </div>

            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">
              The Certificate of Deposit (CoD) is a valuable financial document
              that provides discounts when purchasing a new vehicle.
            </p>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                Benefits of CoD:
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {codBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: "#E0A75E" }}
                    >
                      <i className="ri-check-line text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base sm:text-lg">
                        {benefit.title}{" "}
                        <span className="text-gray-700 font-normal">
                          {benefit.description}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CoD Tip */}
            <div className="p-3 sm:p-4 rounded-lg bg-[#E0A75E10] border-l-4 border-[#E0A75E]">
              <div className="flex items-start gap-3">
                <i className="ri-lightbulb-line mt-0.5 text-[#E0A75E] flex-shrink-0"></i>
                <p className="text-sm sm:text-base text-[#B8873F]">
                  <span className="font-semibold">Tip:</span> Some manufacturers
                  offer additional discounts when you use your CoD with them!
                </p>
              </div>
            </div>
          </div>

          {/* Certificate of Vehicle Scrapping (CVS) */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E0A75E" }}
              >
                <i className="ri-shield-check-line text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Certificate of Vehicle Scrapping (CVS)
              </h3>
            </div>

            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">
              The Certificate of Vehicle Scrapping (CVS) is an official document
              that proves your vehicle has been properly scrapped at a
              government-authorized facility.
            </p>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                Why CVS is Important:
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {cvsBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: "#E0A75E" }}
                    >
                      <i className="ri-check-line text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base sm:text-lg">
                        {benefit.title} <span className="text-gray-700 font-normal">{benefit.description}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CVS Warning */}
            <div className="p-3 sm:p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <div className="flex items-start gap-3">
                <i className="ri-alert-line text-red-500 mt-0.5 flex-shrink-0"></i>
                <p className="text-red-700 text-sm sm:text-base">
                  <span className="font-bold">Warning:</span> Illegal scrappers
                  cannot provide this certificate, leaving you legally
                  vulnerable!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA or Additional Info */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-full"
            style={{ backgroundColor: "#E0A75E20" }}
          >
            <i
              className="ri-award-line text-lg sm:text-xl flex-shrink-0"
              style={{ color: "#E0A75E" }}
            ></i>
            <span className="font-semibold text-sm sm:text-base text-center" style={{ color: "#B8873F" }}>
              Both certificates are digitally signed and verified through
              government portals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialCertificates;
