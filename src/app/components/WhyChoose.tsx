import { motion } from 'motion/react';
import {
  Sparkles,
  Clock,
  TrendingDown,
  CreditCard,
  Database,
  Globe,
  Building,
  CheckCircle2,
} from 'lucide-react';

export function WhyChoose() {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Simple and Easy UI',
      description:
        'Intuitive interface designed for ease of use. No technical knowledge required.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      title: 'Saves Time for PG Owners',
      description:
        'Automate repetitive tasks and focus on growing your business instead.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: TrendingDown,
      title: 'Reduces Manual Work',
      description:
        'Eliminate paperwork and manual tracking with digital management tools.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: CreditCard,
      title: 'Better Rent & Payment Tracking',
      description:
        'Never miss a payment. Track all transactions in real-time with reminders.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Database,
      title: 'Centralized Management',
      description:
        'All your PG data in one secure place. Easy access whenever you need it.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Globe,
      title: 'Real-Time Access from Anywhere',
      description:
        'Manage your PG from anywhere in the world with cloud-based access.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Building,
      title: 'Suitable for All Sizes',
      description:
        'Perfect for small PGs or large properties with multiple locations.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Animated Decorative Elements */}
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
            Why Choose MY PG
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Modern PG Management
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of PG owners across India trust MY PG to streamline their
            operations
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 h-full">
                {/* Icon */}
                <div
                  className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110`}
                >
                  <reason.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reasons.length * 0.05, duration: 0.5 }}
            className="group"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}