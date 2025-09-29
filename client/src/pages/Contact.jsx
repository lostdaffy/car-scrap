import React from "react";
import HeroSection from "../components/HeroSection";
import GetInTouch from "../components/GetInTouch";
import {Link} from "react-router-dom"

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone Number",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      icon: "ri-phone-line",
      desc: "Call us for instant quotes",
    },
    {
      title: "Email Address",
      value: "info@garhwalscrap.com",
      link: "mailto:info@garhwalscrap.com",
      icon: "ri-mail-line",
      desc: "Send us your queries",
    },
    {
      title: "WhatsApp",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210",
      icon: "ri-whatsapp-line",
      desc: "Quick support via WhatsApp",
    },
  ];

  return (
    <>
      <HeroSection title="Contact Us" />

      {/* Contact Information Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Ready to scrap your vehicle? Contact GSPL through any of these
              channels for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E0A75E] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <i
                    className={`${contact.icon} text-lg sm:text-2xl text-white`}
                  ></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {contact.title}
                </h3>
                <Link
                  to={contact.link}
                  className="text-[#E0A75E] font-semibold text-base sm:text-lg mb-2 block hover:underline"
                >
                  {contact.value}
                </Link>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {contact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Office Location */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Facility Location
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-0">
              Visit our government-authorized vehicle scrapping facility in
              Haridwar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.252147576795!2d77.80853328130225!3d29.880955010561816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb78b042d14df%3A0x25bae371655fa49d!2sGarhwal%20scrap%20private%20limited!5e1!3m2!1sen!2sin!4v1759149927129!5m2!1sen!2sin"
                  className="w-full rounded-xl sm:rounded-2xl shadow-lg border-0"
                  height="300"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GSPL Vehicle Scrapping Facility Location"
                />
                <style jsx>{`
                  @media (min-width: 640px) {
                    .map-container iframe {
                      height: 400px;
                      min-height: 400px;
                    }
                  }
                `}</style>
              </div>
            </div>

            {/* Location Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-[#E0A75E] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <i className="ri-building-line text-white text-lg sm:text-2xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    GARHWAL SCRAP PRIVATE LIMITED
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-[#E0A75E]/10 px-3 py-1 rounded-full">
                    <i className="ri-shield-check-line text-[#E0A75E] text-sm"></i>
                    <span className="text-[#E0A75E] font-semibold text-xs sm:text-sm">
                      Government Authorized RVSF
                    </span>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <i className="ri-map-pin-line text-[#E0A75E] text-lg sm:text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Address:
                      </div>
                      <div className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                        DEVBHOOMI INDUSTRIAL AREA
                        <br />
                        KHASRA NO. 216 VILL.KHATAKHEDI
                        <br />
                        BHAGWANPUR, HARIDWAR - 247668
                        <br />
                        UTTARAKHAND, INDIA
                      </div>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <i className="ri-time-line text-[#E0A75E] text-lg sm:text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Operating Hours:
                      </div>
                      <div className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: 10:00 AM - 4:00 PM
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <i className="ri-phone-line text-[#E0A75E] text-lg sm:text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Direct Contact:
                      </div>
                      <div className="text-gray-600">
                        <Link
                          to="tel:+919876543210"
                          className="text-[#E0A75E] hover:underline font-medium text-xs sm:text-sm"
                        >
                          +91 98765 43210{" "}
                        </Link>
                        <Link
                          to="tel:+919258207420"
                          className="text-[#E0A75E] hover:underline font-medium text-xs sm:text-sm"
                        >
                          +91 92582 07420{" "}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <i className="ri-mail-line text-[#E0A75E] text-lg sm:text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Email:
                      </div>
                      <div className="text-gray-600">
                        <Link
                          to="mailto:info@vehiclescrapping.com"
                          className="text-[#E0A75E] hover:underline font-medium text-xs sm:text-sm"
                        >
                          info@vehiclescrapping.com
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className="pt-2 sm:pt-4">
                    <Link
                      to="https://www.google.com/maps/dir//Haridwar,+Uttarakhand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#E0A75E] text-white py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl font-semibold hover:bg-[#d49b52] transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
                    >
                      <i className="ri-navigation-line mr-2"></i>
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Service Areas
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              We provide vehicle scrapping services across Uttarakhand and
              surrounding regions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { city: "Uttarakhand", desc: "State-wide Presence" },
              { city: "Delhi", desc: "National Capital Region" },
              { city: "Punjab", desc: "North India Coverage" },
              { city: "Haryana", desc: "Industrial & Corporate Zone" },
              { city: "Uttar Pradesh", desc: "Extended Service Area" },
              { city: "Himachal Pradesh", desc: "Hill State Services" },
              { city: "Jammu and Kashmir", desc: "Northernmost Coverage" },
              { city: "Rajasthan", desc: "Western India Presence" },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#E0A75E] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-map-pin-fill text-white text-sm sm:text-xl"></i>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {area.city}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default Contact;
