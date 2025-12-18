"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, Users, Wifi, Coffee, ChevronLeft, ChevronRight } from "lucide-react"

export default function TentangKamiPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#tentang-kami"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Tentang GreenLitSpace</h1>
          <p className="text-xl text-white/90 text-center">Membangun Tempat Kosong Menjadi Tempat Literasi</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Video Profil */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Video Profil GreenLitSpace</h2>
          <br />
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200 shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Cy0o9ijfgck"
                title="GreenLiteSpace Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ===== MANUFAKTUR DI BAWAH VIDEO PROFILE ===== */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Manufaktur</h2>
          
          {/* Gallery */}
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
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fasilitas Utama */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Fasilitas Utama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex flex-col items-center justify-center gap-3">
                <BookOpen className="w-8 h-8 text-cyan-500" />
                <div>
                  <h4 className="font-semibold text-gray-900">Koleksi Lengkap</h4>
                  <p className="text-sm text-gray-600 mt-1">50.000+ buku fisik dan digital</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex flex-col items-center justify-center gap-3">
                <Users className="w-8 h-8 text-cyan-500" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ruang Baca</h4>
                  <p className="text-sm text-gray-600 mt-1">Kapasitas 500 pengunjung</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex flex-col items-center justify-center gap-3">
                <Wifi className="w-8 h-8 text-cyan-500" />
                <div>
                  <h4 className="font-semibold text-gray-900">WiFi Gratis</h4>
                  <p className="text-sm text-gray-600 mt-1">High-speed internet untuk semua area</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex flex-col items-center justify-center gap-3">
                <Coffee className="w-8 h-8 text-cyan-500" />
                <div>
                  <h4 className="font-semibold text-gray-900">Kafe & Lounge</h4>
                  <p className="text-sm text-gray-600 mt-1">Area santai dengan F&B</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="bg-white rounded-lg sm:rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Detail Arsitektur & Konstruksi</h2>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 text-center">Konsep Desain</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span className="text-center w-full">Arsitektur modern minimalis dengan elemen hijau</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span className="text-center w-full">Penggunaan material ramah lingkungan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span className="text-center w-full">Ventilasi alami dan pencahayaan optimal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span className="text-center w-full">Sistem pengelolaan air hujan</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 text-center">Spesifikasi Bangunan</h3>
              <ul className="space-y-2 text-gray-700">
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
                  <span className="text-gray-700">Green Building</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== TESTIMONI VIDEO DI PALING BAWAH ===== */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Testimoni video</h2>
          <br />
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200 shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oo07EqPLvM4"
                title="Testimoni GreenLitSpace"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}