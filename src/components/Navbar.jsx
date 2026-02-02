import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTopState, setIsAtTopState] = useState(true)
  const lastScrollYRef = useRef(0)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Omai', path: '/omai' },
    { name: 'Markets', path: '/markets' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' }
  ]

  const transparentPaths = ['/', '/omai', '/careers', '/services', '/markets', '/about'];
  const blueThemePaths = ['/omai'];

  const isTransparentPath = transparentPaths.includes(location.pathname);
  const isBlueTheme = blueThemePaths.includes(location.pathname);

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

  const isTransparent = isAtTopState && isTransparentPath;

  // Dynamic Styles based on Theme
  const activeColorClass = isBlueTheme ? 'text-blue-600 border-b-2 border-blue-600' : 'text-green-600 border-b-2 border-green-600';
  const hoverColorClass = isBlueTheme ? 'hover:text-blue-600' : 'hover:text-green-600';
  const transparentHoverClass = isBlueTheme ? 'hover:text-blue-400' : 'hover:text-green-500';
  const buttonGradientClass = isBlueTheme ? 'bg-linear-to-r from-blue-600 to-cyan-500' : 'bg-linear-to-r from-blue-600 to-green-600';
  const mobileActiveBg = isBlueTheme ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600';

  return (
    <nav className={`${isTransparent ? 'bg-transparent' : 'bg-white shadow-md'} fixed w-full top-0 z-50 h-20 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-20 font-semibold">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" onClick={handleLinkClick}>
              <img src='/src/assets/images/biogaseng.png' className='h-16 ' alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${isActive(link.path)
                  ? activeColorClass
                  : isTransparent
                    ? `text-white ${transparentHoverClass}`
                    : `text-gray-800 ${hoverColorClass}`
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`block px-10 py-2 rounded-md text-base font-medium text-center transition-colors font-lato-thin duration-200 ${isActive('/contact')
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-green-600 text-white hover:bg-green-700'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
                } ${hoverColorClass} focus:outline-none`}
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-100 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-screen w-full bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className={`text-xl font-bold font-lato-thin uppercase tracking-widest ${isBlueTheme ? 'text-blue-600' : 'text-green-600'}`}>Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-800 transition-colors"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`block text-2xl font-helvetica-light font-bold uppercase tracking-wider transition-colors duration-200 ${isActive(link.path)
                      ? isBlueTheme ? 'text-blue-600' : 'text-green-600'
                      : `text-gray-800 ${hoverColorClass}`
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-center transition-colors duration-200 ${isActive('/contact')
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
