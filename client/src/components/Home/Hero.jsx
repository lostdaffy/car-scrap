import React, { useState } from "react";
import { vehicleTypes, vehicleData, benefits } from "../../data/FormData";

const Hero = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState("Car");
  const [selectedMake, setSelectedMake] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
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

  // Enhanced Web3Forms submit with better UX
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Form validation
    if (
      !selectedMake ||
      !formData.model ||
      !formData.vehicleNumber ||
      !formData.name ||
      !formData.phone
    ) {
      setSubmitMessage("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    const formPayload = {
      access_key: "c379a14c-0e8e-4106-b25d-c85189e9924c",
      subject:
        "New Vehicle Scrap Valuation Request - Immediate Action Required",
      from_name: "Vehicle Scrapping Portal",
      vehicleType: selectedVehicleType,
      make: selectedMake,
      model: formData.model,
      vehicleNumber: formData.vehicleNumber,
      customerName: formData.name,
      phone: formData.phone,
      submissionTime: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
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
        setSubmitMessage(
          "Success! Our team will contact you within 24 Hours with your vehicle valuation."
        );
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

        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage(
          "⚠️ Unable to submit request. Please call +91 98765 43210 directly."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage(
        "⚠️ Network error. Please try again or call +91 98765 43210"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Enhanced Background with Professional Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 sm:gap-6 lg:gap-8 items-center py-6 sm:py-8 lg:py-12">
            {/* Professional Left Section */}
            <div className="text-white order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex mb-3 sm:mb-4">
                <span className="hidden sm:block bg-[#E0A75E] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  <i className="ri-shield-check-line mr-1 sm:mr-2"></i>
                  Government Registered & RTO Approved Facility
                </span>
              </div>

              <h1 className="uppercase text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8">
                Get <span className="text-[#E0A75E]">Maximum Value</span> for
                Your Old Vehicle
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 hidden sm:block">
                India's most trusted vehicle scrapping service. Instant
                valuation, doorstep pickup, and immediate payment with proper
                documentation.
              </p>

              {/* Trust Indicators */}
              <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mt-6 sm:mt-8">
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                  <i className="ri-time-line text-[#E0A75E]"></i>
                  <span>Same Day Pickup</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                  <i className="ri-money-dollar-circle-line text-[#E0A75E]"></i>
                  <span>Instant Payment</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                  <i className="ri-file-shield-line text-[#E0A75E]"></i>
                  <span>Legal Documentation</span>
                </div>
              </div>
            </div>

            {/* Enhanced Form Section */}
            <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <form
                onSubmit={handleSubmit}
                className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 text-center">
                  Get Instant Vehicle Valuation
                </h3>
                <p className="text-gray-600 text-center mb-4 sm:mb-6 text-xs sm:text-sm">
                  Complete the form below and receive your quote within minutes
                </p>

                {/* Submit Message Display */}
                {submitMessage && (
                  <div
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-center text-xs sm:text-sm font-medium ${
                      submitMessage.includes("Success")
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                {/* Enhanced Vehicle Types */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-3 sm:mb-4">
                    Select Vehicle Type*
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {vehicleTypes.map((vehicle) => (
                      <button
                        key={vehicle.type}
                        type="button"
                        onClick={() => {
                          setSelectedVehicleType(vehicle.type);
                          setSelectedMake("");
                          setFormData((prev) => ({ ...prev, model: "" }));
                        }}
                        className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border-2 text-center transition-all duration-300 ${
                          selectedVehicleType === vehicle.type
                            ? "border-[#E0A75E] bg-[#E0A75E]/10 shadow-lg scale-105"
                            : "border-gray-300 bg-white hover:border-[#E0A75E]/50 hover:shadow-md"
                        }`}
                      >
                        <i
                          className={`${vehicle.icon} text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 text-[#E0A75E]`}
                        ></i>
                        <div className="text-xs sm:text-sm font-semibold text-gray-900">
                          {vehicle.type}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Make and Model Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
                    required
                    className="w-full p-2.5 sm:p-3 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-700 bg-white focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] transition-all text-sm sm:text-base"
                  >
                    <option value="">Choose Vehicle Make*</option>
                    {Object.keys(vehicleData[selectedVehicleType]).map(
                      (make, idx) => (
                        <option key={idx} value={make}>
                          {make}
                        </option>
                      )
                    )}
                  </select>

                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    disabled={!selectedMake}
                    required
                    className="w-full p-2.5 sm:p-3 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-700 bg-white focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] transition-all disabled:bg-gray-100 text-sm sm:text-base"
                  >
                    <option value="">Choose Model*</option>
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

                {/* Enhanced Input Fields */}
                <div className="mb-4 sm:mb-6 relative">
                  <i className="ri-id-card-line absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#E0A75E] text-lg sm:text-xl"></i>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-700 bg-white focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] transition-all text-sm sm:text-base"
                    placeholder="Vehicle Registration Number (e.g., MH01AB1234)*"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative">
                    <i className="ri-user-fill absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#E0A75E] text-lg sm:text-xl"></i>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-700 bg-white focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] transition-all text-sm sm:text-base"
                      placeholder="Your Full Name*"
                    />
                  </div>

                  <div className="relative">
                    <i className="ri-phone-fill absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#E0A75E] text-lg sm:text-xl"></i>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-700 bg-white focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] transition-all text-sm sm:text-base"
                      placeholder="10-Digit Mobile Number*"
                    />
                  </div>
                </div>

                {/* Enhanced Terms */}
                <div className="mb-4 sm:mb-6">
                  <label className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-[#E0A75E] border-gray-300 rounded focus:ring-[#E0A75E]"
                    />
                    <span className="leading-relaxed">
                      I agree to the{" "}
                      <span className="text-[#E0A75E] underline font-semibold hover:text-[#e59d43]">
                        Terms & Conditions
                      </span>{" "}
                      and authorize contact via phone/WhatsApp for vehicle
                      valuation.
                    </span>
                  </label>
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.agreeTerms || isSubmitting}
                  className={`w-full py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 ${
                    formData.agreeTerms && !isSubmitting
                      ? "bg-[#E0A75E] hover:bg-[#e59d43] hover:scale-105 shadow-lg"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line mr-1 sm:mr-2 animate-spin"></i>
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <i className="ri-calculator-fill mr-1 sm:mr-2"></i>
                      Get My Free Quote
                    </>
                  )}
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
