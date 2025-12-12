"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, Building2, MapPin, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Tentang Kami", href: "#tentang-kami", icon: Info },
    { label: "Fasilitas", href: "#fasilitas", icon: Building2 },
    { label: "Lokasi", href: "#lokasi", icon: MapPin },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-white to-cyan-50 shadow-lg border-b border-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent group-hover:from-cyan-700 group-hover:to-teal-700 transition">
              GreenLiteSpace
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-300 font-medium cursor-pointer"
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              )
            })}
            <div className="flex items-center gap-2 ml-4">
              <Link href="/login">
                <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:text-cyan-600">
                  <LogIn size={18} />
                  Masuk
                </Button>
              </Link>
              <Link href="/register">
                <Button className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700">
                  <UserPlus size={18} />
                  Daftar
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-cyan-50 rounded-lg transition" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-cyan-600" /> : <Menu size={24} className="text-cyan-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-cyan-100 pt-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-300 font-medium cursor-pointer"
                >
                  <Icon size={20} />
                  {item.label}
                </a>
              )
            })}
            <div className="pt-4 border-t border-cyan-100 space-y-2">
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-transparent">
                  <LogIn size={18} />
                  Masuk
                </Button>
              </Link>
              <Link href="/register" className="block">
                <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700">
                  <UserPlus size={18} />
                  Daftar
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
