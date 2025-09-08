import React from "react";
import HeroSection from "../components/HeroSection";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  return (
    <>
      <HeroSection title="Contact Us" />

      <section className="py-30 bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-100">
              Find Our Office
            </h2>
            <p className="text-lg text-gray-400">
              Visit us at our convenient location in Noida
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Map */}
            <div className="col-span-1 lg:col-span-8">
              <div className="map-container h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5692602981594!2d77.32450642528674!3d28.57152357569803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55ff23f0093%3A0x51332df6cfd25f60!2sShree%20Ram%20Palace!5e1!3m2!1sen!2sin!4v1756593968032!5m2!1sen!2sin"
                  className="w-full rounded-xl shadow-lg border-0"
                  height="400"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ApnaEducation Office Location"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="col-span-1 lg:col-span-4">
              <div className="h-full">
                <div className="bg-gray-800 rounded-xl shadow-lg h-full">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-18 h-18 mx-auto mb-4 bg-gradient-to-br from-[#242424] to-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-building-line text-white text-3xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-100 text-xl">
                        Our Office Location
                      </h4>
                    </div>

                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start">
                        <i className="ri-map-pin-line text-[#da3742] mr-4 mt-1 text-xl flex-shrink-0"></i>
                        <div>
                          <div className="font-semibold text-gray-100 mb-1">
                            Address:
                          </div>
                          <div className="text-gray-400 leading-relaxed">
                            Shree Ram Place, 3rd Floor
                            <br />
                            Sector 27, Noida – 201301
                            <br />
                            Uttar Pradesh, India
                          </div>
                        </div>
                      </div>

                      {/* Office Hours */}
                      <div className="flex items-start">
                        <i className="ri-time-line text-[#da3742] mr-4 mt-1 text-xl flex-shrink-0"></i>
                        <div>
                          <div className="font-semibold text-gray-100 mb-1">
                            Office Hours:
                          </div>
                          <div className="text-gray-400 leading-relaxed">
                            Monday - Saturday: 10:00 AM - 7:00 PM
                            <br />
                            Sunday: Closed
                          </div>
                        </div>
                      </div>

                      {/* Additional Contact Info */}
                      <div className="flex items-start">
                        <i className="ri-phone-line text-[#da3742] mr-4 mt-1 text-xl flex-shrink-0"></i>
                        <div>
                          <div className="font-semibold text-gray-100 mb-1">
                            Contact:
                          </div>
                          <div className="text-gray-400">
                            <a
                              href="tel:+919667601325"
                              className="text-gray-400 hover:text-gray-400 transition-colors font-medium"
                            >
                              +91 9667601325
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Directions Button */}
                      <div className="pt-4">
                        <a
                          href="https://www.google.com/maps/dir//Shree+Ram+Palace,+Sector+27,+Noida,+Uttar+Pradesh+201301/@28.57152357569803,77.32450642528674,16z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gray-100 text-[#da3742] py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
                        >
                          <i className="ri-navigation-line mr-2"></i>
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default Contact;
