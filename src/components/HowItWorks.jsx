import { motion } from 'motion/react'
import { Smartphone, Building2, Users, ArrowDown } from 'lucide-react'
import { CTAButton } from './CTAButton'

const steps = [
  {
    icon: Smartphone,
    title: 'Download & Sign Up',
    description: 'Download MY PG from the Play Store or access the web dashboard. Create your account in 30 seconds with your phone number. No credit card required for the 7-day free trial.',
    color: 'from-blue-500 to-blue-600',
    number: '01',
  },
  {
    icon: Building2,
    title: 'Add Your Property & Rooms',
    description: 'Set up your PG property in under 5 minutes. Add property name, address, photos, and configure rooms and beds. Set rent amounts, security deposits, and amenities for each room type.',
    color: 'from-emerald-500 to-emerald-600',
    number: '02',
  },
  {
    icon: Users,
    title: 'Add Tenants & Start Collecting Rent',
    description: 'Add existing tenants with their contact details and KYC documents. The system automatically sends rent reminders, generates digital receipts, and tracks payments in real-time.',
    color: 'from-purple-500 to-purple-600',
    number: '03',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            Getting Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with MY PG in 3 simple steps. From download to first rent collection in under 10 minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.number}</div>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4">
                  <ArrowDown className="w-6 h-6 text-gray-300 rotate-270" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <CTAButton variant="primary" size="lg" href="/#contact">
            Start Free Trial
          </CTAButton>
          <p className="text-sm text-gray-500 mt-3">No credit card required. Full access for 7 days.</p>
        </motion.div>
      </div>
    </section>
  )
}
