import { ArrowLeft, Building2, Users, Target, Award } from "lucide-react"
import Link from "next/link"

export default function TentangKamiPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Tentang GreenLiteSpace</h1>
          <p className="text-xl text-white/90 text-center">Membangun Tempat Kosong Menjadi Tempat Literasi</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision & Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visi & Misi</h2>
          <br></br>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed"style={{ textAlign: "justify" }}>
                Menjadi pengembang perpustakaan modern terdepan di Indonesia yang mengintegrasikan teknologi,
                kenyamanan, dan keberlanjutan dalam setiap proyeknya untuk menciptakan ruang belajar yang inspiratif.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <p className="mb-6 leading-relaxed" style={{ textAlign: "justify" }}>
                Menyediakan perpustakaan berkualitas tinggi dengan fasilitas lengkap yang terintegrasi dengan lingkungan
                sekitar, memberikan nilai investasi terbaik, dan membangun komunitas pembelajar yang solid.
              </p>
            </div>
          </div>
        </div>

        {/* About Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tentang GreenLiteSpace</h2>
          <br></br>
          <div className="prose prose-lg max-w-none text-gray-600">
           <p className="mb-6 leading-relaxed" style={{ textAlign: "justify" }}>
              GreenLiteSpace adalah pengembang perpustakaan modern yang berkomitmen untuk menghadirkan ruang belajar yang inovatif, nyaman, dan berkelanjutan. Kami merancang perpustakaan yang tidak hanya berfungsi sebagai tempat membaca, tetapi juga sebagai ruang inspiratif yang mendukung peningkatan literasi, kreativitas, dan kolaborasi di berbagai komunitas.
              Dengan mengutamakan desain ramah lingkungan serta integrasi teknologi terkini, GreenLiteSpace berfokus pada penciptaan perpustakaan masa depan yang relevan dengan kebutuhan generasi saat ini. Setiap proyek yang kami kembangkan memenuhi standar kualitas tinggi untuk memberikan pengalaman belajar yang aman, nyaman, dan efektif bagi seluruh pengguna.
            </p>

          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Keunggulan Kami</h2>
          <br></br>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokasi Strategis</h3>
              <p className="text-gray-600">
                Berada di area premium dengan aksesibilitas tinggi ke berbagai fasilitas publik dan komersial
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Konsep Co-Living</h3>
              <p className="text-gray-600">
                Desain modern yang mendukung interaksi sosial dan kolaborasi antar penghuni
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fasilitas Lengkap</h3>
              <p className="text-gray-600">
                Dilengkapi dengan berbagai fasilitas penunjang untuk kenyamanan dan produktivitas maksimal
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Video Profil GreenLiteSpace</h2>
          <br></br>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200 shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0pYcAs1egFI"
                title="GreenLiteSpace Video"
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
