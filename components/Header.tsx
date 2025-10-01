'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              Elite Sports Cars
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href="/inventory" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Inventory
              </Link>
              <Link 
                href="/team" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Team
              </Link>
              <Link 
                href="/news" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                News
              </Link>
            </nav>
            
            {/* Desktop CTA Button */}
            <Link
              href="/inventory"
              className="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors"
            >
              View Inventory
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 relative z-50"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40">
          <nav className="container mx-auto px-4 py-8 pt-24 flex flex-col gap-6">
            <Link 
              href="/inventory" 
              className="text-gray-300 hover:text-white transition-colors text-lg"
              onClick={closeMobileMenu}
            >
              Inventory
            </Link>
            <Link 
              href="/team" 
              className="text-gray-300 hover:text-white transition-colors text-lg"
              onClick={closeMobileMenu}
            >
              Team
            </Link>
            <Link 
              href="/news" 
              className="text-gray-300 hover:text-white transition-colors text-lg"
              onClick={closeMobileMenu}
            >
              News
            </Link>
            <Link
              href="/inventory"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors text-center text-lg mt-4"
              onClick={closeMobileMenu}
            >
              View Inventory
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}