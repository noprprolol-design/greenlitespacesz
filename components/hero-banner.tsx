"use client"

import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      
      {/* ===== BACKGROUND VIDEO ===== */}
      <div className="absolute inset-0 z-0">
        <video
          src="/lolz.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ===== CONTENT (CENTER) ===== */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-2xl px-6 text-white text-center">
        </div>
      </div>

    </section>
  )
}
