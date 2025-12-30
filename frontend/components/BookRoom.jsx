"use client";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import RoomCard from "@/components/RoomCard";
export default function BookRoom() {
  return (
    <>
      <section className="py-24 bg-[#FFF7E6] px-6">
        <div className="max-w-7xl mx-auto">
          {/* heading*/}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00311F]">
              Our Rooms
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#4B6B5F]">
              Discover our comfortable and beautifully designed rooms for a
              perfect stay.
            </p>
          </div>

          {/* grid and rooms mapin */}
          <RoomCard limit={3}/>
          {/* see more */}
          <div className="flex justify-end mt-12">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-[#00311F] font-semibold hover:text-[#004F2F] transition-colors"
            >
              Explore More
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
