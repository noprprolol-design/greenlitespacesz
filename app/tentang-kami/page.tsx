import { ArrowLeft, Building2, Users, Target, Award, BookOpen, Wifi, Coffee } from "lucide-react"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Tentang GreenLitSpace</h1>
          <p className="text-xl text-white/90 text-center">Membangun Tempat Kosong Menjadi Tempat Literasi</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Vision & Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visi & Misi</h2>
          <br />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
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
                <Award className="w-8 h-8 text-white" />
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

        {/* ===== BAGIAN INI DI BAWAH ===== */}
        
        {/* Fasilitas Utama */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Fasilitas Utama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Koleksi Lengkap</h4>
                  <p className="text-sm text-gray-600 mt-1">50.000+ buku fisik dan digital</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ruang Baca</h4>
                  <p className="text-sm text-gray-600 mt-1">Kapasitas 500 pengunjung</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">WiFi Gratis</h4>
                  <p className="text-sm text-gray-600 mt-1">High-speed internet untuk semua area</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
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
                  <span>Arsitektur modern minimalis dengan elemen hijau</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Penggunaan material ramah lingkungan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Ventilasi alami dan pencahayaan optimal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Sistem pengelolaan air hujan</span>
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

      </div>
    </div>
  )
}