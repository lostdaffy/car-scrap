import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/logo.png" className="w-12 sm:w-16" alt="GSPL Logo" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">GSPL</h3>
                  <p className="text-sm text-gray-400">Government Authorized RVSF</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-[#E0A75E]">
                GARHWAL SCRAP PRIVATE LIMITED
              </h4>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-[#E0A75E] mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="text-sm sm:text-base leading-relaxed">
                      DEVBHOOMI INDUSTRIAL AREA<br />
                      KHASRA NO. 216 VILL.KHATAKHEDI,<br />
                      BHAGWANPUR, HARIDWAR 247668<br />
                      INDIA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="ri-phone-line text-[#E0A75E]"></i>
                  <span className="text-sm sm:text-base">72-8080-1010</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-[#E0A75E]"></i>
                  <span className="text-sm sm:text-base">info@gspl.co.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#E0A75E] transition-colors text-sm sm:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-[#E0A75E] transition-colors text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/our-services" className="text-gray-300 hover:text-[#E0A75E] transition-colors text-sm sm:text-base">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-[#E0A75E] transition-colors text-sm sm:text-base">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services & Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services & Legal</h4>
              <ul className="space-y-3">
                <li className="text-gray-300 text-sm sm:text-base">Vehicle Scrapping</li>
                <li className="text-gray-300 text-sm sm:text-base">Certificate of Deposit (CoD)</li>
                <li className="text-gray-300 text-sm sm:text-base">RTO Deregistration</li>
                <li className="text-gray-300 text-sm sm:text-base">Free Vehicle Pickup</li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-[#E0A75E] transition-colors text-sm sm:text-base">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-gray-300 hover:text-[#E0A75E] transition-colors text-sm sm:text-base">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Government Certification Badge */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-12 h-12 bg-[#E0A75E] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-government-line text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Government Authorized RVSF</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Registered Vehicle Scrapping Facility</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Link to="#" className="w-10 h-10 bg-gray-800 hover:bg-[#E0A75E] rounded-full flex items-center justify-center transition-colors">
                  <i className="ri-facebook-fill text-white"></i>
                </Link>
                <Link to="#" className="w-10 h-10 bg-gray-800 hover:bg-[#E0A75E] rounded-full flex items-center justify-center transition-colors">
                  <i className="ri-twitter-x-line text-white"></i>
                </Link>
                <Link to="#" className="w-10 h-10 bg-gray-800 hover:bg-[#E0A75E] rounded-full flex items-center justify-center transition-colors">
                  <i className="ri-linkedin-fill text-white"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Garhwal Scrap Private Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Developed by <span className="text-[#E0A75E]">WebEscalation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
