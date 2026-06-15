import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Calculator, IndianRupee, TrendingUp, Wallet } from 'lucide-react'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Tools', path: '/tools' },
  { label: 'Rent Calculator', path: '/tools/rent-calculator' },
]

function formatCurrency(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN')
}

export function RentCalculator() {
  const [beds, setBeds] = useState(20)
  const [occupancy, setOccupancy] = useState(85)
  const [rentPerBed, setRentPerBed] = useState(8000)
  const [lateRate, setLateRate] = useState(15)
  const [softwareCost, setSoftwareCost] = useState(499)

  const results = useMemo(() => {
    const potentialMonthly = beds * rentPerBed
    const expectedMonthly = potentialMonthly * (occupancy / 100)
    const annualRevenue = expectedMonthly * 12
    const monthlyLate = expectedMonthly * (lateRate / 100)
    const savedByAutomation = monthlyLate * 0.8 * 12
    const annualCost = softwareCost * 12
    const netBenefit = savedByAutomation - annualCost
    const roi = annualCost > 0 ? (netBenefit / annualCost) * 100 : 0
    return {
      potentialMonthly,
      expectedMonthly,
      annualRevenue,
      savedByAutomation,
      annualCost,
      netBenefit,
      roi,
    }
  }, [beds, occupancy, rentPerBed, lateRate, softwareCost])

  return (
    <>
      <Helmet>
        <title>PG Rent Calculator | Estimate Revenue, Savings & ROI | MY PG</title>
        <meta
          name="description"
          content="Free PG rent calculator for Indian PG owners. Estimate monthly rent revenue, occupancy-adjusted income, late payment savings, and ROI with MY PG management software."
        />
        <link rel="canonical" href="https://manageyourpg.com/tools/rent-calculator" />
        <meta property="og:title" content="PG Rent Calculator | Estimate Revenue & ROI | MY PG" />
        <meta
          property="og:description"
          content="Free calculator for PG owners to estimate rent revenue, savings from automation, and software ROI."
        />
        <meta property="og:url" content="https://manageyourpg.com/tools/rent-calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'PG Rent Calculator',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
            description: 'Free PG rent calculator for Indian PG owners.',
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full text-sm font-semibold">
              <Calculator className="w-4 h-4" /> Free Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PG Rent & ROI{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Estimate your PG's monthly revenue, occupancy-adjusted income, and how much MY PG's automation can save
              you each year.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-[#1a1a4e]" /> Property Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Beds</label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={beds}
                    onChange={e => setBeds(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Occupancy Rate: {occupancy}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={occupancy}
                    onChange={e => setOccupancy(Number(e.target.value))}
                    className="w-full accent-[#1a1a4e]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rent per Bed (₹/month)</label>
                  <input
                    type="number"
                    min="1000"
                    step="500"
                    value={rentPerBed}
                    onChange={e => setRentPerBed(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Late Payment Rate: {lateRate}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={lateRate}
                    onChange={e => setLateRate(Number(e.target.value))}
                    className="w-full accent-[#1a1a4e]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">MY PG Monthly Cost (₹)</label>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={softwareCost}
                    onChange={e => setSoftwareCost(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" /> Revenue Estimate
                </h2>
                <div className="space-y-4">
                  <ResultRow label="Potential Monthly Rent" value={results.potentialMonthly} />
                  <ResultRow label="Expected Monthly Rent" value={results.expectedMonthly} highlight />
                  <ResultRow label="Estimated Annual Revenue" value={results.annualRevenue} />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-[#1a1a4e]" /> Automation Savings
                </h2>
                <div className="space-y-4">
                  <ResultRow label="Late Payments Saved/Year" value={results.savedByAutomation} />
                  <ResultRow label="MY PG Annual Cost" value={results.annualCost} />
                  <ResultRow label="Net Annual Benefit" value={results.netBenefit} positiveNegative />
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">ROI</span>
                      <span className={`text-2xl font-bold ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {results.roi.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-6 text-white text-center">
                <p className="text-blue-100 mb-4">Start automating rent collection today.</p>
                <CTAButton variant="green" href="/#contact">
                  Get Free Trial
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">How it works</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We calculate your expected rent after applying the occupancy rate, then estimate how much late-payment
              revenue you can recover with automated WhatsApp reminders (based on an 80% reduction in delays reported by
              MY PG users). Subtract the annual software cost to get your net benefit and ROI.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function ResultRow({ label, value, highlight, positiveNegative }) {
  let valueClass = 'font-semibold text-gray-900'
  if (highlight) valueClass = 'font-bold text-[#1a1a4e]'
  if (positiveNegative) valueClass = `font-bold ${value >= 0 ? 'text-green-600' : 'text-red-600'}`
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span className={valueClass}>{formatCurrency(value)}</span>
    </div>
  )
}
