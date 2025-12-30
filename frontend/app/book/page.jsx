import BookingHero from "../../components/BookingHero";
import BookForm from "../../components/BookForm";
export default function Page() {
  return (
    <>
      <BookingHero />

      {/* form */}
      <section className="py-20 bg-[#FFF7E6] px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left info */}
          <div>
            <h2 className="text-3xl font-bold text-[#00311F]">
              Your Reservation
            </h2>
            <p className="mt-4 text-[#4B6B5F]">
              Fill in your details and we’ll get back to you to confirm your
              booking.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#4B6B5F]">
              <p>✔ Instant booking confirmation</p>
              <p>✔ Free cancellation within 24 hours</p>
              <p>✔ Secure & trusted service</p>
            </div>
          </div>

          {/* right form */}
          <BookForm />
        </div>
      </section>
    </>
  );
}
