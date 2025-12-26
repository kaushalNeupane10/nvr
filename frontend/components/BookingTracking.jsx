"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function BookingTracker() {
  const [bookingId, setBookingId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking Booking ID: ${bookingId} for ${email}`);
  };

  return (
    <section className="w-full bg-[#00311F] py-20 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Track Your Booking
        </h2>
        <p className="mt-4 text-white text-base md:text-lg">
          Enter your booking details below to check your reservation status instantly.
        </p>
      </div>

      {/* Vertical Form Card */}
      <div className="max-w-3xl mx-auto bg-[#F3F0E9] rounded-3xl shadow-2xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* booking id */}
          <div className="flex flex-col">
            <label className="mb-2 text-[#00311F] font-medium">Booking ID</label>
            <input
              type="text"
              placeholder="Enter your Booking ID"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              className="w-full px-5 py-4 border-2 border-[#00311F] bg-[#FFF7E6] rounded-xl placeholder-[#00311F]/70 focus:outline-none focus:ring-2 focus:ring-[#00311F] focus:ring-offset-1 transition-all"
              required
            />
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label className="mb-2 text-[#00311F] font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 border-2 border-[#00311F] bg-[#FFF7E6] rounded-xl placeholder-[#00311F]/70 focus:outline-none focus:ring-2 focus:ring-[#00311F] focus:ring-offset-1 transition-all"
              required
            />
          </div>

          {/* submit btn */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#00311F] to-[#00532D] text-white rounded-xl flex items-center justify-center gap-3 font-semibold hover:scale-105 transition-all"
          >
            <FaSearch /> Track Booking
          </button>
        </form>
      </div>
    </section>
  );
}
