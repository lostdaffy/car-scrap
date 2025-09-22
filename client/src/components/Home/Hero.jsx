import React, { useState } from "react";
import { vehicleTypes, vehicleData, benefits } from "../../data/FormData";

const Hero = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState("Car");
  const [selectedMake, setSelectedMake] = useState("");
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    vehicleNumber: "",
    name: "",
    phone: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Web3Forms submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = {
      access_key: "260cad70-c5b5-4493-bad4-59b3452c6603", // replace with your key
      subject: "New Vehicle Scrap Request",
      vehicleType: selectedVehicleType,
      make: selectedMake,
      model: formData.model,
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully ✅");
        setFormData({
          make: "",
          model: "",
          vehicleNumber: "",
          name: "",
          phone: "",
          agreeTerms: false,
        });
        setSelectedMake("");
        setSelectedVehicleType("Car");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form ❌");
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      ></div>

      <div className="relative z-10 min-h-screen flex justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
          <div className="grid lg:grid-cols-[55%_45%] gap-6 lg:gap-8 items-center min-h-screen py-8 lg:py-0">
            {/* Left Section */}
            <div className="text-white order-1 lg:order-2">
              <div className="inline-flex mb-2">
                <span className="bg-[#E0A75E]/90 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  Government Registered Facility
                </span>
              </div>
              <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold leading-tight mb-6 lg:mb-8">
                Scrap your old vehicle and get instant payment
              </h1>

              {/* Stats Section */}
              <div className="flex flex-row sm:flex-row items-start sm:items-center gap-6 mt-10">
                <div className="">
                  <div className="text-3xl font-bold text-gray-900">10k +</div>
                  <div className="text-gray-900 text-sm">Vehicle Scrapped</div>
                </div>

                <div className="">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-[#E0A75E] text-2xl">
                      {"★".repeat(4)}
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                  <div className="text-gray-900 text-sm">
                    from 500+ customers
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="order-1 lg:order-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl"
              >
                {/* Benefits */}
                <div className="flex flex-wrap gap-3 sm:gap-6 lg:gap-10 mb-6 justify-between text-center">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 text-gray-900"
                    >
                      <i className="ri-checkbox-circle-fill text-lg sm:text-xl text-[#E0A75E]"></i>
                      <span className="text-xs sm:text-sm font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Get an instant valuation
                </h3>

                {/* Vehicle Types */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Vehicle Type*
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    {vehicleTypes.map((vehicle) => (
                      <button
                        key={vehicle.type}
                        type="button"
                        onClick={() => {
                          setSelectedVehicleType(vehicle.type);
                          setSelectedMake("");
                          setFormData((prev) => ({ ...prev, model: "" }));
                        }}
                        className={`p-2 sm:p-3 lg:p-1 rounded-xl border-2 text-center transition-all duration-300 ${
                          selectedVehicleType === vehicle.type
                            ? "border-[#E0A75E] bg-[#E0A75E]/10 shadow-md scale-105"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                        }`}
                      >
                        <i
                          className={`${vehicle.icon} text-2xl sm:text-3xl mb-1 sm:mb-2 text-[#E0A75E]`}
                        ></i>
                        <div className="text-xs sm:text-sm font-semibold text-gray-900">
                          {vehicle.type}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Make and Model */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                  {/* Make Dropdown */}
                  <select
                    name="make"
                    value={selectedMake}
                    onChange={(e) => {
                      setSelectedMake(e.target.value);
                      setFormData((prev) => ({
                        ...prev,
                        make: e.target.value,
                        model: "",
                      }));
                    }}
                    className="w-full p-3 border border-gray-300 rounded-xl text-gray-700 bg-gray-50 focus:ring-2 focus:ring-[#E0A75E] focus:border-transparent"
                  >
                    <option value="">Select Make</option>
                    {Object.keys(vehicleData[selectedVehicleType]).map(
                      (make, idx) => (
                        <option key={idx} value={make}>
                          {make}
                        </option>
                      )
                    )}
                  </select>

                  {/* Model Dropdown */}
                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    disabled={!selectedMake}
                    className="w-full p-3 border border-gray-300 rounded-xl text-gray-700 bg-gray-50 focus:ring-2 focus:ring-[#E0A75E] focus:border-transparent"
                  >
                    <option value="">Select Model</option>
                    {selectedMake &&
                      vehicleData[selectedVehicleType][selectedMake].map(
                        (model, idx) => (
                          <option key={idx} value={model}>
                            {model}
                          </option>
                        )
                      )}
                  </select>
                </div>

                {/* Vehicle Number */}
                <div className="mb-6 relative">
                  <i className="ri-id-card-line absolute left-4 top-1/2 -translate-y-1/2 text-[#E0A75E] text-lg"></i>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-gray-50 focus:ring-2 focus:ring-[#E0A75E] focus:border-transparent"
                    placeholder="Vehicle No: AB12CD3456"
                  />
                </div>

                {/* Name and Phone */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div className="mb-6 relative">
                    <i className="ri-user-fill absolute left-4 top-1/2 -translate-y-1/2 text-[#E0A75E] text-lg"></i>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-gray-50 focus:ring-2 focus:ring-[#E0A75E] focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-6 relative">
                    <i className="ri-phone-fill absolute left-4 top-1/2 -translate-y-1/2 text-[#E0A75E] text-lg"></i>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-gray-50 focus:ring-2 focus:ring-[#E0A75E] focus:border-transparent"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="mb-4">
                  <label className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#E0A75E] border-gray-300 rounded focus:ring-[#E0A75E]"
                    />
                    <span>
                      I agree to the{" "}
                      <span className="text-[#E0A75E] underline font-medium">
                        Terms & Conditions
                      </span>
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!formData.agreeTerms}
                  className={`w-full py-3 rounded-xl font-semibold text-white ${
                    formData.agreeTerms
                      ? "bg-[#E0A75E] hover:scale-105 transition-all"
                      : "bg-[#E0A75E]/60 cursor-not-allowed"
                  }`}
                >
                  <i className="ri-calculator-fill mr-2"></i> Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
