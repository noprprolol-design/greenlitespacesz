"use client"

import Link from "next/link"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">GreenLiteSpace</h3>
            <p className="text-gray-300 text-sm mb-4">
              Membangun tempat tinggal yang terintegrasi dengan berbagai fasilitas modern.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Chat">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Phone">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Fasilitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Hunian
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Komersial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Produk Terbaru
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Promo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+62 877 5312 3000</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@graharaya.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
          <p className="text-center md:text-left">&copy; 2025 GreenLiteSpace. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=6287753123000&text=Halo.. Saya tertarik dengan GreenLiteSpace"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-40"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  )
}
