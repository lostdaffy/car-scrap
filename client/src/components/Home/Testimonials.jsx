import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Gurgaon",
      vehicle: "Maruti Swift (2008)",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "GSPL made the entire scrapping process seamless. Got excellent value for my old Swift and received both CoD and CVS certificates within 3 days. No middlemen, direct dealings. Highly recommend!",
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      vehicle: "Honda City (2009)",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Was worried about legal complications with my 15-year-old Honda City. GSPL handled everything professionally - from pickup to RTO deregistration. Got maximum value with zero hassle.",
    },
    {
      name: "Amit Verma",
      location: "Noida",
      vehicle: "Hyundai Santro (2007)",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Excellent service! My Santro was sitting idle for 2 years. GSPL not only gave fair price but also helped me claim road tax rebate. The certificate process was completely digital.",
    },
    {
      name: "Sunita Devi",
      location: "Faridabad",
      vehicle: "Tata Indica (2006)",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Government seized my neighbor's car for being over-aged. GSPL saved me from the same fate. Quick pickup, immediate payment, and legal protection. Peace of mind achieved!",
    },
    {
      name: "Rohit Singh",
      location: "Mumbai",
      vehicle: "Maruti Alto (2005)",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Amazing experience with GSPL! They offered the best price in the market for my old Alto. The entire process was transparent and completed within hours.",
    },
    {
      name: "Kavita Patel",
      location: "Pune",
      vehicle: "Hyundai i10 (2010)",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Professional service with complete documentation support. GSPL made scrapping hassle-free and profitable. Highly satisfied with their service quality.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Real experiences from vehicle owners who chose GSPL for safe, legal,
            and profitable scrapping
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative px-4 sm:px-0">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide-equal-height">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 relative testimonial-card">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      ({testimonial.rating}.0)
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <div className="testimonial-content mb-6 sm:mb-8">
                    <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>

                  {/* Customer Info - Fixed at bottom */}
                  <div className="testimonial-footer">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">
                          {testimonial.location}
                        </p>
                        <p className="text-gray-500 text-xs mt-1 truncate">
                          {testimonial.vehicle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div
                      className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "#E0A75E20", color: "#B8873F" }}
                    >
                      <i className="ri-shield-check-line text-xs sm:text-sm"></i>
                      <span className="hidden sm:inline">Verified</span>
                      <span className="sm:hidden">✓</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300">
            <i className="ri-arrow-left-line text-gray-600 text-xl"></i>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300">
            <i className="ri-arrow-right-line text-gray-600 text-xl"></i>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .testimonials-swiper {
          padding-bottom: 40px !important;
        }
        
        /* Equal Height Swiper Slides */
        .swiper-slide-equal-height {
          height: auto !important;
          display: flex !important;
        }
        
        .testimonial-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 300px;
        }
        
        .testimonial-content {
          flex-grow: 1;
          display: flex;
          align-items: flex-start;
        }
        
        .testimonial-footer {
          margin-top: auto;
        }
        
        /* Mobile Optimizations */
        @media (max-width: 639px) {
          .testimonial-card {
            min-height: 280px;
          }
          
          .testimonials-swiper {
            padding-bottom: 35px !important;
          }
        }
        
        /* Tablet - Medium Fixed Height */
        @media (min-width: 640px) and (max-width: 1023px) {
          .testimonial-card {
            min-height: 320px;
            max-height: 360px;
          }
          
          .testimonial-content {
            height: 140px;
            overflow: hidden;
          }
          
          .testimonial-content blockquote {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        
        /* Desktop - Fixed Height for Consistency */
        @media (min-width: 1024px) {
          .testimonial-card {
            min-height: 360px;
            max-height: 380px;
          }
          
          .testimonial-content {
            height: 160px;
            overflow: hidden;
          }
          
          .testimonial-content blockquote {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        
        .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #E0A75E;
          transform: scale(1.2);
        }
        
        /* Mobile - smaller pagination dots */
        @media (max-width: 639px) {
          .swiper-pagination-bullet-custom {
            width: 8px;
            height: 8px;
            margin: 0 3px;
          }
        }
        
        @media (max-width: 1023px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
