import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose <span className="text-[#E0A75E]">GSPL</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            Understanding the difference between Authorized RVSFs like GSPL and Third-Party Vehicle Scrapping Options
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* The Old Way Card */}
          <div className="bg-red-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative border border-red-100">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">The Old Way</h3>
              <div className="flex items-center gap-2 bg-red-100 px-3 sm:px-4 py-2 rounded-full self-start">
                <i className="ri-close-line text-red-600"></i>
                <span className="text-red-600 font-semibold text-xs sm:text-sm">Not Recommended</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6 sm:mb-8 font-medium text-sm sm:text-base">
              Indirect Route (via third-party agents)
            </p>

            {/* Visual Flow */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-8 sm:w-12 sm:h-8 bg-gray-700 rounded-md flex items-center justify-center">
                    <i className="ri-car-line text-white text-base sm:text-lg"></i>
                  </div>
                </div>
                <div className="flex-1 sm:mx-4">
                  <div className="h-2 bg-red-300 rounded-full relative">
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <i className="ri-alert-line text-white text-xs"></i>
                      </div>
                    </div>
                    <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <i className="ri-alert-line text-white text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span className="text-xs">Dealer/Third-party</span>
                    <span className="text-xs">Agents</span>
                  </div>
                </div>
                <div className="bg-gray-200 px-2 sm:px-3 py-2 rounded-md">
                  <span className="text-xs text-gray-600">Unknown Yard</span>
                </div>
              </div>
            </div>

            {/* Disadvantages List */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-close-line text-red-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Your vehicle passes through multiple hands (dealer/third party website → agent → unknown yard)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-close-line text-red-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Not all platforms that collect old vehicles are government-licensed to issue CoD or CVS
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-close-line text-red-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Reduced value due to multiple middlemen taking their cut
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-close-line text-red-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Risk of improper disposal and environmental damage
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-close-line text-red-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Delays in processing and documentation
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-red-100 rounded-lg border-l-4 border-red-400">
              <p className="text-red-700 text-xs sm:text-sm font-medium">
                +Unlicensed aggregators and dealer-based bidding routes may not provide legally valid scrapping certificates required for de-registration and tax benefits.
              </p>
            </div>
          </div>

          {/* The Smart Way Card */}
          <div className="bg-green-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative border border-green-100">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">The Smart Way</h3>
              <div className="flex items-center gap-2 bg-green-100 px-3 sm:px-4 py-2 rounded-full self-start">
                <i className="ri-check-line text-green-600"></i>
                <span className="text-green-600 font-semibold text-xs sm:text-sm">Recommended</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6 sm:mb-8 font-medium text-sm sm:text-base">
              Direct Legal Scrapping (with GSPL)
            </p>

            {/* Visual Flow */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-8 sm:w-12 sm:h-8 bg-gray-700 rounded-md flex items-center justify-center">
                    <i className="ri-car-line text-white text-base sm:text-lg"></i>
                  </div>
                </div>
                <div className="flex-1 sm:mx-4">
                  <div className="h-2 bg-green-300 rounded-full relative flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <div className="bg-green-200 inline-block px-2 sm:px-3 py-2 rounded-lg">
                      <div className="text-xs font-semibold text-green-700">GSPL</div>
                      <div className="text-xs text-green-600">Authorized RVSF</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                  <div className="bg-white border-2 border-green-200 p-2 sm:p-3 rounded-lg">
                    <div className="text-xs font-semibold">Certificate</div>
                    <div className="flex flex-col gap-1 mt-1">
                      <div className="w-3 sm:w-4 h-0.5 bg-gray-300"></div>
                      <div className="w-3 sm:w-4 h-0.5 bg-gray-300"></div>
                      <div className="w-3 sm:w-4 h-0.5 bg-gray-300"></div>
                    </div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center mt-2 ml-auto">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages List */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Direct path from customer to authorized RVSF (GSPL)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Legally valid Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Maximum value with no middlemen taking cuts
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Environmentally responsible disposal with 90% recycling rate
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 mt-1 flex-shrink-0"></i>
                <p className="text-gray-700 text-sm">
                  Quick processing and immediate certificate issuance
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-100 rounded-lg border-l-4 border-green-400">
              <p className="text-green-700 text-xs sm:text-sm font-medium">
                +Avoid unnecessary middlemen. Go direct for maximum value and legal safety with GSPL, a government-authorized RVSF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
