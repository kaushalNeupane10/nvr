"use client";

import Image from "next/image";
import testimonials from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="bg-[#FDF6E9] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00311F]">
            Guest Reviews
          </h2>
          <p className="mt-4 text-lg text-[#4B6B5F] max-w-2xl mx-auto">
            Real stories and experiences shared by our guests
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          className="overflow-visible"
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-visible relative bg-white rounded-3xl pt-20 pb-8 px-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                
                {/* avatar */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20">
  <div className="h-28 w-28 rounded-full bg-white p-1 shadow-lg">
    <div className="h-full w-full rounded-full overflow-hidden bg-gray-100">
      <Image
        src={item.img}
        alt={item.name}
        width={112}
        height={112}
        className="object-contain"
        unoptimized
      />
    </div>
  </div>
</div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#00311F]">
                    {item.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex justify-center mt-2 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm text-[#4B6B5F] leading-relaxed">
                    “{item.review}”
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
