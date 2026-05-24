import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'
import { CheckCircle2, BookOpen, Building2, BarChart3, Users, TrendingUp, LayoutDashboard, ArrowRight } from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Guides', path: '/guides' },
  { label: 'Multi-Property PG Guide', path: '/guides/multi-property-pg-management' },
]

const steps = [
  { title: 'Standardize Operations', desc: 'Create consistent processes for rent collection, tenant check-in, maintenance, and reporting across all properties. Use software templates to enforce standards.' },
  { title: 'Centralize Management', desc: 'Use a single dashboard to monitor all properties. View occupancy, revenue, expenses, and tenant data across your entire portfolio in real-time.' },
  { title: 'Build Your Team', desc: 'Hire property managers for each location. Use role-based access to give staff appropriate permissions while maintaining owner oversight.' },
  { title: 'Leverage Data', desc: 'Use portfolio-wide analytics to identify underperforming properties, optimize pricing, and make data-driven expansion decisions.' },
]

const faqs = [
    { q: 'How many properties can I manage with MY PG?', a: 'MY PG supports unlimited properties from a single account. Whether you have 2 properties or 50+, the same dashboard gives you a complete view of your entire portfolio. Each property data is organized separately but visible in consolidated reports.' },
  { q: 'Can I give my staff access to only specific properties?', a: 'Yes, MY PG supports role-based access control. You can assign property managers to specific properties with limited permissions — they can manage daily operations but cannot access financial reports or change settings for other properties.' },
  { q: 'How do I handle different pricing across properties?', a: 'Each property and room in MY PG has independent pricing configuration. Set different rent amounts, security deposits, and late fees per room. The system automatically applies the correct rates for each tenant based on their assigned room.' },
  { q: 'Can I get consolidated reports across all properties?', a: 'Yes, MY PG provides portfolio-wide reports showing total revenue, combined occupancy, aggregate expenses, and profit & loss across all properties. You can also drill down into individual property reports for detailed analysis.' },
  { q: 'How do I manage tenants moving between properties?', a: 'MY PG supports inter-property transfers. When a tenant moves from one property to another, their digital profile, payment history, and documents move with them. The system updates both properties\' occupancy automatically.' },
  { q: 'What is the best way to scale from 1 to multiple PGs?', a: 'Start with one property and perfect your operations using MY PG. Once you have consistent processes, replicate the model at a new location. Use MY PG\'s multi-property dashboard from day one of your second property so all data is centralized from the start.' },
]

export function MultiPropertyGuide() {
  return (
    <>
      <Helmet>
        <title>Multi-Property PG Management: Scale from 1 to 50 Properties | MY PG</title>
        <meta name="description" content="Learn how to scale your PG business from 1 to 50 properties. Complete guide to multi-property PG management with centralized dashboards, team management, and portfolio analytics." />
        <link rel="canonical" href="https://manageyourpg.com/guides/multi-property-pg-management" />
        <meta property="og:title" content="Multi-Property PG Management: Scale from 1 to 50 Properties" />
        <meta property="og:description" content="Scale your PG business with multi-property management. Centralized dashboards, team management, and portfolio analytics." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Multi-Property PG Management: Scale from 1 to 50 Properties', description: 'Scale your PG business with multi-property management.', author: { '@type': 'Organization', name: 'MY PG Solutions' }, publisher: { '@type': 'Organization', name: 'MY PG Solutions', logo: { '@type': 'ImageObject', url: 'https://manageyourpg.com/favicon.png' } }, datePublished: '2026-05-10', dateModified: '2026-05-10' })}</script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
              <BookOpen className="w-4 h-4" /> Scaling Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Multi-Property PG Management:{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Scale from 1 to 50 Properties
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">A strategic guide for PG owners looking to expand from a single property to a multi-property portfolio. Learn how to maintain quality, optimize operations, and grow profitably at scale.</p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-6 md:p-8 text-white mb-12">
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">In This Guide</p>
            <ul className="space-y-2">
              {steps.map((s, i) => (
                <li key={s.title}><a href={`#step-${i}`} className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> {s.title}</a></li>
              ))}
              <li><a href="#why-software" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Why Software is Essential for Multi-Property</a></li>
              <li><a href="#faq" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-12">
            <section id="why-software" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Software is Essential for Multi-Property Management</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Managing 1 PG property with 20 beds using spreadsheets is hard. Managing 5 properties with 100 beds using spreadsheets is nearly impossible. Managing 20+ properties without software will consume every waking hour and still result in errors, missed payments, and lost records.</p>
              <p className="text-gray-700 leading-relaxed">MY PG's multi-property dashboard solves this by giving you a single pane of glass across your entire portfolio. You can see which properties need attention, which are performing well, and where your biggest risks and opportunities lie — all at a glance.</p>
            </section>

            {steps.map((s, i) => (
              <section key={s.title} id={`step-${i}`} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{s.title}</h2>
                <p className="text-gray-700 leading-relaxed">{s.desc}</p>
              </section>
            ))}

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-white mb-2">MY PG Multi-Property Dashboard</h3>
              <p className="text-white/90 text-sm">Track occupancy, revenue, expenses, and tenant metrics across all properties from one screen. Color-coded alerts highlight properties that need attention. Generate portfolio-wide P&L reports with one click.</p>
              <Link to="/features/multi-property-management" className="inline-flex items-center gap-1 text-white font-medium mt-3 hover:underline text-sm">
                Learn about Multi Property Management <ArrowRight className="w-4 h-4" />
              </Link>
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
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Scale Your PG Business?</h2>
              <p className="text-cyan-100 mb-6 max-w-lg mx-auto">Start with one property, scale to many. MY PG grows with you. Free 7-day trial.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="secondary" href="/#contact">Start Free Trial</CTAButton>
                <CTAButton variant="ghost" href="/features/multi-property-management">Explore Multi-Property Features</CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
