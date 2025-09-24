import React from "react";

const FinancialLegalBenefits = () => {
  const monetaryIncentives = [
    {
      title: "Vehicle Scrap Value",
      description:
        "Receive compensation based on your vehicle's weight, material composition, and current market rates",
    },
    {
      title: "Certificate of Deposit",
      description:
        "Government-issued voucher providing discounts on new vehicle purchases from authorized dealers",
    },
    {
      title: "Road Tax Exemption",
      description:
        "Significant rebate on registration tax when purchasing replacement vehicles",
    },
    {
      title: "Additional Incentives",
      description:
        "Various state-level tax benefits and fee reductions through government programs",
    },
  ];

  const complianceBenefits = [
    {
      icon: "ri-shield-check-fill",
      title: "Complete Legal Discharge",
      description:
        "Official transfer of ownership liability upon authorized facility handover",
    },
    {
      icon: "ri-alert-fill",
      title: "Penalty Protection",
      description:
        "Safeguard against substantial illegal scrapping fines and legal consequences",
    },
    {
      icon: "ri-file-shield-fill",
      title: "Future Liability Shield",
      description:
        "Protection from legal consequences if vehicle is misused after disposal",
    },
    {
      icon: "ri-certificate-fill",
      title: "Official Documentation",
      description:
        "Government-issued Certificate of Destruction and RTO deregistration",
    },
    {
      icon: "ri-database-fill",
      title: "Digital Compliance",
      description:
        "Automated processing through Vahan portal and government databases",
    },
  ];

  const sustainabilityImpact = [
    {
      icon: "ri-recycle-fill",
      title: "Maximum Material Recovery",
      description:
        "Steel, aluminum, and valuable metals recycled for manufacturing new products",
    },
    {
      icon: "ri-drop-fill",
      title: "Hazardous Waste Management",
      description:
        "Safe disposal of batteries, oils, fluids, and toxic components",
    },
    {
      icon: "ri-plant-fill",
      title: "Carbon Footprint Reduction",
      description:
        "Significant environmental impact reduction through proper recycling processes",
    },
    {
      icon: "ri-earth-fill",
      title: "Zero Landfill Impact",
      description:
        "Complete material recovery prevents environmental contamination",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E0A75E] mb-6">
            Complete Value Recovery
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-normal">
            Get maximum value with legal compliance & eco-friendly scrapping.
          </p>
        </div>

        {/* Financial Incentives */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#E0A75E]/20 rounded-xl flex items-center justify-center">
              <i className="ri-money-dollar-circle-fill text-2xl text-[#E0A75E]"></i>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Financial Incentives
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {monetaryIncentives.map((incentive, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E0A75E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-double-fill text-[#E0A75E]"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {incentive.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Compliance */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <i className="ri-shield-check-fill text-2xl text-red-600"></i>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Legal Compliance & Protection
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${benefit.icon} text-red-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <i className="ri-leaf-fill text-2xl text-green-600"></i>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Environmental Impact
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sustainabilityImpact.map((impact, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${impact.icon} text-green-600`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {impact.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialLegalBenefits;
