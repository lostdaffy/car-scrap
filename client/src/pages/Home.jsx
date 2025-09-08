import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            <span className="text-[#da3742] text-4xl sm:text-6xl md:text-8xl">
              <i className="ri-recycle-fill"></i>
            </span>
            <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              scrap & recycle
              <span className="text-[#da3742] block">your vehicles</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
              Professional vehicle scrapping and recycling services. We buy cars
              in any condition and pay you on the spot while protecting the
              environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
              <Link className="bg-[#da3742] text-white px-8 sm:px-12 py-2 sm:py-3 text-base sm:text-lg rounded-full hover:bg-[#c23339] transition-colors">
                <i className="ri-recycle-fill mr-2"></i> Start Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Recycle Your Vehicles */}
      <section className="min-h-screen bg-gray-900/95 backdrop-blur-md py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              Why Recycle Your Vehicle
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* Environmental Impact */}
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <i className="ri-leaf-line text-xl sm:text-2xl text-[#da3742]"></i>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Environmental Impact
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Recycling End-of-Life-Vehicles (ELV) helps reduce air and
                  water pollution that is otherwise emitted in the production of
                  new vehicles. Every recycled car prevents harmful chemicals
                  from polluting soil and water.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <img src="/images/1.jpg" className="h-[150px] sm:h-[200px] w-full object-cover rounded-lg" alt="" />
              </div>
            </div>

            {/* Energy Conservation */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
              <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <i className="ri-flashlight-line text-xl sm:text-2xl text-[#da3742]"></i>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Energy Conservation
                  </h3>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Recycling vehicles saves massive amounts of energy that would
                  be used for creating new materials. Recycling steel requires
                  74% less energy compared to making new steel.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <img src="/images/1.jpg" className="h-[150px] sm:h-[200px] w-full object-cover rounded-lg" alt="" />
              </div>
            </div>

            {/* Resource Recovery */}
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <i className="ri-recycle-line text-xl sm:text-2xl text-[#da3742]"></i>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Resource Recovery & Conservation
                  </h3>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  85% of vehicle materials are recyclable. Steel, aluminum, and
                  precious metals get a second life. The use of scrap metal
                  replaces a significant part of mining for iron ore, coal, and
                  other materials.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <img src="/images/1.jpg" className="h-[150px] sm:h-[200px] w-full object-cover rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy and Recycle Vehicles */}
      <section
        className="min-h-screen relative flex items-center py-12 sm:py-16 lg:py-0"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-100 mb-4 sm:mb-6 leading-tight">
                  We Buy Vehicles in
                  <span className="text-[#da3742]"> Any Condition</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-light">
                  From running cars to completely damaged vehicles, we accept
                  everything and pay you fairly for each one.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  "Accident Damaged Cars",
                  "Non-Running Vehicles",
                  "Flood Damaged Cars",
                  "Fire Damaged Vehicles",
                  "Old Scrap Cars",
                  "Commercial Vehicles",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4 bg-gray-100 p-3 sm:p-4 rounded-xl shadow-md"
                  >
                    <i className="ri-checkbox-circle-fill text-xl sm:text-2xl text-[#da3742] flex-shrink-0"></i>
                    <span className="text-base sm:text-lg font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="Car recycling process"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-100 pb-4 sm:pb-6">
              Why Choose <span className="text-[#da3742]">EcoScrap</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto font-light px-4">
              We're the most trusted name in vehicle recycling with unmatched
              service quality and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <i className="ri-award-fill text-5xl sm:text-6xl lg:text-7xl text-[#da3742] mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 py-3 sm:py-4">
                Certified Process
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                Government approved recycling facility with all necessary
                certifications and licenses.
              </p>
            </div>

            <div className="text-center group">
              <i className="ri-time-line text-5xl sm:text-6xl lg:text-7xl text-[#da3742] mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 py-3 sm:py-4">
                Quick Service
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                Fast pickup within 24 hours and instant cash payment upon
                vehicle collection.
              </p>
            </div>

            <div className="text-center group">
              <i className="ri-group-line text-5xl sm:text-6xl lg:text-7xl text-[#da3742] mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 py-3 sm:py-4">
                Expert Team
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                Professional evaluators and recycling specialists with years of
                industry experience.
              </p>
            </div>

            <div className="text-center group">
              <i className="ri-shield-line text-5xl sm:text-6xl lg:text-7xl text-[#da3742] mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 py-3 sm:py-4">
                Full Insurance
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                Complete insurance coverage during transportation and processing
                of your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Way of Recycling */}
      <section
        className="min-h-screen relative flex items-center py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              Our Recycling Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto font-light px-4">
              A systematic approach to vehicle recycling that maximizes material
              recovery while minimizing environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-gray-800 text-center p-6 sm:p-8 rounded-lg">
              <div className="bg-[#da3742] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">
                Collection
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Free towing and transportation of your vehicle to our certified
                recycling facility.
              </p>
            </div>

            <div className="bg-gray-800 text-center p-6 sm:p-8 rounded-lg">
              <div className="bg-[#da3742] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">
                Dismantling
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Careful removal of reusable parts, fluids, and hazardous
                materials by trained technicians.
              </p>
            </div>

            <div className="bg-gray-800 text-center p-6 sm:p-8 rounded-lg">
              <div className="bg-[#da3742] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">
                Material Sorting
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Separation of metals, plastics, glass, and other materials for
                specialized processing.
              </p>
            </div>

            <div className="bg-gray-800 text-center p-6 sm:p-8 rounded-lg">
              <div className="bg-[#da3742] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">
                Processing
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Shredding and melting of materials to create new raw materials
                for manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We buy and recycle vehicles in any condition */}
      <section className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 sm:pb-16">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4 sm:mb-6">
              We buy and recycle vehicles in any condition
            </h2>
            <p className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto px-4">
              Get the best value for your vehicle regardless of its condition.
              We handle all paperwork and provide instant quotes.
            </p>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Scrap car */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#da3742] transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                Scrap car
              </p>
            </div>

            {/* Non-running car */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#da3742] transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                Non-running car
              </p>
            </div>

            {/* Accidental cars */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#da3742] transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                Accidental cars
              </p>
            </div>

            {/* Truck */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#da3742] transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                Truck
              </p>
            </div>

            {/* Bus */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-[#da3742] rounded-full">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                Bus
              </p>
            </div>

            {/* 2 Wheeler */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#da3742] transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 18.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm14.5 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM19.5 7.5l-3.5 3.5H15L13 8V5h2.5L19 8.5c.28.28.28.72 0 1z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                2 Wheeler
              </p>
            </div>

            {/* 3 wheeler */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#da3742] transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.5 17.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-13 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13-14H14v2h3L19 8.5V15c0 .55-.45 1-1 1s-1-.45-1-1v-2H9v2c0 .55-.45 1-1 1H7l-2-6H2v-2h3.5L7 11h10V6.5z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                3 wheeler
              </p>
            </div>

            {/* Industrial machinery */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#da3742] transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-10-6v4h4v-4h-4zm6-2h2v2h-2V10zm0 4h2v2h-2v-2z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#da3742] transition-colors duration-300 text-sm sm:text-base">
                Industrial machinery
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default Home;
