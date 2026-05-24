import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Download, ExternalLink, Mail, Star, Users, MapPin, Smartphone, BarChart3 } from 'lucide-react'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'
import { ShareButton } from '../components/ShareButton'

export function PressKit() {
  const stats = [
    { icon: Users, value: '500+', label: 'PGs Managed' },
    { icon: Star, value: '4.8/5', label: 'User Rating' },
    { icon: MapPin, value: '25+', label: 'Cities' },
    { icon: Smartphone, value: '5,000+', label: 'Tenants Served' },
    { icon: BarChart3, value: '80%', label: 'Less Late Payments' },
  ]

  return (
    <>
      <Helmet>
        <title>Press Kit - MY PG | Brand Assets, Logos, Screenshots & Media Resources</title>
        <meta name="description" content="Download MY PG brand assets including logos, product screenshots, company facts, and media resources. Authorized press materials for journalists and partners." />
        <link rel="canonical" href="https://manageyourpg.com/press" />
        <meta property="og:title" content="Press Kit - MY PG | Brand Assets & Media Resources" />
        <meta property="og:description" content="Download MY PG brand assets including logos, product screenshots, company facts, and media resources." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema([{ label: 'Home', path: '/' }, { label: 'Press Kit', path: '/press' }]))}</script>
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
              <Download className="w-4 h-4" />
              Press Kit
            </div>
            <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Press Kit', path: '/press' }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MY PG{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                Press & Media Kit
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Brand assets, company facts, and media resources for journalists, analysts, and partners covering MY PG — India's leading PG management software platform.
            </p>
            <div className="flex items-center justify-center gap-4">
              <ShareButton text="MY PG Press Kit - Brand assets, logos, screenshots and company facts" url="https://manageyourpg.com/press" />
              <a href="mailto:press@manageyourpg.com" className="inline-flex items-center gap-2 text-sm text-[#1a1a4e] hover:underline">
                <Mail className="w-4 h-4" />
                press@manageyourpg.com
              </a>
            </div>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About MY PG</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  MY PG is India's #1 rated PG (Paying Guest) management software platform, helping PG owners and property managers automate rent collection, manage tenants with digital KYC, track room occupancy in real-time, and generate comprehensive expense reports — all from a single dashboard.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded to address the lack of organized digital tools for India's rapidly growing PG accommodation sector, MY PG serves over 500 PG owners managing more than 5,000 tenants across 25+ cities. The platform is available as an Android mobile app and a web dashboard, supporting 6 Indian languages.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  MY PG has achieved a 4.8 out of 5 star rating from over 500 verified user reviews, making it the highest-rated PG management software in India. The platform reduces late rent payments by up to 80% through automated WhatsApp reminders and digital receipts.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#1a1a4e]" />
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Assets</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Logo & Brand Guidelines</h3>
                <p className="text-gray-600 mb-6">
                  Our brand assets include the MY PG logo in various formats (PNG, SVG), brand color palette, typography guidelines, and usage rules. All assets are free to use for editorial coverage with proper attribution.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:press@manageyourpg.com?subject=Brand%20Assets%20Request"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a4e] text-white rounded-full hover:bg-[#1e3a8a] transition-all text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Request Brand Assets
                  </a>
                  <a
                    href="mailto:press@manageyourpg.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Press Inquiries
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Screenshots</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-gray-600 mb-6">
                  High-resolution product screenshots are available for editorial use. Our platform includes dashboard analytics, tenant management, payment tracking, room occupancy, notice sending, and side menu navigation screens.
                </p>
                <p className="text-gray-600 mb-6">
                  Screenshots demonstrate MY PG's mobile-first interface with features including real-time occupancy tracking, automated WhatsApp rent reminders, digital KYC storage, expense categorization, CCTV integration, and multi-property management dashboard.
                </p>
                <a
                  href="mailto:press@manageyourpg.com?subject=Screenshot%20Request"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a4e] text-white rounded-full hover:bg-[#1e3a8a] transition-all text-sm"
                >
                  <Download className="w-4 h-4" />
                  Request Screenshots
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <dl className="grid md:grid-cols-2 gap-6">
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Company Name</dt>
                    <dd className="text-gray-600">MY PG (Manage Your PG)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Headquarters</dt>
                    <dd className="text-gray-600">Bangalore, Karnataka, India</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Product Launch</dt>
                    <dd className="text-gray-600">2024</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Platform</dt>
                    <dd className="text-gray-600">Android App + Web Dashboard</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Languages</dt>
                    <dd className="text-gray-600">English, Hindi, Tamil, Telugu, Kannada, Malayalam</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Pricing</dt>
                    <dd className="text-gray-600">7-day free trial, ₹499/month or ₹3,999/year</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">User Rating</dt>
                    <dd className="text-gray-600">4.8 / 5 (500+ reviews)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Contact</dt>
                    <dd className="text-gray-600">
                      <a href="mailto:press@manageyourpg.com" className="text-[#1a1a4e] hover:underline">press@manageyourpg.com</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ for Journalists</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">What problem does MY PG solve?</h3>
                  <p className="text-gray-600">MY PG solves the lack of organized digital management tools for India's PG accommodation sector. Before MY PG, PG owners relied on manual spreadsheets, paper records, and phone calls to manage tenants, track rent payments, and monitor occupancy. MY PG automates these workflows and provides real-time analytics from a single dashboard.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">How many PG owners use MY PG?</h3>
                  <p className="text-gray-600">Over 500 PG owners actively use MY PG across 25+ cities in India, managing more than 5,000 tenants. The platform processes thousands of rent transactions monthly with an 80% reduction in late payments.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">What is MY PG's pricing model?</h3>
                  <p className="text-gray-600">MY PG offers a 7-day free trial with full access to all features and no credit card required. After the trial, Premium plans cost ₹499 per month or ₹3,999 per year (saving 33%). Competitor pricing typically ranges from ₹1,500 to ₹3,000 per month.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">How can I cite MY PG statistics in my article?</h3>
                  <p className="text-gray-600">All statistics on our website include named sources. For press citations, please attribute data to "MY PG internal analytics, 2026" or "MY PG user survey, 2025-2026" as indicated on each statistic. Contact press@manageyourpg.com for verified data requests.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Media Inquiries</h2>
                <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                  For interview requests, product demo access, or data verification, reach out to our press team.
                </p>
                <a
                  href="mailto:press@manageyourpg.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a4e] rounded-full font-medium hover:bg-blue-50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  press@manageyourpg.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
