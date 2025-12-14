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
      </div>
    </section>
  )
}
