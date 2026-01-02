"use client";
import React, { useState } from "react";

export default function Login({ isOpen, onSwitchToSignup, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-3xl bg-[#f5f1ea] p-6 sm:p-8 shadow-2xl">
        {/* header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-[#2f4f3e]">
            Welcome Back
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Login to manage your resort bookings
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-[#2f4f3e]">Email</label>
            <input
              type="email"
              placeholder="admin@resort.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#d6cfc2] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#2f4f3e] focus:ring-1 focus:ring-[#2f4f3e]"
            />
          </div>

          <div>
            <label className="text-sm text-[#2f4f3e]">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#d6cfc2] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#2f4f3e] focus:ring-1 focus:ring-[#2f4f3e]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#2f4f3e] py-3 text-sm font-medium text-[#f5f1ea] transition hover:bg-[#243d30]"
          >
            Login
          </button>
        </form>

        {/* footer */}
        <div className="mt-5 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={onSwitchToSignup}
            className="cursor-pointer font-medium text-[#2f4f3e] underline"
          >
            Create one
          </span>
        </div>
      </div>
    </div>
  );
}
