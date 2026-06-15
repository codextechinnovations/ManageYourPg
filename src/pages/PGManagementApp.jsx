import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Smartphone,
  CreditCard,
  Users,
  Building2,
  Bell,
  Shield,
  BarChart3,
  Zap,
  CheckCircle2,
  Star,
  Download,
  IndianRupee,
} from 'lucide-react'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'
import { CTAButton } from '../components/CTAButton'
import { buildFAQPage } from '../utils/schema'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'PG Management App', path: '/pg-management-app' },
]

const features = [
  {
    icon: CreditCard,
    title: 'Automated Rent Collection',
    desc: 'Send WhatsApp and SMS rent reminders, collect payments via UPI/Google Pay/PhonePe, and auto-generate digital receipts.',
  },
  {
    icon: Users,
    title: 'Tenant Management',
    desc: 'Store digital KYC, Aadhaar/PAN, photos, agreements, and police verification documents securely in the cloud.',
  },
  {
    icon: Building2,
    title: 'Occupancy Tracking',
    desc: 'Track room and bed occupancy in real-time across all your PG properties from a single mobile dashboard.',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    desc: 'Notify tenants about maintenance, rent dues, notices, and emergencies via WhatsApp and in-app alerts.',
  },
  {
    icon: Shield,
    title: 'Secure Data & Documents',
    desc: '256-bit encryption, role-based access, and automatic daily backups keep owner and tenant data safe.',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    desc: 'View rent collection reports, occupancy trends, expense breakdowns, and P&L statements on the go.',
  },
]

const steps = [
  {
    icon: Download,
    title: 'Download the App',
    desc: 'Install the MY PG management app on your Android phone or access the full-featured web dashboard.',
  },
  {
    icon: Building2,
    title: 'Add Your Property',
    desc: 'Set up rooms, beds, rent amounts, and tenant details in under 30 minutes with guided onboarding.',
  },
  {
    icon: IndianRupee,
    title: 'Start Collecting Rent',
    desc: 'Enable automated reminders and payment links. Tenants pay online and receipts are generated automatically.',
  },
]

const benefits = [
  'Save 10+ hours every week on rent collection and tenant follow-ups',
  'Reduce late payments by up to 80% with automated WhatsApp reminders',
  'Manage unlimited PG properties from one account',
  'Access everything from mobile or web — anytime, anywhere',
  'Generate GST-ready rent receipts and financial reports instantly',
  'Support for English, Hindi, Tamil, Telugu, Kannada, and Marathi',
]

const faqs = [
  {
    q: 'What is a PG management app?',
    a: 'A PG management app is a mobile and web application that helps paying guest (PG) owners automate rent collection, manage tenant KYC, track room occupancy, send notices, and generate financial reports. MY PG is India\'s leading PG management app built specifically for Indian PG owners, hostel operators, and co-living managers.',
  },
  {
    q: 'Which is the best PG management app in India?',
    a: 'MY PG is the best PG management app in India with a 4.8/5 rating from 500+ verified PG owners. It offers rent automation, digital KYC, WhatsApp reminders, UPI payments, multi-property dashboards, and dedicated support — all starting at ₹499/month.',
  },
  {
    q: 'Can I use the PG management app on my phone?',
    a: 'Yes. MY PG works as an Android mobile app and a responsive web dashboard. Owners can manage tenants, collect rent, track occupancy, and view reports from any smartphone, tablet, or computer.',
  },
  {
    q: 'Does the PG management app support online rent collection?',
    a: 'Yes. MY PG supports online rent collection via UPI, Google Pay, PhonePe, Paytm, net banking, debit cards, and credit cards. Tenants receive payment links through WhatsApp and the app, and owners get instant confirmation with auto-generated receipts.',
  },
  {
    q: 'Is the PG management app free to use?',
    a: 'MY PG offers a 7-day free trial with full access and no credit card required. After the trial, plans start at just ₹499/month or ₹3,999/year, making it the most affordable PG management app in India.',
  },
  {
    q: 'Can I manage multiple PG properties with one app?',
    a: 'Yes. MY PG supports unlimited multi-property management. You can switch between properties, view consolidated reports, and manage different room configurations from a single PG management app account.',
  },
]

export function PGManagementApp() {
  return (
    <>
      <Helmet>
        <title>PG Management App | #1 PG Management Software for Owners | MY PG</title>
        <meta
          name="description"
          content="Download the best PG management app in India. Automate rent collection, manage tenant KYC, track occupancy, and generate reports. Free 7-day trial."
        />
        <meta
          name="keywords"
          content="PG management app, PG management software, PG owner app, rent collection app, tenant management app, hostel management app, PG app India, paying guest management app, PG billing app, PG management app download"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://manageyourpg.com/pg-management-app" />
        <meta property="og:title" content="PG Management App | #1 PG Management Software for Owners | MY PG" />
        <meta
          property="og:description"
          content="The best PG management app in India. Automate rent, manage tenants, track occupancy, and collect payments online."
        />
        <meta property="og:url" content="https://manageyourpg.com/pg-management-app" />
        <meta property="og:image" content="https://manageyourpg.com/og-image.png" />
        <meta name="twitter:title" content="PG Management App | #1 for PG Owners in India | MY PG" />
        <meta
          name="twitter:description"
          content="Automate rent collection, tenant management, and occupancy tracking with India\'s best PG management app."
        />
        <meta name="twitter:image" content="https://manageyourpg.com/twitter-card.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'MY PG Management App',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Android',
            description:
              'India\'s #1 PG management app for PG owners. Automate rent collection, tenant KYC, occupancy tracking, and financial reporting.',
            url: 'https://manageyourpg.com/pg-management-app',
            image: 'https://manageyourpg.com/og-image.png',
            offers: {
              '@type': 'Offer',
              price: '499',
              priceCurrency: 'INR',
              priceValidUntil: '2027-12-31',
              description: '7-day FREE trial, then ₹499/month or ₹3,999/year',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '500',
            },
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
        <script type="application/ld+json">{JSON.stringify(buildFAQPage(faqs))}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Start Using the MY PG Management App',
            description: 'Set up the MY PG management app and start collecting rent online in three simple steps.',
            totalTime: 'PT30M',
            step: steps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.desc,
            })),
          })}
        </script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full text-sm font-semibold">
              <Smartphone className="w-4 h-4" />
              #1 PG Management App in India
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Best{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                PG Management App
              </span>{' '}
              for PG Owners
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
              Manage your PG, hostel, or co-living space from anywhere with India&apos;s most trusted PG management app.
              Automate rent collection, track tenant KYC, monitor occupancy, and collect payments online — all from your
              smartphone or web dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton variant="primary" href="https://sales.manageyourpg.com/pgownersignup">
                Get the App Free for 7 Days
              </CTAButton>
              <CTAButton variant="secondary" href="/features" showArrow>
                Explore Features
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in a PG Management App
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From rent reminders to financial reports, MY PG gives PG owners a complete mobile-first solution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why PG Owners Love the MY PG App</h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                <span className="text-2xl font-bold">4.8/5</span>
              </div>
              <p className="text-blue-100 mb-6">
                Rated 4.8 out of 5 stars by 500+ PG owners across Bangalore, Mumbai, Delhi NCR, Pune, Hyderabad, and
                Chennai.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-blue-200">PG Owners</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">5,000+</div>
                  <div className="text-sm text-blue-200">Tenants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How the PG Management App Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and start managing your PG professionally.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#1a1a4e] text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <s.icon className="w-10 h-10 text-[#1a1a4e] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About PG Management Apps
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Zap className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Try the Best PG Management App?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join 500+ PG owners who use MY PG every day to save time, reduce late payments, and grow their business.
          </p>
          <CTAButton variant="green" href="https://sales.manageyourpg.com/pgownersignup">
            Start Your Free 7-Day Trial
          </CTAButton>
          <p className="text-sm text-blue-200 mt-4">No credit card required · Cancel anytime · Full app access</p>
        </div>
      </section>
    </>
  )
}
