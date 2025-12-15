"use client"

import Image from "next/image"
import Link from "next/link"

const libraries = [
  {
    id: 1,
    name: "Bintaro",
    subtitle: "Graha Raya",
    image: "/bintaroy.jpg",
    link: "/perpustakaan/bintaro",
  },
  {
    id: 2,
    name: "Pamulang",
    subtitle: "Pamulang",
    image: "/pamulang-library-sustainable-design.jpg",
    link: "/perpustakaan/pamulang",
  },
  {
    id: 3,
    name: "Ciputat",
    subtitle: "Ciputat",
    image: "/bintarok.jpg",
    link: "/perpustakaan/ciputat",
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Tentang kami
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Perpustakaan terbaru dari GreenLiteSpace
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {libraries.map((library) => (
            <Link
              key={library.id}
              href={library.link}
              className="bg-white rounded-lg shadow hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <Image
                  src={library.image}
                  alt={library.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{library.name}</h3>
                <p className="text-sm text-gray-500">{library.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
