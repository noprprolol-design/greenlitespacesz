"use client"

import Image from "next/image"
import { MapPin, Users, BookOpen, Wifi, Coffee, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function BintaroContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    { src: "/foto1bintaro.jpg", alt: "Ruang Baca Modern" },
    { src: "/foto2bintaro.jpg", alt: "Vertical Garden" },
    { src: "/foto3bintaro.jpg", alt: "Area Belajar dengan Komputer" },
    { src: "/foto4bintaros.jpg", alt: "Eksterior Perpustakaan" },
    { src: "/foto1bintaro.jpg", alt: "Fasad Kaca dengan Cahaya Alami" },
    { src: "/foto2bintaro.jpg", alt: "Ruang Multimedia Digital" },
    { src: "/foto3bintaro.jpg", alt: "Co-Working Space" },
    { src: "/foto4bintaros.jpg", alt: "Interior Elegan" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="bintaro" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MANUFAKTUR FRAME */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Manufaktur</h2>
          <div className="relative">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg sm:rounded-xl overflow-hidden shadow-xl bg-gray-900">
              <Image
                src={galleryImages[currentImageIndex].src || "/foto4bintaro.jpg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-cover"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-3 sm:mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md overflow-hidden transition ${
                    currentImageIndex === index ? "ring-2 ring-cyan-500" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* About Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tentang GreenLitSpace</h2>
          <br />
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6 leading-relaxed" style={{ textAlign: "justify" }}>
              GreenLitSpace adalah pengembang perpustakaan modern yang berkomitmen untuk menghadirkan ruang belajar yang inovatif, nyaman, dan berkelanjutan. Kami merancang perpustakaan yang tidak hanya berfungsi sebagai tempat membaca, tetapi juga sebagai ruang inspiratif yang mendukung peningkatan literasi, kreativitas, dan kolaborasi di berbagai komunitas.
              Dengan mengutamakan desain ramah lingkungan serta integrasi teknologi terkini, GreenLiteSpace berfokus pada penciptaan perpustakaan masa depan yang relevan dengan kebutuhan generasi saat ini. Setiap proyek yang kami kembangkan memenuhi standar kualitas tinggi untuk memberikan pengalaman belajar yang aman, nyaman, dan efektif bagi seluruh pengguna.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}