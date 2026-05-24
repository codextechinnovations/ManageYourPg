import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'
import { CheckCircle2, BookOpen, Home, Building2, Users, IndianRupee, ArrowRight } from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Guides', path: '/guides' },
  { label: 'PG vs Hostel vs Co-living', path: '/guides/pg-vs-hostel-vs-co-living' },
]

const comparisons = [
  { icon: Users, label: 'Target Audience', pg: 'Working professionals, students looking for affordable private/shared rooms', hostel: 'Budget travelers, backpackers, tourists', coliving: 'Young professionals, digital nomads seeking community living' },
  { icon: IndianRupee, label: 'Typical Monthly Cost', pg: '₹5,000 - ₹15,000 per person', hostel: '₹500 - ₹2,000 per night', coliving: '₹10,000 - ₹30,000 per person' },
  { icon: Building2, label: 'Lease Duration', pg: '1-11 months (medium term)', hostel: '1-30 days (short term)', coliving: '1-12 months (flexible)' },
  { icon: Home, label: 'Living Arrangement', pg: 'Private/shared rooms with common areas', hostel: 'Dormitory-style with shared facilities', coliving: 'Private rooms with premium shared spaces' },
  { icon: CheckCircle2, label: 'Amenities', pg: 'Food, WiFi, laundry, housekeeping', hostel: 'Bed linen, locker, common kitchen', coliving: 'Fully furnished, co-working, gym, events' },
]

const faqs = [
  { q: 'Which is better for working professionals — PG or co-living?', a: 'For working professionals, PG accommodation is often more affordable (₹5,000-15,000/month) and widely available across Indian cities. Co-living (₹10,000-30,000/month) offers premium amenities like co-working spaces, gym, and community events but at a higher price. Choose PG for budget-friendly living, co-living if you value community and premium facilities.' },
  { q: 'Can I run a PG and hostel from the same property?', a: 'Yes, some owners operate hybrid models with both short-term hostel beds and medium-term PG rooms. MY PG supports this with configurable room types — mark some rooms as "hostel" (daily rates) and others as "PG" (monthly rates). The system handles different pricing, check-in/check-out rules, and reporting for each type.' },
  { q: 'What are the registration requirements for each?', a: 'PG: Requires local police registration, tenant KYC, and sometimes municipal registration. Hostel: Requires hotel/lodging license, fire safety certificate, food license, and GST registration. Co-living: Generally follows PG rules but may need additional commercial space permits. Requirements vary by city and state.' },
  { q: 'Which model has higher profit margins?', a: 'PG accommodation typically offers the highest profit margins (15-30%) due to lower operating costs and longer tenant stays. Hostels have lower margins (10-20%) due to higher staff turnover, cleaning costs, and seasonal occupancy. Co-living falls in between (12-25%) with higher rent but also higher amenity costs.' },
  { q: 'Which model is easiest to manage with software?', a: 'All three models benefit from management software, but PG accommodation sees the most dramatic improvement. PG involves recurring monthly rent, tenant KYC, security deposits, and longer-term relationships — all areas where MY PG provides the most value. Hostels benefit from booking management, while co-living benefits from community features and amenity tracking.' },
]

export function PGvsHostelGuide() {
  return (
    <>
      <Helmet>
        <title>PG vs Hostel vs Co-living in India: Complete Comparison Guide (2026) | MY PG</title>
        <meta name="description" content="Complete comparison of PG accommodation, hostels, and co-living spaces in India. Compare costs, amenities, target audience, lease terms, and profit margins. Find the best model for your property." />
        <link rel="canonical" href="https://manageyourpg.com/guides/pg-vs-hostel-vs-co-living" />
        <meta property="og:title" content="PG vs Hostel vs Co-living in India: Complete Comparison Guide (2026)" />
        <meta property="og:description" content="Compare PG, hostel, and co-living in India. Costs, amenities, audience, lease terms, and profit margins." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PG vs Hostel vs Co-living in India: Complete Comparison Guide (2026)', description: 'Complete comparison of PG, hostel, and co-living in India.', author: { '@type': 'Organization', name: 'MY PG Solutions' }, publisher: { '@type': 'Organization', name: 'MY PG Solutions', logo: { '@type': 'ImageObject', url: 'https://manageyourpg.com/favicon.png' } }, datePublished: '2026-05-10', dateModified: '2026-05-10' })}</script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-rose-100 text-rose-700 rounded-full">
              <BookOpen className="w-4 h-4" /> Comparison Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PG vs Hostel vs Co-living in India:{' '}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Complete Comparison Guide
              </span>{' '}
              (2026)
            </h1>
            <p className="text-lg text-gray-600 mb-8">A comprehensive comparison of Paying Guest accommodation, hostels, and co-living spaces in India. Understand the differences in target audience, pricing, operations, and profitability to choose the best model for your property investment.</p>
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-50 rounded-l-lg">Aspect</th>
                  <th className="text-left py-3 px-4 font-bold text-blue-700 bg-blue-50">PG Accommodation</th>
                  <th className="text-left py-3 px-4 font-bold text-amber-700 bg-amber-50">Hostel</th>
                  <th className="text-left py-3 px-4 font-bold text-purple-700 bg-purple-50 rounded-r-lg">Co-living</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(row => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">{row.label}</td>
                    <td className="py-3 px-4 text-blue-700">{row.pg}</td>
                    <td className="py-3 px-4 text-amber-700">{row.hostel}</td>
                    <td className="py-3 px-4 text-purple-700">{row.coliving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-blue-700 mb-2">PG Accommodation</h3>
              <p className="text-sm text-gray-600 mb-3">Best for owners looking for stable, long-term occupancy with simpler operations.</p>
              <p className="text-xs text-green-600 font-semibold">✅ Recommended for first-time owners</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-bold text-amber-700 mb-2">Hostel</h3>
              <p className="text-sm text-gray-600 mb-3">Best for high-traffic locations near tourist spots. Higher operational intensity.</p>
              <p className="text-xs text-amber-600 font-semibold">⚠️ Requires active management</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <h3 className="font-bold text-purple-700 mb-2">Co-living</h3>
              <p className="text-sm text-gray-600 mb-3">Best for premium properties in metro cities targeting young professionals.</p>
              <p className="text-xs text-purple-600 font-semibold">💰 Higher revenue, higher cost</p>
            </div>
          </div>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                    {faq.q}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Manage Any Property Type with MY PG</h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">Whether you run a PG, hostel, or co-living space, MY PG adapts to your needs. Free 7-day trial.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="secondary" href="/#contact">Start Free Trial</CTAButton>
                <CTAButton variant="ghost" href="/features">View All Features</CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
