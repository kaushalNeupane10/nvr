"use client";

import { motion } from "framer-motion";

export default function HeroMotion() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4"
      >
        Luxury Rooms Await
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl drop-shadow-md"
      >
        Enjoy serene comfort, breathtaking views, and all the amenities to
        make your stay unforgettable.
      </motion.p>
    </div>
  );
}
