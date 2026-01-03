"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F7F4ED] text-[#00311F]">
      {/* desktop sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen flex-col bg-[#00311F] text-white">
        {/* logo + title */}
        <div className="px-6 py-6 flex items-center space-x-3 border-b border-white/15">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              fill
              sizes="(max-width: 768px) 40px, 80px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-semibold tracking-wide truncate">
            Narayani View Resort
          </span>
        </div>

        {/* navigation bar */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link
            href="/admin"
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619] transition"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/reservations"
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619] transition"
          >
            Reservations
          </Link>

          <Link
            href="/admin/rooms"
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619] transition"
          >
            Rooms
          </Link>

          <Link
            href="/admin/walkins"
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619] transition"
          >
            Walk-ins
          </Link>

          <Link
            href="/admin/settings"
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619] transition"
          >
            Settings
          </Link>
        </nav>

        {/* footer of the sidebar*/}
        <div className="px-2 py-4 text-xs text-white/60 border-t border-white/15">
          © 2026 Narayani View Resort. All rights reserved.
        </div>
      </aside>

      {/* mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* mobile sidebar*/}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#00311F] text-white transform transition-transform md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 border-b border-white/15">
  
  {/*logo */}
  <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
    <Image
      src="/images/logo/logo.png"
      alt="Narayani View Resort logo"
      fill
      sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
      className="object-contain"
      priority
    />
  </div>

  <span className="text-sm sm:text-base md:text-lg font-semibold truncate text-center flex-1">
    Narayani View Resort
  </span>

  {/* close btn */}
  <button
    onClick={() => setOpen(false)}
    className="p-2 rounded-md hover:bg-white/10 transition flex-shrink-0"
    aria-label="Close menu"
  >
    <X size={20} className="sm:size-[22px]" />
  </button>

</div>


        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link
            href="/admin"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619]"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/reservations"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619]"
          >
            Reservations
          </Link>
          <Link
            href="/admin/rooms"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619]"
          >
            Rooms
          </Link>
          <Link
            href="/admin/walkins"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619]"
          >
            Walk-ins
          </Link>
          <Link
            href="/admin/settings"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#012619]"
          >
            Settings
          </Link>
        </nav>

        <div className="px-6 py-4 text-xs text-white/60 border-t border-white/15">
          © 2026 Narayani View Resort. All rights reserved.
        </div>
      </aside>

      {/* display area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* hamburger */}
        <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow-sm">
          <button onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
          <span className="font-semibold text-[#00311F]">Dashboard</span>
          <div className="w-6" />
        </header>

        {/* main display content */}
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
