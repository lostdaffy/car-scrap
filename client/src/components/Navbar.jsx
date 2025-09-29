import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/our-services" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#E0A75E] py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-900">
                <i className="ri-phone-line"></i>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-gray-900">
                <i className="ri-mail-line"></i>
                <span>info@garhwalscrap.com</span>
              </div>
            </div>
            
            <div className="text-gray-900 font-medium">
              "Turn your old vehicle into cash - Get instant scrap value today!"
            </div>
            
            <div className="flex items-center gap-2 text-gray-900">
              <i className="ri-map-pin-line"></i>
              <span>Delhi NCR, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-900 sticky top-0 w-full z-50 flex justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex gap-2 sm:gap-3 lg:gap-5">
              <div>
                <img
                  src="/images/logo.png"
                  className="w-12 sm:w-16 lg:w-18"
                  alt="Logo"
                />
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="relative px-4 xl:px-6 py-2 text-gray-300 hover:text-[#E0A75E] font-medium text-sm tracking-wide transition-all duration-300 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E0A75E] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Get Free Quote Button - Right Side */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/"
                className="group bg-[#E0A75E] px-4 xl:px-6 py-2 text-white text-sm xl:text-base rounded-full hover:bg-[#e59d43] transition-colors font-medium"
              >
                <i className="ri-smartphone-line mr-2"></i>
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#E0A75E] transition-colors duration-300 p-2"
              >
                {isMenuOpen ? (
                  <i className="ri-close-line text-xl"></i>
                ) : (
                  <i className="ri-menu-line text-xl"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-lg border-b border-gray-800 shadow-2xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block px-4 py-3 text-gray-300 hover:text-[#E0A75E] hover:bg-gray-800/50 rounded-xl font-medium uppercase tracking-wide transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Top Bar Info */}
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-gray-300 px-4">
                  <i className="ri-phone-line text-[#E0A75E]"></i>
                  <span>+91 90686 65363</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 px-4">
                  <i className="ri-mail-line text-[#E0A75E]"></i>
                  <span>info@vehiclescrapping.com</span>
                </div>
              </div>

              {/* Mobile Quote Button */}
              <div className="pt-2">
                <Link 
                  to="/"
                  className="w-full bg-[#E0A75E] text-gray-100 px-6 py-3 rounded-full hover:bg-[#e59d43] transition-all duration-300 flex items-center justify-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-smartphone-line mr-2"></i>
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
