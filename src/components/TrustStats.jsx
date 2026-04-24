import { motion } from 'motion/react'
import { Building2, Users, TrendingUp, Clock, Star, Heart, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / (duration * 1000), 1)
            setCount(Math.floor(progress * end))
            if (progress === 1) clearInterval(timer)
          }, 20)
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <div ref={ref}>{count}</div>
}

export function TrustStats() {
  const stats = [
    {
      icon: Building2,
      value: 5000,
      suffix: '+',
      label: 'PGs Managed',
      description: 'Trusted PG properties',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Tenants Served',
      description: 'Happy tenants',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      value: 80,
      suffix: '%',
      label: 'Less Follow-ups',
      description: 'Time saved',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      value: 25,
      suffix: '+',
      label: 'Cities in India',
      description: 'PAN India presence',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const trustIndicators = [
    { icon: Star, label: '4.8 Star Rating', value: '2500+ Reviews' },
    { icon: Heart, label: '98% Satisfaction', value: 'Customer Love' },
    { icon: Shield, label: '100% Secure', value: 'Data Protected' },
  ]

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] relative overflow-hidden"
      aria-label="Trust statistics showing MY PG's credibility"
      role="region"
      aria-describedby="trust-stats-desc"
    >
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          id="trust-stats-desc"
        >
          <motion.h2
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trusted by 5000+ PG Owners Across India
          </motion.h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied PG owners in Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune 
            and other cities who streamlined their operations with MY PG
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05, rotate: 2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all group cursor-pointer"
              role="article"
              aria-label={`${stat.value}${stat.suffix} ${stat.label} - ${stat.description}`}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </motion.div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center">
                  <AnimatedCounter end={stat.value} />
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.suffix}
                  </motion.span>
                </div>
                <p className="text-blue-100 font-medium">{stat.label}</p>
                <p className="text-blue-200/60 text-xs mt-1">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
          role="list"
          aria-label="Trust indicators showing customer satisfaction"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
              role="listitem"
            >
              <indicator.icon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
              <span className="text-white font-medium">{indicator.label}</span>
              <span className="text-white/60 text-sm">• {indicator.value}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-100 text-sm">
            <span className="text-white font-semibold">SXO Optimized</span> • Fast Loading • Mobile Friendly �� Accessible • 
            <span className="text-yellow-400">#1 Rated PG Software</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}