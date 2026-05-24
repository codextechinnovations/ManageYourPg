import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'
import {
  Building2, Smartphone, Globe, Users, CheckCircle2, ArrowRight, Home,
  Search, ShieldCheck, CreditCard, FileText, Wrench, HeadphonesIcon, MapPin,
  Percent,
} from 'lucide-react'
import { ShareButton } from '../components/ShareButton'

const benefits = [
  {
    icon: Building2,
    title: 'List Your PG Property',
    color: 'from-blue-500 to-blue-600',
    problem: 'PG owners have no centralized platform to showcase their vacant rooms and beds to potential tenants. They rely on word-of-mouth, local brokers who charge high commissions, or social media posts that reach limited audiences. This makes it difficult to fill vacancies quickly and consistently.',
    solution: 'GetYourStay provides a dedicated property listing platform where PG owners create detailed profiles for their properties including room photos, bed types, rent amounts, amenities, location on map, and contact information. Listings are visible to thousands of active tenants searching for PG accommodation across 25+ Indian cities.',
    benefits: [
      'Showcase your PG with photos, amenities, and location to thousands of active tenants',
      'Listings appear in search results across Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune and more',
      'Update availability in real-time as beds get filled through MY PG integration',
    ],
    useCase: 'A PG owner in Bangalore with 3 vacant beds creates a listing on GetYourStay in 10 minutes with photos taken on their phone. Within 24 hours, they receive 5 inquiries and 2 bookings. The beds are filled within 3 days without paying any broker commission.',
  },
  {
    icon: Smartphone,
    title: 'Tenant Management App',
    color: 'from-green-500 to-green-600',
    problem: 'After tenants move in, PG owners struggle to provide a professional experience. Tenants call or message the owner for every small thing - rent details, payment receipts, maintenance requests. This creates a heavy administrative burden and frustrates tenants who expect modern digital services.',
    solution: 'GetYourStay provides tenants with a dedicated mobile app where they can view their rent amount and due dates, make payments via UPI, Google Pay, or PhonePe through integrated rent collection software, download digital receipts for tax filing, raise maintenance complaints with photo uploads, receive announcements from the owner, and view their complete payment history.',
    benefits: [
      'Tenants get a professional app experience without any setup by the owner',
      'All rent payments, receipts, and complaints are digitized and tracked automatically',
      'Reduces owner phone calls and messages by 70% as tenants self-serve through the app',
    ],
    useCase: 'A tenant living in a PG in Pune downloads the GetYourStay app. They see their rent of Rs 7,500 is due in 3 days, set a reminder, and pay via UPI on the due date. When the faucet leaks, they raise a complaint with a photo. The owner assigns the plumber, and the tenant gets notified when it is fixed.',
  },
  {
    icon: Globe,
    title: 'Online Tenant Portal',
    color: 'from-purple-500 to-purple-600',
    problem: 'Not all tenants prefer mobile apps for managing their accommodation. Some tenants want to access their information from a laptop or desktop browser. Without a web portal, tenants who lose their phone or have connectivity issues cannot access critical information like rent receipts or notices.',
    solution: 'GetYourStay offers a full-featured web portal accessible from any browser on any device. Tenants log in with their phone number to view their personalized dashboard showing current rent status, payment history, upcoming due dates, maintenance request status, and owner announcements. The portal syncs seamlessly with the mobile app.',
    benefits: [
      'Tenants can access their account from any device without installing an app',
      'Full dashboard shows rent status, payment history, and maintenance updates in real-time',
      'Web and mobile app sync automatically - start on one device, continue on another',
    ],
    useCase: 'A working professional tenant loses their phone. They borrow a colleague\'s laptop, log into the GetYourStay web portal, download their rent receipt for the past 3 months for tax filing, and raise a complaint about the AC. All without needing their phone.',
  },
  {
    icon: Users,
    title: 'Direct Bookings via PG Management App',
    color: 'from-orange-500 to-orange-600',
    problem: 'Traditional PG booking involves brokers who charge 1-2 months\' rent as commission, or manual inquiry processes where potential tenants call, visit, negotiate, and complete paper formalities. This is slow, expensive, and inefficient for both owners and tenants.',
    solution: 'GetYourStay enables direct booking through the platform. Tenants browse listings, view property details and photos, check availability, and send booking inquiries directly to the owner. Owners receive inquiries with complete tenant information including preferences and budget. No middleman, no commission. The tenant management system handles digital check-in and KYC.',
    benefits: [
      'Receive qualified tenant inquiries directly without paying broker commissions',
      'Complete tenant information is captured before the inquiry reaches you',
      'Seamless transition from booking inquiry to digital check-in through MY PG integration',
    ],
    useCase: 'A student searching for PG accommodation in Mumbai finds a listing on GetYourStay near their college. They send a booking inquiry through the platform. The owner receives the inquiry with the student\'s preferences, budget, and move-in date. They respond within 2 hours, schedule a video tour, and complete the digital check-in. No broker involved.',
  },
]

const tenantFeatures = [
  {
    icon: Search,
    title: 'Browse & Search Listings',
    description: 'Tenants can search for PG accommodations by city, area, budget, amenities, and room type. Filter results by food availability, AC rooms, gender preference, and distance from landmarks. View photos, read descriptions, and compare options before inquiring.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Owner Profiles',
    description: 'Every PG listing on GetYourStay comes from a verified owner. Profiles include owner details, property documents, and reviews from previous tenants. Tenants can trust that the listing is legitimate and the property matches the description.',
  },
  {
    icon: CreditCard,
    title: 'Digital Rent Payments',
    description: 'Pay rent directly through the app or web portal using UPI, Google Pay, PhonePe, or debit card. Automatic payment reminders ensure you never miss a due date. Instant digital receipts are generated for every payment and stored permanently in your account.',
  },
  {
    icon: FileText,
    title: 'Digital Rent Receipts',
    description: 'Access and download rent receipts for any month from your account. Receipts include property name, owner details, amount paid, date, and payment method. Perfect for IT declaration, HRA claims, and income tax filing. Export all receipts as a single PDF.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Requests',
    description: 'Report maintenance issues with category selection (plumbing, electrical, cleaning, pest control, etc.) and photo uploads. Track the status of your request from submitted to in-progress to resolved. Get notified when the issue is fixed.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Tenant Support',
    description: 'Get help anytime through in-app chat, email, or phone support. Query resolution for payment issues, account problems, listing information, or emergency maintenance coordination. Typical response time is under 30 minutes during business hours.',
  },
  {
    icon: MapPin,
    title: 'Multi-City Search',
    description: 'Search for PG accommodations across 25+ Indian cities including Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, and Coimbatore. Ideal for students and professionals relocating for education or jobs.',
  },
  {
    icon: Percent,
    title: 'No Commission Bookings',
    description: 'Book your PG directly through the platform without paying any brokerage fee or commission. The entire process from search to move-in is digital and transparent. You only pay the rent and deposit as agreed with the owner.',
  },
]

export function ListYourPG() {
  return (
    <>
      <Helmet>
        <title>List Your PG Property on GetYourStay - PG Management Software & Tenant Platform for PG Owners</title>
        <meta name="description" content="List your PG property on GetYourStay and reach thousands of tenants searching for accommodation. Free listing, no commission, integrated with MY PG tenant management, rent collection, and digital check-in software." />
        <link rel="canonical" href="https://manageyourpg.com/list-your-pg" />
        <meta property="og:title" content="List Your PG Property on GetYourStay - Free PG Listing Platform for PG Owners" />
        <meta property="og:description" content="List your PG property on GetYourStay. Free listing, no commission. Integrated with MY PG tenant management and rent collection. Reach thousands of tenants in 25+ Indian cities." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema([{ label: 'Home', path: '/' }, { label: 'List Your PG', path: '/list-your-pg' }]))}</script>
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">GetYourStay - Free PG Listing Platform</span>
            </div>
            <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'List Your PG', path: '/list-your-pg' }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              List Your PG &{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                Grow Your Tenant Base
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              GetYourStay helps PG owners list their properties and provides tenants with a professional mobile app and website. Powered by MY PG's tenant management system, rent collection software, and digital check-in platform. Free to list with zero commission.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free listing</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> No commission</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 25+ cities</span>
            </div>
          </motion.div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900">{benefit.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">{index + 1} of {benefits.length}</p>
                    </div>
                    <ShareButton
                      text={`GetYourStay ${benefit.title} - Free PG listing platform`}
                      className="ml-auto"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-2">The Problem</h3>
                      <p className="text-gray-800 leading-relaxed">{benefit.problem}</p>
                    </div>

                    <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-green-700 mb-2">How GetYourStay Solves It</h3>
                      <p className="text-gray-800 leading-relaxed">{benefit.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1a4e] mb-3">Key Benefits</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        {benefit.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1a1a4e]" />
                            <span className="text-gray-700 text-sm">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-xl p-6 text-white">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Real-World Use Case</h3>
                      <p className="text-white leading-relaxed italic">&ldquo;{benefit.useCase}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What Tenants Get with GetYourStay</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  When you list your PG on GetYourStay, your tenants get access to a complete digital platform for managing their accommodation. Free for all tenants.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tenantFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10 hover:bg-white/20 transition-all"
                  >
                    <feature.icon className="w-8 h-8 text-blue-300 mb-3" />
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {['Free property listing', 'Verified tenant profiles', 'Secure payment collection', 'Digital rent receipts', 'Maintenance tracking', '24/7 tenant support', 'Multi-city exposure', 'No commission on bookings'].map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-sm text-blue-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                List Your PG on GetYourStay Today
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Join thousands of PG owners who trust GetYourStay to fill their vacant beds and provide tenants with a modern digital experience. Free to list with no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://getyourstay.in/list-your-pg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-2xl transition-all font-medium"
                >
                  List Your Property <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all font-medium"
                >
                  Contact Us
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Free to list &bull; No hidden fees &bull; Only pay when you get tenants
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
