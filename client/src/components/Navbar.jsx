import React, { useState } from "react";
import { Car, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/home" },
    { name: "How It Works", to: "/how-it-works" },
    { name: "Who We Are", to: "/who-we-are" },
    { name: "Our Services", to: "/our-services" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <span className="text-3xl font-black text-white tracking-tight">
              Eco<span className="text-[#da3742]">Scrap</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#da3742] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden md:flex items-center">
            <Link
              to=""
              className="group bg-[#da3742] px-6 py-2 text-white text-base rounded-full hover:bg-[#da3742c0]"
            >
              <i class="ri-phone-fill"></i> Call Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#da3742] transition-colors duration-300 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900/98 backdrop-blur-lg border-b border-gray-800 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl font-medium uppercase tracking-wide transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Call Button */}
              <div className="pt-4 border-t border-gray-800">
                <Link className="w-full bg-[#da3742] text-gray-100 px-6 py-3 rounded-full hover:bg-[#da3742] transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
