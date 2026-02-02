import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import footerLogo from '../assets/images/biogas_footer.png';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-20 border-t border-white/5 font-helvetica-light">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
          {/* Company Info - Always visible */}
          <div className="col-span-1 md:col-span-2">
            <img src={footerLogo} alt="Biogas Engineering" className="h-10 md:h-12 mb-6 md:mb-8 object-contain opacity-90" />
            <p className="text-gray-400 text-xs md:text-sm max-w-md leading-loose font-semibold opacity-70 uppercase tracking-widest">
              Providing innovative solutions for a sustainable future through advanced biogas engineering and technology.
            </p>
          </div>

          {/* Quick Links - Hidden on mobile/tablet */}
          <div className="font-semibold uppercase tracking-widest hidden md:block">
            <h4 className="text-xs font-bold text-white mb-8 opacity-50">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 text-[10px] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-green-500 text-[10px] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-green-500 text-[10px] transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 text-[10px] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Hidden on mobile/tablet */}
          <div className="font-semibold uppercase tracking-widest hidden md:block">
            <h4 className="text-xs font-bold text-white mb-8 opacity-50">Contact Us</h4>
            <ul className="space-y-6 text-[10px] text-gray-400">
              <li className="flex items-start">
                <span className="text-white opacity-50 mr-2 text-nowrap">EMAIL:</span>
                <a href="mailto:info@biogaseng.com" className="hover:text-green-500 transition-colors">INFO@BIOGASENG.COM</a>
              </li>
              <li className="flex items-start">
                <span className="text-white opacity-50 mr-2 text-nowrap">PHONE:</span>
                <a href="tel:+15551234567" className="hover:text-green-500 transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start leading-loose">
                <span className="text-white opacity-50 mr-2 text-nowrap">ADDRESS:</span>
                <span>3816 STINEMAN CT, SUITE #203<br />LONG BEACH, CA 90808 USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Simplified on mobile */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-[9px] md:text-[10px] text-gray-500 order-2 md:order-1 font-bold tracking-[0.2em] uppercase text-center md:text-left">
            © {new Date().getFullYear()} BIOGAS ENGINEERING INC. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6 md:gap-8 order-1 md:order-2">
            {/* Terms/Privacy - Simplified on mobile */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-[9px] md:text-[10px] font-bold tracking-widest transition-colors uppercase">Terms</Link>
              <span className="text-gray-800">•</span>
              <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-[9px] md:text-[10px] font-bold tracking-widest transition-colors uppercase">Privacy</Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <BsLinkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookSquare size={20} className="md:w-[22px] md:h-[22px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
