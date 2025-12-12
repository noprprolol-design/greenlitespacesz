"use client"

import Image from "next/image"
import Link from "next/link"

const libraries = [
  {
    id: 1,
    name: "Bintaro",
    subtitle: "Bintarolite",
    image: "/bintaro-library-modern-architecture.jpg",
    link: "/perpustakaan/bintaro",
  },
  {
    id: 2,
    name: "Pamulang",
    subtitle: "Pamulanglit",
    image: "/pamulang-library-sustainable-design.jpg",
    link: "/perpustakaan/pamulang",
  },
  {
    id: 3,
    name: "Ciputat",
    subtitle: "Ciputatlit",
    image: "/ciputat-library-premium-building.jpg",
    link: "/perpustakaan/ciputat",
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Perpustakaan Terbaru */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Perpustakaan Terbaru</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            Perpustakaan terbaru dari GreenLiteSpace. Semakin lengkap dengan lingkungan hijau dan fasilitas lengkap.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {libraries.map((library) => (
              <Link
                key={library.id}
                href={library.link}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 sm:h-52 md:h-56">
                  <Image src={library.image || "/placeholder.svg"} alt={library.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900">{library.name}</h3>
                  <p className="text-sm text-gray-600">{library.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
          <button className="text-primary font-semibold hover:opacity-80 transition">
            Lihat semua perpustakaan &gt;
          </button>
        </div>
      </div>
    </section>
  )
}
