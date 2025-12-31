import WhyChooseUs from "@/components/WhyChooseUs";
import BookRoom from "@/components/BookRoom";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import HomeHeroSection from "@/components/HomeHeroSection";

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
    
      <HomeHeroSection/>
      <Reservation/>
      <WhyChooseUs/>
      <BookRoom/>
      <Experience />
      <Testimonials/>
    </>
  )
}
