import { motion } from 'motion/react'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/manageyourpg-logo.svg'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Home', id: 'home', to: '/' },
    { label: 'PG Management App', id: 'pg-management-app', to: '/pg-management-app' },
    { label: 'Features', id: 'features', to: '/#features' },
    { label: 'Screenshots', id: 'screenshots', to: '/#screenshots' },
    { label: 'Pricing', id: 'pricing', to: '/#pricing' },
    { label: 'Careers', id: 'careers', to: '/careers' },
    { label: 'Press Kit', id: 'press', to: '/press' },
  ]

  const supportLinks = [
    { label: 'About', id: 'about', to: '/about' },
    { label: 'Contact', id: 'contact', to: '/#contact' },
    { label: 'Privacy Policy', id: 'privacy', to: '/privacy' },
    { label: 'Terms of Service', id: 'terms', to: '/terms' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/manageyourpg', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/manageyourpg', label: 'Twitter / X' },
    { icon: Linkedin, href: 'https://linkedin.com/company/manageyourpg', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/manageyourpg', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@manageyourpg', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.2),transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="MY PG - PG Management Software & App for Indian PG Owners" className="w-12 h-12" />
              <span className="text-2xl font-bold">Manage Your PG</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              All-in-one PG management platform for tenant management, payments,
              expenses, and daily operations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@manageyourpg.com"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@manageyourpg.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919741821179"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9741821179</span>
                </a>
              </li>
              <li className="text-blue-100 pt-2">
                Bangalore, Karnataka<br />
                India
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-center md:text-left">
              © {currentYear} My PG. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20MY%20PG%20-%20India%27s%20best%20PG%20management%20software&url=https://manageyourpg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
                aria-label="Share on X / Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
                Share
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://manageyourpg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                Share
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://manageyourpg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
                Share
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4 pt-4 border-t border-white/10">
            <p className="text-blue-200/60 text-xs">
              MY PG - India's #1 PG Management Software | Serving 500+ PGs across 25+ cities
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-blue-200/60">
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/refund-cancellation" className="hover:text-white transition-colors">
                Refund & Cancellation
              </Link>
              <Link to="/press" className="hover:text-white transition-colors flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                Press Kit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}