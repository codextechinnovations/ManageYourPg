import { motion } from 'motion/react'
import { 
  Users, 
  CreditCard, 
  Building2, 
  BedDouble, 
  IndianRupee, 
  CalendarCheck,
  Star, 
  Shield,
  Zap,
  Wallet,
  BarChart3,
  Smartphone
} from 'lucide-react'
import apkFile from '../assets/app-debug.apk'

export function Hero() {
  const floatingCards = [
    {
      icon: Users,
      label: 'Active Tenants',
      value: '245',
      color: 'from-blue-500 to-blue-600',
      delay: 0,
    },
    {
      icon: IndianRupee,
      label: 'Monthly Revenue',
      value: '₹4.8L',
      color: 'from-emerald-500 to-emerald-600',
      delay: 0.2,
    },
    {
      icon: CreditCard,
      label: 'Pending Payments',
      value: '12',
      color: 'from-orange-500 to-orange-600',
      delay: 0.4,
    },
    {
      icon: Building2,
      label: 'Occupancy Rate',
      value: '94%',
      color: 'from-purple-500 to-purple-600',
      delay: 0.6,
    },
  ]

  const features = [
    { icon: Building2, label: 'PG Management', color: 'from-blue-500 to-indigo-600' },
    { icon: Users, label: 'Tenant Tracking', color: 'from-purple-500 to-pink-600' },
    { icon: Wallet, label: 'Payment System', color: 'from-emerald-500 to-teal-600' },
    { icon: BedDouble, label: 'Room Management', color: 'from-orange-500 to-red-600' },
    { icon: CalendarCheck, label: 'Check-in Requests', color: 'from-cyan-500 to-blue-600' },
    { icon: BarChart3, label: 'Analytics & Reports', color: 'from-violet-500 to-purple-600' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#1a1a4e]/20 to-[#1e3a8a]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#2d2d7e]/20 to-[#1e3a8a]/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full"
            >
              <Star className="w-4 h-4 text-[#1a1a4e]" />
              #1 PG Management Software in India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              #1{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                PG Management Software
              </span>{' '}
              in India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Automate rent collection, manage tenants, track room occupancy, and generate reports - all from one app. Rated #1 PG management app by 5000+ owners in Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune. Try it FREE for 7 days - No credit card required!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Get Started
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-white text-[#1a1a4e] border-2 border-[#1a1a4e] rounded-full hover:bg-[#1a1a4e] hover:text-white transition-all"
              >
                Book Demo
              </motion.button>

              <motion.a
                href={apkFile}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Download APK
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-gray-600"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Shield className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>24/7 Support</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.6,
                    type: "spring"
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateZ: 2,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200 hover:border-blue-300 transition-all h-full flex flex-col items-center justify-center text-center">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 shadow-lg`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <p className="text-sm font-medium text-gray-900">
                      {feature.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {floatingCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: card.delay + 1.5,
                  duration: 0.6,
                }}
                className={`absolute ${
                  index === 0
                    ? '-top-6 -left-6'
                    : index === 1
                    ? '-top-6 -right-6'
                    : index === 2
                    ? '-bottom-6 -left-6'
                    : '-bottom-6 -right-6'
                } hidden lg:block`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: card.delay,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/40 min-w-[160px]"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">
                        {card.label}
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}