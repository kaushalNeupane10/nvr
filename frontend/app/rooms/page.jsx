"use client";
import Image from "next/image";
import Slider from "react-slick";
import roomData from "@/data/roomData";
import { FaWifi, FaBath, FaUmbrellaBeach, FaSnowflake } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
export default function page() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true,
  };
  const amenityIcons = {
    wifi: <FaWifi className="text-[#00311F] w-5 h-5" />,
    bathtub: <FaBath className="text-[#00311F] w-5 h-5" />,
    balcony: <FaUmbrellaBeach className="text-[#00311F] w-5 h-5" />,
    ac: <FaSnowflake className="text-[#00311F] w-5 h-5" />,
  };
  return (
    <>
    <HeroSection/>
      <section className="py-12 bg-[#FFF7E6] px-6">
        <div className="max-w-7xl mx-auto">
          {/* heading*/}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00311F]">
              Our Rooms
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#4B6B5F]">
              Discover our comfortable and beautifully designed rooms for a
              perfect stay.
            </p>
          </div>

          {/* grid and rooms mapin */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {roomData.map((room, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-[#F3F0E9] shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* img sliders */}
                <div className="w-full aspect-[4/3] md:aspect-[16/9] relative">
                  <Slider {...settings}>
                    {room.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative w-full h-64 md:h-80 lg:h-64"
                      >
                        <Image
                          src={img}
                          alt={room.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* room info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#00311F]">
                    {room.name}
                  </h3>

                  {/* amenities */}
                  <div className="flex flex-wrap gap-3 mt-3">
                    {room.amenities.map((a, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center p-2 rounded-md bg-[#E7F0E7]"
                      >
                        {amenityIcons[a]}
                      </div>
                    ))}
                  </div>

                  {/* price */}
                  <p className="mt-3 text-lg font-bold text-[#00311F]">
                    ${room.price} / night
                  </p>

                  {/* book btn */}
                  <button className="mt-4 w-full py-2 rounded-lg bg-[#00311F] text-white font-semibold hover:bg-[#004F2F] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Experience/>
    </>
  );
}
