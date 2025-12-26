"use client";

import Image from "next/image";
// import { FaStarOfDavid } from "react-icons/fa";
import { GiBeveledStar } from "react-icons/gi";
import { motion } from "framer-motion";

export default function AboutUsHeroCompact() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-14 bg-[#FFF7E6]">
      <div className="flex flex-col lg:flex-row items-start gap-8 max-w-6xl mx-auto">

        {/* left about us description */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center bg-[#00311F] text-white rounded-3xl px-8 md:px-14 py-14 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <GiBeveledStar className="text-white text-2xl" />
            <span className="text-sm uppercase tracking-widest text-[#E6C27A]">
              About Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Rooted in Nature. <br className="hidden md:block" />
            Inspired by Tranquility.
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
            Established in <strong>2059 B.S.</strong>, our resort is nestled
            beside the serene flow of the <strong>Narayani River</strong>,
            surrounded by lush forests and untouched natural beauty. What began
            as a humble retreat has grown into a destination where comfort,
            culture, and nature exist in perfect harmony.
          </p>

          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Wake up to river breezes, explore greenery at every step, and
            experience a peaceful escape designed for those who seek a genuine
            connection with nature.
          </p>
        </motion.div>

        {/* right side images */}
        <div className="relative w-full lg:w-1/3 grid grid-rows-2 gap-4">

          {/* top img animation from top*/}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/logo/logo.png"
              alt="logo of narayani view resort"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* bottom img animation */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/about/narayaniscene.png"
              alt="Relaxing by the Narayani River"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
