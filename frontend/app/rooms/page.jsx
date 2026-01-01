import HeroSection from "@/components/room/HeroSection";
import Experience from "@/components/universal/Experience";
import Reservation from "@/components/universal/Reservation";
import RoomCard from "@/components/universal/RoomCard";

export const metadata = {
  metadataBase: new URL("https://nvr-pi.vercel.app"),

  title: "Rooms & Suites | Narayani View Resort, Chitwan Nepal",
  description:
    "Explore luxury rooms and suites at Narayani View Resort in Chitwan, Nepal. Enjoy river-view rooms, modern amenities, peaceful nature, and authentic hospitality.",

  keywords: [
    "rooms in chitwan resort",
    "luxury rooms nepal",
    "river view rooms chitwan",
    "narayani view resort rooms",
    "resort accommodation nepal"
  ],

  alternates: {
    canonical: "/rooms",
  },

  openGraph: {
    title: "Rooms & Suites | Narayani View Resort",
    description:
      "Discover luxury rooms and suites at Narayani View Resort with river views and modern comfort.",
    url: "https://nvr-pi.vercel.app/rooms",
    siteName: "Narayani View Resort",
    images: [
      {
        url: "/images/rooms/heroroom.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury rooms at Narayani View Resort in Chitwan Nepal",
      },
    ],
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rooms & Suites | Narayani View Resort",
    description:
      "View luxury rooms and suites at Narayani View Resort in Chitwan, Nepal.",
    images: ["/images/rooms/heroroom.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


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
