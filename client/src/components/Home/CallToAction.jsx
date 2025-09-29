import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#E0A75E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Scrap Your Vehicle Legally?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Get the <span className="font-semibold text-white">best value</span>, <span className="font-semibold text-white">legal protection</span>, and <span className="font-semibold text-white">environmental peace of mind</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/" className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 text-[#E0A75E] font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg">
                <i className="ri-file-text-line text-lg sm:text-xl"></i>
                Get Free Quote
              </Link>
              
              <Link to="tel:+919068665363" className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#E0A75E] transition-all duration-300 text-sm sm:text-base">
                <i className="ri-phone-line text-lg sm:text-xl"></i>
                <span className="hidden sm:inline">Call: </span>+91 90686 65363
              </Link>
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
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#E0A75E]/10 text-[#E0A75E] rounded-full text-xs sm:text-sm font-semibold border border-[#E0A75E]/20">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
