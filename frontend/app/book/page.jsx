"use client";

import { useState } from "react";
import BookingHero from "../../components/BookingHero";
export default function BookNowPage() {
  const [form, setForm] = useState({
    room: "",
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Booking request submitted!");
  };

  return (
    <>
      <BookingHero/>

      {/* form */}
      <section className="py-20 bg-[#FFF7E6] px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* left info */}
          <div>
            <h2 className="text-3xl font-bold text-[#00311F]">
              Your Reservation
            </h2>
            <p className="mt-4 text-[#4B6B5F]">
              Fill in your details and we’ll get back to you to confirm your booking.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#4B6B5F]">
              <p>✔ Instant booking confirmation</p>
              <p>✔ Free cancellation within 24 hours</p>
              <p>✔ Secure & trusted service</p>
            </div>
          </div>

          {/* right form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
          >
            {/* room */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Room
              </label>
              <select
                name="room"
                required
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00311F]"
              >
                <option value="">Choose a room</option>
                <option>Deluxe Room</option>
                <option>Family Suite</option>
                <option>Luxury Cottage</option>
              </select>
            </div>

            {/* name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
                placeholder="John Doe"
              />
            </div>

            {/* email and phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="rounded-lg border px-4 py-2"
                placeholder="Email address"
              />
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className="rounded-lg border px-4 py-2"
                placeholder="Phone number"
              />
            </div>

            {/* dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="checkIn"
                required
                onChange={handleChange}
                className="rounded-lg border px-4 py-2"
              />
              <input
                type="date"
                name="checkOut"
                required
                onChange={handleChange}
                className="rounded-lg border px-4 py-2"
              />
            </div>

            {/* guest */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Guests
              </label>
              <input
                type="number"
                min="1"
                max="10"
                name="guests"
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            {/* message section */}
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
              placeholder="Special requests (optional)"
            />

            {/* submit btn */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#00311F] text-white font-semibold hover:bg-[#004F2F] transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
