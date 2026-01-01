import Image from "next/image";

export default function BookingHero() {
  return (
    <>
    {/* hero img */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/rooms/heroroom.jpg"
          alt="Book your stay"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Book Your Stay
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Reserve your luxury experience at Narayani View Resort
          </p>
        </div>
      </section>
    </>
  )
}
