"use client";
import { GiBeveledStar } from "react-icons/gi";
export default function Location() {
  return (
    <section className="w-full bg-[#00311F] py-16 px-4 md:px-10 lg:px-20">
      {/* heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <GiBeveledStar className="text-white text-3xl md:text-4xl" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">
            We Are Located Here
          </h2>
        </div>
        <p className="mt-4 text-white text-sm md:text-base">
          Experience peace and comfort at our beautiful resort location,
          surrounded by nature and tranquility.
        </p>
      </div>

      {/* map */}
      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-[300px] md:h-[420px] lg:h-[520px]">
          <iframe
            title="Resort Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56584.87781301965!2d84.10122422167969!3d27.576322199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39945b783814ec5f%3A0xd5a1fd981667d400!2sNarayani%20View%20Resort!5e0!3m2!1sen!2snp!4v1767171726404!5m2!1sen!2snp"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Narayani View Resort Location Map"
          />
        </div>
      </div>
      
    </section>
  );
}
