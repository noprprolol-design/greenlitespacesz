"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Bintaro",
    subtitle: "Perpustakaan Modern dengan Arsitektur Berkelanjutan",
    type: "video",
    video: "/lolz.mp4",
    location: "Lokasi Strategis Bintaro",
  },
  {
    id: 2,
    title: "Pamulang",
    subtitle: "Pusat Pembelajaran dengan Fasilitas Terkini",
    type: "image",
    image: "/pamulang-library-sustainable-design.jpg",
    location: "Pusat Kota Pamulang",
  },
  {
    id: 3,
    title: "Ciputat",
    subtitle: "Perpustakaan Premium dengan Desain Elegan",
    type: "image",
    image: "/bintarok.jpg",
    location: "Lokasi Premium Ciputat",
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  // ===== SWIPE STATE =====
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length)

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  // ===== TOUCH HANDLERS =====
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current

    if (distance > 50) next()
    if (distance < -50) prev()

    touchStartX.current = null
    touchEndX.current = null
  }

  const slide = slides[current]

  return (
    <section
      className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        {slide.type === "video" ? (
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl mb-4">
            {slide.subtitle}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            {slide.location}
          </p>
        </div>
      </div>

      {/* ===== BUTTONS ===== */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* ===== DOTS ===== */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
