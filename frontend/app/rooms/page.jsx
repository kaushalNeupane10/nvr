import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
import Reservation from "@/components/Reservation";
import RoomCard from "@/components/RoomCard";
export default function Page() {
  return (
    <>
      <HeroSection />
      <section className="py-12 bg-[#FFF7E6] px-6">
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
          <RoomCard />
        </div>
      </section>
      <Experience />
      <Reservation />
    </>
  );
}
