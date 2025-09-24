import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/our-services" },
    { name: "Contact Us", path: "/contact" }
  ];

  const services = [
    "Vehicle Scrapping",
    "Certificate of Deposit (CoD)",
    "Certificate of Vehicle Scrapping (CVS)",
    "RTO Deregistration",
    "Free Vehicle Pickup",
    "Legal Documentation"
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Refund Policy", path: "/refund-policy" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "ri-facebook-fill", url: "#" },
    { name: "Twitter", icon: "ri-twitter-x-line", url: "#" },
    { name: "LinkedIn", icon: "ri-linkedin-fill", url: "#" },
    { name: "Instagram", icon: "ri-instagram-line", url: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/logo.png" className="w-16 h-16 object-contain" alt="GSPL Logo" />
                <div>
                  <h3 className="text-2xl font-bold text-white">GSPL</h3>
                  <p className="text-sm text-[#E0A75E] font-medium">Government Authorized RVSF</p>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-white">
                GARHWAL SCRAP PRIVATE LIMITED
              </h4>
              
              <div className="space-y-4 text-gray-300 mb-6">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-[#E0A75E] mt-1 text-lg flex-shrink-0"></i>
                  <div>
                    <p className="leading-relaxed">
                      DEVBHOOMI INDUSTRIAL AREA<br />
                      KHASRA NO. 216 VILL.KHATAKHEDI,<br />
                      BHAGWANPUR, HARIDWAR - 247668<br />
                      UTTARAKHAND, INDIA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="ri-phone-line text-[#E0A75E] text-lg"></i>
                  <a href="tel:+917280801010" className="hover:text-[#E0A75E] transition-colors">
                    72-8080-1010
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-[#E0A75E] text-lg"></i>
                  <a href="mailto:info@gspl.co.in" className="hover:text-[#E0A75E] transition-colors">
                    info@gspl.co.in
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <i className="ri-time-line text-[#E0A75E] text-lg"></i>
                  <span>Mon-Sat: 9AM-6PM | Sun: 10AM-4PM</span>
                </div>
              </div>

            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-[#E0A75E] transition-colors flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-[#E0A75E] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <i className="ri-check-line text-[#E0A75E] mt-1 text-sm flex-shrink-0"></i>
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Garhwal Scrap Private Limited. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Registered Vehicle Scrapping Facility (RVSF) under Ministry of Road Transport & Highways
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
