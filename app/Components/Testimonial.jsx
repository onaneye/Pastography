'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { TestimonialsData } from "./constant";

// const testimonials = [
//   {
//     name: "Sophia Brown",
//     role: "CEO, TechWave",
//     testimonial: "This platform exceeded all my expectations. The attention to detail is phenomenal!",
//     avatar: "https://via.placeholder.com/100",
//   },
//   {
//     name: "Liam Johnson",
//     role: "Creative Director, Visionary",
//     testimonial: "The animations and the user experience are simply unparalleled. Highly recommend it!",
//     avatar: "https://via.placeholder.com/100",
//   },
//   {
//     name: "Olivia Smith",
//     role: "Founder, EcoWorld",
//     testimonial: "Absolutely stunning and smooth interactions. It’s a masterpiece!",
//     avatar: "https://via.placeholder.com/100",
//   },
//   {
//     name: "Noah Davis",
//     role: "Product Manager, InnovateX",
//     testimonial: "This service redefines excellence. Simply breathtaking animations!",
//     avatar: "https://via.placeholder.com/100",
//   },
// ];

const Testimonial = () => {
  const [testimonials, setTestimonials] = React.useState(TestimonialsData);
  return (
    <div className="mt-24 px-4  flex-col items-center justify-center bg-gray-800 ">
      {/* Header */}
      <div className="text-center py-12">
        <p className=" text-white text-lg">TESTIMONIAL</p>
        <h2 className=" text-white text-5xl font-bold mt-2">
          Our Clients have a lot to say about us
        </h2>
      </div>

      {/* Swiper */}
      <div className="swiper mt-12">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={40}
        >
          {testimonials.map(({ name, role, testimony, profilePicture, id }) => (
            <SwiperSlide key={id}>
              <div className="bg-orange-500 p-6 rounded-2xl shadow-lg opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={profilePicture}
                  alt={name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center">{name}</h3>
                <p className="text-center text-sm text-gray-700">{role}</p>
                <p className="mt-4 italic text-center text-gray-100">
                  "{testimony}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
