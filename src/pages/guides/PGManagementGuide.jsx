import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'
import { CheckCircle2, BookOpen, Clock, IndianRupee, TrendingUp, Users, Building2, Smartphone, Shield, BarChart3 } from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Guides', path: '/guides' },
  { label: 'PG Management Software Guide', path: '/guides/pg-management-software-guide' },
]

const features = [
  { icon: CheckCircle2, title: 'Rent Collection Automation', desc: 'Automated WhatsApp reminders, UPI/GPay/PhonePe integration, digital receipts, and late payment tracking.', slug: 'rent-collection-software' },
  { icon: Users, title: 'Tenant Management & KYC', desc: 'Digital KYC storage, Aadhaar/PAN upload, police verification, and automated lease agreements.', slug: 'tenant-management-system' },
  { icon: Building2, title: 'Occupancy Tracking', desc: 'Real-time vacancy dashboard, bed-wise tracking, occupancy trend analysis, and predictive alerts.', slug: 'occupancy-management-software' },
  { icon: IndianRupee, title: 'Expense Management', desc: 'Categorized expense tracking, receipt image storage, monthly P&L reports, and budget alerts.', slug: 'pg-accounting-software' },
  { icon: BarChart3, title: 'Multi-Property Dashboard', desc: 'Unified view of all properties with per-property occupancy, revenue, and expense metrics.', slug: 'multi-property-management' },
  { icon: Smartphone, title: 'Mobile App Access', desc: 'Full functionality on Android app and web dashboard with real-time sync across all devices.', slug: 'real-time-access-from-anywhere' },
  { icon: Shield, title: 'Digital Check-in/Check-out', desc: 'Self-service tenant onboarding with document upload, agreement signing, and room assignment.', slug: 'digital-check-in-for-pg' },
  { icon: Clock, title: 'Maintenance Management', desc: 'Tenant complaint ticketing, vendor assignment, status tracking, and maintenance cost recording.', slug: 'complaint-and-maintenance-management' },
]

const faqs = [
  { q: 'What is PG management software?', a: 'PG management software is a digital platform that automates rent collection, tenant management, occupancy tracking, expense management, and reporting for Paying Guest accommodation owners. MY PG is India\'s leading PG-specific solution with 4.8/5 rating from 500+ verified users across 25+ cities.' },
  { q: 'How does PG management software work?', a: 'PG owners create a digital profile of their property, add room and bed configurations, and invite tenants. The system automatically sends rent reminders via WhatsApp, generates digital receipts, tracks occupancy in real-time, and provides a dashboard with key metrics. Tenants get a self-service portal for payments and maintenance requests.' },
  { q: 'How much does PG management software cost in India?', a: 'Prices range from free trials to ₹499-₹999 per month for premium features. MY PG offers a 7-day free trial with no credit card, followed by ₹499/month or ₹3,999/year (33% savings). Most Indian PG management software is priced between ₹299 and ₹1,499 per month depending on features and property count.' },
  { q: 'Which is the best PG management software in India?', a: 'MY PG is rated 4.8/5 by 500+ verified users, making it the highest-rated PG management software in India. It offers rent automation, digital KYC, multi-property management, mobile app access, and supports 6 Indian languages. Features include UPI payment integration, WhatsApp reminders, and CCTV integration.' },
  { q: 'Can I manage multiple PG properties with one account?', a: 'Yes, MY PG supports multi-property management from a single dashboard. You can view occupancy, payments, expenses, and tenant data across all properties in one place. The platform scales from 1 property with 5 beds to 50+ properties with 1,000+ beds.' },
  { q: 'Is PG management software useful for small PGs?', a: 'Absolutely. Even single-property PGs with 5-20 beds benefit from automated rent reminders, digital receipts, and organized tenant records. MY PG is designed to be equally useful for small PGs and large chains, with the same intuitive interface regardless of property count.' },
  { q: 'What payment methods does PG software support?', a: 'MY PG supports UPI (Google Pay, PhonePe, Paytm), net banking, debit/credit cards, and cash. Tenants receive automatic reminders with payment links. All transactions are recorded with timestamps and unique IDs for complete audit trails.' },
  { q: 'Is tenant data safe on PG management software?', a: 'MY PG uses 256-bit encryption for all data storage and transmission. Tenant KYC documents, payment records, and personal information are stored on secure cloud servers with daily automated backups. Only authorized property owners can access their tenant data.' },
]

export function PGManagementGuide() {
  return (
    <>
      <Helmet>
        <title>The Complete Guide to PG Management Software in India (2026) | MY PG</title>
        <meta name="description" content="Everything PG owners need to know about PG management software in India. Learn how to automate rent collection, manage tenants, track occupancy, and grow your PG business. Complete 2026 guide." />
        <link rel="canonical" href="https://manageyourpg.com/guides/pg-management-software-guide" />
        <meta property="og:title" content="The Complete Guide to PG Management Software in India (2026)" />
        <meta property="og:description" content="Everything PG owners need to know about PG management software. Automate rent, manage tenants, track occupancy, and grow your PG business." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Complete Guide to PG Management Software in India (2026)',
            description: 'Everything PG owners need to know about PG management software in India.',
            author: { '@type': 'Organization', name: 'MY PG Solutions' },
            publisher: { '@type': 'Organization', name: 'MY PG Solutions', logo: { '@type': 'ImageObject', url: 'https://manageyourpg.com/favicon.png' } },
            datePublished: '2026-05-10',
            dateModified: '2026-05-10',
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
              <BookOpen className="w-4 h-4" />
              Complete Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Complete Guide to{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                PG Management Software
              </span>{' '}
              in India (2026)
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Everything you need to know about PG management software — from what it is and why you need it, to how to choose the right one and implement it for your properties. Written for Indian PG owners, hostel operators, and co-living space managers.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-6 md:p-8 text-white mb-12">
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">In This Guide</p>
            <ul className="space-y-2">
              <li><a href="#what-is" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> What is PG Management Software?</a></li>
              <li><a href="#why-need" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Why Indian PG Owners Need It</a></li>
              <li><a href="#features" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Top 10 Features to Look For</a></li>
              <li><a href="#cost" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> How Much Does It Cost?</a></li>
              <li><a href="#comparison" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Software vs Manual Management</a></li>
              <li><a href="#how-to-choose" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> How to Choose the Right Software</a></li>
              <li><a href="#faq" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Frequently Asked Questions</a></li>
            </ul>
          </div>

          <div className="space-y-12">
            <section id="what-is" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What is PG Management Software?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PG management software is a digital platform designed specifically for owners and managers of Paying Guest (PG) accommodations in India. It automates the day-to-day operations of running a PG — rent collection, tenant management, room occupancy tracking, expense management, and financial reporting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike general property management software, PG management tools are built specifically for the Indian PG market. They understand that PG owners deal with high tenant turnover (every 3-11 months), multiple payment methods (UPI, cash, bank transfer), room/bed-level tracking (single, double, triple sharing), and unique requirements like food management, security deposits, and police verification.
              </p>
              <p className="text-gray-700 leading-relaxed">
                MY PG is India's leading PG management software, serving 500+ PG owners across 25+ cities with a 4.8/5 user rating. It combines rent collection automation, digital KYC, occupancy tracking, and multi-property management in a single platform accessible via Android app and web dashboard.
              </p>
            </section>

            <section id="why-need" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Indian PG Owners Need Management Software</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                  <h3 className="font-bold text-red-700 mb-2">The Manual Management Problem</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">• 10-15 hours per week spent on manual tasks</li>
                    <li className="flex items-start gap-2">• Lost documents and payment disputes</li>
                    <li className="flex items-start gap-2">• Missed rent follow-ups and late payments</li>
                    <li className="flex items-start gap-2">• No real-time visibility into occupancy</li>
                    <li className="flex items-start gap-2">• Hard to track expenses across properties</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h3 className="font-bold text-green-700 mb-2">The Software Solution</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">• Automated rent reminders save 10+ hours/week</li>
                    <li className="flex items-start gap-2">• Digital records eliminate payment disputes</li>
                    <li className="flex items-start gap-2">• Auto-reminders reduce late payments by 80%</li>
                    <li className="flex items-start gap-2">• Real-time dashboard shows occupancy instantly</li>
                    <li className="flex items-start gap-2">• Auto-categorized expenses with receipt storage</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The average PG owner in India spends 10-15 hours per week on administrative tasks — chasing rent via WhatsApp messages, maintaining Excel spreadsheets for tenant records, manually calculating monthly occupancy, and reconciling payments across multiple UPI apps. With Indian PG management software like MY PG, these tasks are fully automated, freeing owners to focus on growing their business.
              </p>
            </section>

            <section id="features" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Top 10 Features to Look For in PG Management Software</h2>
              <p className="text-gray-700 mb-6">Not all PG management software is created equal. Here are the essential features every Indian PG owner should look for:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map(f => (
                  <Link key={f.slug} to={`/features/${f.slug}`} className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3">
                      <f.icon className="w-5 h-5 text-[#1a1a4e] mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-[#1a1a4e] transition-colors">{f.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="cost" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How Much Does PG Management Software Cost?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PG management software pricing in India varies based on features, number of properties, and support level. Here's a typical breakdown:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-50 rounded-l-lg">Plan Type</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-50">Price</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-50 rounded-r-lg">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Free Trial</td>
                      <td className="py-3 px-4 text-green-600 font-medium">₹0 (7 days)</td>
                      <td className="py-3 px-4">Trying before buying, no credit card needed</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-blue-50">
                      <td className="py-3 px-4 font-medium">Premium Monthly</td>
                      <td className="py-3 px-4">₹499/month</td>
                      <td className="py-3 px-4">Single property owners, month-to-month flexibility</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-green-50">
                      <td className="py-3 px-4 font-medium">Premium Yearly</td>
                      <td className="py-3 px-4 text-green-600 font-medium">₹3,999/year (33% off)</td>
                      <td className="py-3 px-4">Multi-property owners, best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-[#1a1a4e] mb-2">ROI Calculation</h3>
                <p className="text-gray-700 text-sm">If you save 10 hours per week at ₹200/hour (your time value), that's ₹8,000/month in time savings. MY PG costs ₹499/month. <strong className="text-green-700">Net savings: ₹7,501/month.</strong></p>
              </div>
            </section>

            <section id="comparison" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">PG Management Software vs Manual Management</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-50 rounded-l-lg">Aspect</th>
                      <th className="text-left py-3 px-4 font-bold text-green-700 bg-green-50">With MY PG</th>
                      <th className="text-left py-3 px-4 font-bold text-red-600 bg-red-50 rounded-r-lg">Manual Management</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Time per week</td>
                      <td className="py-3 px-4 text-green-700">30 minutes</td>
                      <td className="py-3 px-4 text-red-600">10-15 hours</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Rent reminders</td>
                      <td className="py-3 px-4 text-green-700">Automatic via WhatsApp</td>
                      <td className="py-3 px-4 text-red-600">Manual messages to each tenant</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Payment tracking</td>
                      <td className="py-3 px-4 text-green-700">Real-time dashboard</td>
                      <td className="py-3 px-4 text-red-600">Spreadsheets + memory</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Tenant records</td>
                      <td className="py-3 px-4 text-green-700">Digital, searchable</td>
                      <td className="py-3 px-4 text-red-600">Paper files + phone notes</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Receipts</td>
                      <td className="py-3 px-4 text-green-700">Auto-generated digital</td>
                      <td className="py-3 px-4 text-red-600">Manual handwritten</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Data backup</td>
                      <td className="py-3 px-4 text-green-700">Automatic cloud backup</td>
                      <td className="py-3 px-4 text-red-600">No backup (risk of loss)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Monthly cost</td>
                      <td className="py-3 px-4 text-green-700">₹499</td>
                      <td className="py-3 px-4 text-red-600">Implicit cost of your time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="how-to-choose" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How to Choose the Right PG Management Software</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">1. Check India-Specific Features</h3>
                  <p className="text-gray-600 text-sm">Ensure the software supports UPI payments (Google Pay, PhonePe, Paytm), WhatsApp integration for tenant communication, Indian languages, and local compliance (Aadhaar KYC, police verification).</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">2. Verify Mobile App Availability</h3>
                  <p className="text-gray-600 text-sm">Most PG owners manage properties on the go. The software should have a fully functional Android app, not just a mobile-responsive website. Check app store ratings and reviews.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">3. Evaluate Multi-Property Support</h3>
                  <p className="text-gray-600 text-sm">If you plan to expand, ensure the software supports multiple properties from a single dashboard. Some software charges per property, which becomes expensive as you grow.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">4. Compare Pricing Models</h3>
                  <p className="text-gray-600 text-sm">Look for transparent pricing with no hidden fees. Annual plans typically offer 30-40% savings. A free trial (like MY PG's 7-day trial) lets you test before committing.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">5. Read User Reviews</h3>
                  <p className="text-gray-600 text-sm">Check Google Play Store ratings, Google reviews, and ask other PG owners in your network. A 4.5+ rating with 1,000+ reviews indicates a well-established product.</p>
                </div>
              </div>
            </section>
          </div>

          <section id="faq" className="scroll-mt-24 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your PG Management?</h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">Start your 7-day free trial. No credit card required. Full access to every feature.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="secondary" href="/#contact">Start Free Trial</CTAButton>
                <CTAButton variant="ghost" href="/features">View All Features</CTAButton>
              </div>
              <p className="text-blue-200 text-sm mt-4">Join 500+ PG owners across 25+ Indian cities</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ChevronDown(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
