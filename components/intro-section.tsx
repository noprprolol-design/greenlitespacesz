"use client"

export default function IntroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("tentang-kami")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          Perpustakaan Modern untuk Era Digital
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 px-2">
          Bukan hanya sebuah rumah, GreenLiteSpace membangun tempat tinggal yang terintegrasi dengan berbagai fasilitas.
          Bagai sebuah orkestra yang dilengkapi dengan konsep co-living yang terjalin harmonis, hunian di GreenLiteSpace
          sangat sesuai dengan era milenium saat ini.
        </p>
        <button
          onClick={scrollToAbout}
          className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Selengkapnya →
        </button>
      </div>
    </section>
  )
}
