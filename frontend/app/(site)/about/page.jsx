import React from 'react'
import AboutUsHero from "@/components/about/AboutUsHero";
import Location from "@/components/about/Location";

export const metadata = {
  metadataBase: new URL("https://nvr-pi.vercel.app"),

  title: "About Narayani View Resort | Chitwan, Nepal",
  description:
    "Learn about Narayani View Resort in Chitwan, Nepal. Discover our story, Tharu culture, jungle safari experiences, and nature-inspired luxury stays.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Narayani View Resort",
    description:
      "Explore the story, culture, and nature behind Narayani View Resort in Chitwan, Nepal.",
    url: "https://nvr-pi.vercel.app/about",
    siteName: "Narayani View Resort",
    images: [
      {
        url: "/images/about/narayaniscene.png",
        width: 1200,
        height: 630,
        alt: "Narayani View Resort surrounded by river and nature",
      },
    ],
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Narayani View Resort",
    description:
      "Discover the story and culture of Narayani View Resort in Chitwan, Nepal.",
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
    <AboutUsHero/>
    <Location/>
    </>
  )
}
