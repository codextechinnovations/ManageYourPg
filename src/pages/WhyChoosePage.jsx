import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Sparkles, Clock, TrendingDown, CreditCard, Database, Globe, Building,
  CheckCircle2, ArrowRight,
} from 'lucide-react'
import { ShareButton } from '../components/ShareButton'

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Choose MY PG - PG Management Software & App',
  description: 'Discover why 5000+ PG owners choose MY PG as their preferred PG management software, hostel management system, and tenant management platform.',
  url: 'https://manageyourpg.com/why-choose',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://manageyourpg.com/' },
      { '@type': 'ListItem', position: 2, name: 'Why Choose MY PG', item: 'https://manageyourpg.com/why-choose' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Simple PG Management Software' },
      { '@type': 'ListItem', position: 2, name: 'Saves Time for PG Owners' },
      { '@type': 'ListItem', position: 3, name: 'Reduces Manual Work' },
      { '@type': 'ListItem', position: 4, name: 'Better Rent & Payment Tracking' },
      { '@type': 'ListItem', position: 5, name: 'Centralized Management' },
      { '@type': 'ListItem', position: 6, name: 'Real-Time Access from Anywhere' },
      { '@type': 'ListItem', position: 7, name: 'Suitable for All Sizes' },
    ],
  },
}

const reasons = [
  {
    icon: Sparkles,
    title: 'Simple PG Management Software',
    color: 'from-blue-500 to-blue-600',
    slug: 'simple-pg-management-software',
    problem: 'Most PG management tools are overly complex with steep learning curves. PG owners are busy running their properties and do not have time to learn complicated software. They need a solution that works out of the box without technical training or IT support.',
    solution: 'MY PG is built with a clean, intuitive interface that any PG owner can start using immediately. The dashboard is organized logically with clear labels, visual icons, and straightforward navigation. Onboarding takes less than 5 minutes - download, create your property, add rooms, and start adding tenants. No training manuals, no setup calls, no technical knowledge required.',
    benefits: [
      'Start managing your PG in under 5 minutes with zero training',
      'Intuitive interface designed for non-technical PG owners',
      'No complicated setup, configurations, or IT support needed',
    ],
    useCase: 'A 55-year-old PG owner who has never used any management software downloads MY PG, adds their property details, configures 15 rooms, and adds 12 existing tenants in under 10 minutes. They start receiving automated rent reminders the same day without any external help.',
  },
  {
    icon: Clock,
    title: 'Saves Time for PG Owners',
    color: 'from-emerald-500 to-emerald-600',
    slug: 'saves-time-for-pg-owners',
    problem: 'PG owners spend 10-15 hours per week on manual tasks: chasing rent via WhatsApp, maintaining spreadsheets, filing paper documents, responding to tenant calls about payment status, and tracking occupancy across rooms. This time could be spent growing the business or with family.',
    solution: 'MY PG automates the most time-consuming tasks. Rent reminders go out automatically via WhatsApp on a preset schedule. Digital receipts generate and are delivered without manual intervention. Occupancy dashboards update in real-time as tenants check in or out. Expense tracking categorizes spending automatically. What used to take hours now takes minutes.',
    benefits: [
      'Save 10-15 hours per week by automating rent collection, receipts, and reporting',
      'Eliminate manual spreadsheet maintenance and paper document filing',
      'Focus on growing your PG business instead of administrative chores',
    ],
    useCase: 'A PG owner managing 3 properties with 40 tenants used to spend Sunday mornings updating spreadsheets and Monday evenings chasing late payments. After switching to MY PG, they spend 30 minutes per week reviewing reports and use the saved time to plan opening a fourth property.',
  },
  {
    icon: TrendingDown,
    title: 'Reduces Manual Work',
    color: 'from-purple-500 to-purple-600',
    slug: 'reduces-manual-work',
    problem: 'Manual tracking of rent payments, tenant records, expenses, and occupancy using paper registers and Excel sheets is error-prone, time-consuming, and insecure. Data gets lost when phones are damaged, files are misplaced, or staff leave without handing over records.',
    solution: 'MY PG digitizes every aspect of PG operations. Tenant KYC documents are scanned and stored securely in the cloud. Rent payments are tracked automatically with each transaction recorded against the tenant profile. Expense entries are categorized and stored with receipt images. All data is backed up daily and accessible from any device, eliminating the risk of permanent data loss.',
    benefits: [
      'Eliminate paper registers, Excel sheets, and manual filing systems completely',
      'All data securely backed up in the cloud - never lose records again',
      'Digital records are searchable, sortable, and exportable in seconds',
    ],
    useCase: 'A PG owner\'s phone with 2 years of tenant records and payment history gets stolen. Because they use MY PG, all data is safely stored in the cloud. They buy a new phone, log in, and all their tenant data, payment history, and expense records are restored instantly.',
  },
  {
    icon: CreditCard,
    title: 'Better Rent & Payment Tracking',
    color: 'from-orange-500 to-orange-600',
    slug: 'better-rent-and-payment-tracking',
    problem: 'Tracking who has paid rent and who has not is the most stressful part of running a PG. Owners juggle multiple payment methods (cash, UPI, bank transfer), lose track of partial payments, and struggle to reconcile accounts at month end. Disputes with tenants about payment history are common without proper records.',
    solution: 'MY PG provides complete payment tracking for every tenant. Each payment is recorded with date, amount, method (UPI, Google Pay, PhonePe, cash, bank transfer), and a unique transaction ID. The dashboard shows paid, pending, and overdue status for all tenants at a glance. Tenants receive automatic receipts after each payment. Monthly reports reconcile all transactions for accounting.',
    benefits: [
      'Complete payment transparency with per-tenant transaction history',
      'Never argue with a tenant about payment again - digital records never lie',
      'Monthly auto-reconciliation saves hours of accounting work',
    ],
    useCase: 'A tenant claims they paid rent for the last month but the owner has no record. The owner opens the tenant\'s payment history in MY PG, which shows the last payment was 45 days ago. The tenant checks their own payment history on the tenant portal, realizes they missed the payment, and pays immediately.',
  },
  {
    icon: Database,
    title: 'Centralized Management',
    color: 'from-pink-500 to-pink-600',
    slug: 'centralized-management',
    problem: 'PG owners managing multiple properties have tenant data, rent records, and expense information scattered across different notebooks, phone notes, Excel files, and WhatsApp chats. Finding specific information requires checking multiple sources, and there is no single source of truth for the business.',
    solution: 'MY PG centralizes all PG data into one secure platform. Tenant profiles, payment history, expense records, occupancy status, maintenance requests, and documents are all accessible from a single dashboard. Whether you manage 1 property or 50, all data is organized, searchable, and available 24/7 from any device with internet access.',
    benefits: [
      'One dashboard to manage tenants, payments, expenses, and occupancy across all properties',
      'Single source of truth eliminates data inconsistencies and duplication',
      'Access all business data from your phone, tablet, or laptop anytime',
    ],
    useCase: 'A PG owner is at a family gathering when a potential tenant calls asking about room availability at a specific property. The owner opens MY PG on their phone, checks the occupancy dashboard for that property, finds 2 vacant beds, and confirms availability on the spot without calling the caretaker.',
  },
  {
    icon: Globe,
    title: 'Real-Time Access from Anywhere',
    color: 'from-cyan-500 to-cyan-600',
    slug: 'real-time-access-from-anywhere',
    problem: 'Traditional PG management ties owners to their desk or office. When they are traveling, on vacation, or away from their properties, they have no visibility into what is happening. Rent collections, new check-ins, maintenance issues, and occupancy changes go unnoticed until they return.',
    solution: 'MY PG is a cloud-based PG management system accessible from anywhere with an internet connection. The mobile app provides full functionality on the go, and the web dashboard offers a larger view for desktop users. Real-time synchronization means changes made on any device reflect instantly across all devices. Owners can approve check-ins, track payments, monitor CCTV, and review reports from anywhere in the world.',
    benefits: [
      'Full access to your PG business from anywhere - no office required',
      'Mobile app and web dashboard sync in real-time across all devices',
      'Never miss a rent payment or check-in request while traveling',
    ],
    useCase: 'A PG owner travels to their hometown for 2 weeks during Diwali. While away, they receive a check-in request from a prospective tenant. They review the tenant\'s KYC documents on their phone, approve the check-in, set the rent amount, and the room status updates automatically. The tenant moves in the same day without the owner being present.',
  },
  {
    icon: Building,
    title: 'Suitable for All Sizes',
    color: 'from-indigo-500 to-indigo-600',
    slug: 'suitable-for-all-sizes',
    problem: 'Most PG management software is designed for either small operations or large chains, but not both. Small PG owners find enterprise solutions too expensive and complex, while large operators find basic tools lacking the multi-property features they need. Owners who start small and grow have to switch platforms, losing their data and forcing tenants to adapt to a new system.',
    solution: 'MY PG scales seamlessly from a single property with 5 beds to a portfolio of 50 properties with 1000+ beds. The same intuitive interface works for all sizes. Small owners use the basic features - rent collection, tenant management, expense tracking. Large operators use advanced features - multi-property dashboards, consolidated reports, role-based staff access, and CCTV integration. You never outgrow MY PG.',
    benefits: [
      'Works for single-property PGs and 50-property chains with the same platform',
      'Start with basic features and unlock advanced capabilities as you grow',
      'No need to switch platforms or migrate data when expanding your business',
    ],
    useCase: 'A PG owner starts with 8 beds in a single Bangalore property using MY PG for basic rent collection and tenant management. Over 3 years, they expand to 6 properties with 120 beds across Bangalore and Pune. MY PG scales with them - they now use multi-property dashboards, consolidated P&L reports, CCTV integration, and staff access controls, all without changing their management software.',
  },
]

export function WhyChoosePage() {
  return (
    <>
      <Helmet>
        <title>Why Choose MY PG - PG Management Software & App | Benefits for Indian PG Owners</title>
        <meta name="description" content="Discover why 5000+ PG owners choose MY PG as India's best PG management software. Save 10+ hours weekly, automate rent collection, track payments, and manage multiple properties from one app. Free 7-day trial." />
        <link rel="canonical" href="https://manageyourpg.com/why-choose" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MY PG - PG Management Software" />
        <meta property="og:title" content="Why Choose MY PG - PG Management Software & App | Benefits for Indian PG Owners" />
        <meta property="og:description" content="Discover why 5000+ PG owners choose MY PG. Save time, automate rent collection, track payments, and manage multiple properties from one platform. Free trial." />
        <meta property="og:url" content="https://manageyourpg.com/why-choose" />
        <meta property="og:image" content="https://manageyourpg.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Choose MY PG - PG Management Software & App | Benefits for Indian PG Owners" />
        <meta name="twitter:description" content="Discover why 5000+ PG owners choose MY PG. Save time, automate rent collection, and manage multiple properties from one platform." />
        <meta name="twitter:image" content="https://manageyourpg.com/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="inline-flex items-center gap-2 text-sm text-gray-500">
                <li><Link to="/" className="hover:text-[#1a1a4e] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-900" aria-current="page">Why Choose MY PG</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
              <Sparkles className="w-4 h-4" />
              Best PG Management Software for Indian Owners
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                PG Management Software & App
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Discover why thousands of PG owners across India trust MY PG as their preferred PG management software, hostel management system, and tenant management platform to streamline their daily operations.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 7 powerful reasons</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Trusted by 5000+ PG owners</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free 7-day trial</span>
            </div>

            <nav aria-label="Table of Contents" className="mt-8 inline-flex flex-wrap justify-center gap-2 max-w-2xl">
              {reasons.map((reason, i) => (
                <a key={reason.slug} href={`#${reason.slug}`} className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 text-gray-600 hover:text-[#1a1a4e] transition-all">
                  {i + 1}. {reason.title}
                </a>
              ))}
            </nav>
          </motion.div>

          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="scroll-mt-24"
                id={reason.slug}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900">{reason.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">{index + 1} of {reasons.length}</p>
                    </div>
                    <ShareButton
                      text={`MY PG ${reason.title} - Why choose MY PG`}
                      className="ml-auto"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-2">The Problem PG Owners Face</h3>
                      <p className="text-gray-800 leading-relaxed">{reason.problem}</p>
                    </div>

                    <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-green-700 mb-2">How MY PG Solves It</h3>
                      <p className="text-gray-800 leading-relaxed">{reason.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1a4e] mb-3">Key Benefits</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        {reason.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1a1a4e]" />
                            <span className="text-gray-700 text-sm">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-xl p-6 text-white">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Real-World Use Case</h3>
                      <p className="text-white leading-relaxed italic">&ldquo;{reason.useCase}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Experience These Benefits?
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Start your 7-day free trial. No credit card required. Full access to every feature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a4e] rounded-full font-medium hover:bg-blue-50 transition-all"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all border border-white/20"
                >
                  View All Features
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
