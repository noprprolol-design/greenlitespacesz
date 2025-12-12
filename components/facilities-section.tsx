"use client"

import { Clock, MapPin, Zap, Leaf, ShoppingCart, Dumbbell } from "lucide-react"

const facilities = [
  {
    icon: Clock,
    title: "Tol",
    description:
      "Akses tol JORR W2N langsung ke Bandara dan pusat kota Jakarta. Hanya 5 menit menuju gerbang tol Parigi.",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description: "Dekat dengan pusat bisnis, sekolah, dan fasilitas umum. Akses mudah ke berbagai area penting.",
  },
  {
    icon: Zap,
    title: "Utilitas Lengkap",
    description: "Sistem keamanan 24 jam, listrik stabil, dan air bersih berkualitas tinggi.",
  },
  {
    icon: Leaf,
    title: "Ruang Hijau",
    description: "Taman komunitas yang luas dan area bermain anak yang aman untuk keluarga.",
  },
  {
    icon: ShoppingCart,
    title: "Pusat Perbelanjaan",
    description: "Akses mudah ke mall dan pusat perbelanjaan terdekat untuk kebutuhan sehari-hari.",
  },
  {
    icon: Dumbbell,
    title: "Fasilitas Olahraga",
    description: "Gym, kolam renang, lapangan tenis, dan fasilitas olahraga lainnya tersedia.",
  },
]

export default function FacilitiesSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          SARANA DAN PRASARANA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon
            return (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
