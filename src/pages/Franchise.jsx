import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'
import { CTAButton } from '../components/CTAButton'
import { ENTITIES } from '../data/entities'
import { CheckCircle2, IndianRupee, TrendingUp, Users, Target, MapPin, Building2, GraduationCap, HeadphonesIcon, BarChart3, Shield, Smartphone, Star, ArrowRight, Briefcase, Gift, Zap } from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Franchise', path: '/franchise' },
]

const features = [
  { icon: IndianRupee, title: 'Automated Rent Collection', desc: 'WhatsApp reminders, UPI/GPay/PhonePe integration, digital receipts, late payment tracking.' },
  { icon: Users, title: 'Tenant Management & KYC', desc: 'Digital KYC, Aadhaar/PAN upload, police verification, automated lease agreements.' },
  { icon: Building2, title: 'Multi-Property Dashboard', desc: 'Unified view of all properties with occupancy, revenue, and expense metrics.' },
  { icon: BarChart3, title: 'Occupancy Tracking', desc: 'Real-time vacancy dashboard, bed-wise tracking, occupancy trend analysis.' },
  { icon: Smartphone, title: 'Mobile & Web Access', desc: 'Full functionality on Android app and web dashboard with real-time sync.' },
  { icon: Shield, title: 'Digital Check-in/Check-out', desc: 'Self-service onboarding with document upload, agreement signing, room assignment.' },
]

const territoryZones = [
  { city: 'Bangalore', zones: '5 zones (South, North, East, West, Central)', pop: '~12M', pgEst: '8,000-12,000', franchiseFee: '₹2,00,000', revPotential: '₹6-18 L/year' },
  { city: 'Mumbai', zones: '6 zones (Western Line, Harbour, Navi Mumbai, Thane, South, Central)', pop: '~20M', pgEst: '10,000-15,000', franchiseFee: '₹2,50,000', revPotential: '₹8-20 L/year' },
  { city: 'Delhi NCR', zones: '6 zones (Gurgaon, Noida, South Delhi, West Delhi, North Delhi, Ghaziabad)', pop: '~25M', pgEst: '15,000-20,000', franchiseFee: '₹3,00,000', revPotential: '₹10-25 L/year' },
  { city: 'Pune', zones: '3 zones (Hinjewadi-Kharadi, Central, PCMC)', pop: '~7M', pgEst: '5,000-8,000', franchiseFee: '₹1,50,000', revPotential: '₹4-12 L/year' },
  { city: 'Hyderabad', zones: '3 zones (HITEC City-Madhapur, Central, Old City)', pop: '~10M', pgEst: '5,000-7,000', franchiseFee: '₹1,50,000', revPotential: '₹4-12 L/year' },
  { city: 'Chennai', zones: '3 zones (OMR-South, Central, West)', pop: '~11M', pgEst: '4,000-6,000', franchiseFee: '₹1,50,000', revPotential: '₹4-12 L/year' },
]

const revenueStreams = [
  { icon: IndianRupee, title: 'Subscription Revenue Share', pct: '40%', detail: 'Earn 40% of all subscription revenue (₹199/month per paying PG owner) from your territory. At 50 PGs = ₹1,19,400/year.' },
  { icon: Gift, title: 'Onboarding Fee', pct: '100%', detail: 'Keep 100% of the one-time onboarding fee (₹2,000-₹3,000 per PG owner) for setup, training, and data migration assistance.' },
  { icon: Zap, title: 'Performance Bonus', pct: 'Tiered', detail: 'Earn quarterly bonuses at milestones: 50 PGs (₹25,000), 100 PGs (₹75,000), 200+ PGs (₹2,00,000).' },
  { icon: TrendingUp, title: 'Renewal Commission', pct: '5%', detail: 'Earn 5% of annual renewal value for every PG owner who renews beyond year one — passive recurring income on your existing base.' },
]

const investmentBreakdown = [
  { item: 'Franchise Fee (one-time)', amount: '₹1,50,000 - ₹3,00,000', note: 'Varies by territory tier (Tier 1/2/3 city)' },
  { item: 'Brand & Marketing Kit', amount: '₹25,000', note: 'Includes branded materials, brochures, presentations, and local ad templates' },
  { item: 'Training & Certification', amount: '₹15,000', note: '3-day training at Bangalore HQ (travel excluded)' },
  { item: 'Technology Setup', amount: '₹10,000', note: 'CRM access, lead tracking dashboard, reporting tools' },
  { item: 'Total Investment', amount: '₹2,00,000 - ₹3,50,000', note: 'All-inclusive one-time cost' },
]

const roiScenario = [
  { month: 3, pgs: 15, mrr: '₹29,850', cumulative: '₹89,550', status: 'Recovering investment' },
  { month: 6, pgs: 35, mrr: '₹69,650', cumulative: '₹2,98,500', status: 'Breakeven achieved' },
  { month: 12, pgs: 75, mrr: '₹1,49,250', cumulative: '₹8,95,500', status: 'Profitable + expansion' },
  { month: 24, pgs: 150, mrr: '₹2,98,500', cumulative: '₹29,85,000', status: 'Scaling operations' },
]

const idealFranchisee = [
  { icon: Briefcase, title: 'Real Estate Agents', desc: 'Already connected with landlords and PG owners. Can leverage existing relationships to drive SaaS adoption.' },
  { icon: Users, title: 'PG / Hostel Owners', desc: 'Existing MY PG users who understand the product and can evangelize it to other PG owners in their network.' },
  { icon: GraduationCap, title: 'Local Entrepreneurs', desc: 'Sales-driven professionals looking for a SaaS business opportunity with predictable recurring revenue.' },
  { icon: Building2, title: 'Property Management Firms', desc: 'Companies already managing multiple PGs can expand into software distribution as an additional revenue stream.' },
]

const supportAreas = [
  { icon: HeadphonesIcon, title: 'Dedicated Account Manager', desc: 'Single point of contact for all franchise needs — sales support, technical queries, performance reviews.' },
  { icon: GraduationCap, title: 'Sales Training Program', desc: '3-day intensive training at Bangalore HQ covering product demo, objection handling, lead generation, and territory mapping.' },
  { icon: Target, title: 'Marketing Collateral', desc: 'White-label brochures, comparison sheets, social media templates, and Google Ads credit for local lead generation.' },
  { icon: BarChart3, title: 'Real-Time Dashboard', desc: 'Live tracking of your territory\'s leads, conversions, revenue, and renewal rates. Monthly performance reviews with your manager.' },
  { icon: Users, title: 'Lead Sharing Program', desc: 'Nationwide inbound leads from your territory are routed to you. National marketing (SEO, ads, content) feeds your pipeline.' },
  { icon: Smartphone, title: 'Demo App Access', desc: 'White-label demo environment to showcase MY PG to prospects with your branding and local testimonials.' },
]

function ChevronDownIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

const faqs = [
  { q: 'Do I need technical experience to run a MY PG franchise?', a: 'No. MY PG provides comprehensive training including product demos, objection handling, and territory mapping. You need sales aptitude and local market knowledge — we handle the technology.' },
  { q: 'Can I run this franchise part-time alongside my existing business?', a: 'Yes. Many franchisees operate their MY PG franchise alongside existing real estate or property management businesses. The recurring revenue model means your income grows even during months when you\'re not actively selling.' },
  { q: 'What happens if a PG owner churns after the first month?', a: 'Our onboarding fee (₹2,000-₹3,000) covers your upfront effort. Post-onboarding, MY PG\'s product retention rate is 85%+ annually due to high stickiness — once owners automate rent collection, they rarely go back.' },
  { q: 'Is the territory truly exclusive?', a: 'Yes. Each franchisee receives exclusive rights to a defined territory (e.g., South Bangalore, Navi Mumbai, Noida). No other franchisee or MY PG direct sales team will operate in your territory.' },
  { q: 'How long does it take to break even?', a: 'Most franchisees break even within 4-7 months. At 15 PG owners onboarded (achievable in 2-3 months for a focused franchisee), monthly revenue covers the franchise fee amortization. At 35+ PGs, you\'re generating profit.' },
  { q: 'What marketing support do I get?', a: 'MY PG runs national SEO, Google Ads, content marketing, and social media campaigns. All leads from your territory are automatically routed to you. You also get local ad credits, brochure templates, and a co-branded demo environment.' },
]

export function Franchise() {
  return (
    <>
      <Helmet>
        <title>MY PG Franchise Opportunity – Own a Territory, Build Recurring Revenue | {ENTITIES.softwareName}</title>
        <meta name="description" content="Own a MY PG franchise in your city. Earn 40% subscription revenue share + onboarding fees from PG management software sales. Exclusive territory. ₹2-3.5L investment. Break-even in 4-7 months." />
        <link rel="canonical" href={`${ENTITIES.domain}/franchise`} />
        <meta property="og:title" content="MY PG Franchise – Own a Territory, Build Recurring Revenue" />
        <meta property="og:description" content="Exclusive city-zone franchise for India's leading PG management software. Earn recurring revenue helping PG owners digitize their business." />
        <meta property="og:url" content={`${ENTITIES.domain}/franchise`} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="MY PG franchise, PG software franchise, SaaS franchise India, PropTech franchise, PG management business opportunity, franchise for real estate agents, software franchise India" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'MY PG Franchise Opportunity',
            description: 'Own a city-zone franchise of India\'s leading PG management software. Recurring revenue model with exclusive territory rights.',
            about: {
              '@type': 'Product',
              name: 'MY PG Franchise Program',
              description: 'Franchise opportunity to distribute MY PG management software to PG owners in your territory.',
            },
            audience: { '@type': 'Audience', audienceType: 'Real Estate Agents, Entrepreneurs, Property Managers' },
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          })}
        </script>
      </Helmet>

      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full">
              <TrendingUp className="w-4 h-4" />
              Franchise Opportunity — Apply Now
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Own a{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                MY PG Franchise
              </span>{' '}
              in Your City
            </h1>

            <p className="text-xl text-gray-600 mb-4 max-w-3xl">
              Exclusive territory franchise of India's leading PG management software. Earn recurring revenue helping PG owners automate rent collection, tenant management, and occupancy tracking.
            </p>

            <p className="text-gray-500 mb-8 max-w-2xl">
              <span className="font-semibold text-[#1a1a4e]">Investment:</span> ₹2,00,000 – ₹3,50,000 |{' '}
              <span className="font-semibold text-[#1a1a4e]">Break-even:</span> 4–7 months |{' '}
              <span className="font-semibold text-[#1a1a4e]">Revenue Share:</span> Up to 40% recurring
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" href="/#contact">Apply for Franchise</CTAButton>
              <CTAButton variant="secondary" href="#revenue">View Revenue Model</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Executive Summary
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>
              MY PG is India's fastest-growing PG (Paying Guest) management software platform, purpose-built for the ₹15,000+ crore Indian PG accommodation market. The platform automates rent collection, tenant KYC, room occupancy tracking, expense management, and financial reporting for PG owners, hostel operators, and co-living space managers.
            </p>
            <p>
              With a 4.8/5 rating and over 500 PG owners already on the platform, MY PG is now expanding through a city-zone franchise model targeting Tier 1 cities. Franchisees earn recurring subscription revenue sharing, one-time onboarding fees, and territory exclusivity — creating a predictable SaaS-style revenue stream tied to the growing Indian PropTech sector.
            </p>
            <p>
              <strong>Target franchisee:</strong> Real estate agents, property managers, and local entrepreneurs with existing networks in the PG/hostel ecosystem. No technical background required — 3-day training, marketing support, and a dedicated account manager provided.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">The Product — What You'll Sell</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            MY PG is a SaaS platform that replaces manual spreadsheets, WhatsApp groups, and paper records with one unified dashboard.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <f.icon className="w-8 h-8 text-[#1a1a4e] mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              <strong>Pricing:</strong> ₹499/month or ₹3,999/year (saves 33%) |{' '}
              <strong>Avg. subscription value:</strong> ₹498/month per PG owner |{' '}
              <strong>Annual churn:</strong> &lt;15%
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Market Opportunity — Why Now?</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            The Indian PG accommodation market is undergoing a digital transformation. Here's why the timing is ideal for a MY PG franchise.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="text-3xl font-bold text-[#1a1a4e] mb-1">₹15,000 Cr+</div>
              <div className="text-sm text-gray-600 mb-3">Indian PG Market Size</div>
              <p className="text-sm text-gray-600">Growing at 18% CAGR driven by inter-city migration, urbanization, and the rise of the gig economy workforce.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="text-3xl font-bold text-green-700 mb-1">65M+</div>
              <div className="text-sm text-gray-600 mb-3">Migrant Workers & Students</div>
              <p className="text-sm text-gray-600">India's migrant population seeking PG accommodations is larger than the entire population of France. Less than 5% of PG owners use management software.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
              <div className="text-3xl font-bold text-purple-700 mb-1">95%</div>
              <div className="text-sm text-gray-600 mb-3">Untapped Market</div>
              <p className="text-sm text-gray-600">Only 5% of India's estimated 2 lakh+ PG accommodations currently use management software. Massive headroom for growth across Tier 1, 2, and 3 cities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Territory Structure — Exclusive Zones</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Each franchisee receives exclusive rights to a defined city zone. No overlap, no competition from MY PG direct sales.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100 rounded-l-lg">City</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100">Zones</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100">Est. PG Owners</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100">Franchise Fee</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100 rounded-r-lg">Annual Rev. Potential*</th>
                </tr>
              </thead>
              <tbody>
                {territoryZones.map((t, i) => (
                  <tr key={t.city} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium">{t.city}</td>
                    <td className="py-3 px-4 text-gray-600">{t.zones}</td>
                    <td className="py-3 px-4 text-gray-600">{t.pgEst}</td>
                    <td className="py-3 px-4 text-[#1a1a4e] font-medium">{t.franchiseFee}</td>
                    <td className="py-3 px-4 text-green-700 font-medium">{t.revPotential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">*Revenue potential based on 40% share of ₹498/month avg subscription + onboarding fees, at 25-40% market penetration within 2 years.</p>
        </div>
      </section>

      <section id="revenue" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Revenue Model — How You Earn</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Four revenue streams designed for predictable, recurring income.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {revenueStreams.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#1a1a4e] rounded-xl flex items-center justify-center">
                    <r.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{r.title}</h3>
                    <span className="text-2xl font-bold text-green-600">{r.pct}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{r.detail}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Projected Revenue Scenario — Year 1</h3>
          <p className="text-gray-600 text-center mb-6 max-w-xl mx-auto text-sm">Based on a focused franchisee dedicating 15-20 hours/week to the franchise.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100 rounded-l-lg">Month</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100">PG Owners Onboarded</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100">Monthly Recurring Revenue</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100">Cumulative Revenue</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 bg-gray-100 rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {roiScenario.map((r, i) => (
                  <tr key={r.month} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium">Month {r.month}</td>
                    <td className="py-3 px-4 text-gray-600">{r.pgs}</td>
                    <td className="py-3 px-4 text-green-700 font-medium">{r.mrr}</td>
                    <td className="py-3 px-4 text-[#1a1a4e] font-medium">{r.cumulative}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        r.status === 'Recovering investment' ? 'bg-yellow-100 text-yellow-800' :
                        r.status === 'Breakeven achieved' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Assumptions: ₹498/month avg subscription, 40% franchise share, ₹2,500 avg onboarding fee (100% to franchisee). Churn not factored for simplicity.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Investment & ROI</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Transparent one-time investment with no hidden costs. All-inclusive franchise fee covers everything you need to start.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] px-6 py-4">
                <h3 className="text-white font-bold">Investment Breakdown</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {investmentBreakdown.map((inv, i) => (
                  <div key={inv.item} className={`px-6 py-4 flex items-center justify-between ${i === investmentBreakdown.length - 1 ? 'bg-green-50' : ''}`}>
                    <div>
                      <span className={`text-sm font-medium ${i === investmentBreakdown.length - 1 ? 'text-green-800' : 'text-gray-900'}`}>{inv.item}</span>
                      <p className="text-xs text-gray-400 mt-0.5">{inv.note}</p>
                    </div>
                    <span className={`text-sm font-bold whitespace-nowrap ml-4 ${i === investmentBreakdown.length - 1 ? 'text-green-700' : 'text-gray-900'}`}>{inv.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Key ROI Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-blue-300/30 pb-3">
                  <span className="text-blue-200 text-sm">Break-even Timeline</span>
                  <span className="font-bold text-white">4–7 months</span>
                </div>
                <div className="flex items-center justify-between border-b border-blue-300/30 pb-3">
                  <span className="text-blue-200 text-sm">Year 1 ROI (100 PGs)</span>
                  <span className="font-bold text-white">280-350%</span>
                </div>
                <div className="flex items-center justify-between border-b border-blue-300/30 pb-3">
                  <span className="text-blue-200 text-sm">Monthly Recurring Rev. (Year 2)</span>
                  <span className="font-bold text-white">₹1.5 – 3 Lakhs</span>
                </div>
                <div className="flex items-center justify-between border-b border-blue-300/30 pb-3">
                  <span className="text-blue-200 text-sm">Territory Lock-in Period</span>
                  <span className="font-bold text-white">3 years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 text-sm">Renewal Option</span>
                  <span className="font-bold text-white">Auto-renewal at 50% fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Who Should Apply?</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            We're looking for sales-driven individuals and firms with local market access. No SaaS or tech experience required.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {idealFranchisee.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="w-12 h-12 bg-[#1a1a4e] rounded-xl flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-[#1a1a4e] mb-3">Qualification Criteria</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Local presence in the territory</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Sales or business development experience</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Network in real estate / property management</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Investment capacity of ₹2-3.5 Lakhs</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Hindi + local language proficiency</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Willingness to attend 3-day Bangalore training</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Training & Support — We Set You Up for Success</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            From day one, you're backed by a dedicated support system designed to accelerate your ramp-up.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {supportAreas.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all"
              >
                <s.icon className="w-8 h-8 text-[#1a1a4e] mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Everything you need to know about the MY PG franchise opportunity.
          </p>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                  {faq.q}
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Own Your Territory?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto text-lg">
            Join India's fastest-growing PG management software franchise network. Exclusive territories available in Tier 1 cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="secondary" href="/#contact">Apply Now — Free Consultation</CTAButton>
            <CTAButton variant="ghost" href="/features">Explore MY PG Product</CTAButton>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Exclusive Territory</span>
            <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> Recurring Revenue</span>
            <span className="flex items-center gap-1"><HeadphonesIcon className="w-4 h-4" /> Full Support</span>
          </div>
        </div>
      </section>
    </>
  )
}
