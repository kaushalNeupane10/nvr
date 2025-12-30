import BookingHero from "../../components/BookingHero";
import BookForm from "../../components/BookForm";

export const metadata = {
  metadataBase: new URL("https://nvr-pi.vercel.app/"),

  title: "Narayani View Resort | Best Resort in Nepal Near Chitwan",
  description:
    "Narayani View Resort is one of the best resorts in Nepal offering river views, jungle safari, authentic Tharu culture, luxury rooms, and peaceful nature stays.",

  keywords: [
    "resort in nepal",
    "best resort in nepal",
    "narayani view resort",
    "chitwan resort",
    "jungle safari resort nepal",
    "river view resort nepal",
    "tharu culture resort",
    "luxury resort nepal",
    "family resort nepal"
  ],

  openGraph: {
    title: "Narayani View Resort – Best Nature Resort in Nepal",
    description:
      "Enjoy stunning Narayani river views, jungle safari experiences, authentic Tharu culture, and luxury comfort in Nepal.",
    url: "https://nvr-pi.vercel.app/",
    siteName: "Narayani View Resort",
    images: [
      {
        url: "https://nvr-pi.vercel.app/images/about/narayaniscene.png",
        width: 1200,
        height: 630,
        alt: "Narayani View Resort with river and nature view in Nepal",
      },
    ],
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Narayani View Resort | Best Resort in Nepal",
    description:
      "Experience breathtaking river views, safari adventures, and peaceful nature stays in Nepal.",
    images: ["/images/about/narayaniscene.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://nvr-pi.vercel.app/",
  },

  other: {
    "geo.region": "NP",
    "geo.placename": "Nepal",
    "geo.position": "27.7172;85.3240",
    "ICBM": "27.7172, 85.3240",
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
