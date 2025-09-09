import React from "react";
import {
  Car,
  Shield,
  Award,
  Users,
  Target,
  Heart,
  Globe,
  Leaf,
  Factory,
  Truck,
  CheckCircle,
  Star,
  Calendar,
  Phone,
} from "lucide-react";
import HeroSection from "../components/HeroSection";

const WhoWeAre = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="How It Works" />

      {/* Our Story Section */}
      <section className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 mb-4 sm:mb-6 leading-tight">
                  Our Story &<span className="text-[#da3742]"> Journey</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-light mb-6 sm:mb-8">
                  Founded in 2008 with a vision to revolutionize India's
                  automotive waste management, AutoRecycle has grown from a
                  small recycling unit to the country's most trusted vehicle
                  recycling company.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#da3742] mb-1 sm:mb-2">
                      2008 - The Beginning
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Started with a single facility in Meerut, processing 10
                      vehicles per month with a team of 5 dedicated
                      professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#da3742] mb-1 sm:mb-2">
                      2015 - Expansion
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Opened 3 new facilities across North India and introduced
                      advanced recycling technologies from Germany.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#da3742] mb-1 sm:mb-2">
                      2020 - Recognition
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Received National Environment Excellence Award and became
                      India's first ISO 14001 certified auto recycler.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src="/images/success.jpg"
                alt="Our facility"
                className="w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md"
        style={{
          backgroundImage: `url('/images/bg-1.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 mb-4 sm:mb-6">
              Mission & Vision
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto font-light px-4">
              Driving sustainable practices while creating economic value for
              our stakeholders and environmental benefits for society.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="bg-gray-800 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <Target className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4 sm:mb-6">
                Our Mission
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Zero-waste recycling processes",
                  "Maximize material recovery rates",
                  "Ensure complete regulatory compliance",
                  "Create sustainable employment opportunities",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#da3742] flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <Globe className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4 sm:mb-6">
                Our Vision
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Pan-Asian market leadership",
                  "Advanced recycling technology adoption",
                  "Carbon-neutral operations by 2030",
                  "Industry benchmark for sustainability",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#da3742] flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto font-light px-4">
              The fundamental principles that guide every decision we make and
              every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <i className="ri-leaf-line text-5xl sm:text-6xl lg:text-7xl text-[#da3742]"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 my-3 sm:my-4">
                Sustainability
              </h3>
              <p className="text-gray-400 text-base sm:text-lg px-2">
                Environmental responsibility is at the core of everything we do,
                ensuring minimal ecological impact.
              </p>
            </div>

            <div className="text-center group">
              <i className="ri-shield-line text-5xl sm:text-6xl lg:text-7xl text-[#da3742]"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 my-3 sm:my-4">
                Integrity
              </h3>
              <p className="text-gray-400 text-base sm:text-lg px-2">
                Transparent operations, honest pricing, and ethical business
                practices in all our interactions.
              </p>
            </div>

            <div className="text-center group">
              <i className="ri-group-line text-5xl sm:text-6xl lg:text-7xl text-[#da3742]"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 my-3 sm:my-4">
                Excellence
              </h3>
              <p className="text-gray-400 text-base sm:text-lg px-2">
                Continuous improvement in our processes, technology, and service
                quality to exceed expectations.
              </p>
            </div>

            <div className="text-center group">
              <i className="ri-heart-3-line text-5xl sm:text-6xl lg:text-7xl text-[#da3742]"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 my-3 sm:my-4">
                Community
              </h3>
              <p className="text-gray-400 text-base sm:text-lg px-2">
                Contributing to local communities through job creation and
                environmental protection initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md"
        style={{
          backgroundImage: `url('/images/bg-1.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 mb-4 sm:mb-6">
              Leadership Team
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto font-light px-4">
              Meet the visionaries and industry experts who are driving
              AutoRecycle's mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#da3742] rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  RS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 sm:mb-2">
                Rajesh Sharma
              </h3>
              <p className="text-[#da3742] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Founder & CEO
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                20+ years in automotive industry. Pioneer in bringing German
                recycling technology to India. MBA from IIM Ahmedabad.
              </p>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#da3742] rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  PG
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 sm:mb-2">
                Priya Gupta
              </h3>
              <p className="text-[#da3742] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                CTO
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Expert in recycling technology and automation. Former Tesla
                engineer. PhD in Environmental Engineering from Stanford.
              </p>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow sm:col-span-2 lg:col-span-1 max-w-md mx-auto sm:max-w-none">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#da3742] rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  AK
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 sm:mb-2">
                Amit Kumar
              </h3>
              <p className="text-[#da3742] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                COO
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Operations specialist with 15+ years in waste management. Expert
                in scaling recycling operations across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="min-h-screen relative flex items-center bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 mb-4 sm:mb-6">
              Certifications & Awards
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto font-light px-4">
              Recognition for our commitment to excellence, innovation, and
              environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4">
                ISO 14001:2015
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Environmental Management System Certification
              </p>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4">
                National Green Award
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Excellence in Environmental Protection - 2022
              </p>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4">
                CPCB Authorized
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Central Pollution Control Board Certification
              </p>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4">
                Industry Innovation
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Auto Component Manufacturers Association - 2021
              </p>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Truck className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4">
                Zero Waste Facility
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Certified by Indian Green Building Council
              </p>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#da3742] w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4">
                Best Employer
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Manufacturing Sector - Great Place to Work 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
