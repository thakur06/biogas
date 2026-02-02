import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-black md:px-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
           <img src='/src/assets/images/biogas_footer.png' className='h-16'/>
            <p className="text-gray-600 text-sm">
              Providing innovative solutions for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@biogaseng.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Biogas Engineering
3816 Stineman Ct
Suite #203
Long Beach, CA 90808 USA</li>
            </ul>
          </div>
        </div>

        {/* Copyright + Socials */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center">
          <p className="flex-1 text-center text-sm text-gray-600">
            © {new Date().getFullYear()}  Biogas Engineering Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-green-600 transition-colors"
            >
              <BsLinkedin size={26} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-green-600 transition-colors"
            >
              <FaFacebookSquare size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
