"use client";

export default function Reservation() {
  return (
    <section className="w-full bg-[#FFF7E6] py-6">
      
      {/* container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] overflow-hidden rounded-2xl shadow-lg mt-8">

          {/* left reservation*/}
          <div className="bg-[#00311F] text-white px-8 md:px-14 py-16 flex items-center">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Plan Your Vacation
              </h3>
              <p className="mt-6 text-base md:text-lg text-[#D1E5DC]">
                Escape the ordinary and experience comfort, calm, and luxury.
                Whether it’s a peaceful getaway or a memorable family trip,
                we have the perfect room waiting for you.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm md:text-base">
                <span className="px-4 py-2 bg-white/10 rounded-full">
                  Luxury Comfort
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full">
                  Peaceful Stay
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full">
                  Premium Service
                </span>
              </div>
            </div>
          </div>

          {/* right book your spot*/}
          <div className="bg-[#F3F0E9] px-8 py-16 flex items-center">
            <div className="w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-[#00311F]">
                Book Your Spot
              </h3>
              <p className="mt-4 text-[#4B6B5F]">
                Secure your stay in just a few clicks.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <button className="border-2 border-[#00311F] text-[#00311F] px-6 py-3 rounded-lg font-semibold hover:bg-[#00311F] hover:text-white transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
