import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  Clock,
  TrendingDown,
  CreditCard,
  Database,
  Globe,
  Building,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export function WhyChoose() {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Simple PG Management Software',
      description:
        'Intuitive PG management software designed for ease of use. No technical knowledge required to manage your PG operations.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      title: 'Saves Time for PG Owners',
      description:
        'Automate repetitive tasks with our PG automation software and focus on growing your tenant management business instead.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: TrendingDown,
      title: 'Reduces Manual Work',
      description:
        'Eliminate paperwork and manual tracking with our digital PG management platform and occupancy management tools.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: CreditCard,
      title: 'Better Rent & Payment Tracking',
      description:
        'Never miss a payment with our rent collection software. Track all transactions in real-time with automated reminders.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Database,
      title: 'Centralized Management',
      description:
        'All your PG data in one secure place. Easy access whenever you need it through our cloud-based PG management system.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Globe,
      title: 'Real-Time Access from Anywhere',
      description:
        'Manage your PG from anywhere with our PG management app. Cloud-based access for PG owners on the go.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Building,
      title: 'Suitable for All Sizes',
      description:
        'Perfect for small PGs or large properties with multiple locations. Our multi property management software scales with you.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            Best PG Management Software for Indian Owners
          </div>
          <Link to="/why-choose" className="group inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent group-hover:opacity-80 transition-all">
                PG Management Software & App
              </span>
              <span className="inline-block ml-2 text-[#1a1a4e] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                <ArrowRight className="w-5 h-5 inline" />
              </span>
            </h2>
          </Link>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of PG owners across India trust MY PG as their preferred PG management software, hostel management system, and tenant management platform to streamline their daily operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Link
              key={reason.title}
              to="/why-choose"
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 h-full">
                <div
                  className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110`}
                >
                  <reason.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  {reason.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Link>
          ))}

          <div className="group">
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col justify-center items-center text-center">
              <CheckCircle2 className="w-14 h-14 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-6">
                Join thousands of satisfied PG owners today
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById('pricing')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-6 py-3 bg-white text-[#1a1a4e] rounded-full hover:shadow-xl hover:scale-105 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}