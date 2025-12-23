"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* bg image with motion */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      >
        <Image
          src="/images/rooms/heroroom.jpg"
          alt="Luxury Room Hero Background"
          fill
          decoding="async"
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/40"></div>
      </motion.div>

      {/* content*/}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4"
        >
          Luxury Rooms Await
        </motion.h1>

        {/* subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl drop-shadow-md"
        >
          Enjoy serene comfort, breathtaking views, and all the amenities to
          make your stay unforgettable.
        </motion.p>
      </div>
    </section>
  );
}
