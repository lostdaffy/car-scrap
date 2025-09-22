import React from "react";

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Scrap Your Vehicle Legally?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Get the <span className="font-semibold">best value</span>, <span className="font-semibold">legal protection</span>, and <span className="font-semibold">environmental peace of mind</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#E0A75E] hover:bg-[#d69b52] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg">
                <i className="ri-file-text-line text-lg sm:text-xl"></i>
                Get Free Quote
              </button>
              
              <button className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#E0A75E] text-[#E0A75E] font-semibold rounded-full hover:bg-[#E0A75E] hover:text-white transition-all duration-300 text-sm sm:text-base">
                <i className="ri-phone-line text-lg sm:text-xl"></i>
                <span className="hidden sm:inline">Call: </span>72-8080-1010
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-shrink-0 lg:ml-8 w-full lg:w-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-sm w-full mx-auto border border-gray-100">
              {/* Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Why Choose Us?
                </h3>
                
                {/* Government Certified Badge */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#E0A75E]/10 text-[#B8873F] rounded-full text-xs sm:text-sm font-semibold border border-[#E0A75E]/20">
                  <i className="ri-government-line text-sm sm:text-base text-[#E0A75E]"></i>
                  Government Certified
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center text-gray-700 leading-relaxed mb-4 sm:mb-6">
                <p className="text-sm sm:text-base">
                  Don't risk illegal scrapping! <span className="font-semibold text-gray-900">Only authorized facilities</span> like ours can provide official certificates and legal protection.
                </p>
              </div>

              {/* Trust Indicator */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
                <div className="flex text-[#E0A75E]">
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                </div>
                <span className="text-gray-600 font-medium text-xs sm:text-sm">
                  Trusted by <span className="font-semibold text-[#B8873F]">1000+ customers</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
