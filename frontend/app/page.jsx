import WhyChooseUs from "@/components/WhyChooseUs";
import BookRoom from "@/components/BookRoom";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
export default function page() {
  return (
    <>
      <Reservation/>
      <WhyChooseUs/>
      <BookRoom/>
      <Experience />
      <Testimonials/>
    </>
  )
}
