"use client"

import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Video */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-video rounded-lg sm:rounded-2xl overflow-hidden bg-gray-200">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Cy0o9ijfgck" // 🔴 DIGANTI DI SINI
                title="GreenLiteSpace Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Selangkah Kemana Saja
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed"style={{ textAlign: "justify" }}>
              Bukan hanya sebuah rumah, GreenLitSpace membangun tempat tinggal yang terintegrasi dengan berbagai
              fasilitas. Bagai sebuah orkestra yang dilengkapi dengan konsep co-living yang terjalin harmonis, hunian di
              GreenLitSpace sangat sesuai dengan era milenium saat ini.
            </p>
            <Link
              href="/tentang-kami"
              className="inline-block bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Selengkapnya &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
