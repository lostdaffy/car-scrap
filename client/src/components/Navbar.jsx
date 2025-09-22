import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
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
    <nav className="bg-gray-900 sticky top-0 w-full z-50 flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center py-2">
         
          {/* Logo */}
          <div className="flex gap-2 sm:gap-3 lg:gap-5">
            <div>
              <img src="/images/logo.png" className="w-12 sm:w-16 lg:w-18" alt="Logo" />
            </div>
            <div className="self-center">
              <img src="/images/morth-logo.png" className="w-14 sm:w-16 lg:w-20" alt="Morth Logo" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="relative px-3 xl:px-4 py-2 text-gray-300 hover:text-[#E0A75E] font-medium text-sm tracking-wide transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E0A75E] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Call Button with animation */}
            <style>
              {`
                @keyframes phoneRing {
                  0% { transform: rotate(0deg); }
                  20% { transform: rotate(5deg); }
                  40% { transform: rotate(-5deg); }
                  60% { transform: rotate(4deg); }
                  80% { transform: rotate(-4deg); }
                  100% { transform: rotate(0deg); }
                }
                .phone-ring {
                  display: inline-block;
                  animation: phoneRing 1.2s infinite ease-in-out;
                }
              `}
            </style>

            <div className="flex items-center phone-ring">
              <Link
                to=""
                className="group bg-[#E0A75E] px-4 xl:px-6 py-2 text-white text-sm xl:text-base rounded-full hover:bg-[#e59d43] transition-colors"
              >
                <i className="ri-smartphone-line"></i> Get Free Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#E0A75E] transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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

            {/* Mobile Call Button */}
            <div className="pt-4 border-t border-gray-800">
              <Link className="w-full bg-[#E0A75E] text-gray-100 px-6 py-3 rounded-full hover:bg-[#e59d43] transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
