import React from "react";
import {Link} from "react-router-dom"

const UrgentEnforcementAlert = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Alert Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
              <i className="ri-alarm-warning-line"></i>
              <span className="whitespace-nowrap">URGENT ENFORCEMENT ALERT</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Don't Let Your Vehicle
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Get <span style={{ color: "#E0A75E" }}>Seized</span>. Act Now.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Government agencies are actively seizing end-of-life vehicles
              across Delhi-NCR without prior notice. Protect your investment
              before it's too late{" "}
              <button className="text-red-600 hover:text-red-700 transition-colors underline">
                Learn more
              </button>
              .
            </p>

            {/* CTA Button */}
            <Link
              to="/"
              className="bg-[#E0A75E] inline-flex items-center gap-2 sm:gap-3 text-white font-semibold px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <i className="ri-recycle-line text-lg sm:text-xl"></i>
              Scrap Now
            </Link>
          </div>

          {/* Illustration Side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img 
                src="/images/car-crane.jpg" 
                alt="Car being seized by crane" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentEnforcementAlert;
