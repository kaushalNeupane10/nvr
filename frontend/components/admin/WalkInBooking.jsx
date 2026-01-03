"use client";

import { useState } from "react";

export default function WalkInBooking() {
  const [form, setForm] = useState({
    guest: "",
    room: "",
    checkIn: "",
    checkOut: "",
  });

  return (
    <section className="rounded-2xl bg-[#FBF7EF] border border-[#E5E1D8] p-5 sm:p-6 lg:p-8">
      
      {/* header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#00311F]">
          Walk-In Booking
        </h2>
        <p className="text-sm text-neutral-600 mt-1">
          Register guests arriving without prior reservation
        </p>
      </div>

      {/* form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

        {/* guest name */}
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1.5">
            Guest Name
          </label>
          <input
            type="text"
            placeholder="Full name of guest"
            className="w-full rounded-xl border border-[#D8D3C7] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#00311F]"
          />
        </div>

        {/* room*/}
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1.5">
            Room
          </label>
          <select
            className="w-full rounded-xl border border-[#D8D3C7] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#00311F]"
          >
            <option value="">Select room type</option>
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Suite</option>
          </select>
        </div>

        {/* check-in */}
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1.5">
            Check-In Date
          </label>
          <input
            type="date"
            className="w-full rounded-xl border border-[#D8D3C7] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#00311F]"
          />
        </div>

        {/* check-out */}
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1.5">
            Check-Out Date
          </label>
          <input
            type="date"
            className="w-full rounded-xl border border-[#D8D3C7] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#00311F]"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:justify-end">
        <button
          className="inline-flex items-center justify-center rounded-xl bg-[#00311F] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#012619]"
        >
          Confirm Walk-In Booking
        </button>
      </div>
    </section>
  );
}
