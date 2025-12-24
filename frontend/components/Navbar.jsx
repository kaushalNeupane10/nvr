"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#00311F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          LOGO
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-[#9FD3A9] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#9FD3A9] transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/rooms" className="hover:text-[#9FD3A9] transition">
              Rooms
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-[#9FD3A9] transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/book"
              className="ml-4 bg-white text-[#00311F] px-5 py-2 rounded-full font-semibold hover:bg-[#9FD3A9] transition"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="open navigation menu"
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#00311F] px-6 pb-6">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About Us</Link></li>
            <li><Link href="/rooms" onClick={() => setOpen(false)}>Rooms</Link></li>
            <li><Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
            <li>
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 bg-white text-[#00311F] px-5 py-2 rounded-full font-semibold"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
