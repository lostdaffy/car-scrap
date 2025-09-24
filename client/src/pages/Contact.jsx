import React from "react";
import HeroSection from "../components/HeroSection";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone Number",
      value: "72-8080-1010",
      link: "tel:+917280801010",
      icon: "ri-phone-line",
      desc: "Call us for instant quotes"
    },
    {
      title: "Email Address", 
      value: "info@gspl.co.in",
      link: "mailto:info@gspl.co.in",
      icon: "ri-mail-line",
      desc: "Send us your queries"
    },
    {
      title: "WhatsApp",
      value: "72-8080-1010", 
      link: "https://wa.me/917280801010",
      icon: "ri-whatsapp-line",
      desc: "Quick support via WhatsApp"
    }
  ];

  return (
    <>
      <HeroSection title="Contact Us" />

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to scrap your vehicle? Contact GSPL through any of these channels for immediate assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#E0A75E] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${contact.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                <a 
                  href={contact.link}
                  className="text-[#E0A75E] font-semibold text-lg mb-2 block hover:underline"
                >
                  {contact.value}
                </a>
                <p className="text-gray-600 text-sm">{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Office Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Facility Location
            </h2>
            <p className="text-lg text-gray-600">
              Visit our government-authorized vehicle scrapping facility in Haridwar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.5692602981594!2d78.16450642528674!3d29.91152357569803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ff23f0093%3A0x51332df6cfd25f60!2sHaridwar%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1756593968032!5m2!1sen!2sin"
                  className="w-full rounded-2xl shadow-lg border-0"
                  height="400"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GSPL Vehicle Scrapping Facility Location"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#E0A75E] rounded-2xl flex items-center justify-center">
                    <i className="ri-building-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    GARHWAL SCRAP PRIVATE LIMITED
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-[#E0A75E]/10 px-3 py-1 rounded-full">
                    <i className="ri-shield-check-line text-[#E0A75E]"></i>
                    <span className="text-[#E0A75E] font-semibold text-sm">Government Authorized RVSF</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <i className="ri-map-pin-line text-[#E0A75E] text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Address:</div>
                      <div className="text-gray-600 leading-relaxed">
                        DEVBHOOMI INDUSTRIAL AREA<br />
                        KHASRA NO. 216 VILL.KHATAKHEDI<br />
                        BHAGWANPUR, HARIDWAR - 247668<br />
                        UTTARAKHAND, INDIA
                      </div>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <i className="ri-time-line text-[#E0A75E] text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Operating Hours:</div>
                      <div className="text-gray-600 leading-relaxed">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-start gap-4">
                    <i className="ri-phone-line text-[#E0A75E] text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Direct Contact:</div>
                      <div className="text-gray-600">
                        <a href="tel:+917280801010" className="text-[#E0A75E] hover:underline font-medium">
                          72-8080-1010
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <i className="ri-mail-line text-[#E0A75E] text-xl flex-shrink-0 mt-1"></i>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Email:</div>
                      <div className="text-gray-600">
                        <a href="mailto:info@gspl.co.in" className="text-[#E0A75E] hover:underline font-medium">
                          info@gspl.co.in
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className="pt-4">
                    <a
                      href="https://www.google.com/maps/dir//Haridwar,+Uttarakhand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#E0A75E] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#d49b52] transition-colors duration-300 flex items-center justify-center"
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
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide vehicle scrapping services across Uttarakhand and surrounding regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Haridwar", desc: "Main Facility Location" },
              { city: "Dehradun", desc: "Capital Region Coverage" },
              { city: "Rishikesh", desc: "Spiritual City Services" },
              { city: "Roorkee", desc: "Educational Hub Area" },
              { city: "Haldwani", desc: "Kumaon Region" },
              { city: "Rudrapur", desc: "Industrial Belt" },
              { city: "Kashipur", desc: "Border Region" },
              { city: "Tehri", desc: "Hill Station Coverage" }
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#E0A75E] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-fill text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.city}</h3>
                <p className="text-gray-600 text-sm">{area.desc}</p>
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
