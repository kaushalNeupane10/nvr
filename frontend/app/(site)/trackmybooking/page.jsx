import BookingTracker from "@/components/trackMyBooking/BookingTracking";

export const metadata = {
  metadataBase: new URL("https://nvr-pi.vercel.app"),

  title: "Track My Booking | Narayani View Resort",
  description:
    "Track or manage your booking at Narayani View Resort in Chitwan, Nepal. Check reservation status, dates, and booking details easily.",

  alternates: {
    canonical: "/track-my-booking",
  },

  openGraph: {
    title: "Track My Booking | Narayani View Resort",
    description:
      "Check and manage your reservation at Narayani View Resort in Chitwan, Nepal.",
    url: "https://nvr-pi.vercel.app/track-my-booking",
    siteName: "Narayani View Resort",
    images: [
      {
        url: "/images/about/narayaniscene.png",
        width: 1200,
        height: 630,
        alt: "Track booking at Narayani View Resort in Chitwan Nepal",
      },
    ],
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Track My Booking | Narayani View Resort",
    description:
      "Track your booking status at Narayani View Resort in Chitwan, Nepal.",
    images: ["/images/about/narayaniscene.png"],
  },

  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return (
    <>
     <BookingTracker/> 
    </>
  )
}
