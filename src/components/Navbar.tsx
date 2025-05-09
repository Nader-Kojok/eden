"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/hajj-umrah', label: 'Hajj & Omra' },
    { href: '/contact', label: 'Contactez-nous', isButton: true },
  ]

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md' : 'bg-white/80'
      } backdrop-blur-md`}
      style={{ height: 'auto' }}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-8 sm:h-10 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              aria-label="Retour à l'accueil"
            >
              <div className="relative h-5 w-20 sm:h-6 sm:w-24 md:h-8 md:w-32">
                <Image
                  src="/eden_logo.svg"
                  alt="Eden Travel Logo"
                  fill
                  sizes="(max-width: 640px) 5rem, (max-width: 768px) 6rem, 8rem"
                  className="object-contain object-left transition-transform hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    link.isButton
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'text-gray-700 hover:text-blue-600'
                  } ${
                    pathname === link.href && !link.isButton
                      ? 'text-blue-600'
                      : ''
                  }`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                  {pathname === link.href && !link.isButton && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-0.5 sm:p-1 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle}
            >
              <span className="sr-only">
                {isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              </span>
              {!isMenuOpen ? (
                <svg
                  className="block h-3.5 w-3.5 sm:h-4 sm:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-3.5 w-3.5 sm:h-4 sm:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        id="mobile-menu"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="mobile-menu-button"
      >
        <div className="px-2 pt-1 pb-2 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-2 py-1 text-xs sm:text-sm sm:px-3 sm:py-1.5 rounded-md font-medium transition-colors duration-200 ${
                link.isButton
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              } ${
                pathname === link.href && !link.isButton
                  ? 'text-blue-600 bg-blue-50'
                  : ''
              }`}
              role="menuitem"
              aria-current={pathname === link.href ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 