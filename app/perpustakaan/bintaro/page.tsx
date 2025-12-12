"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Users, BookOpen, Wifi, Coffee, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function BintaroLibraryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    { src: "/modern-library-reading-room-with-natural-light.jpg", alt: "Ruang Baca Modern" },
    { src: "/library-vertical-garden-green-wall-architecture.jpg", alt: "Vertical Garden" },
    { src: "/modern-library-study-area-with-computers.jpg", alt: "Area Belajar dengan Komputer" },
    { src: "/bintaro-library-modern-architecture.jpg", alt: "Eksterior Perpustakaan" },
    { src: "/modern-library-glass-facade-natural-lighting.jpg", alt: "Fasad Kaca dengan Cahaya Alami" },
    { src: "/digital-library-multimedia-room-with-computers.jpg", alt: "Ruang Multimedia Digital" },
    { src: "/modern-coworking-space-in-library.jpg", alt: "Co-Working Space" },
    { src: "/luxury-library-wooden-facade-elegant-design.jpg", alt: "Interior Elegan" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 hover:opacity-80 transition text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Perpustakaan Bintaro</h1>
          <p className="text-base sm:text-lg md:text-xl text-cyan-50">
            Bintarolite - Perpustakaan Modern dengan Arsitektur Berkelanjutan
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-xl">
          <Image
            src="/bintaro-library-modern-architecture.jpg"
            alt="Perpustakaan Bintaro"
            fill
            className="object-cover"
          />
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Tentang Perpustakaan Bintaro</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Perpustakaan Bintaro adalah fasilitas perpustakaan modern yang menggabungkan konsep green building dengan
              teknologi terkini. Bangunan ini dirancang dengan vertical garden yang menciptakan suasana sejuk dan asri.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Dengan luas 3.500 m², perpustakaan ini dapat menampung hingga 500 pengunjung sekaligus dan menyediakan
              lebih dari 50.000 koleksi buku fisik dan digital.
            </p>
            <div className="flex items-center gap-2 text-cyan-600 text-sm sm:text-base">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">Lokasi: Bintaro, Jakarta Selatan</span>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Fasilitas Utama</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">Koleksi Lengkap</h4>
                  <p className="text-xs sm:text-sm text-gray-600">50.000+ buku fisik dan digital</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">Ruang Baca</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Kapasitas 500 pengunjung</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">WiFi Gratis</h4>
                  <p className="text-xs sm:text-sm text-gray-600">High-speed internet untuk semua area</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">Kafe & Lounge</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Area santai dengan F&B</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Galeri Foto</h2>
          <div className="relative">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-gray-900">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
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
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md sm:rounded-lg overflow-hidden transition ${
                    currentImageIndex === index ? "ring-2 sm:ring-4 ring-cyan-500" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Detail Arsitektur & Konstruksi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Konsep Desain</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Arsitektur modern minimalis dengan elemen hijau</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Penggunaan material ramah lingkungan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Ventilasi alami dan pencahayaan optimal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Sistem pengelolaan air hujan</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Spesifikasi Bangunan</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex justify-between">
                  <span className="font-semibold">Luas Bangunan:</span>
                  <span>3.500 m²</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Jumlah Lantai:</span>
                  <span>4 Lantai</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Tahun Selesai:</span>
                  <span>2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Sertifikasi:</span>
                  <span>Green Building</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
