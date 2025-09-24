import React from "react";

const OfficialCertificates = () => {
  const codFeatures = [
    {
      icon: "ri-discount-percent-fill",
      title: "Road Tax Rebate",
      description: "Significant discount on registration tax for new vehicle purchases"
    },
    {
      icon: "ri-exchange-line",
      title: "Universal Acceptance",
      description: "Valid with all authorized vehicle manufacturers across India"
    },
    {
      icon: "ri-team-fill",
      title: "Transferable Document",
      description: "Can be transferred to family members or friends for their use"
    },
    {
      icon: "ri-money-dollar-circle-fill",
      title: "Additional Savings",
      description: "Substantial reduction on various state taxes and fees"
    },
  ];

  const cvsImportance = [
    {
      icon: "ri-file-shield-fill",
      title: "Legal Proof of Disposal",
      description: "Official documentation confirming permanent vehicle removal from circulation"
    },
    {
      icon: "ri-shield-check-fill",
      title: "Liability Protection",
      description: "Complete safeguard against future misuse of your vehicle registration"
    },
    {
      icon: "ri-database-2-fill",
      title: "RTO Deregistration",
      description: "Mandatory documentation for official removal from government records"
    },
    {
      icon: "ri-leaf-fill",
      title: "Environmental Compliance",
      description: "Verification of responsible and eco-friendly disposal practices"
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E0A75E] mb-2">
            Essential Certificates
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           Secure legal safety & financial benefits with authorized scrapping.
          </p>
        </div>

        {/* Certificates Overview */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-stretch">
          {/* Certificate of Deposit */}
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-br from-[#E0A75E]/5 to-[#E0A75E]/10 rounded-3xl p-8 border border-[#E0A75E]/20 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#E0A75E] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-text-fill text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Certificate of Deposit</h3>
                  <p className="text-[#B8873F] font-medium">(CoD)</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                A valuable financial instrument providing verified discounts and incentives when purchasing new vehicles from authorized dealers nationwide.
              </p>

              <div className="space-y-4 flex-1">
                {codFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <i className={`${feature.icon} text-[#E0A75E]`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate of Vehicle Scrapping */}
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-br from-[#E0A75E]/5 to-[#E0A75E]/10 rounded-3xl p-8 border border-[#E0A75E]/20 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#E0A75E] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-fill text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Certificate of Vehicle Scrapping</h3>
                  <p className="text-[#B8873F] font-medium">(CVS)</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Official government documentation confirming proper vehicle disposal at authorized facilities, ensuring complete legal compliance and environmental responsibility.
              </p>

              <div className="space-y-4 flex-1">
                {cvsImportance.map((importance, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <i className={`${importance.icon} text-[#E0A75E]`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{importance.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{importance.description}</p>
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

export default OfficialCertificates;
