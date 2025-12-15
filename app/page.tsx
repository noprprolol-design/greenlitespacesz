// app/page.tsx
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import IntroSection from "@/components/intro-section"
// import ProductShowcase from "@/components/product-showcase" // ← COMMENT INI
import AboutSection from "@/components/about-section"
import FacilitiesSection from "@/components/facilities-section"
import Footer from "@/components/footer"
import BintaroContent from "@/components/bintaro-content"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section id="home">
        <HeroBanner />
      </section>
      <BintaroContent /> {/* Konten Bintaro */}
      <IntroSection />
      <section id="tentang-kami">
        <AboutSection />
      </section>
      <section id="fasilitas">
        <FacilitiesSection />
      </section>
      <Footer />
    </main>
  )
}