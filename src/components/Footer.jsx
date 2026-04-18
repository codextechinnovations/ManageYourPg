import { motion } from 'motion/react'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react'
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
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Screenshots', id: 'screenshots' },
    { label: 'Pricing', id: 'pricing' },
  ]

  const supportLinks = [
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
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
              <img src={logo} alt="MY PG Logo" className="w-12 h-12" />
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
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
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
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
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
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
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
            <div className="flex flex-wrap gap-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}