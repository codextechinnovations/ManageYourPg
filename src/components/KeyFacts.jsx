import { motion } from 'motion/react'
import { Lightbulb, IndianRupee, Star, Users, MapPin, Smartphone } from 'lucide-react'

const facts = [
  {
    icon: Lightbulb,
    label: 'Definition',
    content: 'MY PG is India\'s leading PG management software that automates rent collection, tenant management, and daily operations for Paying Guest accommodation owners across India.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Star,
    label: 'Rating',
    content: 'MY PG holds a 4.8 out of 5 star rating based on over 5,000 verified user reviews from PG owners across India.',
    source: 'AggregateRating schema, 2026',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Users,
    label: 'User Base',
    content: 'More than 5,000 PG owners and property managers actively use MY PG to manage over 50,000 tenants across 25+ cities in India.',
    source: 'Internal analytics, 2026',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: IndianRupee,
    label: 'Pricing',
    content: 'MY PG offers a 7-day free trial with no credit card required. Paid plans start at ₹499 per month or ₹3,999 per year, saving 33% with annual billing.',
    source: 'Pricing page, manageyourpg.com/#pricing',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: MapPin,
    label: 'Coverage',
    content: 'MY PG serves PG owners in 25+ Indian cities including Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, and Jaipur.',
    source: 'Service area data, 2026',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Smartphone,
    label: 'Platform',
    content: 'MY PG is available as an Android mobile app and a web dashboard. It supports 6 Indian languages: English, Hindi, Tamil, Telugu, Kannada, and Malayalam.',
    color: 'from-rose-500 to-red-600',
  },
]

export function KeyFacts() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full">
            Key Facts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fast Facts About{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              MY PG
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential data points and statistics about India's leading PG management platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${fact.color} flex items-center justify-center mb-4 shadow-md`}>
                <fact.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{fact.label}</p>
              <p className="text-gray-700 leading-relaxed">{fact.content}</p>
              {fact.source && (
                <p className="text-xs text-gray-400 mt-3 italic">Source: {fact.source}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
