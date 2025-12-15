"use client"

export default function BintaroContent() {
  return (
    <section id="bintaro" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tentang GreenLitSpace</h2>
          <br />
          <div className="text-gray-600">
            <p className="mb-6 leading-relaxed" style={{ textAlign: "justify" }}>
              GreenLitSpace adalah pengembang perpustakaan modern yang berkomitmen untuk menghadirkan ruang belajar yang inovatif, nyaman, dan berkelanjutan. Kami merancang perpustakaan yang tidak hanya berfungsi sebagai tempat membaca, tetapi juga sebagai ruang inspiratif yang mendukung peningkatan literasi, kreativitas, dan kolaborasi di berbagai komunitas.
              Dengan mengutamakan desain ramah lingkungan serta integrasi teknologi terkini, GreenLiteSpace berfokus pada penciptaan perpustakaan masa depan yang relevan dengan kebutuhan generasi saat ini. Setiap proyek yang kami kembangkan memenuhi standar kualitas tinggi untuk memberikan pengalaman belajar yang aman, nyaman, dan efektif bagi seluruh pengguna.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visi & Misi</h2>
          <br />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed" style={{ textAlign: "justify" }}>
                Menjadi pengembang perpustakaan modern terdepan di Indonesia yang mengintegrasikan teknologi,
                kenyamanan, dan keberlanjutan dalam setiap proyeknya untuk menciptakan ruang belajar yang inspiratif.
              </p>
            </div>
            
            <div className="hidden md:block text-gray-300 text-4xl">•</div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed" style={{ textAlign: "justify" }}>
                Menyediakan perpustakaan berkualitas tinggi dengan fasilitas lengkap yang terintegrasi dengan lingkungan
                sekitar, memberikan nilai investasi terbaik, dan membangun komunitas pembelajar yang solid.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Keunggulan Kami</h2>
          <br />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Lokasi Strategis</h3>
              <p className="text-gray-600" style={{ textAlign: "justify" }}>
                Berada di area premium dengan aksesibilitas tinggi ke berbagai fasilitas publik dan komersial
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Konsep Co-Living</h3>
              <p className="text-gray-600" style={{ textAlign: "justify" }}>
                Desain modern yang mendukung interaksi sosial dan kolaborasi antar penghuni
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Fasilitas Lengkap</h3>
              <p className="text-gray-600" style={{ textAlign: "justify" }}>
                Dilengkapi dengan berbagai fasilitas penunjang untuk kenyamanan dan produktivitas maksimal
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}