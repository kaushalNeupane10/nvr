"use client";
import { useState } from "react";
export default function BookForm() {
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
      <form
        onSubmit={handleSubmit}
        className="bg-[#F3F0E9] rounded-3xl shadow-xl p-8 space-y-6"
      >
        {/* room */}
        <div>
          <label className="block text-sm font-medium mb-1" aria-label="Select room">Select Room</label>
          <select
            aria-label="rooms"
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
          <label className="block text-sm font-medium mb-1" aria-labelledby="full name">Full Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            placeholder="John Doe"
            aria-label="name"
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
            aria-label="email"
          />
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            className="rounded-lg border px-4 py-2"
            placeholder="Phone number"
            aria-label="number"
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
            aria-label="checkIn-date"
          />
          <input
            type="date"
            name="checkOut"
            required
            onChange={handleChange}
            className="rounded-lg border px-4 py-2"
            aria-label="checkOut-date"
          />
        </div>

        {/* guest */}
        <div>
          <label className="block text-sm font-medium mb-1">Guests</label>
          <input
            type="number"
            min="1"
            max="10"
            name="guests"
            placeholder="Number Of Guest"
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            aria-label="numberOfGuest"
          />
        </div>

        {/* message section */}
        <textarea
          name="message"
          rows="4"
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          placeholder="Special requests (optional)"
          aria-label="message"
        />

        {/* submit btn */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#00311F] text-white font-semibold hover:bg-[#004F2F] transition"
          aria-label="submitBtn"
        >
          Confirm Booking
        </button>
      </form>
    </>
  );
}
