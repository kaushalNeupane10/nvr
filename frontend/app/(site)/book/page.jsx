import BookingHero from "@/components/bookNow/BookingHero";
import BookForm from "@/components/bookNow/BookForm";

export const metadata = {
  metadataBase: new URL("https://nvr-pi.vercel.app"),

  title: "Book Now | Narayani View Resort, Chitwan Nepal",
  description:
    "Book your stay at Narayani View Resort in Chitwan, Nepal. Reserve luxury rooms with river views, jungle safari access, and authentic Tharu hospitality.",

  keywords: [
    "book resort in nepal",
    "book hotel in chitwan",
    "narayani view resort booking",
    "resort booking nepal",
    "luxury resort booking chitwan"
  ],

  alternates: {
    canonical: "/book",
  },

  openGraph: {
    title: "Book Your Stay | Narayani View Resort",
    description:
      "Reserve your luxury stay at Narayani View Resort with river views, safari experiences, and peaceful nature.",
    url: "https://nvr-pi.vercel.app/book",
    siteName: "Narayani View Resort",
    images: [
      {
        url: "/images/about/narayaniscene.png",
        width: 1200,
        height: 630,
        alt: "Book luxury stay at Narayani View Resort in Chitwan Nepal",
      },
    ],
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Book Now | Narayani View Resort",
    description:
      "Book your stay at Narayani View Resort in Chitwan, Nepal.",
    images: ["/images/about/narayaniscene.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


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
