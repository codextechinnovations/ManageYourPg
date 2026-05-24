import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'
import { CheckCircle2, BookOpen, IndianRupee, TrendingUp, Building2, FileText, Users, Target, ArrowRight } from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Guides', path: '/guides' },
  { label: 'PG Business Guide', path: '/guides/pg-business-guide' },
]

const sections = [
  { icon: FileText, title: 'Registration & Legal Requirements', desc: 'Learn about PG registration, local municipal rules, police verification requirements, and fire safety compliance for different Indian cities.' },
  { icon: Building2, title: 'Property Setup & Configuration', desc: 'Choose the right location, configure rooms and beds, set up amenities, and create a tenant-friendly environment that maximizes occupancy.' },
  { icon: IndianRupee, title: 'Pricing Strategy & Rent Optimization', desc: 'Determine optimal rent pricing based on location, amenities, seasonality, and competition. Learn dynamic pricing strategies for maximum revenue.' },
  { icon: Users, title: 'Tenant Acquisition & Retention', desc: 'Attract the right tenants through effective listing strategies, screening processes, and retention programs that reduce vacancy rates.' },
  { icon: TrendingUp, title: 'Operations & Profitability', desc: 'Manage day-to-day operations efficiently. Track expenses, optimize costs, and maximize profit margins using management software.' },
  { icon: Target, title: 'Scaling Your PG Business', desc: 'Learn when and how to expand from 1 property to multiple properties. Financing options, team building, and systems for scaling.' },
]

const faqs = [
  { q: 'Do I need a license to run a PG in India?', a: 'PG registration requirements vary by city and state. Most Indian cities require PG owners to register with the local police station and submit tenant details regularly. Some cities like Bangalore, Pune, and Gurgaon have specific PG registration portals. You may also need trade license, fire safety certificate, and food license if serving meals.' },
  { q: 'How much does it cost to start a PG business?', a: 'Starting a PG business typically requires ₹5-25 lakhs initial investment depending on location, property size, and amenities. Key costs include: rent/lease deposit (₹1-5 lakhs), furnishing (₹50K-5 lakhs), kitchen equipment (₹50K-2 lakhs), security deposits, and registration fees. Monthly operating costs include rent, staff salaries, utilities, food, and maintenance.' },
  { q: 'How profitable is a PG business in India?', a: 'PG businesses in India typically generate 15-30% profit margins on revenue. A well-managed PG with 20 beds in a good location can generate ₹2-4 lakhs monthly revenue with ₹50K-1 lakh profit. Profitability depends on occupancy rates, pricing strategy, cost management, and location.' },
  { q: 'How many beds should I start with?', a: 'Start with 10-20 beds if you are new to the PG business. This size is manageable, requires lower initial investment, and lets you learn the business before scaling. Once you have established processes and understand your market, expand to 30-50 beds or open additional properties.' },
  { q: 'What amenities attract PG tenants?', a: 'High-speed WiFi, AC rooms, hot water, housekeeping, food (breakfast + dinner), washing machine, CCTV security, power backup, and nearby access to public transport are the most sought-after amenities. Offering these amenities can command 15-30% higher rent.' },
  { q: 'How do I find tenants for my PG?', a: 'List your PG on property listing platforms like GetYourStay, MagicBricks, and Nestaway. Create listings on OLX and Facebook Marketplace. Use WhatsApp groups in nearby colleges and offices. Partner with local real estate agents. MY PG\'s GetYourStay integration connects you directly with active tenant seekers.' },
]

export function PGBusinessGuide() {
  return (
    <>
      <Helmet>
        <title>How to Start and Manage a Successful PG Business in India (2026) | MY PG</title>
        <meta name="description" content="Complete guide to starting and managing a PG business in India. Learn registration, pricing strategies, tenant management, and scaling tips. Profit margins, costs, and expert advice included." />
        <link rel="canonical" href="https://manageyourpg.com/guides/pg-business-guide" />
        <meta property="og:title" content="How to Start and Manage a Successful PG Business in India (2026)" />
        <meta property="og:description" content="Complete guide to starting a PG business in India. Registration, pricing, tenant management, and scaling." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Start and Manage a Successful PG Business in India (2026)', description: 'Complete guide to starting a PG business in India.', author: { '@type': 'Organization', name: 'MY PG Solutions' }, publisher: { '@type': 'Organization', name: 'MY PG Solutions', logo: { '@type': 'ImageObject', url: 'https://manageyourpg.com/favicon.png' } }, datePublished: '2026-05-10', dateModified: '2026-05-10' })}</script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
              <BookOpen className="w-4 h-4" /> Complete Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Start and Manage a{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Successful PG Business
              </span>{' '}
              in India (2026)
            </h1>
            <p className="text-lg text-gray-600 mb-8">The complete entrepreneur's guide to starting, running, and scaling a profitable PG accommodation business in India. Covers registration, pricing, operations, tenant management, and growth strategies.</p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-6 md:p-8 text-white mb-12">
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">In This Guide</p>
            <ul className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.title}><a href={`#section-${i}`} className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> {s.title}</a></li>
              ))}
              <li><a href="#faq" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <section key={s.title} id={`section-${i}`} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{s.title}</h2>
                <p className="text-gray-700 leading-relaxed">{s.desc}</p>
              </section>
            ))}

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-[#1a1a4e] mb-3">Pro Tip: Start with Software from Day 1</h3>
              <p className="text-gray-700 text-sm">Set up MY PG management software from the day you open your PG. Digital records from day one means you never have to migrate from paper to digital later. Track every expense, every tenant, and every payment right from the start.</p>
            </div>
          </div>

          <section id="faq" className="scroll-mt-24 mt-12">
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
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Start Your PG Business Journey</h2>
              <p className="text-indigo-100 mb-6 max-w-lg mx-auto">Get MY PG free for 7 days. No credit card required. Set up your first property in 10 minutes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="secondary" href="/#contact">Start Free Trial</CTAButton>
                <CTAButton variant="ghost" href="/features">Explore Features</CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
