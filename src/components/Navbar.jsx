import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTopState, setIsAtTopState] = useState(true)
  const lastScrollYRef = useRef(0)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' }
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const threshold = 10
    const handleScroll = () => {
      const current = window.scrollY || 0
      const isAtTop = current <= threshold
      setIsAtTopState(isAtTop)

      if (isMenuOpen) {
        setIsVisible(true)
        lastScrollYRef.current = current
        return
      }

      if (isAtTop) {
        setIsVisible(true)
      } else if (current < lastScrollYRef.current) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      lastScrollYRef.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initialize state on mount
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  return (
    <nav className={`${isAtTopState ? 'bg-transparent' : 'bg-white shadow-md'} fixed w-full top-0 z-50 h-20 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-20 font-semibold">
          {/* Logo */}
          <div className="shrink-0">
            <img src='/src/assets/images/biogaseng.png' className='h-16 '/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-green-600 border-b-2 border-green-600'
                    : isAtTopState
                      ? 'text-white hover:text-green-500'
                      : 'text-gray-800 hover:text-green-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`py-2 text-xs rounded-xs transition-colors duration-200 px-10 font-bold ${
                isActive('/contact')
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/85 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-transparent backdrop-blur-xs border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium text-center transition-colors duration-200 ${
                isActive('/contact')
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
