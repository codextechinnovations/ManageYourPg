import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/manageyourpg-logo.svg'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

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
    { label: 'Home', id: 'home', hash: '#home', link: '/' },
    { label: 'List Your PG', id: 'list-your-pg', hash: '#property-listing', link: '/list-your-pg' },
    { label: 'Franchise', id: 'franchise', hash: '#franchise', link: '/franchise' },
    { label: 'About', id: 'about', hash: '#about', link: '/about' },
    { label: 'Contact', id: 'contact', hash: '#contact', link: '/#contact' },
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
          <Link 
            to="/"
            onClick={() => {
              setIsMobileMenuOpen(false)
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
          </Link>

          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => {
              if (item.link === '/about' || item.link.startsWith('/') && !item.link.startsWith('/#')) {
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-[#1a1a4e] transition-colors relative group font-medium"
                    role="menuitem"
                    itemScope
                    itemType="https://schema.org/Action"
                    itemProp="target"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] group-hover:w-full transition-all duration-300"></span>
                    <meta itemProp="name" content={item.label} />
                  </Link>
                )
              }
              return (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }
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
              )
            })}
            <div
              className="relative"
              onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
              onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
            >
              <Link
                to="/features"
                onClick={() => setIsFeaturesDropdownOpen(false)}
                className="text-gray-700 hover:text-[#1a1a4e] transition-colors relative group font-medium flex items-center gap-1"
                onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
              >
                Features
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isFeaturesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <AnimatePresence>
                {isFeaturesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[240px] z-50"
                  >
                    <Link to="/features" className="block px-4 py-2.5 text-sm font-semibold text-[#1a1a4e] hover:bg-blue-50 transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>All Features</Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link to="/features/rent-collection-software" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>Rent Collection</Link>
                    <Link to="/features/online-rent-collection-app" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>WhatsApp Integration</Link>
                    <Link to="/features/tenant-management-system" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>Tenant Management</Link>
                    <Link to="/features/digital-check-in-for-pg" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>Digital Check-in</Link>
                    <Link to="/features/occupancy-management-software" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>Occupancy Tracking</Link>
                    <Link to="/features/multi-property-management" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>Multi-Property</Link>
                    <Link to="/features/short-stay-and-long-stay-management" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>Short Stay & Long Stay</Link>
                    <Link to="/features/pg-accounting-software" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsFeaturesDropdownOpen(false)}>Accounting & Reports</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsCitiesDropdownOpen(true)}
              onMouseLeave={() => setIsCitiesDropdownOpen(false)}
            >
              <button
                onClick={() => setIsCitiesDropdownOpen(!isCitiesDropdownOpen)}
                className="text-gray-700 hover:text-[#1a1a4e] transition-colors relative group font-medium flex items-center gap-1"
              >
                Cities
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCitiesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] group-hover:w-full transition-all duration-300"></span>
              </button>
              <AnimatePresence>
                {isCitiesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[200px] z-50"
                  >
                    <Link to="/city/bangalore" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsCitiesDropdownOpen(false)}>Bangalore</Link>
                    <Link to="/city/mumbai" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsCitiesDropdownOpen(false)}>Mumbai</Link>
                    <Link to="/city/delhi-ncr" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsCitiesDropdownOpen(false)}>Delhi NCR</Link>
                    <Link to="/city/pune" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsCitiesDropdownOpen(false)}>Pune</Link>
                    <Link to="/city/hyderabad" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsCitiesDropdownOpen(false)}>Hyderabad</Link>
                    <Link to="/city/chennai" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors" onClick={() => setIsCitiesDropdownOpen(false)}>Chennai</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold"
              role="menuitem"
              aria-label="Get Started - Contact MY PG"
            >
              Get Started
            </Link>
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
              {navItems.map((item) => {
                if (item.link === '/about' || item.link.startsWith('/') && !item.link.startsWith('/#')) {
                  return (
                    <Link
                      key={item.id}
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  )
                }
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault()
                        scrollToSection(item.id)
                      }
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                )
              })}
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Features</div>
                <div className="grid grid-cols-1 gap-1">
                  <Link to="/features" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-semibold text-[#1a1a4e] hover:bg-gray-100 rounded-lg transition-colors">All Features</Link>
                  <Link to="/features/rent-collection-software" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Rent Collection</Link>
                  <Link to="/features/online-rent-collection-app" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">WhatsApp Integration</Link>
                  <Link to="/features/tenant-management-system" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Tenant Management</Link>
                  <Link to="/features/digital-check-in-for-pg" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Digital Check-in</Link>
                  <Link to="/features/occupancy-management-software" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Occupancy Tracking</Link>
                  <Link to="/features/multi-property-management" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Multi-Property</Link>
                  <Link to="/features/short-stay-and-long-stay-management" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Short Stay & Long Stay</Link>
                  <Link to="/features/pg-accounting-software" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Accounting & Reports</Link>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Cities</div>
                <div className="grid grid-cols-2 gap-1">
                  <Link to="/city/bangalore" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Bangalore</Link>
                  <Link to="/city/mumbai" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Mumbai</Link>
                  <Link to="/city/delhi-ncr" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Delhi NCR</Link>
                  <Link to="/city/pune" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Pune</Link>
                  <Link to="/city/hyderabad" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Hyderabad</Link>
                  <Link to="/city/chennai" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Chennai</Link>
                </div>
              </div>
              <Link
                to="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-2.5 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-lg transition-all font-semibold text-center"
                role="menuitem"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}