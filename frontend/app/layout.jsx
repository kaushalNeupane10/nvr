import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naryani View Resort",
  description: "Narayani View Resort is based on Golaghat,Meghauli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
        "@context": "https://schema.org",
        "@type": ["Hotel", "Resort", "LodgingBusiness"],
        "@id": "https://nvr-pi.vercel.app/#hotel",
        "name": "Narayani View Resort",
        "alternateName": "Narayani View Resort Nepal",
        "description": "Narayani View Resort is a premium riverside resort in Nepal offering comfortable rooms, scenic Narayani river views, authentic local cuisine, and warm hospitality.",
        "url": "https://nvr-pi.vercel.app/",
        "logo": "https://nvr-pi.vercel.app/images/logo/logo.png",
        "image": [
          "https://nvr-pi.vercel.app/images/about/narayaniscene.png",
          "https://nvr-pi.vercel.app/images/rooms/heroroom.jpg",
          "https://nvr-pi.vercel.app/images/rooms/room1.jpg"
        ],
        "telephone": "+9779845974748",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Narayani Riverside",
          "addressLocality": "Golaghat, Meghauli",
          "addressRegion": "Bagmati Province",
          "postalCode": "44200",
          "addressCountry": "NP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.598231019429466,
          "longitude": 84.16782884047078
        },
        "checkinTime": "14:00",
        "checkoutTime": "12:00"
      }`,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
