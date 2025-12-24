import Image from "next/image";
import HeroMotion from "./HeroMotion";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* background img */}
      <div className="absolute inset-0 scale-105 animate-slow-zoom">
        <Image
          src="/images/rooms/heroroom.jpg"
          alt="Luxury Room Hero Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/40" />
      </div>

      <HeroMotion />
    </section>
  );
}
