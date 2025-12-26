import Navbar from "./Navbar";
import HeroMotion from "./HeroMotion";

export default function HomeHeroSection() {
  return (
    <section className="relative w-full h-[90vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">

      {/* navbar on top of video */}
      <Navbar />

      {/* video*/}
      <video
        src="/images/home/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/35 md:bg-black/45" />

      {/* text animation */}
      <HeroMotion title="Where Nature Meets Comfort" subtitle="Wake up to the soothing flow of the Narayani River and enjoy peaceful stays surrounded by nature."/>
    </section>
  );
}
