import { motion } from 'motion/react'
import { Briefcase, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Careers() {
  return (
    <section id="careers" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [180, 90, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full">
            Join Our Growing Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Opportunities
            </span>{' '}
            at MY PG
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join India's fastest-growing PG management software company. We are looking for motivated individuals who want to be part of a dynamic team transforming the way PG owners manage their properties across India.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            <Briefcase className="w-5 h-5" />
            View Open Positions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
