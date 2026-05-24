import { motion } from 'motion/react'
import { CheckCircle2, Smartphone, Monitor, Clock, Shield, Zap, HeadphonesIcon, ArrowLeft, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'

export default function AboutUs() {
  const features = [
    'Manage tenants, check-ins, and rent payments seamlessly',
    'Track expenses and generate comprehensive reports',
    'Access from anywhere - mobile app or web dashboard',
    'Designed for both small and large PG businesses',
  ]

  const stats = [
    { value: '99.9%', label: 'Uptime', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { value: '24/7', label: 'Support', icon: HeadphonesIcon, color: 'from-emerald-500 to-emerald-600' },
    { value: 'Secure', label: 'Data', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { value: 'Fast', label: 'Performance', icon: Zap, color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | MY PG - #1 PG Management Software India</title>
        <meta name="description" content="Learn about MY PG - India's leading PG management software. Founded in 2020, serving 5000+ PG owners across 25+ cities with 50000+ tenants managed." />
        <link rel="canonical" href="https://manageyourpg.com/about" />
        <meta property="og:title" content="About Us | MY PG - PG Management Software" />
        <meta property="og:description" content="Learn about MY PG - India's leading PG management software serving 5000+ PG owners across 25+ cities." />
        <meta property="og:url" content="https://manageyourpg.com/about" />
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema([{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }]))}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }]} />
      </div>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full"
            >
              About MY PG
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Your Complete{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                PG Management Solution
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Manage Your PG helps PG owners and managers across India handle daily property
              operations from one place. Say goodbye to spreadsheets and manual
              tracking - manage everything digitally with ease. Available in all major cities.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                  MY PG?
                </span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are India's leading PG management platform, trusted by over 5000+ PG owners
                across 25+ cities. Our mission is to simplify PG management through innovative
                technology, helping owners save time, reduce stress, and grow their business.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg"
                >
                  <Smartphone className="w-6 h-6 text-[#1a1a4e]" />
                  <span className="font-medium text-gray-900">Mobile App Available</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg"
                >
                  <Monitor className="w-6 h-6 text-[#1a1a4e]" />
                  <span className="font-medium text-gray-900">Web Dashboard</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:border-blue-300 transition-all h-full">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg mx-auto`}
                      >
                        <stat.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="text-center">
                        <motion.p
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className="text-2xl font-bold bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent mb-1"
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
              At MY PG, we believe that every PG owner deserves a simple, powerful tool to manage their business.
              Founded in 2020, we have grown from a small startup to India's most trusted PG management platform.
              Our team of 50+ professionals works tirelessly to innovate and deliver the best experience
              for PG owners and tenants alike. We are committed to transforming the way PG businesses
              operate across India, one property at a time.
            </p>

            <div className="mt-12 grid md:grid-cols-4 gap-6">
              {[
                { value: '500+', label: 'Active PG Owners', desc: 'Trusted users across India' },
                { value: '5,000+', label: 'Tenants Managed', desc: 'Through our platform' },
                { value: '25+', label: 'Cities Served', desc: 'PAN India coverage' },
                { value: '4.8/5', label: 'User Rating', desc: 'From 500+ verified reviews' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-20"
          >
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="w-6 h-6 text-[#1a1a4e]" />
              <h2 className="text-2xl font-bold text-gray-900">Common Questions About MY PG</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: 'What is MY PG and how does it work?',
                  a: 'MY PG is a cloud-based PG management software that helps PG owners automate rent collection, manage tenants with digital KYC, track room occupancy in real-time, and generate expense reports. PG owners download the Android app or access the web dashboard, add their property details and tenants, and the platform handles rent reminders, payment tracking, receipts, and reporting automatically.'
                },
                {
                  q: 'How many PG owners use MY PG in India?',
                  a: 'As of 2026, MY PG serves over 500 PG owners and property managers across 25+ Indian cities who collectively manage more than 5,000 tenants through the platform. The software is rated 4.8 out of 5 stars based on verified user reviews.'
                },
                {
                  q: 'What makes MY PG different from other property management software?',
                  a: 'MY PG is specifically designed for the Indian PG market, supporting local payment methods like UPI, Google Pay, and PhonePe, providing WhatsApp Business API integration for tenant communication, offering multi-language support (Hindi, English, Tamil, Telugu, Kannada, Malayalam), and including India-specific features like police verification, Aadhaar KYC, and CCTV integration.'
                },
                {
                  q: 'Is MY PG available on both mobile and web?',
                  a: 'Yes, MY PG is available as an Android mobile app for on-the-go management and as a web dashboard accessible from any modern browser. Both platforms sync in real-time, allowing PG owners to manage their properties from anywhere. The Android app supports Android 5.0 and above.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
