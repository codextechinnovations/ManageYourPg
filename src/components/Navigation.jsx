import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import logo from '../assets/manageyourpg-logo.svg'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'home', hash: '#home' },
    { label: 'Features', id: 'features', hash: '#features' },
    { label: 'Screenshots', id: 'screenshots', hash: '#screenshots' },
    { label: 'Pricing', id: 'pricing', hash: '#pricing' },
    { label: 'About', id: 'about', hash: '#about' },
    { label: 'Contact', id: 'contact', hash: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            className="flex items-center space-x-3 group"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <img 
              src={logo} 
              alt="MY PG - India's #1 PG Management Software Logo"
              className="w-12 h-12 transition-transform group-hover:scale-110"
              width="48"
              height="48"
              loading="eager"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Manage Your PG
            </span>
            <meta itemProp="name" content="MY PG Solutions" />
            <meta itemProp="url" content="https://manageyourpg.com/" />
            <meta itemProp="logo" content="https://manageyourpg.com/favicon.png" />
          </a>

          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="text-gray-700 hover:text-[#1a1a4e] transition-colors relative group font-medium"
                role="menuitem"
                itemScope
                itemType="https://schema.org/Action"
                itemProp="target"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] group-hover:w-full transition-all duration-300"></span>
                <meta itemProp="name" content={item.label} />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold"
              role="menuitem"
              aria-label="Get Started - Contact MY PG"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-haspopup="true"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.hash}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                className="block w-full px-4 py-2.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-lg transition-all font-semibold text-center"
                role="menuitem"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}