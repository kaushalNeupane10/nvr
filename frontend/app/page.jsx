import WhyChooseUs from "@/components/WhyChooseUs";
import BookRoom from "@/components/BookRoom";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import HomeHeroSection from "@/components/HomeHeroSection";
export default function page() {
  return (
    <>
      <HomeHeroSection/>
      <Reservation/>
      <WhyChooseUs/>
      <BookRoom/>
      <Experience />
      <Testimonials/>
    </>
  )
}
