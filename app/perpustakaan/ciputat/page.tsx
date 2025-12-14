"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Users, BookOpen, Wifi, Coffee, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function CiputatLibraryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    { src: "/luxury-library-wooden-facade-elegant-design.jpg", alt: "Fasad Kayu Premium" },
    { src: "/vip-library-lounge-luxury-interior.jpg", alt: "VIP Lounge Mewah" },
    { src: "/private-study-room-library-premium.jpg", alt: "Private Study Room" },
    { src: "/ciputat-library-premium-building.jpg", alt: "Eksterior Premium" },
    { src: "/modern-library-reading-room-with-natural-light.jpg", alt: "Ruang Baca Eksklusif" },
    { src: "/digital-library-multimedia-room-with-computers.jpg", alt: "Multimedia Premium" },
    { src: "/modern-coworking-space-in-library.jpg", alt: "Premium Co-Working" },
    { src: "/modern-library-glass-facade-natural-lighting.jpg", alt: "Interior Elegan" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition">
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Perpustakaan Ciputat</h1>
          <p className="text-xl text-cyan-50 text-center">Ciputat - Perpustakaan Premium dengan Desain Elegan</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image src="/ciputat-library-premium-building.jpg" alt="Perpustakaan Ciputat" fill className="object-cover" />
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Perpustakaan Ciputat</h2>
            <p className="text-gray-700 leading-relaxed mb-4"style={{ textAlign: "justify" }}>
              Perpustakaan Ciputat menampilkan desain premium dengan fasad kayu vertikal yang menciptakan kesan hangat
              dan elegan. Bangunan ini dirancang untuk memberikan pengalaman membaca yang eksklusif dengan interior
              berkelas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4"style={{ textAlign: "justify" }}>
              Dengan koleksi buku langka dan area VIP lounge, perpustakaan ini menjadi destinasi favorit para peneliti
              dan pencinta literatur premium.
            </p>
            <div className="flex items-center gap-2 text-cyan-600">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Lokasi: Ciputat, Tangerang Selatan</span>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fasilitas Utama</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-cyan-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Koleksi Premium</h4>
                  <p className="text-sm text-gray-600">Buku langka & edisi terbatas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-cyan-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">VIP Lounge</h4>
                  <p className="text-sm text-gray-600">Area eksklusif untuk member premium</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wifi className="w-6 h-6 text-cyan-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Private Study Room</h4>
                  <p className="text-sm text-gray-600">Ruang belajar pribadi ber-AC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="w-6 h-6 text-cyan-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Café</h4>
                  <p className="text-sm text-gray-600">Kafe dengan menu berkualitas tinggi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Galeri Foto</h2>
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-900">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-cover"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition ${
                    currentImageIndex === index ? "ring-4 ring-cyan-500" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb- text-center">Detail Arsitektur & Konstruksi</h2>
          <br></br>
          <br></br>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Konsep Desain</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Arsitektur kontemporer dengan aksen kayu premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Interior mewah dengan material berkualitas tinggi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Akustik ruangan optimal untuk konsentrasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Sistem keamanan canggih dengan CCTV dan access control</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Spesifikasi Bangunan</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span className="font-semibold">Luas Bangunan:</span>
                  <span>3.800 m²</span>
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
                  <span>Premium Building</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
