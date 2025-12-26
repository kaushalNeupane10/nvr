"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        absolute top-0 left-0 w-full z-20 transition-all duration-300
        ${scrolled ? "fixed bg-[#00311F] shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* logo */}
        <div className="relative w-48 h-12 md:w-56 md:h-14">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            fill
            sizes="(max-width: 768px) 120px, 180px"
            className="object-contain"
            priority
          />
        </div>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-[#9FD3A9]">Home</Link></li>
          <li><Link href="/about" className="hover:text-[#9FD3A9]">About Us</Link></li>
          <li><Link href="/rooms" className="hover:text-[#9FD3A9]">Rooms</Link></li>
          <li><Link href="/gallery" className="hover:text-[#9FD3A9]">Gallery</Link></li>

          <li>
            <Link
              href="/book"
              className="ml-4 bg-white text-[#00311F] px-5 py-2 rounded-full font-semibold hover:bg-[#9FD3A9] transition"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </div>
        </button>
      </div>

      {/* mobile menu */}
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
