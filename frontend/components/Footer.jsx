import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00311F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-wide">
              Narayani View Resort
            </h3>
            <p className="mt-4 text-sm text-[#D1E5DC] leading-relaxed">
              Experience comfort, elegance, and unforgettable stays. Your
              perfect destination for relaxation and luxury.
            </p>

            {/* social icons  */}
            <div className="flex gap-4 mt-6">
              <a
                className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-[#00311F] transition"
                href="#"
              >
                <FaFacebookF />
              </a>
              <a
                className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-[#00311F] transition"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-[#00311F] transition"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-[#00311F] transition"
                href="#"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* links and route */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#D1E5DC]">
              <li>
                <Link className="hover:text-white transition block" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition block"
                  href="/rooms"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition block" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition block" href="#">
                  Reservations
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition block" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-[#D1E5DC]">
              <li>Luxury Rooms</li>
              <li>24/7 Room Service</li>
              <li>Free Wi-Fi</li>
              <li>Restaurant & Dining</li>
              <li>Airport Pickup</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[#D1E5DC]">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>Golaghat, Meghauli, Chitwan</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+977 9800000000</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>info@.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#D1E5DC]">
          <p>
            © {new Date().getFullYear()} Narayani View Resort. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
