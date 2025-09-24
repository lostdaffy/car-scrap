import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp integration with GSPL number
    const whatsappMessage = `Hello GSPL! I'm interested in your vehicle scrapping services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/917280801010?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get In <span className="text-[#E0A75E]">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to get the best value for your vehicle? Contact GSPL today for
            an instant quote and hassle-free service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-xl focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-xl focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-xl focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-xl focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="vehicle-quote">Get Vehicle Quote</option>
                    <option value="scrap-inquiry">Vehicle Scrapping Inquiry</option>
                    <option value="pickup-service">Free Pickup Service</option>
                    <option value="documentation">Legal Documentation</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-xl focus:ring-2 focus:ring-[#E0A75E] focus:border-[#E0A75E] outline-none transition-all resize-vertical"
                  placeholder="Tell us about your vehicle details, condition, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E0A75E] hover:bg-[#d49b52] text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>Send Message via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E0A75E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">72-8080-1010</p>
                    <p className="text-gray-500 text-sm">Emergency pickup available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E0A75E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Email</h4>
                    <p className="text-gray-600">info@gspl.co.in</p>
                    <p className="text-gray-500 text-sm">Get detailed quotes via email</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E0A75E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Facility Address</h4>
                    <p className="text-gray-600">
                      GARHWAL SCRAP PRIVATE LIMITED<br />
                      DEVBHOOMI INDUSTRIAL AREA<br />
                      KHASRA NO. 216 VILL.KHATAKHEDI<br />
                      BHAGWANPUR, HARIDWAR - 247668<br />
                      UTTARAKHAND, INDIA
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E0A75E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    </p>
                    <p className="text-gray-500 text-sm">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

      
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
