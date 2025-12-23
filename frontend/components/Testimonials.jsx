"use client";

import Image from "next/image";
import testimonials from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="bg-[#FDF6E9] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* heading*/}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00311F]">
            Guest Reviews
          </h2>
          <p className="mt-4 text-lg text-[#4B6B5F] max-w-2xl mx-auto">
            Real stories and experiences shared by our guests
          </p>
        </div>

        {/* slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          loop
          className="!overflow-visible"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="!overflow-visible">
              <div className="relative bg-[#F3F0E9] rounded-3xl pt-24 pb-8 px-6 shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* avatar */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
                  <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white p-1 shadow-xl">
                    <div className="relative h-full w-full rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        decoding="async"
                        loading="lazy"
                        sizes="128px"
                      />
                    </div>
                  </div>
                </div>

                {/* content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#00311F]">
                    {item.name}
                  </h3>

                  {/* stars */}
                  <div className="flex justify-center mt-2 mb-4 gap-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 w-4 h-4"
                      />
                    ))}
                  </div>

                  {/* review */}
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
